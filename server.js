'use strict';
/* 英语语法小课堂 - 无第三方依赖的小服务器
 * 数据保存在 DATA_DIR/data.json（docker 里是 /data）
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');

const PORT = parseInt(process.env.PORT || '3000', 10);
const DATA_DIR = process.env.DATA_DIR || '/data';
const ADMIN_PIN = process.env.ADMIN_PIN || '';
const FILE = path.join(DATA_DIR, 'data.json');
const PUB = path.join(__dirname, 'public');
const MAX_BODY = 4 * 1024 * 1024;
const MAX_PROFILES = 50;

/* ---------- 数据 ---------- */
let DB = { version: 1, profiles: {} };
fs.mkdirSync(DATA_DIR, { recursive: true });
try {
  const j = JSON.parse(fs.readFileSync(FILE, 'utf8'));
  if (j && typeof j.profiles === 'object') DB = j;
} catch (e) {
  if (e.code !== 'ENOENT') {
    // 文件坏了：先备份再继续，避免覆盖
    try { fs.copyFileSync(FILE, FILE + '.broken-' + Date.now()); } catch (_) {}
    console.error('读取 data.json 失败，已备份坏文件：', e.message);
  }
}

let writing = false, again = false;
function save() {
  if (writing) { again = true; return; }
  writing = true;
  const tmp = FILE + '.tmp';
  fs.writeFile(tmp, JSON.stringify(DB), err => {
    if (err) { console.error('保存失败：', err.message); writing = false; return; }
    fs.rename(tmp, FILE, err2 => {
      if (err2) console.error('保存失败：', err2.message);
      writing = false;
      if (again) { again = false; save(); }
    });
  });
}
function saveSync() {
  try { fs.writeFileSync(FILE + '.tmp', JSON.stringify(DB)); fs.renameSync(FILE + '.tmp', FILE); } catch (e) { console.error(e.message); }
}

const isObj = v => v && typeof v === 'object' && !Array.isArray(v);
const num = v => (Number.isFinite(+v) ? +v : 0);

function emptyData() {
  return { best: {}, book: {}, stat: { a: 0, c: 0 }, lstat: { a: 0, c: 0 }, ustat: {}, days: {}, hist: [], seen: {}, opts: { slow: false, text: false } };
}
/* 只保留已知字段，限制大小 */
function sanitize(d) {
  const o = emptyData();
  if (!isObj(d)) return o;
  for (const [k, v] of Object.entries(isObj(d.best) ? d.best : {}).slice(0, 200))
    if (isObj(v)) o.best[k] = { s: num(v.s), n: num(v.n), t: num(v.t) };
  for (const [k, v] of Object.entries(isObj(d.book) ? d.book : {}).slice(0, 2000))
    o.book[k] = { w: num(v && v.w), t: num(v && v.t) };
  for (const key of ['stat', 'lstat'])
    if (isObj(d[key])) o[key] = { a: num(d[key].a), c: num(d[key].c) };
  for (const [k, v] of Object.entries(isObj(d.ustat) ? d.ustat : {}).slice(0, 200))
    if (isObj(v)) o.ustat[k] = { a: num(v.a), c: num(v.c) };
  const days = Object.entries(isObj(d.days) ? d.days : {}).filter(([k]) => /^\d{4}-\d{2}-\d{2}$/.test(k)).sort().slice(-400);
  for (const [k, v] of days) if (isObj(v)) o.days[k] = { a: num(v.a), c: num(v.c) };
  if (Array.isArray(d.hist))
    o.hist = d.hist.slice(-50).filter(isObj).map(h => ({ t: num(h.t), title: String(h.title || '').slice(0, 40), s: num(h.s), n: num(h.n) }));
  for (const [k, v] of Object.entries(isObj(d.seen) ? d.seen : {}).slice(0, 200)) if (v) o.seen[k] = true;
  if (isObj(d.opts)) o.opts = { slow: !!d.opts.slow, text: !!d.opts.text };
  return o;
}
const cleanName = s => String(s || '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 12);
const cleanAvatar = s => Array.from(String(s || '🙂')).slice(0, 2).join('') || '🙂';
const pub = p => ({ id: p.id, name: p.name, avatar: p.avatar, created: p.created });

/* ---------- 工具 ---------- */
function send(res, code, obj, headers) {
  const body = JSON.stringify(obj);
  res.writeHead(code, Object.assign({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, headers));
  res.end(body);
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', c => {
      size += c.length;
      if (size > MAX_BODY) { reject(Object.assign(new Error('数据太大'), { status: 413 })); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      if (!chunks.length) return resolve(undefined);
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); }
      catch (e) { reject(Object.assign(new Error('JSON 格式不对'), { status: 400 })); }
    });
    req.on('error', reject);
  });
}
function pinOk(req) {
  if (!ADMIN_PIN) return true;
  const got = Buffer.from(String(req.headers['x-pin'] || ''));
  const want = Buffer.from(ADMIN_PIN);
  return got.length === want.length && crypto.timingSafeEqual(got, want);
}
const fail = (status, msg) => Object.assign(new Error(msg), { status });

/* ---------- API ---------- */
async function api(req, res, url) {
  const p = url.pathname.replace(/\/+$/, '');
  const m = req.method;
  let r;

  if (p === '/api/config' && m === 'GET') return send(res, 200, { pinRequired: !!ADMIN_PIN });

  // 内容文件清单：content/*.js 按文件名排序，页面据此依次加载
  if (p === '/api/content-files' && m === 'GET') {
    let names = [];
    try { names = fs.readdirSync(path.join(PUB, 'content')).filter(n => /^[\w.-]+\.js$/.test(n)).sort(); } catch (e) {}
    return send(res, 200, names);
  }

  if (p === '/api/export' && m === 'GET') {
    const stamp = new Date().toISOString().slice(0, 10);
    return send(res, 200, { version: 1, exported: new Date().toISOString(), profiles: DB.profiles },
      { 'Content-Disposition': `attachment; filename="english-grammar-backup-${stamp}.json"` });
  }

  if (p === '/api/import' && m === 'POST') {
    if (!pinOk(req)) throw fail(403, '家长密码不对');
    const b = await readBody(req);
    if (!b || !isObj(b.profiles)) throw fail(400, '备份文件格式不对');
    let count = 0;
    for (const [id, v] of Object.entries(b.profiles)) {
      if (!/^[a-f0-9]{6,32}$/.test(id) || !isObj(v)) continue;
      if (!DB.profiles[id] && Object.keys(DB.profiles).length >= MAX_PROFILES) continue;
      DB.profiles[id] = { id, name: cleanName(v.name) || '学习者', avatar: cleanAvatar(v.avatar), created: num(v.created) || Date.now(), data: sanitize(v.data) };
      count++;
    }
    save();
    return send(res, 200, { ok: true, count });
  }

  if (p === '/api/profiles' && m === 'GET')
    return send(res, 200, Object.values(DB.profiles).sort((a, b) => a.created - b.created).map(pub));

  if (p === '/api/profiles' && m === 'POST') {
    const b = await readBody(req);
    const name = cleanName(b && b.name);
    if (!name) throw fail(400, '名字不能为空');
    if (Object.keys(DB.profiles).length >= MAX_PROFILES) throw fail(400, '学习者太多了');
    const id = crypto.randomBytes(6).toString('hex');
    DB.profiles[id] = { id, name, avatar: cleanAvatar(b.avatar), created: Date.now(), data: emptyData() };
    save();
    return send(res, 201, pub(DB.profiles[id]));
  }

  if ((r = p.match(/^\/api\/profiles\/([a-f0-9]+)(\/data)?$/))) {
    const prof = DB.profiles[r[1]];
    if (!prof) throw fail(404, '找不到这位学习者');
    if (r[2]) {
      if (m === 'GET') return send(res, 200, prof.data);
      if (m === 'PUT' || m === 'POST') { prof.data = sanitize(await readBody(req)); save(); return send(res, 200, { ok: true }); }
      if (m === 'DELETE') {
        if (!pinOk(req)) throw fail(403, '家长密码不对');
        prof.data = emptyData(); save(); return send(res, 200, { ok: true });
      }
    } else {
      if (m === 'PATCH') {
        const b = await readBody(req) || {};
        if (b.name !== undefined) { const n = cleanName(b.name); if (!n) throw fail(400, '名字不能为空'); prof.name = n; }
        if (b.avatar !== undefined) prof.avatar = cleanAvatar(b.avatar);
        save(); return send(res, 200, pub(prof));
      }
      if (m === 'DELETE') {
        if (!pinOk(req)) throw fail(403, '家长密码不对');
        delete DB.profiles[r[1]]; save(); return send(res, 200, { ok: true });
      }
    }
  }
  throw fail(404, '没有这个接口');
}

/* ---------- 静态文件 ---------- */
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8' };
const COMPRESSIBLE = new Set(['.html', '.js', '.css', '.json', '.svg', '.txt']);
const gzCache = new Map();   // file -> { tag, gz }
function serveStatic(req, res, url) {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
  let rel;
  try { rel = decodeURIComponent(url.pathname); } catch (e) { res.writeHead(400); return res.end(); }
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.normalize(path.join(PUB, rel));
  if (!file.startsWith(PUB + path.sep)) { res.writeHead(403); return res.end(); }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('Not found'); }
    const ext = path.extname(file).toLowerCase();
    const tag = '"' + st.size.toString(16) + '-' + Math.floor(st.mtimeMs).toString(16) + '"';
    const headers = { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'ETag': tag, 'Vary': 'Accept-Encoding' };
    if (req.headers['if-none-match'] === tag) { res.writeHead(304, headers); return res.end(); }
    fs.readFile(file, (err2, buf) => {
      if (err2) { res.writeHead(500); return res.end(); }
      const wantGz = COMPRESSIBLE.has(ext) && buf.length > 1024 && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
      if (!wantGz) { headers['Content-Length'] = buf.length; res.writeHead(200, headers); return res.end(req.method === 'HEAD' ? undefined : buf); }
      let c = gzCache.get(file);
      if (!c || c.tag !== tag) { c = { tag, gz: zlib.gzipSync(buf, { level: 9 }) }; gzCache.set(file, c); }
      headers['Content-Encoding'] = 'gzip'; headers['Content-Length'] = c.gz.length;
      res.writeHead(200, headers);
      res.end(req.method === 'HEAD' ? undefined : c.gz);
    });
  });
}

const server = http.createServer(async (req, res) => {
  let url;
  try { url = new URL(req.url, 'http://x'); } catch (e) { res.writeHead(400); return res.end(); }
  if (url.pathname === '/healthz') { res.writeHead(200, { 'Content-Type': 'text/plain' }); return res.end('ok'); }
  if (url.pathname.startsWith('/api/')) {
    try { await api(req, res, url); }
    catch (e) { if (!res.headersSent) send(res, e.status || 500, { error: e.message || '服务器出错了' }); if (!e.status) console.error(e); }
    return;
  }
  serveStatic(req, res, url);
});
server.listen(PORT, () => console.log(`英语语法小课堂已启动：端口 ${PORT}，数据目录 ${DATA_DIR}${ADMIN_PIN ? '，已启用家长密码' : ''}`));

function bye() { saveSync(); process.exit(0); }
process.on('SIGTERM', bye);
process.on('SIGINT', bye);
