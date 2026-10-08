/* 按顺序加载 content/ 目录里的内容文件，最后加载 app.js。
 * 服务器会列出 content/*.js（按文件名排序）；列不出来时用下面的默认清单。
 * 以后加内容：往 content/ 里放一个文件（文件名数字比已有的大），刷新页面就会自动加载。 */
(function(){
  var DEFAULT=['10-grammar-1.js','11-grammar-2.js','12-grammar-3.js','20-listening.js','30-phonics.js','45-dictionary.js','46-dictionary-2.js','50-order.js','51-grades.js','52-textbook.js','60-more-questions.js','62-more-4.js'];
  function run(list,i){
    if(i>=list.length)return;
    var s=document.createElement('script');s.src=list[i];
    s.onload=s.onerror=function(){run(list,i+1)};
    document.body.appendChild(s);
  }
  function go(names){
    var list=names.map(function(n){return 'content/'+n}).concat(['js/app.js']);
    run(list,0);
  }
  try{fetch('/api/content-files',{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(go,function(){go(DEFAULT)})}catch(e){go(DEFAULT)}
})();
