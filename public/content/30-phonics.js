/* 自然拼读单元
 * 
 */
U.push(
/* 35 自然拼读（一） */
{id:'u35',cn:'自然拼读（一）',en:'Phonics 1',sum:'短元音和常见的辅音字母组合：sh ch th ck ng',
intro:'自然拼读就是“看到字母，就能读出单词”。学会了它，看到生词也能试着读出来，听写也更容易。',
lesson:
h('拼读的方法：一个一个音拼起来')+
xs([["c – a – t　→　<b>cat</b>","猫"],["d – o – g　→　<b>dog</b>","狗"],["p – i – g　→　<b>pig</b>","猪"]])+
h('五个短元音（读字母的“小声音”）')+
tbl(['字母','读音','例词'],[
 ['a','/æ/','cat, hat, apple'],
 ['e','/e/','bed, pen, red'],
 ['i','/ɪ/','pig, big, sit'],
 ['o','/ɒ/','dog, box, hot'],
 ['u','/ʌ/','bus, cup, sun']])+
h('常见的辅音字母组合')+
tbl(['组合','读音','例词'],[
 ['sh','/ʃ/','ship, fish, shop'],
 ['ch','/tʃ/','chair, lunch, chicken'],
 ['th','/θ/ 或 /ð/','think, three；this, that'],
 ['wh','/w/','what, where, white'],
 ['ph','/f/','phone, photo'],
 ['ck','/k/（常在词尾）','duck, black, clock'],
 ['ng','/ŋ/','sing, long, song']])+
xs([["<b>sh</b>ip　<b>ch</b>air　<b>th</b>ree","船　椅子　三"],["du<b>ck</b>　si<b>ng</b>　<b>wh</b>at","鸭子　唱歌　什么"]])+
tip('th 的读音要把舌尖轻轻放在上下牙齿之间。多点 🐢 慢速听几遍，跟着读。'),
qs:[
 L('chair','听一听，你听到的是哪个词？',['chair','share','air','hair'],0,'chair 以 ch 开头，读 /tʃ/。'),
 L('fish','听一听，你听到的是哪个词？',['fish','dish','wish','fist'],0,'fish 以 f 开头，以 sh 结尾。'),
 L('think','听一听，你听到的是哪个词？',['sink','think','thick','pink'],1,'think 以 th 开头，读 /θ/。'),
 L('duck','听一听，你听到的是哪个词？',['dock','duck','dark','deck'],1,'duck 的元音是 /ʌ/，结尾是 ck。'),
 L('song','听一听，你听到的是哪个词？',['sing','song','sung','sang'],1,'song 的元音是 /ɒ/，结尾是 ng。'),
 L('phone','听一听，你听到的是哪个词？',['fan','phone','bone','zone'],1,'phone 以 ph 开头，读 /f/。'),
 C('fish 里的 sh 读什么音？',['/ʃ/','/tʃ/','/θ/','/k/'],0,'sh 读 /ʃ/。'),
 C('chair 里的 ch 读什么音？',['/tʃ/','/ʃ/','/θ/','/w/'],0,'ch 读 /tʃ/。'),
 C('think 里的 th 读什么音？',['/θ/','/s/','/f/','/k/'],0,'think 里的 th 读 /θ/。'),
 C('what 里的 wh 读什么音？',['/w/','/h/','/f/','/k/'],0,'wh 在 what 里读 /w/。'),
 C('sing 里的 ng 读什么音？',['/ŋ/','/n/','/g/','/m/'],0,'ng 读 /ŋ/。'),
 C('下面哪个词的元音和 cat 相同（/æ/）？',['hat','hot','hit','hut'],0,'hat 和 cat 的元音都是 /æ/。'),
 C('下面哪个词的元音和 bed 相同（/e/）？',['pen','pan','pin','bus'],0,'pen 和 bed 的元音都是 /e/。'),
 C('下面哪个词的元音和 pig 相同（/ɪ/）？',['big','bag','bus','dog'],0,'big 和 pig 的元音都是 /ɪ/。'),
 C('下面哪个词的元音和 dog 相同（/ɒ/）？',['box','bus','bed','bag'],0,'box 和 dog 的元音都是 /ɒ/。'),
 C('下面哪个词的元音和 bus 相同（/ʌ/）？',['cup','cat','pig','dog'],0,'cup 和 bus 的元音都是 /ʌ/。'),
 C('下面哪个词以 sh 开头？',['shop','chop','top','stop'],0,'shop 以 sh 开头。'),
 C('下面哪个词以 ch 开头？',['chicken','sheep','three','what'],0,'chicken 以 ch 开头。'),
 C('下面哪个词以 th 开头？',['three','tree','free','sea'],0,'three 以 th 开头。'),
 W('cat','cat','c – a – t。','一种宠物，会“喵喵”叫'),
 W('pig','pig','p – i – g。','一种动物，胖胖的'),
 W('ship','ship','sh + i + p。','在海上开的“船”'),
 W('fish','fish','f + i + sh。','水里游的动物'),
 W('duck','duck','d + u + ck。','会“嘎嘎”叫的鸭子'),
 W('chair','chair','ch + air。','坐的椅子')
]},
/* 36 自然拼读（二） */
{id:'u36',cn:'自然拼读（二）',en:'Phonics 2',sum:'魔法 e、元音字母组合：ee ea ai ay oa oo ar or',
intro:'元音字母在不同的位置会读不同的音。这一课学“魔法 e”和常见的元音字母组合。',
lesson:
h('魔法 e：让前面的元音读字母名称音')+
tbl(['没有 e（短音）','加上 e（长音）','变化'],[
 ['cap /æ/','cape /eɪ/','a → /eɪ/'],
 ['kit /ɪ/','kite /aɪ/','i → /aɪ/'],
 ['hop /ɒ/','hope /əʊ/','o → /əʊ/'],
 ['cub /ʌ/','cube /juː/','u → /juː/']])+
xs([["c<b>a</b>k<b>e</b>　b<b>i</b>k<b>e</b>　n<b>o</b>s<b>e</b>","蛋糕　自行车　鼻子"]])+
rule('单词结尾有一个<b>不发音的 e</b>，它像魔法一样，让前面的元音读成<b>字母的名称音</b>。')+
h('常见的元音字母组合')+
tbl(['组合','读音','例词'],[
 ['ee','/iː/','see, tree, green'],
 ['ea','/iː/','eat, tea, read'],
 ['ai','/eɪ/','rain, train'],
 ['ay','/eɪ/（常在词尾）','day, play'],
 ['oa','/əʊ/','boat, coat'],
 ['oo','/uː/ 或 /ʊ/','moon, food；book, look'],
 ['ou','/aʊ/','house, mouse'],
 ['ow','/əʊ/ 或 /aʊ/','snow, yellow；cow, brown'],
 ['ar','/ɑː/','car, farm'],
 ['or','/ɔː/','fork, horse'],
 ['er / ir / ur','/ɜː/ 或 /ə/','teacher, bird, turn']])+
tip('遇到不认识的词，先找<b>字母组合</b>（比如 ee、ar、sh），把组合当成一个整体来读，比一个字母一个字母拼更快。'),
qs:[
 L('cake','听一听，你听到的是哪个词？',['cake','cap','cook','coke'],0,'cake 里的 a 读 /eɪ/。'),
 L('bike','听一听，你听到的是哪个词？',['bike','back','bake','book'],0,'bike 里的 i 读 /aɪ/。'),
 L('rain','听一听，你听到的是哪个词？',['rain','run','ran','ring'],0,'rain 里的 ai 读 /eɪ/。'),
 L('boat','听一听，你听到的是哪个词？',['boat','bat','bit','bet'],0,'boat 里的 oa 读 /əʊ/。'),
 L('moon','听一听，你听到的是哪个词？',['moon','mean','man','mine'],0,'moon 里的 oo 读 /uː/。'),
 L('horse','听一听，你听到的是哪个词？',['horse','house','hose','has'],0,'horse 里的 or 读 /ɔː/。'),
 C('make 结尾的 e 起什么作用？',['自己不发音，让前面的 a 读 /eɪ/','读 /e/','读 /i/','没有作用'],0,'魔法 e 不发音，但让前面的元音读字母名称音。'),
 C('下面哪个词有“魔法 e”？',['kite','kit','sit','hit'],0,'kite 结尾有不发音的 e。'),
 C('cap 加上 e 变成 cape，a 的读音怎么变？',['由 /æ/ 变成 /eɪ/','不变','变成 /ɑː/','变成 /ɒ/'],0,'魔法 e 让 a 读 /eɪ/。'),
 C('下面哪个词里的 ee 和 tree 发音相同？',['see','set','bed','pen'],0,'see 和 tree 里的 ee 都读 /iː/。'),
 C('下面哪个词里的 ai 和 rain 发音相同？',['train','tin','tan','turn'],0,'train 和 rain 里的 ai 都读 /eɪ/。'),
 C('ay 通常出现在单词的哪里？',['结尾','开头','中间','都不是'],0,'ay 常在词尾：day, play。'),
 C('boat 里的 oa 读什么音？',['/əʊ/','/ɔː/','/æ/','/ɪ/'],0,'oa 读 /əʊ/。'),
 C('moon 里的 oo 和 book 里的 oo 发音一样吗？',['不一样','一样','都不发音','都读 /æ/'],0,'moon 读 /uː/（长），book 读 /ʊ/（短）。'),
 C('下面哪个词里的 ar 和 car 发音相同？',['farm','fork','fish','fun'],0,'farm 和 car 里的 ar 都读 /ɑː/。'),
 C('下面哪个词里的 or 和 fork 发音相同？',['horse','house','hat','hot'],0,'horse 和 fork 里的 or 都读 /ɔː/。'),
 C('下面哪个词里的 ir 和 bird 发音相同？',['girl','goat','gate','game'],0,'girl 和 bird 里的 ir 都读 /ɜː/。'),
 C('house 里的 ou 读什么音？',['/aʊ/','/ɔː/','/uː/','/ɪ/'],0,'ou 在 house 里读 /aʊ/。'),
 W('cake','cake','c + a + k + 魔法 e。','生日时吃的'),
 W('bike','bike','b + i + k + 魔法 e。','骑的两个轮子的东西'),
 W('tree','tree','tr + ee。','公园里的高大植物'),
 W('boat','boat','b + oa + t。','水上的交通工具'),
 W('rain','rain','r + ai + n。','天上落下的水'),
 W('car','car','c + ar。','路上跑的汽车')
]}
);
