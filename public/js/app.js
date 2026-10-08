/* ===== 英语语法小课堂：程序部分 =====
 * 内容都在 content/ 目录里（语法单元、追加题目、单词本、单元顺序），这个文件一般不用改。 */
const rankOf=id=>{const i=ORDER.indexOf(id);return i<0?1e6:i};
U.sort((a,b)=>rankOf(a.id)-rankOf(b.id));
MORE.forEach(m=>U.forEach(u=>(m[u.id]||[]).forEach(q=>u.qs.push(q))));
U.forEach(u=>u.qs.forEach((q,i)=>{q.id=u.id+'-'+i;q.u=u.id}));
const byId=id=>U.find(u=>u.id===id);
const ALLQ=U.flatMap(u=>u.qs);
const QMAP={};ALLQ.forEach(q=>QMAP[q.id]=q);

const unitName=uid=>{const u=byId(uid);return u?u.cn:'其他'};


/* ---------- 状态与数据 ---------- */
const emptyData=()=>({best:{},book:{},stat:{a:0,c:0},lstat:{a:0,c:0},ustat:{},days:{},hist:[],seen:{},opts:{slow:false,text:false}});
function normData(d){
  const e=emptyData();
  if(d&&typeof d==='object'){
    ['best','book','stat','lstat','ustat','days','seen','opts'].forEach(k=>{if(d[k]&&typeof d[k]==='object'&&!Array.isArray(d[k]))e[k]=d[k]});
    if(Array.isArray(d.hist))e.hist=d.hist;
  }
  e.stat.a=+e.stat.a||0;e.stat.c=+e.stat.c||0;e.lstat.a=+e.lstat.a||0;e.lstat.c=+e.lstat.c||0;
  return e;
}
const S={view:'boot',uid:null,quiz:null,profiles:[],P:null,D:emptyData(),offline:false,pin:false,newAv:'🐯'};
let TBV=0;
let GF='4';try{GF=localStorage.getItem('eg_grade')||'4'}catch(e){}
const gradeOf=id=>GRADES[id]||'x';
const inGrade=u=>GF==='all'||gradeOf(u.id)===GF;
const poolQ=()=>U.filter(inGrade).flatMap(u=>u.qs);
const ymd=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=()=>ymd(new Date());
const bookList=()=>Object.keys(S.D.book).map(id=>QMAP[id]).filter(Boolean);

async function api(method,url,body,pin){
  const opt={method,headers:{}};
  if(body!==undefined){opt.headers['Content-Type']='application/json';opt.body=JSON.stringify(body)}
  if(pin)opt.headers['x-pin']=pin;
  const r=await fetch(url,opt);
  let j=null;try{j=await r.json()}catch(e){}
  if(!r.ok){const err=new Error((j&&j.error)||('HTTP '+r.status));err.status=r.status;throw err}
  return j;
}
async function pinCall(method,url,body){
  let pin='';
  if(S.pin){pin=prompt('请输入家长密码')||'';if(!pin)return null}
  try{return await api(method,url,body,pin)}
  catch(e){toast(e.status===403?'家长密码不对':'操作失败：'+e.message);return null}
}

let dirty=false,saveT=null;
function save(now){
  if(S.offline||!S.P)return;
  dirty=true;clearTimeout(saveT);
  if(now)flush();else saveT=setTimeout(flush,600);
}
function flush(){
  if(!dirty||!S.P||S.offline)return;
  dirty=false;
  api('PUT','/api/profiles/'+S.P.id+'/data',S.D).catch(()=>{dirty=true;toast('保存失败，请检查网络')});
}
addEventListener('pagehide',()=>{
  if(dirty&&S.P&&!S.offline){
    try{fetch('/api/profiles/'+S.P.id+'/data',{method:'PUT',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify(S.D)})}catch(e){}
    dirty=false;
  }
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)flush()});

function record(q,ok){
  const D=S.D,k=today();
  D.stat.a++;if(ok)D.stat.c++;
  if(q.t==='l'||q.t==='d'){D.lstat.a++;if(ok)D.lstat.c++}
  const us=D.ustat[q.u]||(D.ustat[q.u]={a:0,c:0});us.a++;if(ok)us.c++;
  const dy=D.days[k]||(D.days[k]={a:0,c:0});dy.a++;if(ok)dy.c++;
}
function streak(){
  const D=S.D,d=new Date();let n=0;
  if(!(D.days[ymd(d)]&&D.days[ymd(d)].a))d.setDate(d.getDate()-1);
  while(D.days[ymd(d)]&&D.days[ymd(d)].a>0){n++;d.setDate(d.getDate()-1)}
  return n;
}

/* ---------- 朗读和提示 ---------- */
function say(t,slow){
  if(!('speechSynthesis' in window)){toast('这个浏览器不支持朗读');return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=slow?.55:.85;
  const vs=speechSynthesis.getVoices();
  const v=vs.find(x=>/^en[-_]GB/i.test(x.lang))||vs.find(x=>/^en[-_]US/i.test(x.lang))||vs.find(x=>/^en/i.test(x.lang));
  if(v){u.voice=v;u.lang=v.lang}
  speechSynthesis.speak(u);
}
let tt;
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2200)}

/* ---------- 页面 ---------- */
const stars=n=>'★'.repeat(n)+'☆'.repeat(3-n);
const starCount=b=>{const r=b.s/b.n;return r>=.9?3:r>=.7?2:r>=.4?1:0};
const offBanner='<div class="box warn"><b>注意</b>没有连上服务器，这次学习的成绩不会被保存。</div>';

function profilesV(){
  const AV=['🐯','🐼','🐰','🐶','🐱','🦊','🐸','🐧'];
  return `<h1>${S.profiles.length?'谁在学习？':'欢迎！先建一个学习者'}</h1>
  <p>每个人的成绩、错题本是分开保存的。</p>
  ${S.profiles.length?`<div class="pgrid">${S.profiles.map(p=>`<button class="pf" data-act="enter" data-id="${p.id}"><span class="av">${esc(p.avatar)}</span><span>${esc(p.name)}</span></button>`).join('')}</div>`:''}
  <h2>添加学习者</h2>
  <div class="addp"><input id="pn" maxlength="12" placeholder="名字（最多 12 个字）" autocomplete="off" aria-label="名字">
  <div class="avs">${AV.map(a=>`<button class="avb ${a===S.newAv?'on':''}" data-act="av" data-v="${a}" aria-label="头像 ${a}">${a}</button>`).join('')}</div>
  <button class="btn go" data-act="addp">创建并开始</button></div>`;
}

function home(){
  const D=S.D,list=U.filter(inGrade),total=list.reduce((n,u)=>n+u.qs.length,0),t=D.days[today()],nxt=list.find(u=>!D.best[u.id]),done=list.filter(u=>D.best[u.id]).length;
  return `${S.offline?offBanner:''}<section class="hero">
    <div class="lines big" data-say="Hello! I am a student." title="点一点，听一听">Hello! I’m a <b>student</b>.</div>
    <p class="hint">点一点上面的句子，可以听到朗读。</p>
    <h1>英语语法小课堂</h1>
    <p>给小学生的英语语法入门。共 ${list.length} 个单元、${total} 道题。每个单元先看讲解，再做练习；例句都能点喇叭听读音。</p>
    <div class="today"><span>今天做了 <b>${t?t.a:0}</b> 题</span><span>连续学习 <b>${streak()}</b> 天</span><span>已练习 <b>${done}</b> / ${list.length} 个单元</span></div>
    ${nxt?`<button class="btn go" data-act="lesson" data-u="${nxt.id}">${done?'继续':'开始'}：${nxt.cn}</button>`:''}
    <button class="btn" data-act="daily">每日一练（10 题）</button>
    <button class="btn" data-act="listen">听力训练（10 题）</button>
    <button class="btn alt" data-act="textbook">课本对照</button>
    <button class="btn alt" data-act="mix">综合测验（20 题）</button>
  </section>
  <h2>单元</h2>
  <div class="seg gseg">${[['4','四年级'],['5','五年级'],['6','六年级'],['x','拓展'],['all','全部']].map(([k,n])=>`<button class="${GF===k?'on':''}" data-act="grade" data-v="${k}">${n}</button>`).join('')}</div>
  <p class="foot" style="margin:8px 0 14px">${GF==='4'?'四年级先学这些；后面年级的内容可以提前看，但不用着急。':GF==='x'?'拓展内容超出小学课本，学有余力再看。':GF==='all'?'':'这个年级的内容，四年级的孩子可以提前看看。'}</p>
  ${list.map((u,i)=>{const b=D.best[u.id];
    return `<button class="row" data-act="lesson" data-u="${u.id}"><span class="bd c${i%5}">${i+1}</span>
    <span><span class="t">${u.cn}<small>${u.en}</small>${GF==='all'?`<small class="gt">${GRADE_NAMES[gradeOf(u.id)]}</small>`:''}</span><br><span class="s">${u.sum}</span></span>
    <span class="st">${b?`<span class="star">${stars(starCount(b))}</span><br>${b.s} / ${b.n}`:(D.seen[u.id]?'已学习<br>还没练习':'还没学习')}</span></button>`}).join('')}`;
}

function lessonV(){
  const u=byId(S.uid),i=U.indexOf(u);
  return `<div class="lh"><span class="bd c${i%5}">${i+1}</span><div><h1>${u.cn}</h1><div class="en2"><span class="sp" data-say="${esc(u.en)}">${u.en}</span></div></div></div>
  <p class="intro">${u.intro}</p>${u.lesson}
  <p class="foot">这个单元共有 ${u.qs.length} 道题。“开始练习”每次随机抽 10 题（会优先带上你做错过的题）。</p><button class="btn alt" data-act="practiceall" data-u="${u.id}">把 ${u.qs.length} 道题全部做一遍</button>
  <div class="lnav">${i>0?`<button class="btn alt" data-act="lesson" data-u="${U[i-1].id}">上一单元</button>`:'<span></span>'}${i<U.length-1?`<button class="btn alt" data-act="lesson" data-u="${U[i+1].id}">下一单元</button>`:'<span></span>'}</div>
  <button class="btn go fab" data-act="practice" data-u="${u.id}">开始练习（${u.qs.length>12?'随机 10 题':u.qs.length+' 题'}）</button>`;
}

const blank=t=>t.replace('___','<span class="blank"></span>');
const TYPE={c:'选择题',f:'填空题',o:'连词成句',j:'判断题',l:'听力题',d:'听写题'};
function fullSentence(q){
  if(q.t==='o')return q.a[0];
  if(q.t==='l'||q.t==='d')return q.s;
  if(q.t==='j')return /[\u4e00-\u9fa5]/.test(q.q)?'':q.q;
  if(!q.q.includes('___'))return '';
  const ans=q.t==='c'?q.o[q.a]:q.a[0];
  const s=strip(q.q.replace('___',ans)).replace(/[（(][^)）]*[)）]/g,'').replace(/\s+/g,' ').trim();
  return /[\u4e00-\u9fa5]/.test(s)?'':s;
}
const qPlain=q=>q.t==='o'?q.cn:q.t==='l'||q.t==='d'?'（听力）'+q.s:q.t==='j'?'判断：'+q.q:q.q.replace('___','＿＿');
const qAnswer=q=>q.t==='c'||q.t==='l'?q.o[q.a]:q.t==='j'?(q.a?'对的':'错的'):q.a[0];

function listenBtns(q){
  const o=S.D.opts,t=esc(q.s);
  return `<div class="lbtns"><button class="btn alt big" data-say="${t}">🔊 正常</button><button class="btn alt big" data-say="${t}" data-rate="slow">🐢 慢速</button></div>
  <div class="lopt"><button class="nb" data-act="slowtog">自动慢速播放：${o.slow?'开':'关'}</button>${q.t==='l'?`<button class="nb" data-act="textog">显示文字：${o.text?'开':'关'}</button>`:''}</div>
  ${q.t==='l'&&o.text?`<div class="lines htext">${t}</div>`:''}`;
}
function qBody(it,a){
  const q=it.q;let s='';
  if(q.t==='c'||q.t==='j'||q.t==='l'){
    s+=`<div class="qtype">${TYPE[q.t]}</div>`;
    if(q.t==='c')s+=`<div class="qtext">${blank(q.q)}</div>`;
    else if(q.t==='j')s+=`<div class="cnq">下面这句话对不对？</div><div class="lines jsent">${esc(q.q)}</div>`;
    else s+=listenBtns(q)+`<div class="qtext">${q.q}</div>`;
    s+=`<div class="opts">`+it.opts.map((o,i)=>{
      let c='opt';if(a){if(o.ok)c+=' ok';else if(a.pick===i)c+=' bad';else c+=' dim'}
      return `<button class="${c}" data-act="pick" data-i="${i}" ${a?'disabled':''}><span class="lt">${'ABCD'[i]}</span><span>${esc(o.t)}</span></button>`}).join('')+`</div>`;
  }else if(q.t==='d'){
    s+=`<div class="qtype">听写题</div>${listenBtns(q)}<div class="qtext">${q.q}${q.hint?`<br><span class="cnq">提示：${esc(q.hint)}</span>`:''}</div>`;
    s+=`<input class="fill wide ${a?(a.ok?'ok':'bad'):''}" id="fi" value="${a?esc(a.val):''}" ${a?'disabled':''} autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="写下你听到的">`;
    if(!a)s+=`<div><button class="btn" data-act="submit">提交</button></div>`;
  }else if(q.t==='f'){
    const w=Math.max(4,q.a[0].length+2);
    const inp=`<input class="fill ${a?(a.ok?'ok':'bad'):''}" id="fi" style="width:${w}ch" value="${a?esc(a.val):''}" ${a?'disabled':''} autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="答案">`;
    s+=`<div class="qtype">填空题</div><div class="qtext">${q.q.replace('___',inp)}</div>`;
    if(!a)s+=`<button class="btn" data-act="submit">提交</button>`;
  }else{
    const used=new Set(it.picked.map(x=>x.i));
    s+=`<div class="qtype">连词成句</div><div class="cnq">把单词排成正确的句子：</div><div class="cnbig">${q.cn}</div>
    <div class="slot">${it.picked.map((x,k)=>`<button class="chip on" data-act="unpick" data-k="${k}" ${a?'disabled':''}>${esc(x.w)}</button>`).join('')}</div>
    <div class="bank">${it.bank.filter(b=>!used.has(b.i)).map(b=>`<button class="chip" data-act="bank" data-k="${b.i}" ${a?'disabled':''}>${esc(b.w)}</button>`).join('')}</div>`;
    if(!a)s+=`<button class="btn" data-act="check" ${it.picked.length===it.bank.length?'':'disabled'}>检查</button><button class="btn alt" data-act="reset">清除重排</button>`;
  }
  return s;
}
function fbHTML(it,a){
  const q=it.q,sen=fullSentence(q);
  return `<div class="fb ${a.ok?'ok':'bad'}"><div class="fbh">${a.ok?'答对了！':'再想一想'}</div>
  ${a.ok?'':`<div>正确答案：<b class="ans">${esc(qAnswer(q))}</b></div>`}
  ${(q.t==='l'||q.t==='d')?`<div>原句：<b>${esc(q.s)}</b></div>`:''}
  <div class="why">${q.w}</div>
  ${sen?`<button class="sayrow" data-say="${esc(sen)}">🔊 听整句</button> <button class="sayrow" data-say="${esc(sen)}" data-rate="slow">🐢 慢速听</button>`:''}</div>`;
}
function quizV(){
  const z=S.quiz,it=z.items[z.i],a=z.ans,n=z.items.length;
  return `<div class="qhead"><button class="nb" data-act="quit">退出</button><div class="qt">${z.title}</div><div class="qs">第 ${z.i+1} / ${n} 题</div></div>
  <div class="pbar"><i style="width:${(z.i+(a?1:0))/n*100}%"></i></div>
  <div class="qc">${qBody(it,a)}${a?fbHTML(it,a)+`<div class="nextrow"><button class="btn go" data-act="next">${z.i<n-1?'下一题':'看成绩'}</button></div>`:''}</div>`;
}
function resultV(){
  const z=S.quiz,n=z.items.length,r=z.score/n,st=r>=.9?3:r>=.7?2:r>=.4?1:0;
  const msg=st===3?'太棒了！几乎全对！':st===2?'很不错！再看看错的地方就更好了。':st===1?'继续加油，回去再看看讲解吧。':'别灰心，先回去看看讲解，再来一次。';
  return `<div class="res"><div class="stars">${[1,2,3].map(k=>`<span class="${k<=st?'on':''}" style="animation-delay:${k*.18}s">★</span>`).join('')}</div>
  <h1>${z.score} / ${n}</h1><p>${msg}</p>
  <div>${z.mode==='unit'||z.mode==='unitall'?`<button class="btn alt" data-act="lesson" data-u="${z.uid}">再看讲解</button>`:''}<button class="btn go" data-act="retry">再练一次</button><button class="btn alt" data-act="home">回首页</button></div></div>
  ${z.wrong.length?`<h2>这次做错的题（${z.wrong.length}）</h2><div class="wl">${z.wrong.map(q=>`<div class="wq"><small>${unitName(q.u)}</small>${qPlain(q)}<br>答案：<span class="a">${esc(qAnswer(q))}</span></div>`).join('')}</div><p class="foot">做错的题已放进“错题本”。</p>`:'<p>这次一道都没错！</p>'}`;
}
function bookV(){
  const list=bookList();
  if(!list.length)return `<h1>错题本</h1><p>现在没有错题。练习或测验时答错的题会自动放进来，在这里可以反复练，直到全部答对。</p><button class="btn" data-act="mix">去做综合测验</button>`;
  return `<h1>错题本</h1><p>共 ${list.length} 题。再次答对的题，会从错题本里拿走。</p>
  <button class="btn go" data-act="startbook">开始复习</button>
  <div class="wl">${list.map(q=>`<div class="wq"><small>${unitName(q.u)}</small>${qPlain(q)}</div>`).join('')}</div>`;
}

function reportV(){
  const D=S.D,s=D.stat,acc=s.a?Math.round(s.c/s.a*100):0;
  const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(d)}
  const max=Math.max(1,...days.map(d=>(D.days[ymd(d)]||{a:0}).a));
  const starSum=U.reduce((n,u)=>n+(D.best[u.id]?starCount(D.best[u.id]):0),0);
  const weak=U.map(u=>({u,us:D.ustat[u.id]})).filter(x=>x.us&&x.us.a>=5&&x.us.c/x.us.a<.8).sort((a,b)=>a.us.c/a.us.a-b.us.c/b.us.a).slice(0,3);
  return `<h1>学习报告</h1>${S.offline?offBanner:''}
  <div class="stats">
    <div class="stat"><b>${s.a}</b><span>累计答题</span></div>
    <div class="stat"><b>${acc}%</b><span>总正确率</span></div>
    <div class="stat"><b>${D.lstat.a?Math.round(D.lstat.c/D.lstat.a*100)+'%':'—'}</b><span>听力正确率（${D.lstat.a} 题）</span></div>
    <div class="stat"><b>${streak()}</b><span>连续学习天数</span></div>
    <div class="stat"><b>${starSum}</b><span>获得星星（共 ${U.length*3}）</span></div>
  </div>
  <h2>最近 7 天做题数</h2>
  <div class="bars7">${days.map(d=>{const v=(D.days[ymd(d)]||{a:0}).a;return `<div class="c"><em>${v||''}</em><i style="height:${Math.round(v/max*100)}px"></i><span>${d.getMonth()+1}/${d.getDate()}</span></div>`}).join('')}</div>
  ${weak.length?`<h2>建议再复习</h2>${weak.map(x=>`<div class="setrow"><div><b>${x.u.cn}</b><br><span class="s">正确率 ${Math.round(x.us.c/x.us.a*100)}%（做了 ${x.us.a} 题）</span></div><button class="btn sm alt" data-act="lesson" data-u="${x.u.id}">去复习</button></div>`).join('')}`:''}
  <h2>各单元正确率</h2>
  ${U.map(u=>{const us=D.ustat[u.id];const r=us&&us.a?Math.round(us.c/us.a*100):null;
    return `<div class="ub"><span>${u.cn}</span><span class="tr"><i class="${r!==null&&r<70?'lo':''}" style="width:${r||0}%"></i></span><span>${r===null?'未做题':r+'%'}</span></div>`}).join('')}
  ${D.hist.length?`<h2>最近的练习</h2><div class="wl">${D.hist.slice(-10).reverse().map(h=>{const d=new Date(h.t);return `<div class="wq"><small>${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}</small>${esc(h.title)}　<b>${h.s} / ${h.n}</b></div>`}).join('')}</div>`:''}`;
}

function settingsV(){
  if(S.offline)return `<h1>设置</h1>${themePanel()}<h2>数据</h2><p>现在没有连上服务器，不能管理学习数据。请检查网络后刷新页面。</p>`;
  const P=S.P;
  return `<h1>设置</h1>${themePanel()}<h2>学习者与数据</h2>
  <div class="me"><span class="av">${esc(P.avatar)}</span><div><b>${esc(P.name)}</b><br><span class="s">累计答题 ${S.D.stat.a} 次 · 错题 ${bookList().length} 道</span></div></div>
  <h2>这位学习者的数据</h2>
  <div class="setrow"><div><b>改名字</b></div><button class="btn sm alt" data-act="rename">改名字</button></div>
  <div class="setrow"><div><b>清空错题本</b><br><span class="s">只清空错题，成绩和统计保留。</span></div><button class="btn sm danger" data-act="clearbook">清空错题本</button></div>
  <div class="setrow"><div><b>清除学习数据</b><br><span class="s">成绩、统计、错题本全部清空，学习者名字保留。${S.pin?'需要家长密码。':''}</span></div><button class="btn sm danger" data-act="clearall">清除数据</button></div>
  <div class="setrow"><div><b>删除这位学习者</b><br><span class="s">连名字和所有数据一起删除，不能恢复。${S.pin?'需要家长密码。':''}</span></div><button class="btn sm danger" data-act="delp">删除</button></div>
  <h2>备份</h2>
  <div class="setrow"><div><b>导出备份</b><br><span class="s">下载所有学习者的数据（一个 .json 文件）。</span></div><button class="btn sm alt" data-act="export">导出</button></div>
  <div class="setrow"><div><b>导入备份</b><br><span class="s">从备份文件恢复数据。${S.pin?'需要家长密码。':''}</span></div><button class="btn sm alt" data-act="import">选择文件</button><input type="file" id="imp" accept=".json,application/json" hidden></div>
  <p class="foot">数据保存在服务器的 data 目录里（data.json）。${S.pin?'清除、删除、导入需要家长密码。':'没有设置家长密码；想设置，在 docker-compose.yml 里填写 ADMIN_PIN。'}</p>`;
}

/* ---- 点读：点讲解页里的任何英文单词，朗读并显示音标 ---- */
function wrapWords(root){
  if(!root||typeof document.createTreeWalker!=='function')return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){
    const p=n.parentNode;
    if(!/[A-Za-z]/.test(n.nodeValue)||/^\s*\/[^\/]+\/\s*$/.test(n.nodeValue)||(p.closest&&p.closest('button,.w,.sp,input,textarea,script,style,.lines.big')))return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT}});
  const nodes=[];while(w.nextNode())nodes.push(w.currentNode);
  nodes.forEach(n=>{
    const f=document.createDocumentFragment();
    n.nodeValue.split(/([A-Za-z]+(?:['’][A-Za-z]+)*)/).forEach((part,i)=>{
      if(i%2){const sp=document.createElement('span');sp.className='w';sp.textContent=part;f.appendChild(sp)}
      else if(part)f.appendChild(document.createTextNode(part))});
    n.parentNode.replaceChild(f,n)});
}
function lookup(word){
  const k=word.toLowerCase().replace(/’/g,"'");
  if(DICT[k])return DICT[k];
  const c=[k.replace(/'s$/,''),k.replace(/ies$/,'y'),k.replace(/(es|s)$/,''),k.replace(/ed$/,''),k.replace(/d$/,''),k.replace(/ing$/,''),k.replace(/ing$/,'e'),k.replace(/(.)\1ing$/,'$1'),k.replace(/(.)\1ed$/,'$1')];
  for(const x of c){if(x&&x!==k&&DICT[x])return DICT[x]}
  return null;
}
function showWordTip(el){
  const word=el.textContent,d=lookup(word),tip=$('#wtip');
  if(!tip)return;
  say(word,S.D.opts.slow);
  tip.innerHTML=`<div class="wt1"><b>${esc(word)}</b>${d?` <i class="ipa">${esc(d[1])}</i>`:''}</div>${d?`<div class="wt2">${esc(d[2])}　${esc(d[3])}</div>`:''}<div class="wt3"><button class="say" data-say="${esc(word)}" aria-label="朗读">🔊</button><button class="say slow" data-rate="slow" data-say="${esc(word)}" aria-label="慢速朗读">🐢</button></div>`;
  tip.classList.add('show');
  const r=el.getBoundingClientRect(),tw=tip.offsetWidth||180,th=tip.offsetHeight||90;
  tip.style.left=Math.max(8,Math.min(window.innerWidth-tw-8,r.left+r.width/2-tw/2))+'px';
  tip.style.top=(r.top-th-8<8?r.bottom+8:r.top-th-8)+'px';
}
const hideTip=()=>{const t=$('#wtip');if(t)t.classList.remove('show')};

function textbookV(){
  const vol=TEXTBOOK[TBV]||TEXTBOOK[0];
  if(!vol)return '<h1>课本对照</h1><p>还没有课本目录。</p>';
  return `<h1>课本对照</h1><p>人教PEP新版四年级。每个课本单元下面列出重点句型，以及本网站里可以用来复习的单元。点英文可以听读音。</p>
  <div class="seg">${TEXTBOOK.map((v,i)=>`<button class="${i===TBV?'on':''}" data-act="tbvol" data-v="${i}">${v.vol}</button>`).join('')}</div>
  ${vol.units.map(u=>`<div class="tbu"><div class="tbh"><span class="bd c${(u.n-1)%5}">${u.n}</span><div><div class="t"><span class="sp" data-say="${esc(u.en)}">${u.en}</span></div><div class="en2">${u.cn}</div></div></div>
   <ul>${u.focus.map(f=>`<li>${f}</li>`).join('')}</ul>
   <p class="foot" style="margin:6px 0">${u.ok?'重点句型来自公开的教学资料，和课本原句可能略有出入。':'这个单元没能核对到具体内容，下面是按单元主题推测的复习内容。'}</p>
   <div class="chs">${u.link.map(id=>{const x=byId(id);if(!x)return '';const b=S.D.best[id];return `<button class="nb" data-act="lesson" data-u="${id}">${x.cn}${b?' '+stars(starCount(b)):''}</button>`}).join('')}</div></div>`).join('')}
  ${vol.note?`<p class="foot">${vol.note}</p>`:''}`;
}
function render(scroll){
  const v=S.view;
  $('#app').innerHTML=v==='boot'?'<p>加载中…</p>':v==='profiles'?profilesV():v==='home'?home():v==='lesson'?lessonV():v==='quiz'?quizV():v==='result'?resultV():v==='report'?reportV():v==='settings'?settingsV():v==='textbook'?textbookV():bookV();
  document.body.classList.toggle('nonav',v==='profiles'||v==='boot');
  document.body.dataset.view=v;
  hideTip();
  if(v==='lesson'||v==='textbook')wrapWords($('#app'));
  $('#bk').textContent=bookList().length;
  $('#who').textContent=S.P?S.P.avatar+' '+S.P.name:'';
  if(scroll)window.scrollTo(0,0);
  const f=$('#fi');if(f&&!f.disabled)f.focus({preventScroll:true});
}

/* ---------- 做题流程 ---------- */
function prep(q){
  const it={q};
  if(q.t==='c'||q.t==='l')it.opts=shuffle(q.o.map((t,i)=>({t,ok:i===q.a})));
  if(q.t==='j')it.opts=[{t:'对的',ok:q.a===true},{t:'错的',ok:q.a===false}];
  if(q.t==='o'){
    const base=q.a[0].split(' ').map((w,i)=>({w,i}));
    let b;do{b=shuffle(base)}while(base.length>1&&b.every((x,i)=>x===base[i]));
    it.bank=b;it.picked=[];
  }
  return it;
}
function autoplay(){const z=S.quiz,q=z&&z.items[z.i].q;if(q&&(q.t==='l'||q.t==='d')&&!z.ans)say(q.s,S.D.opts.slow)}
function start(list,title,uid,mode){
  S.quiz={title,uid,mode,items:list.map(prep),i:0,score:0,ans:null,wrong:[]};
  S.view='quiz';render(true);autoplay();
}
function startUnit(id,all){
  const u=byId(id);let list=u.qs;
  if(!all&&list.length>12){
    const inBook=shuffle(list.filter(q=>S.D.book[q.id])).slice(0,3),ids=new Set(inBook.map(q=>q.id));
    list=shuffle(inBook.concat(shuffle(list.filter(q=>!ids.has(q.id))).slice(0,10-inBook.length)));
  }
  start(list,u.cn+(all?'（全部题）':'练习'),id,all?'unitall':'unit');
}
function startMix(){start(shuffle(poolQ()).slice(0,20),'综合测验',null,'mix')}
function startDaily(){
  const book=shuffle(bookList()).slice(0,4),ids=new Set(book.map(q=>q.id));
  const rest=shuffle(poolQ().filter(q=>!ids.has(q.id))).slice(0,10-book.length);
  start(shuffle(book.concat(rest)),'每日一练',null,'daily');
}
function startListen(){
  const l=shuffle(poolQ().filter(q=>q.t==='l'||q.t==='d')).slice(0,10);
  if(!l.length){toast('这个年级里还没有听力题，试试“全部”');return}
  start(l,'听力训练',null,'listen');
}
function startBook(){
  const l=bookList();
  if(!l.length){toast('错题本已经清空啦');S.view='book';render(true);return}
  start(shuffle(l),'错题本复习',null,'book');
}
function grade(ok,extra){
  const z=S.quiz,it=z.items[z.i],D=S.D;
  z.ans=Object.assign({ok},extra);
  record(it.q,ok);
  if(ok){z.score++;if(z.mode==='book')delete D.book[it.q.id]}
  else{z.wrong.push(it.q);const b=D.book[it.q.id]||(D.book[it.q.id]={w:0,t:0});b.w++;b.t=Date.now()}
  save();render(false);
}
function next(){
  const z=S.quiz,D=S.D;
  if(z.i<z.items.length-1){z.i++;z.ans=null;render(true);autoplay();return}
  if(z.mode==='unit'||z.mode==='unitall'){const b=D.best[z.uid];if(!b||z.score/z.items.length>=b.s/b.n)D.best[z.uid]={s:z.score,n:z.items.length,t:Date.now()}}
  D.hist.push({t:Date.now(),title:z.title,s:z.score,n:z.items.length});
  if(D.hist.length>50)D.hist=D.hist.slice(-50);
  save(true);S.view='result';render(true);
}
const normF=s=>s.toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ').trim();
const normO=s=>s.toLowerCase().replace(/[’‘]/g,"'").replace(/[.,?!]/g,'').replace(/\s+/g,' ').trim();
function submitFill(){
  const z=S.quiz,it=z.items[z.i];if(!z||z.ans)return;
  const f=$('#fi'),v=f.value;
  if(!v.trim()){toast('先写一写答案');f.focus();return}
  const nm=it.q.t==='d'?normO:normF;grade(it.q.a.some(x=>nm(x)===nm(v)),{val:v});
}

/* ---------- 档案与数据管理 ---------- */
async function enter(id){
  const p=S.profiles.find(x=>x.id===id);if(!p)return;
  flush();S.P=p;
  try{S.D=normData(await api('GET','/api/profiles/'+id+'/data'))}catch(e){toast('读取数据失败');S.D=emptyData()}
  Object.keys(S.D.book).forEach(k=>{if(!QMAP[k])delete S.D.book[k]});
  Object.keys(S.D.ustat).forEach(k=>{if(k.startsWith('wd-'))delete S.D.ustat[k]});
  try{localStorage.setItem('eg_last',id)}catch(e){}
  S.view='home';render(true);
}
async function goProfiles(){
  flush();
  try{S.profiles=await api('GET','/api/profiles')}catch(e){}
  S.view='profiles';render(true);
}
async function addProfile(){
  const n=$('#pn').value.trim();
  if(!n){toast('先写上名字');$('#pn').focus();return}
  try{const p=await api('POST','/api/profiles',{name:n,avatar:S.newAv});S.profiles.push(p);await enter(p.id)}
  catch(e){toast('创建失败：'+e.message)}
}
async function renameP(){
  const n=(prompt('新的名字（最多 12 个字）',S.P.name)||'').trim().slice(0,12);
  if(!n)return;
  try{const p=await api('PATCH','/api/profiles/'+S.P.id,{name:n});S.P=p;S.profiles=S.profiles.map(x=>x.id===p.id?p:x);render()}
  catch(e){toast('改名失败：'+e.message)}
}
function clearBook(){
  if(!confirm('确定清空错题本吗？'))return;
  S.D.book={};save(true);toast('错题本已清空');render();
}
async function clearAll(){
  if(!confirm('确定要清除「'+S.P.name+'」的所有学习数据吗？\n成绩、统计和错题本都会清空，不能恢复。'))return;
  clearTimeout(saveT);dirty=false;
  const r=await pinCall('DELETE','/api/profiles/'+S.P.id+'/data');
  if(r){S.D=emptyData();toast('已清除');render(true)}
}
async function delProfile(){
  if(!confirm('确定要删除「'+S.P.name+'」吗？\n名字和所有学习数据都会被删除，不能恢复。'))return;
  clearTimeout(saveT);dirty=false;
  const id=S.P.id,r=await pinCall('DELETE','/api/profiles/'+id);
  if(r){S.profiles=S.profiles.filter(p=>p.id!==id);try{localStorage.removeItem('eg_last')}catch(e){}S.P=null;S.D=emptyData();S.view='profiles';render(true)}
}
async function importFile(f){
  if(!f)return;
  let j;try{j=JSON.parse(await f.text())}catch(e){toast('这个文件不是有效的备份');return}
  if(!j||!j.profiles||typeof j.profiles!=='object'){toast('这个文件不是有效的备份');return}
  if(!confirm('要导入 '+Object.keys(j.profiles).length+' 位学习者的数据吗？\nID 相同的数据会被覆盖。'))return;
  const r=await pinCall('POST','/api/import',{profiles:j.profiles});
  if(r){
    S.profiles=await api('GET','/api/profiles');
    const cur=S.profiles.find(p=>p.id===S.P.id);
    if(cur){S.P=cur;S.D=normData(await api('GET','/api/profiles/'+cur.id+'/data'))}
    toast('导入完成，共 '+r.count+' 位');render();
  }
}

/* ---------- 事件 ---------- */
document.addEventListener('click',e=>{
  const sp=e.target.closest('[data-say]');
  const wd=e.target.closest&&e.target.closest('.w');
  if(wd){showWordTip(wd);return}
  if(!e.target.closest('#wtip'))hideTip();
  if(sp){say(sp.dataset.say,sp.dataset.rate==='slow');return}
  const el=e.target.closest('[data-act]');if(!el)return;
  const z=S.quiz,it=z&&z.items[z.i],d=el.dataset;
  switch(d.act){
    case 'home':S.view='home';render(true);break;
    case 'lesson':S.uid=d.u;S.D.seen[d.u]=true;save();S.view='lesson';render(true);break;
    case 'practice':startUnit(d.u);break;
    case 'practiceall':startUnit(d.u,true);break;
    case 'mix':startMix();break;
    case 'daily':startDaily();break;
    case 'listen':startListen();break;
    case 'textbook':S.view='textbook';render(true);break;
    case 'tbvol':TBV=+d.v;render(false);break;
    case 'grade':GF=d.v;try{localStorage.setItem('eg_grade',GF)}catch(e){}render(false);break;
    case 'slowtog':case 'textog':{const f=$('#fi'),v=f&&!f.disabled?f.value:'',k=d.act==='slowtog'?'slow':'text';S.D.opts[k]=!S.D.opts[k];save();render(false);const g=$('#fi');if(g&&!g.disabled)g.value=v;break}
    case 'book':S.view='book';render(true);break;
    case 'report':S.view='report';render(true);break;
    case 'settings':S.view='settings';render(true);break;
    case 'profiles':goProfiles();break;
    case 'enter':enter(d.id);break;
    case 'av':S.newAv=d.v;document.querySelectorAll('.avb').forEach(b=>b.classList.toggle('on',b.dataset.v===d.v));break;
    case 'addp':addProfile();break;
    case 'rename':renameP();break;
    case 'clearbook':clearBook();break;
    case 'clearall':clearAll();break;
    case 'delp':delProfile();break;
    case 'export':location.href='/api/export';break;
    case 'import':$('#imp').click();break;
    case 'startbook':startBook();break;
    case 'quit':if(z.uid){S.uid=z.uid;S.view='lesson'}else S.view='home';render(true);break;
    case 'retry':z.mode==='unit'?startUnit(z.uid):z.mode==='unitall'?startUnit(z.uid,true):z.mode==='book'?startBook():z.mode==='daily'?startDaily():z.mode==='listen'?startListen():startMix();break;
    case 'pick':if(!z.ans)grade(it.opts[+d.i].ok,{pick:+d.i});break;
    case 'submit':submitFill();break;
    case 'bank':if(!z.ans){it.picked.push(it.bank.find(b=>b.i===+d.k));render(false)}break;
    case 'unpick':if(!z.ans){it.picked.splice(+d.k,1);render(false)}break;
    case 'reset':if(!z.ans){it.picked=[];render(false)}break;
    case 'check':if(!z.ans){const got=it.picked.map(x=>x.w).join(' ');grade(it.q.a.some(x=>normO(x)===normO(got)),{})}break;
    case 'next':next();break;
    case 'thmode':case 'thbg':case 'thgrad':case 'threset':case 'themecycle':themeAct(d.act,d);if(S.view==='settings')render(false);break;
  }
});
document.addEventListener('input',e=>{if(e.target.dataset&&e.target.dataset.th)themeInput(e.target)});
document.addEventListener('change',e=>{if(e.target.id==='imp'){importFile(e.target.files[0]);e.target.value=''}});
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;
  if(e.target.id==='pn'){e.preventDefault();addProfile();return}
  if(S.view!=='quiz')return;
  const z=S.quiz;if(!z)return;
  if(!z.ans){if(e.target.id==='fi'){e.preventDefault();submitFill()}}
  else if(e.target.tagName!=='BUTTON'){e.preventDefault();next()}
});

/* ---------- 启动 ---------- */
async function boot(){
  render();
  try{
    S.pin=!!(await api('GET','/api/config')).pinRequired;
    S.profiles=await api('GET','/api/profiles');
  }catch(e){
    S.offline=true;S.P={id:'local',name:'游客',avatar:'🙂'};S.D=emptyData();S.view='home';render();return;
  }
  let last=null;try{last=localStorage.getItem('eg_last')}catch(e){}
  if(last&&S.profiles.some(p=>p.id===last))await enter(last);
  else{S.view='profiles';render()}
}
boot();
