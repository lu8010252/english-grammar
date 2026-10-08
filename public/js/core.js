
/* ---------- 小工具 ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const strip=s=>s.replace(/<[^>]+>/g,'');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

/* 讲解区的积木 */
const ex=(en,cn)=>`<div class="ex"><span class="sbs"><button class="say" data-say="${esc(strip(en))}" aria-label="朗读这句话">🔊</button><button class="say slow" data-rate="slow" data-say="${esc(strip(en))}" aria-label="慢速朗读">🐢</button></span><div class="exbody"><div class="lines">${en}</div>${cn?`<div class="cn">${cn}</div>`:''}</div></div>`;
const xs=a=>a.map(([e,c])=>ex(e,c)).join('');
const h=t=>`<h3>${t}</h3>`;
const p=t=>`<p>${t}</p>`;
const POSL={n:'n.',v:'v.',adj:'adj.',adv:'adv.',pron:'pron.',prep:'prep.',conj:'conj.',art:'art.',num:'num.'};
const pos=(w,t)=>`<span class="pos p-${t}">${w}<sup>${POSL[t]}</sup></span>`;
const rule=b=>`<div class="box rule"><b>记住</b>${b}</div>`;
const warn=b=>`<div class="box warn"><b>易错</b>${b}</div>`;
const tip=b=>`<div class="box tip"><b>小窍门</b>${b}</div>`;
const tbl=(hd,rows)=>`<div class="tb"><table><thead><tr>${hd.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* 题目：C 选择 / F 填空 / O 连词成句 */
const C=(q,o,a,w)=>({t:'c',q,o,a,w});
const F=(q,a,w)=>({t:'f',q,a:[].concat(a),w});
const O=(cn,a,w)=>({t:'o',cn,a:[].concat(a),w});
const J=(q,a,w)=>({t:'j',q,a,w});
const L=(s,q,o,a,w)=>({t:'l',s,q,o,a,w});
const W=(s,a,w,hint)=>({t:'d',s,q:'听一听，把你听到的写下来。',a:[].concat(a),w,hint});

/* ---------- 内容注册表（各个 content/*.js 文件往里面放东西） ----------
 * U     语法单元：U.push({id,cn,en,sum,intro,lesson,qs:[...]})
 * MORE  给已有单元追加题目：MORE.push({ u6:[ C(...), F(...) ] })（只会追加到末尾，旧题编号不变）
 * ORDER 单元显示顺序（没写进去的单元排在最后）
 * TEXTBOOK 课本对照（content/52-textbook.js）
 * DICT  点读小词典（content/45-dictionary.js）；GRADES 单元对应年级（content/51-grades.js）
 */
const U=[],MORE=[],ORDER=[],DICT={},GRADES={},TEXTBOOK=[];
const GRADE_NAMES={'4':'四年级','5':'五年级','6':'六年级','x':'拓展'};
/* 点读小词典：每行 单词|音标|词性|中文 */
function DICT_ADD(t){t.split('\n').forEach(l=>{const a=l.trim().split('|');if(a.length>=4)DICT[a[0].toLowerCase()]=a})}
/* 可点读的英文（带音标）：spk('noun','/naʊn/') */
const spk=(w,ipa)=>`<span class="sp" data-say="${esc(w)}">${w}${ipa?` <i class="ipa">${ipa}</i>`:''}</span>`;
