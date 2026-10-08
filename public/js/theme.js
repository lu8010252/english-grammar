/* 外观：深浅模式（含日出日落自动切换）、渐变配色、主题色、毛玻璃。设置保存在这台设备的浏览器里。 */
const GRADS=[
 {id:'sky',cn:'晴空',l:['#a6e3f5','#f7c3e6','#dbe6ff'],d:['#14304a','#2a2150','#0f2338']},
 {id:'aurora',cn:'极光',l:['#98e7cf','#a8c6ff','#d8c8ff'],d:['#0e3a39','#1e2f63','#2a2056']},
 {id:'sunset',cn:'晚霞',l:['#ffd2b6','#ffb7cf','#c8b7ff'],d:['#3d2230','#4a2a4f','#1f1f4a']},
 {id:'sakura',cn:'樱花',l:['#ffd5e3','#ffe4c7','#e8d8ff'],d:['#40222f','#3b2a3f','#2a2145']},
 {id:'ocean',cn:'海洋',l:['#a8d3ff','#9ee2f1','#d6ebff'],d:['#0d2a47','#0f4a5a','#0c1f3a']},
 {id:'lavender',cn:'薰衣草',l:['#d8c3ff','#f3c3e9','#e2dfff'],d:['#2a1f4d','#3d2352','#1d1b45']},
 {id:'graphite',cn:'石墨',l:['#e5e8ef','#d4d8e1','#f0f2f6'],d:['#1a1d24','#252a33','#14161c']}
];
const TH_DEFAULT={mode:'auto',grad:'sunset',bg:'grad',accent:'#4a8cff',blur:14,alpha:72,sunrise:'06:00',sunset:'18:00'};
const TH_MODES=[['auto','自动（日出日落）'],['system','跟随系统'],['light','浅色'],['dark','深色']];
const TH_ICON={auto:'🌗',system:'🖥️',light:'☀️',dark:'🌙'};
let TH=Object.assign({},TH_DEFAULT);
try{const s=JSON.parse(localStorage.getItem('eg_theme')||'null');if(s&&typeof s==='object')TH=Object.assign(TH,s)}catch(e){}
const thSave=()=>{try{localStorage.setItem('eg_theme',JSON.stringify(TH))}catch(e){}};
const toMin=t=>{const m=/^(\d{1,2}):(\d{2})$/.exec(t||'');return m?(+m[1])*60+(+m[2]):null};
const hexLum=h=>{const m=/^#?([0-9a-f]{6})$/i.exec(h||'');if(!m)return 0;const n=parseInt(m[1],16);return(.299*(n>>16&255)+.587*(n>>8&255)+.114*(n&255))/255};

function isDark(){
  if(TH.mode==='dark')return true;
  if(TH.mode==='light')return false;
  if(TH.mode==='system')return !!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches);
  const n=new Date(),m=n.getHours()*60+n.getMinutes(),a=toMin(TH.sunrise),b=toMin(TH.sunset);
  if(a===null||b===null||a===b)return false;
  return !(a<b?(m>=a&&m<b):(m>=a||m<b));   // 日出到日落之间用浅色，其余用深色
}
function applyTheme(){
  const root=document.documentElement,dark=isDark(),g=GRADS.find(x=>x.id===TH.grad)||GRADS[0];
  let c=dark?g.d:g.l;
  if(TH.bg==='plain')c=dark?['#171b2a','#171b2a','#171b2a']:['#eef3fa','#eef3fa','#eef3fa'];
  root.dataset.theme=dark?'dark':'light';
  ['--g1','--g2','--g3'].forEach((k,i)=>root.style.setProperty(k,c[i]));
  root.style.setProperty('--accent',TH.accent);
  root.style.setProperty('--accent-ink',hexLum(TH.accent)>.62?'#1d2a55':'#ffffff');
  root.style.setProperty('--blur',(+TH.blur||0)+'px');
  root.style.setProperty('--alpha',String((+TH.alpha||72)/100));
  const tc=document.getElementById('tc');if(tc)tc.setAttribute('content',c[0]);
  const ic=document.getElementById('thic');if(ic)ic.textContent=TH_ICON[TH.mode]||'🌗';
}
function themePanel(){
  const dark=isDark();
  return `<h2>外观</h2>
  <div class="fld"><span class="lb">深浅模式 <span class="hint">现在是${dark?'深色':'浅色'}</span></span>
    <div class="seg">${TH_MODES.map(([k,n])=>`<button class="${TH.mode===k?'on':''}" data-act="thmode" data-v="${k}">${n}</button>`).join('')}</div></div>
  ${TH.mode==='auto'?`<div class="fld"><span class="lb">日出、日落时间 <span class="hint">日出到日落之间用浅色，其余时间用深色</span></span>
    <div class="row2"><label>日出 <input type="time" data-th="sunrise" value="${TH.sunrise}"></label><label>日落 <input type="time" data-th="sunset" value="${TH.sunset}"></label></div></div>`:''}
  <div class="fld"><span class="lb">背景</span>
    <div class="seg"><button class="${TH.bg==='grad'?'on':''}" data-act="thbg" data-v="grad">渐变色</button><button class="${TH.bg==='plain'?'on':''}" data-act="thbg" data-v="plain">纯色</button></div></div>
  ${TH.bg==='grad'?`<div class="fld"><span class="lb">渐变配色 <span class="hint">浅色和深色下各有一套</span></span>
    <div class="swatches">${GRADS.map(g=>{const c=dark?g.d:g.l;return `<button class="sw ${TH.grad===g.id?'on':''}" data-act="thgrad" data-v="${g.id}" style="background:linear-gradient(135deg,${c[0]},${c[1]} 55%,${c[2]})"><span>${g.cn}</span></button>`}).join('')}</div></div>`:''}
  <div class="fld"><label for="th-accent">主题色</label><input id="th-accent" type="color" data-th="accent" value="${TH.accent}"></div>
  <div class="fld"><label for="th-blur">毛玻璃模糊 <span class="hint" id="th-blur-v">${TH.blur}px</span></label><input id="th-blur" type="range" min="0" max="30" data-th="blur" value="${TH.blur}"></div>
  <div class="fld"><label for="th-alpha">面板不透明度 <span class="hint" id="th-alpha-v">${TH.alpha}%</span></label><input id="th-alpha" type="range" min="30" max="100" data-th="alpha" value="${TH.alpha}"></div>
  <button class="btn sm alt" data-act="threset">恢复默认外观</button>`;
}
function themeInput(el){
  const k=el.dataset.th;let v=el.value;
  if(k==='blur'||k==='alpha')v=+v;
  TH[k]=v;thSave();applyTheme();
  const s=document.getElementById('th-'+k+'-v');
  if(s)s.textContent=v+(k==='blur'?'px':'%');
}
function themeAct(act,d){
  if(act==='thmode')TH.mode=d.v;
  else if(act==='thbg')TH.bg=d.v;
  else if(act==='thgrad')TH.grad=d.v;
  else if(act==='threset')TH=Object.assign({},TH_DEFAULT);
  else if(act==='themecycle'){
    const o=['auto','light','dark'];TH.mode=o[(o.indexOf(TH.mode)+1)%3];
    if(typeof toast==='function')toast('深浅模式：'+TH_MODES.find(m=>m[0]===TH.mode)[1]);
  }
  thSave();applyTheme();
}
applyTheme();
setInterval(applyTheme,60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)applyTheme()});
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',applyTheme)}catch(e){}
