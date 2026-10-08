/* 语法单元（二）：词类、所有格、数词、副词、时态对比、现在完成时等
 * 
 */
U.push(
/* 0 词类总览 */
{id:'u0',cn:'认识词类',en:'Parts of Speech',sum:'名词、动词、形容词……单词的“家族”',
intro:'英语单词按作用分成不同的“家族”，先认识它们，后面学语法就轻松了。',
lesson:
h('九个常见的词类')+
tbl(['词类','英文（点一点）','作用','例子'],[
 ['名词 n.',spk('noun','/naʊn/'),'人、东西、地方的名字','teacher, book, school, water'],
 ['动词 v.',spk('verb','/vɜːb/'),'做什么、是什么','run, eat, like, is'],
 ['形容词 adj.',spk('adjective','/ˈædʒɪktɪv/'),'描述名词，说明样子、特点','big, red, happy, beautiful'],
 ['副词 adv.',spk('adverb','/ˈædvɜːb/'),'描述动词、形容词，说明“怎么样、多么”','quickly, well, very, always'],
 ['代词 pron.',spk('pronoun','/ˈprəʊnaʊn/'),'代替名词','I, you, he, she, it, we, they'],
 ['冠词 art.',spk('article','/ˈɑːtɪkl/'),'放在名词前','a, an, the'],
 ['数词 num.',spk('numeral','/ˈnjuːmərəl/'),'表示数量、顺序','one, two, first, second'],
 ['介词 prep.',spk('preposition','/ˌprepəˈzɪʃn/'),'表示位置、时间等关系','in, on, at, under'],
 ['连词 conj.',spk('conjunction','/kənˈdʒʌŋkʃn/'),'把词或句子连起来','and, but, or, because']])+
xs([["The <b>little</b> girl <b>quickly</b> eats <b>a</b> big apple.","这个小女孩很快地吃了一个大苹果。"]])+
p('这个句子里：girl、apple 是名词；eats 是动词；little、big 是形容词；quickly 是副词；a、The 是冠词。')+
h('动词的四个小家族')+
tbl(['家族','例子','特点'],[
 ['be 动词','am, is, are, was, were','“是、在”，不表示动作'],
 ['实义动词','run, eat, like, play, go','表示具体的动作或状态'],
 ['情态动词','can, will, must, may','帮别的动词增加意思（能、将、必须），后面接动词原形'],
 ['助动词','do, does, did','帮忙造否定句和疑问句，自己没有意思']])+
h('句子成分：谁在句子里干什么')+
xs([["I <b>like</b> apples.","主语 I（谁）+ 谓语 like（做什么）+ 宾语 apples（做的对象）"],["She <b>is</b> happy.","主语 She + be 动词 is + 表语 happy（说明主语怎么样）"]])+
tip('判断一个词是什么词类，要看它在<b>句子里</b>的作用。比如 play：I play football（动词）。'),
qs:[
 C('apple 是什么词？',['名词','动词','形容词','副词'],0,'apple（苹果）是东西的名字，是名词。'),
 C('run 是什么词？',['名词','动词','形容词','副词'],1,'run（跑）表示动作，是动词。'),
 C('beautiful 是什么词？',['名词','动词','形容词','副词'],2,'beautiful（美丽的）描述样子，是形容词。'),
 C('quickly 是什么词？',['名词','动词','形容词','副词'],3,'quickly（快地）说明动作怎么样，是副词。'),
 C('in 是什么词？',['介词','连词','代词','数词'],0,'in（在……里）表示位置，是介词。'),
 C('she 是什么词？',['名词','动词','代词','冠词'],2,'she（她）代替名词，是代词。'),
 C('and 是什么词？',['介词','连词','代词','副词'],1,'and（和）用来连接，是连词。'),
 C('ten 是什么词？',['名词','动词','数词','介词'],2,'ten（十）表示数量，是数词。'),
 C('下面哪个是动词？',['book','run','red','happy'],1,'run（跑）是动作，是动词。'),
 C('下面哪个不是名词？',['teacher','school','happy','water'],2,'happy（开心的）是形容词。'),
 C('Tom plays football. 句子中的动词是哪个？',['Tom','plays','football','.'],1,'plays（踢）表示动作，是动词。'),
 C('The red bag is mine. 其中的形容词是哪个？',['The','red','bag','mine'],1,'red（红色的）描述 bag，是形容词。'),
 J('can 是情态动词。',true,'can（能、会）是情态动词，后面接动词原形。')
]},
/* 16 名词所有格 */
{id:'u16',cn:'名词所有格',en:'Possessive Nouns',sum:'Tom’s bag、the door of the room',
intro:'表示“……的”，除了 my / your，还可以用名词的所有格。',
lesson:
h('有生命的人或动物：加 ’s')+
xs([["This is <b>Tom’s</b> bag.","这是汤姆的书包。"],["That is my <b>mother’s</b> book.","那是我妈妈的书。"],["The <b>dog’s</b> name is Lucky.","这条狗的名字叫 Lucky。"]])+
h('复数名词怎么办？')+
tbl(['情况','规则','例子'],[
 ['单数名词','加 ’s','the boy<b>’s</b> room（那个男孩的房间）'],
 ['以 s 结尾的复数','只加 ’','the boys<b>’</b> room（男孩们的房间）<br>the students<b>’</b> books'],
 ['不以 s 结尾的复数','加 ’s','children<b>’s</b> toys<br>men<b>’s</b> shoes']])+
h('没有生命的东西：用 of')+
xs([["the door <b>of</b> the room","房间的门"],["the name <b>of</b> the school","学校的名字"]])+
rule('人和动物用 <b>’s</b>，东西用 <b>of</b>：Tom’s bag（汤姆的包）；the door of the room（房间的门）。')+
h('Whose 的问和答')+
xs([["<b>Whose</b> pen is this?","这是谁的钢笔？"],["It’s <b>Lucy’s</b>.","是露西的。（后面的 pen 可以省略）"]])+
warn('Tom’s a boy. 里的 <b>’s</b> 是 <b>is</b> 的缩写，意思是“汤姆是个男孩”；Tom’s bag 里的 ’s 才表示“……的”。'),
qs:[
 F('This is ___ bag.（Tom）','Tom’s','人名后面加 ’s 表示“……的”。'),
 F('The ___ classroom is big.（students，学生们的）','students’','以 s 结尾的复数，只加 ’。'),
 F('___ toys are on the floor.（children，孩子们的）','Children’s','children 不以 s 结尾，加 ’s。'),
 F('The ___ room is clean.（girls，女孩们的）','girls’','复数以 s 结尾，只加 ’。'),
 C('Whose pen is this? It’s ___.',['Lucy’s','Lucy','Lucys','Lucy is'],0,'回答“谁的”，用 Lucy’s。'),
 C('my mother’s bag 的意思是？',['我妈妈的包','我妈妈是包','我的妈妈们包','我妈妈有包'],0,'’s 表示“……的”。'),
 C('“房间的门”应该怎么说？',['the room’s door','the door of the room','the room door’s','the door room'],1,'没有生命的东西，常用 of。'),
 C('下面哪个是“男孩们的房间”？',['the boys’ room','the boy’s’ room','the boys’s room','the boy room'],0,'复数以 s 结尾，只加 ’。'),
 J('the teacher’s desk 的意思是“老师的书桌”。',true,'teacher’s 表示“老师的”。'),
 O('这是汤姆的铅笔。','This is Tom’s pencil.','Tom’s 表示“汤姆的”。'),
 O('那是我哥哥的自行车。','That is my brother’s bike.','my brother’s 表示“我哥哥的”。')
]},
/* 17 数词 */
{id:'u17',cn:'数词',en:'Numbers',sum:'基数词、序数词、日期和时间',
intro:'数词能告诉我们“有几个”（基数词）和“第几个”（序数词）。',
lesson:
h('基数词：表示数量')+
tbl(['数字','英文'],[
 ['1–10','one, two, three, four, five, six, seven, eight, nine, ten'],
 ['11–19','eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen'],
 ['整十','twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety'],
 ['21–99','中间加连字符：twenty-one, thirty-five, ninety-nine'],
 ['百、千','one hundred, one thousand；101 读作 one hundred <b>and</b> one']])+
warn('thir<b>teen</b>（13）重音在后面，<b>thir</b>ty（30）重音在前面，听的时候要分清；拼写上 forty（40）没有 u，fourteen（14）有 u。')+
h('序数词：表示顺序')+
tbl(['数字','序数词','怎么变'],[
 ['1, 2, 3','first, second, third','要特别记'],
 ['4, 6, 7, 10','fourth, sixth, seventh, tenth','一般加 th'],
 ['5','fifth','ve 变 f 再加 th'],
 ['8','eighth','只加 h'],
 ['9','ninth','去掉 e 再加 th'],
 ['12','twelfth','ve 变 f 再加 th'],
 ['20, 30 …','twentieth, thirtieth','y 变 ie 再加 th'],
 ['21, 22 …','twenty-first, twenty-second','只变个位']])+
tip('序数词前面一般要加 <b>the</b>：the first day, the third floor。写日期可以缩写：May 1st, June 2nd, July 3rd, August 4th。')+
h('怎么用？')+
xs([["I have <b>twenty</b> pencils.","我有二十支铅笔。"],["My room is on the <b>third</b> floor.","我的房间在三楼。"],["Today is May the <b>fifth</b>.","今天是五月五日。"],["She is <b>ten</b> years old.","她十岁了。"]])+
h('时间怎么说')+
tbl(['时间','说法'],[
 ['7:00','It’s seven o’clock.'],
 ['7:30','It’s seven thirty. = It’s half past seven.'],
 ['7:15','It’s seven fifteen. = It’s a quarter past seven.'],
 ['6:45','It’s six forty-five. = It’s a quarter to seven.']]),
qs:[
 C('“第三”的英文是？',['three','third','thrid','threeth'],1,'序数词 third 要特别记。'),
 C('“第九”的英文是？',['nineth','ninth','nine','ninetieth'],1,'nine 去掉 e 再加 th：ninth。'),
 C('“二十一”怎么写？',['twenty one','twentyone','twenty-one','twenty-first'],2,'21–99 中间要加连字符。'),
 C('I have ___ pencils.（二十支）',['twenty','twelve','two','second'],0,'twenty 是 20。'),
 F('Today is the ___ of May.（five）','fifth','five 变序数词是 fifth。'),
 F('My birthday is on the ___ of June.（twelve）','twelfth','twelve 变序数词是 twelfth。'),
 F('She lives on the ___ floor.（two）','second','two 变序数词是 second。'),
 F('He was born on the ___ of August.（eight）','eighth','eight 变序数词是 eighth。'),
 C('下面哪个是 30？',['thirteen','thirty','third','three'],1,'thirty 是 30，thirteen 是 13。'),
 J('7:30 可以读成 It’s seven thirty。',true,'7:30 读作 seven thirty，也可以说 half past seven。'),
 O('我的房间在三楼。','My room is on the third floor.','序数词前面要加 the。'),
 O('现在是七点三十分。','It is seven thirty.','时间用 It is + 钟点。')
]},
/* 18 some any many much */
{id:'u18',cn:'some / any / many / much',en:'Quantity Words',sum:'一些、任何、许多、一点的区别',
intro:'表示“多少”的词，要看名词是可数还是不可数。',
lesson:
h('some 和 any：一些')+
tbl(['词','用在','例子'],[
 ['some','肯定句','I have <b>some</b> apples.'],
 ['any','否定句、疑问句','I don’t have <b>any</b> apples.<br>Do you have <b>any</b> apples?']])+
rule('some 和 any 后面可接<b>可数名词复数</b>，也可接<b>不可数名词</b>。<br>邀请、请求别人时，疑问句里也用 <b>some</b>：Would you like <b>some</b> tea?（你想喝点茶吗？）')+
h('many 和 much：许多')+
tbl(['词','后面接','例子'],[
 ['many','可数名词复数','How <b>many</b> students are there?'],
 ['much','不可数名词','I don’t have <b>much</b> money.<br>How <b>much</b> water do you want?'],
 ['a lot of / lots of','两种都可以','I have <b>a lot of</b> books.<br>There is <b>a lot of</b> milk.']])+
tip('much 一般用在<b>否定句和疑问句</b>里；肯定句里常用 a lot of。')+
h('a few 和 a little：一点点')+
tbl(['词','后面接','意思'],[
 ['a few','可数名词复数','几个：I have <b>a few</b> friends here.'],
 ['a little','不可数名词','一点：I want <b>a little</b> water.']])+
xs([["Would you like <b>some</b> tea?","你想喝点茶吗？"],["There aren’t <b>any</b> eggs.","一个鸡蛋也没有。"]])+
warn('<s>I don’t have some books.</s>　否定句里用 any：I don’t have <b>any</b> books.'),
qs:[
 C('I have ___ apples.',['some','any','much','a little'],0,'肯定句用 some。'),
 C('Do you have ___ brothers?',['some','any','a little','much'],1,'疑问句一般用 any。'),
 C('Would you like ___ tea?',['some','any','many','few'],0,'邀请别人时，疑问句里用 some。'),
 C('There isn’t ___ milk.',['some','any','many','a few'],1,'否定句用 any。'),
 C('How ___ students are there in your class?',['much','many','a little','any'],1,'students 是可数名词复数，用 many。'),
 C('I don’t have ___ money.',['many','much','a few','some'],1,'money 不可数，否定句用 much。'),
 C('I have a ___ friends here.（几个）',['little','few','much','any'],1,'a few + 可数名词复数。'),
 C('I want a ___ water.（一点）',['little','few','many','some'],0,'a little + 不可数名词。'),
 C('I have ___ books.（很多）',['a lot','a lot of','much','a little'],1,'a lot of 后面要接名词。'),
 J('I don’t have some books.',false,'否定句里应该用 any：I don’t have any books.'),
 F('She has ___ good ideas.（some / any）','some','肯定句用 some。')
]},
/* 19 副词 */
{id:'u19',cn:'副词',en:'Adverbs',sum:'quickly、well、very、too / also / either',
intro:'副词用来说明动作“怎么样”，或者程度“有多”。',
lesson:
h('方式副词：说明怎么做')+
xs([["He runs <b>quickly</b>.","他跑得很快。"],["She sings <b>well</b>.","她唱得很好。"],["Please listen <b>carefully</b>.","请仔细听。"]])+
tbl(['变化规则','形容词 → 副词'],[
 ['一般 + ly','quick → quickly<br>slow → slowly<br>careful → carefully'],
 ['辅音 + y，变 y 为 i 再加 ly','happy → happily<br>easy → easily'],
 ['不规则','good → <b>well</b>'],
 ['形容词和副词一样','fast → fast<br>hard → hard<br>early → early<br>late → late']])+
warn('<s>He speaks English good.</s>　good 是形容词，说“说得好”要用副词 <b>well</b>：He speaks English well.')+
h('程度副词：有多……')+
tbl(['词','意思','例子'],[
 ['very','很，非常','She is <b>very</b> beautiful.'],
 ['too','太','This bag is <b>too</b> heavy!'],
 ['so','那么，这么','It is <b>so</b> cold today!'],
 ['quite','相当','He is <b>quite</b> tall.'],
 ['really','真的','I <b>really</b> like it.']])+
h('too / also / either：也')+
tbl(['词','用在','位置','例子'],[
 ['too','肯定句','放在句末，前面常有逗号','I like it, <b>too</b>.'],
 ['also','肯定句','放在 be 动词后、实义动词前','I <b>also</b> like it.'],
 ['either','否定句','放在句末','I don’t like it, <b>either</b>.']])+
tip('too 作“也”解时是肯定句；作“太”解时放在形容词前。这两个意思要看句子分清。'),
qs:[
 F('He runs ___.（quick）','quickly','quick + ly = quickly。'),
 F('She sings ___.（good）','well','good 的副词形式是 well。'),
 F('Please listen ___.（careful）','carefully','careful + ly = carefully。'),
 F('She did it ___.（easy）','easily','easy 变 y 为 i 再加 ly。'),
 C('I like swimming. She does, ___.',['too','either','very','so'],0,'肯定句里“也”用 too。'),
 C('I don’t like it. He doesn’t ___.',['too','either','also','so'],1,'否定句里“也”用 either。'),
 C('This bag is ___ heavy! I can’t carry it.',['very','too','also','well'],1,'“太重了”，用 too。'),
 C('She is ___ beautiful.（很）',['very','too many','well','either'],0,'表示“很”，用 very。'),
 C('fast 的副词形式是？',['fastly','fast','faster','well'],1,'fast 的副词形式还是 fast。'),
 C('下面哪句话是对的？',['He plays the piano good.','He plays the piano well.','He plays the piano goodly.','He plays well the piano.'],1,'说“弹得好”，用副词 well。'),
 J('He speaks English good.',false,'good 是形容词，要改成副词 well。'),
 O('她唱得很好。','She sings very well.','very 说明程度，well 说明唱得怎么样。'),
 O('请慢点说。','Please speak slowly.','slowly 是副词，说明怎么说。')
]},
/* 20 动词后面接什么 */
{id:'u20',cn:'like doing / want to do',en:'Verb + doing / to do',sum:'喜欢做、想要做、擅长做',
intro:'两个动词连在一起，后面的动词常常要变形。',
lesson:
h('第一类：动词 + doing（动词 -ing）')+
p('常见的有：<b>enjoy</b>（享受）、<b>finish</b>（完成）、<b>practise</b>（练习）、<b>like / love</b>（喜欢）')+
xs([["She <b>enjoys reading</b> books.","她喜欢看书。"],["I <b>finished doing</b> my homework.","我做完作业了。"],["He <b>likes playing</b> football.","他喜欢踢足球。"]])+
h('第二类：动词 + to do（to + 动词原形）')+
p('常见的有：<b>want</b>（想要）、<b>would like</b>（想要）、<b>need</b>（需要）、<b>hope</b>（希望）、<b>decide</b>（决定）、<b>plan</b>（计划）')+
xs([["I <b>want to buy</b> a pen.","我想买一支笔。"],["I’d <b>like to go</b> to the park.","我想去公园。"],["He <b>decided to go</b> home.","他决定回家。"]])+
h('介词后面接 doing')+
xs([["Thank you <b>for helping</b> me.","谢谢你帮助我。"],["She is good <b>at swimming</b>.","她擅长游泳。"],["<b>How about going</b> to the park?","去公园怎么样？"],["<b>What about playing</b> football?","踢足球怎么样？"]])+
h('Let / make 后面接原形')+
xs([["<b>Let me help</b> you.","让我来帮你。"],["<b>Let’s clean</b> the room.","我们打扫房间吧。"]])+
warn('<s>I want go home.</s>　want 后面要加 to：I want <b>to go</b> home.<br><s>She enjoys to read.</s>　enjoy 后面要用 -ing：She enjoys <b>reading</b>.')+
tip('Would you like ...? 后面可以接名词：Would you like <b>some tea</b>?，也可以接 to do：Would you like <b>to have</b> some tea?'),
qs:[
 C('She enjoys ___ books.',['reading','to read','read','reads'],0,'enjoy 后面接 doing。'),
 C('I want ___ a pen.',['buying','to buy','buy','buys'],1,'want 后面接 to do。'),
 C('I’d like ___ to the park.',['go','going','to go','goes'],2,'would like 后面接 to do。'),
 C('Let’s ___ the room.',['clean','cleaning','to clean','cleans'],0,'Let’s 后面接动词原形。'),
 C('He is good at ___.',['swim','swimming','to swim','swims'],1,'介词 at 后面接 doing。'),
 C('Thank you for ___ me.',['help','helps','helping','to help'],2,'介词 for 后面接 doing。'),
 C('How about ___ football?',['play','playing','to play','plays'],1,'How about 后面接 doing。'),
 C('She finished ___ her homework.',['doing','to do','do','does'],0,'finish 后面接 doing。'),
 F('He decided ___ home.（go）','to go','decide 后面接 to do。'),
 F('Let me ___ you.（help）','help','Let me 后面接动词原形。'),
 J('I want go home.',false,'want 后面要加 to：I want to go home.'),
 O('我想去公园。','I want to go to the park.','want to + 动词原形。'),
 O('他喜欢看书。','He likes reading books.','likes 后面接 doing。')
]},
/* 21 感叹句 */
{id:'u21',cn:'感叹句',en:'Exclamations',sum:'What a nice day! How beautiful!',
intro:'想表达“多么……啊！”，就用 What 或 How 开头的感叹句。',
lesson:
h('What 开头：后面跟名词')+
tbl(['结构','例子'],[
 ['What + a / an + 形容词 + 单数名词！','What <b>a</b> nice day!　多么好的一天！<br>What <b>an</b> interesting book!　多么有趣的书！'],
 ['What + 形容词 + 复数名词！','What <b>beautiful</b> flowers!　多么美丽的花！'],
 ['What + 形容词 + 不可数名词！','What <b>good</b> news!　多么好的消息！']])+
h('How 开头：后面跟形容词或副词')+
tbl(['结构','例子'],[
 ['How + 形容词！','How <b>beautiful</b>!　多么美啊！'],
 ['How + 形容词 + 主语 + 谓语！','How <b>delicious</b> the cake is!　这个蛋糕多么好吃啊！'],
 ['How + 副词 + 主语 + 谓语！','How <b>fast</b> he runs!　他跑得多快啊！']])+
xs([["<b>What a</b> big cake!","多么大的蛋糕！"],["<b>How</b> big the cake is!","这个蛋糕多大啊！"]])+
rule('后面有<b>名词</b>用 <b>What</b>；只有<b>形容词 / 副词</b>用 <b>How</b>。句末要加感叹号 !')+
warn('<s>What nice day!</s>　单数可数名词前要加 a：What <b>a</b> nice day!<br><s>How a nice day!</s>　有名词 day，要用 What。'),
qs:[
 C('___ a beautiful flower!',['What','How','Which','Who'],0,'后面有名词 flower，用 What。'),
 C('___ beautiful the flower is!',['What','How','Which','Who'],1,'后面只有形容词，用 How。'),
 C('What ___ interesting book!',['a','an','the','/'],1,'interesting 以元音开头，用 an。'),
 C('What ___ flowers!',['beautiful','a beautiful','an beautiful','how beautiful'],0,'flowers 是复数，前面不加 a。'),
 C('How ___ he runs!',['fast','a fast','fastly','what fast'],0,'How + 副词：How fast he runs!'),
 C('下面哪句是错的？',['What a nice day!','What nice day!','How nice the day is!','What nice weather!'],1,'单数可数名词前要加 a：What a nice day!'),
 F('___ a nice day!（What / How）','What','后面有名词 day，用 What。'),
 F('How ___ the cake is!（美味的）','delicious','How + 形容词。'),
 J('How a nice day!',false,'有名词 day，应该用 What：What a nice day!'),
 O('多么美丽的花啊！','What beautiful flowers!','What + 形容词 + 复数名词。'),
 O('这个蛋糕多好吃啊！','How delicious the cake is!','How + 形容词 + 主语 + 谓语。')
]},
/* 22 句型转换 */
{id:'u22',cn:'句型转换',en:'Sentence Transformation',sum:'肯定句、否定句、一般疑问句怎么互换',
intro:'同一件事，可以说“是”，也可以说“不是”，还可以问一问。',
lesson:
h('先看有没有“帮手”')+
rule('<b>有 be 用 be，有情态动词用情态动词，都没有就借 do / does / did。</b>')+
tbl(['句子里有','否定句','一般疑问句'],[
 ['be 动词（am, is, are, was, were）','be 后面加 not','把 be 提到句首'],
 ['情态动词（can, will）','情态动词后面加 not','把情态动词提到句首'],
 ['都没有（实义动词）','借 don’t / doesn’t / didn’t，动词变原形','借 Do / Does / Did 放句首，动词变原形']])+
h('一起对照看')+
xs([
 ["She is a teacher.","肯定句"],["She <b>isn’t</b> a teacher.","否定句"],["<b>Is</b> she a teacher?","一般疑问句"],
 ["I can swim.","肯定句"],["I <b>can’t</b> swim.","否定句"],["<b>Can</b> you swim?","一般疑问句（I 要变成 you）"],
 ["He likes milk.","肯定句"],["He <b>doesn’t like</b> milk.","否定句（likes 还原成 like）"],["<b>Does</b> he <b>like</b> milk?","一般疑问句"],
 ["She watched TV.","肯定句"],["She <b>didn’t watch</b> TV.","否定句（watched 还原成 watch）"],["<b>Did</b> she <b>watch</b> TV?","一般疑问句"]])+
h('变形时要留意')+
tbl(['变化','例子'],[
 ['some 变 any（否定、疑问句里）','I have some books. → I don’t have <b>any</b> books.'],
 ['I / my 变 you / your（改成问句）','I am a student. → Are <b>you</b> a student?'],
 ['第一个字母大小写','Is she a teacher?（句首要大写，原来句首的词如不是人名就变小写）']])+
warn('<s>Does he likes milk?</s> <s>She didn’t watched TV.</s>　借来了助动词，后面的动词一定要<b>还原成原形</b>。'),
qs:[
 F('She is a teacher.（改否定）She ___ a teacher.',['isn’t','is not'],'be 动词后面加 not。'),
 F('I can swim.（改疑问）___ you swim?','Can','把 can 提到句首，I 变成 you。'),
 F('He likes milk.（改否定）He ___ like milk.',['doesn’t','does not'],'借 doesn’t，likes 还原成 like。'),
 F('They play football.（改疑问）___ they play football?','Do','借 Do 放在句首。'),
 F('She watched TV.（改疑问）___ she watch TV?','Did','过去的事，借 Did。'),
 F('I have some books.（改否定）I don’t have ___ books.','any','否定句里 some 变 any。'),
 C('He is reading. 改成一般疑问句：',['Is he reading?','Does he reading?','Is he read?','He is reading?'],0,'把 be 动词 is 提到句首。'),
 C('She goes to school. 改成否定句：',['She doesn’t go to school.','She doesn’t goes to school.','She don’t go to school.','She isn’t go to school.'],0,'借 doesn’t，goes 还原成 go。'),
 C('I am a student. 改成一般疑问句：',['Am I a student?','Are you a student?','Is you a student?','Do you a student?'],1,'把 am 提到句首，I 要变成 you，be 要用 are。'),
 C('We went to the park. 改成否定句：',['We didn’t went to the park.','We don’t go to the park.','We didn’t go to the park.','We wasn’t go to the park.'],2,'借 didn’t，went 还原成 go。'),
 J('Does he likes fish?',false,'有了 Does，likes 要还原成 like：Does he like fish?'),
 O('他们不喜欢鱼。','They don’t like fish.','借 don’t，后面用动词原形。'),
 O('你昨天看电影了吗？','Did you watch a movie yesterday?','Did + 主语 + 动词原形。'),
 O('他不会游泳。','He can’t swim.','can’t + 动词原形。'),
 O('她在看书吗？','Is she reading a book?','be 动词 Is 提到句首。')
]},
/* 23 时态大比拼 */
{id:'u23',cn:'时态大比拼',en:'Tenses Together',sum:'看时间词，选对时态',
intro:'学完四种时态，这一课来比一比：看到什么时间词，该用什么时态。',
lesson:
h('看时间词，选时态')+
tbl(['时态','常见时间词','动词形式'],[
 ['一般现在时','every day, usually, often, always, sometimes','动词原形 / 三单 s、es'],
 ['现在进行时','now, Look!, Listen!, at the moment','am / is / are + -ing'],
 ['一般过去时','yesterday, last week, two days ago, just now','动词过去式'],
 ['一般将来时','tomorrow, next week, soon, tonight','will + 原形 / be going to + 原形']])+
h('同一个动词 play 的四种说法')+
xs([["I <b>play</b> football every day.","我每天踢足球。（一般现在时）"],["I <b>am playing</b> football now.","我现在正在踢足球。（现在进行时）"],["I <b>played</b> football yesterday.","我昨天踢了足球。（一般过去时）"],["I <b>will play</b> football tomorrow.","我明天要踢足球。（一般将来时）"]])+
rule('选时态的三步：<ol><li>找句子里的<b>时间词</b>；</li><li>想一想事情是<b>过去、现在还是将来</b>；</li><li>用对动词形式，别忘了主语是不是第三人称单数。</li></ol>')+
warn('<s>I go to school yesterday.</s>　yesterday 是过去，要用 went。<br><s>She is play now.</s>　now 要用进行时，缺少 -ing。<br><s>He will goes.</s>　will 后面要用原形。'),
qs:[
 C('She ___ to school every day.',['go','goes','is going','went'],1,'every day 是一般现在时，she 要用三单形式 goes。'),
 C('Look! He ___ a kite.',['flies','flew','is flying','will fly'],2,'Look! 表示正在发生，用现在进行时。'),
 C('I ___ my grandma yesterday.',['visit','visited','am visiting','will visit'],1,'yesterday 是过去，用 visited。'),
 C('We ___ to the zoo tomorrow.',['will go','went','goes','are go'],0,'tomorrow 是将来，用 will go。'),
 C('Last night, we ___ TV.',['watch','watches','watched','will watch'],2,'last night 是过去，用 watched。'),
 C('Tom ___ his homework now.',['does','did','is doing','will do'],2,'now 表示现在正在做，用 is doing。'),
 C('They are playing basketball now. 这句话是什么时态？',['一般现在时','现在进行时','一般过去时','一般将来时'],1,'are + playing 是现在进行时。'),
 F('Listen! The birds ___.（sing）','are singing','Listen! 表示正在发生，用 are singing。'),
 F('He ___ his room last Sunday.（clean）','cleaned','last Sunday 是过去，clean 加 ed。'),
 F('My father ___ in a hospital.（work）','works','经常性的事实，father 是第三人称单数，加 s。'),
 J('I go to school yesterday.',false,'yesterday 是过去，要说 I went to school yesterday.'),
 O('我昨天看了一部电影。','I watched a movie yesterday.','yesterday 是过去，用 watched。'),
 O('他现在正在打扫房间。','He is cleaning the room now.','now 表示现在，用 is cleaning。')
]},
/* 24 日常用语 */
{id:'u24',cn:'日常交际用语',en:'Daily English',sum:'打招呼、感谢、道歉、请求、购物',
intro:'语法学得好，还要会说。这一课收集了最常用的口语句子。',
lesson:
h('打招呼和介绍自己')+
xs([["Hello! / Hi!","你好！"],["Good morning. / Good afternoon. / Good evening.","早上好 / 下午好 / 晚上好。"],["How are you?　—　I’m fine, thank you. And you?","你好吗？我很好，谢谢。你呢？"],["My name is Li Ming.","我叫李明。"],["Nice to meet you.　—　Nice to meet you, too.","很高兴见到你。我也是。"],["This is my friend, Tom.","这是我的朋友汤姆。"]])+
h('感谢和道歉')+
xs([["Thank you.　—　You’re welcome.","谢谢。不客气。"],["Sorry!　—　That’s OK. / It doesn’t matter.","对不起！没关系。"]])+
h('请求和邀请')+
xs([["Excuse me.","打扰一下。"],["Can you help me?　—　Sure.","你能帮我吗？当然。"],["May I come in?　—　Yes, please.","我可以进来吗？请进。"],["Would you like some tea?　—　Yes, please. / No, thanks.","你想喝点茶吗？好的，谢谢。/ 不用了，谢谢。"],["Here you are.","给你。"]])+
h('问时间、问路、购物')+
xs([["What time is it?　—　It’s seven o’clock.","几点了？七点了。"],["Where is the library?　—　It’s next to the school.","图书馆在哪里？在学校旁边。"],["How much is it?　—　It’s ten yuan.","这个多少钱？十元。"]])+
h('节日祝福')+
xs([["Happy birthday!　—　Thank you!","生日快乐！谢谢！"],["Merry Christmas!","圣诞快乐！"],["Happy New Year!","新年快乐！"]])+
tip('别人夸你或祝福你，最常用的回答是 <b>Thank you!</b>'),
qs:[
 C('“How are you?” 最合适的回答是？',['I’m fine, thank you.','You’re welcome.','Nice to meet you.','Yes, please.'],0,'How are you? 问“你好吗”，回答 I’m fine, thank you.'),
 C('“Thank you.” 的回答是？',['You’re welcome.','Nice to meet you.','Sorry.','Yes, please.'],0,'别人说谢谢，回答 You’re welcome.'),
 C('“Nice to meet you.” 的回答是？',['Nice to meet you, too.','Thank you.','That’s OK.','Here you are.'],0,'回答“我也很高兴见到你”。'),
 C('“Sorry!” 的回答是？',['That’s OK.','You’re welcome.','Nice to meet you.','Yes, please.'],0,'别人道歉，回答 That’s OK.'),
 C('“Happy birthday!” 的回答是？',['Thank you!','Sorry.','No problem.','Excuse me.'],0,'收到祝福，说 Thank you!'),
 C('“Would you like some tea?” 想喝的话回答？',['Yes, please.','Yes, I do.','No, I’m not.','You’re welcome.'],0,'接受邀请，说 Yes, please.'),
 C('“What time is it?” 的回答是？',['It’s seven o’clock.','It’s Monday.','It’s ten yuan.','It’s red.'],0,'问时间，答钟点。'),
 C('“How much is it?” 的回答是？',['It’s ten yuan.','It’s ten o’clock.','It’s ten years old.','It’s ten books.'],0,'How much 问价钱，答 yuan。'),
 C('“Excuse me, where is the library?” 的回答是？',['It’s next to the school.','It’s seven o’clock.','Yes, please.','I’m fine.'],0,'问地点，答位置。'),
 C('想请别人帮忙，可以说？',['Can you help me?','Are you help me?','Do you helps me?','You help me can?'],0,'Can you ...? 用来请求帮忙。'),
 C('递东西给别人时，可以说？',['Here you are.','Excuse me.','Nice to meet you.','Good night.'],0,'Here you are. 表示“给你”。'),
 O('很高兴见到你。','Nice to meet you.','初次见面常用语。'),
 O('不客气。','You’re welcome.','回答 Thank you. 的常用说法。')
]},
/* 29 词性与缩写 */
{id:'u29',cn:'词性与缩写',en:'Parts of Speech: Abbreviations & Tips',sum:'词典里的 n. v. adj. adv. 是什么？怎么分辨、怎么记',
intro:'查词典、看课本时，单词后面常有 <b>n.</b>、<b>v.</b>、<b>adj.</b> 这样的小标记，它们告诉你这个词属于哪一类。这一页教你认识它们，还有分辨、记忆的办法。',
lesson:
h('词典里的小标记（词性缩写）')+
p('👆 点<b>英文全称</b>可以听读音，旁边有音标。讲解里<b>任何英文单词</b>都可以点一点，听读音、看音标和意思。')+
tbl(['缩写','英文全称','中文','例词'],[
 ['<b>n.</b>',spk('noun','/naʊn/'),'名词','book, teacher, Beijing'],
 ['<b>v.</b>',spk('verb','/vɜːb/'),'动词','run, eat, like'],
 ['<b>adj.</b>',spk('adjective','/ˈædʒɪktɪv/'),'形容词','big, happy, red'],
 ['<b>adv.</b>',spk('adverb','/ˈædvɜːb/'),'副词','quickly, very, well'],
 ['<b>pron.</b>',spk('pronoun','/ˈprəʊnaʊn/'),'代词','I, you, this, mine'],
 ['<b>prep.</b>',spk('preposition','/ˌprepəˈzɪʃn/'),'介词','in, on, at, under'],
 ['<b>conj.</b>',spk('conjunction','/kənˈdʒʌŋkʃn/'),'连词','and, but, because'],
 ['<b>art.</b>',spk('article','/ˈɑːtɪkl/'),'冠词','a, an, the'],
 ['<b>num.</b>',spk('numeral','/ˈnjuːmərəl/'),'数词','one, two, first'],
 ['<b>interj.</b>',spk('interjection','/ˌɪntəˈdʒekʃn/'),'感叹词','oh, wow, hello'],
 ['<b>aux. v.</b>',spk('auxiliary verb','/ɔːɡˈzɪliəri vɜːb/'),'助动词','do, does, did'],
 ['<b>modal v.</b>',spk('modal verb','/ˈməʊdl vɜːb/'),'情态动词','can, will, must']])+
tip('缩写的第一个字母基本就是英文全称的开头：<b>n</b>oun、<b>v</b>erb、<b>adj</b>ective、<b>adv</b>erb。记住全称，缩写就不会忘。')+
h('用颜色看一个句子')+
p('<span class="posline">'+pos('The','art')+pos('little','adj')+pos('girl','n')+pos('quickly','adv')+pos('eats','v')+pos('a','art')+pos('big','adj')+pos('apple','n')+'.</span>')+
p('<span class="posline">'+pos('She','pron')+pos('and','conj')+pos('I','pron')+pos('are','v')+pos('in','prep')+pos('the','art')+pos('room','n')+'.</span>')+
p('颜色提示：'+pos('名词','n')+pos('动词','v')+pos('形容词','adj')+pos('副词','adv')+pos('代词','pron')+pos('介词','prep')+pos('连词','conj')+pos('冠词','art'))+
h('词典和课本里的其他小标记')+
tbl(['标记','意思','例子'],[
 ['<b>sb.</b>','somebody，某人','help <b>sb.</b>　帮助某人'],
 ['<b>sth.</b>','something，某事、某物','give <b>sb. sth.</b>　给某人某物'],
 ['<b>doing</b>','动词 -ing 形式','enjoy <b>doing</b> sth.　喜欢做某事'],
 ['<b>to do</b>','to + 动词原形','want <b>to do</b> sth.　想要做某事'],
 ['<b>pl.</b>','plural，复数','children（child 的复数）'],
 ['<b>sing.</b>','singular，单数','child']])+
h('课本里常见的英文缩写')+
tbl(['缩写','意思','缩写','意思'],[
 ['Mr.','先生','Mrs.','太太、夫人'],
 ['Ms.','女士','Miss','小姐'],
 ['Dr.','博士、医生','a.m.','上午'],
 ['p.m.','下午、晚上','P.E.','体育课'],
 ['TV','电视','e.g.','例如'],
 ['etc.','等等','OK','好的']])+
h('说话时的缩写（缩略形式）')+
tbl(['缩写','完整形式','缩写','完整形式'],[
 ['I’m','I am','you’re','you are'],
 ['he’s','he is','she’s','she is'],
 ['it’s','it is','we’re','we are'],
 ['don’t','do not','doesn’t','does not'],
 ['isn’t','is not','aren’t','are not'],
 ['can’t','cannot','won’t','will not'],
 ['let’s','let us','what’s','what is']])+
warn('<b>’s</b> 有三种用法：①是 is（He’s a boy.）；②是 has（He’s got a book.）；③表示“……的”（Tom’s bag）。要根据句子判断。')+
h('怎么分辨一个词是什么词性？')+
rule('四招：<b>提问法、位置法、词尾法、看作用</b>。')+
p('<b>第一招：提问法</b>')+
tbl(['问一问','答案'],[
 ['它是人、东西、地方的名字吗？','名词 n.'],
 ['它表示“做什么”或者“是什么”吗？','动词 v.'],
 ['它能回答“什么样的？”吗（big, red, nice）','形容词 adj.'],
 ['它能回答“怎么样地？”“多么？”吗（quickly, very）','副词 adv.']])+
p('<b>第二招：位置法</b>（看它站在句子的哪里）')+
tbl(['位置','常见词性','例子'],[
 ['a / an / the / my 的后面','名词，或者“形容词 + 名词”','the <b>book</b>；a <b>big</b> bag'],
 ['I / you / she / Tom 的后面','动词','I <b>like</b> cats.　Tom <b>runs</b>.'],
 ['am / is / are 的后面','形容词（或名词）','She is <b>happy</b>.'],
 ['动词的后面，说明“怎么做”','副词','He runs <b>fast</b>.'],
 ['in / on / at 的后面','名词或代词','in <b>the room</b>；with <b>me</b>']])+
p('<b>第三招：词尾法</b>（看单词的结尾）')+
tbl(['词性','常见词尾','例子'],[
 ['名词 n.','-tion, -er / -or, -ness, -ment, -ist','station, teacher, doctor, kindness, artist'],
 ['形容词 adj.','-ful, -y, -ous, -al, -less, -able','beautiful, sunny, famous, national, careless, comfortable'],
 ['副词 adv.','-ly（由形容词变来）','quickly, slowly, carefully'],
 ['动词 v.','没有固定词尾；-ed、-ing 结尾的多是动词变形','played, playing']])+
warn('<b>friendly</b>（友好的）、<b>lovely</b>（可爱的）虽然以 -ly 结尾，却是<b>形容词</b>，不是副词。名词加 -ly 常常变成形容词。')+
p('<b>第四招：看它在句子里的作用</b>（有些词有好几种词性，见下面）')+
h('一个词，多种词性')+
tbl(['单词','词性和例子'],[
 ['play','v.　I <b>play</b> football.<br>n.　We watched a <b>play</b>.（一出戏）'],
 ['water','n.　I drink <b>water</b>.<br>v.　Please <b>water</b> the flowers.（浇水）'],
 ['light','n.　Turn on the <b>light</b>.（灯）<br>adj.　The bag is <b>light</b>.（轻的）'],
 ['fast','adj.　a <b>fast</b> car（快的）<br>adv.　He runs <b>fast</b>.（跑得快）'],
 ['hard','adj.　This question is <b>hard</b>.（难的）<br>adv.　He works <b>hard</b>.（努力地）'],
 ['like','v.　I <b>like</b> cats.（喜欢）<br>prep.　He looks <b>like</b> his father.（像）']])+
tip('遇到一个词有好几种词性，不要慌：先看它在<b>句子里的位置和作用</b>，再决定是哪一类。')+
h('词性转换：一个词的“家族”')+
tbl(['原来的词','变成','例子'],[
 ['动词 + er / or → 名词','teach → teacher<br>play → player<br>sing → singer'],
 ['名词 + y → 形容词','sun → sunny<br>rain → rainy<br>cloud → cloudy'],
 ['名词 / 动词 + ful → 形容词','care → careful<br>help → helpful<br>use → useful<br>colour → colourful'],
 ['形容词 + ly → 副词','quick → quickly<br>slow → slowly<br>careful → carefully'],
 ['形容词 + ness → 名词','happy → happiness<br>kind → kindness'],
 ['不规则','good → well（副词）<br>beauty → beautiful']])+
h('记词性的口诀')+
rule('<ul><li>名词是<b>名字</b>：人、东西、地方都能叫。</li><li>动词会<b>动</b>：跑、跳、吃、喝，还有 is、am、are。</li><li>形容词给名词<b>穿衣服</b>：big, red, nice。</li><li>副词给动作或形容词<b>加调料</b>：quickly, very。</li><li>代词是<b>替身</b>：I, he, it。</li><li>介词是<b>方向牌</b>：in, on, under。</li><li>连词是<b>胶水</b>：and, but, because。</li><li>冠词是名词的<b>小跟班</b>：a, an, the。</li><li>数词会<b>数数</b>：one, two, first。</li></ul>')+
tip('每学一个新单词，顺手问自己一句：<b>它是名词、动词，还是形容词？</b>在单词本上用不同颜色的笔标出来（比如名词红色、动词蓝色、形容词绿色），看多了就记住了。'),
qs:[
 C('词典里 adj. 表示什么词性？',['形容词','副词','动词','代词'],0,'adj. 是 adjective，形容词。'),
 C('词典里 adv. 表示什么词性？',['副词','形容词','冠词','介词'],0,'adv. 是 adverb，副词。'),
 C('词典里 prep. 表示什么词性？',['介词','代词','连词','名词'],0,'prep. 是 preposition，介词。'),
 C('词典里 conj. 表示什么词性？',['连词','冠词','数词','副词'],0,'conj. 是 conjunction，连词。'),
 C('词典里 pron. 表示什么词性？',['代词','介词','名词','副词'],0,'pron. 是 pronoun，代词。'),
 C('help sb. 的意思是？',['帮助某人','帮助某事','某人帮助','帮助他们'],0,'sb. 是 somebody，某人。'),
 C('give sb. sth. 的意思是？',['给某人某物','某人给','给某地','拿走某物'],0,'sb. 是某人，sth. 是某事、某物。'),
 C('beautiful 的词尾 -ful，通常说明它是什么词性？',['形容词','名词','动词','副词'],0,'-ful 结尾的词多是形容词。'),
 C('happiness 的词尾 -ness，通常说明它是什么词性？',['名词','形容词','动词','副词'],0,'-ness 结尾的词多是名词。'),
 C('quickly 的词尾 -ly，通常说明它是什么词性？',['副词','名词','代词','冠词'],0,'由形容词加 -ly 变来的词，多是副词。'),
 C('teacher 的词尾 -er，通常说明它是什么词性？',['名词','形容词','副词','介词'],0,'-er / -or 结尾，表示“做……的人”，是名词。'),
 C('He runs fast. 这里的 fast 是什么词性？',['副词','形容词','名词','动词'],0,'fast 说明“怎么跑”，是副词。'),
 C('This is a fast car. 这里的 fast 是什么词性？',['形容词','副词','名词','动词'],0,'fast 放在名词 car 前面，描述它，是形容词。'),
 C('I drink water. 这里的 water 是什么词性？',['名词','动词','形容词','副词'],0,'water 在这里是“水”，是名词。'),
 C('Please water the flowers. 这里的 water 是什么词性？',['动词','名词','形容词','副词'],0,'water 在这里表示“浇水”，是动词。'),
 C('The ___ girl is my sister. 在 The 和 girl 之间，最可能填哪类词？',['形容词','动词','副词','连词'],0,'放在名词前面描述名词的是形容词。'),
 C('She ___ English every day. 空格里最可能填哪类词？',['动词','形容词','冠词','数词'],0,'主语 She 后面通常是动词，如 studies。'),
 C('He runs ___. 空格里说明“怎么跑”，应该填哪类词？',['副词','名词','代词','冠词'],0,'说明动作怎么样，用副词，如 fast。'),
 C('Wow! 里的 wow 是什么词性？',['感叹词','名词','动词','副词'],0,'wow 表示惊讶，是感叹词 interj.。'),
 C('a.m. 表示什么？',['上午','下午','晚上','中午'],0,'a.m. 是上午，p.m. 是下午或晚上。'),
 C('Mr. 用在什么人的名字前？',['男士','已婚女士','未婚小姐','老师'],0,'Mr. 是先生；Mrs. 是太太；Miss 是小姐。'),
 C('let’s 是哪两个词的缩写？',['let us','let is','let as','let his'],0,'let’s = let us。'),
 J('friendly 以 -ly 结尾，所以它是副词。',false,'friendly（友好的）是形容词，不是副词。'),
 J('lovely 是形容词。',true,'lovely（可爱的）是形容词。'),
 J('a、an、the 叫做冠词。',true,'a、an、the 是冠词 art.。'),
 F('happy 的名词形式是 ___。','happiness','happy 变 y 为 i，再加 -ness。'),
 F('quick 的副词形式是 ___。','quickly','形容词加 -ly 变副词。'),
 F('teach 加 er 变成名词 ___。','teacher','teach + er = teacher（老师）。'),
 F('care 加 ful 变成形容词 ___。','careful','care + ful = careful（小心的）。'),
 F('sun 加 ny 变成形容词 ___。','sunny','sun 双写 n 再加 y = sunny（晴朗的）。')
]},
/* 30 情态动词 must / should / may */
{id:'u30',cn:'情态动词 must / should / may',en:'Modal Verbs',sum:'必须、应该、可以、不得不',
intro:'除了 can，还有几个常用的情态动词，表示“必须、应该、可以”。',
lesson:
h('情态动词的共同规则')+
rule('情态动词后面都跟<b>动词原形</b>，没有人称变化（不加 s），否定在后面加 not，疑问把它提到句首。')+
h('四个常用的情态动词')+
tbl(['词','意思','例子'],[
 ['<b>must</b>','必须（语气强）','You <b>must</b> be quiet in the library.　在图书馆你必须保持安静。'],
 ['<b>should</b>','应该（建议）','You <b>should</b> go to bed early.　你应该早点睡觉。'],
 ['<b>may</b>','可以（请求许可）；可能','<b>May</b> I come in?　我可以进来吗？'],
 ['<b>could</b>','可以（更礼貌的请求）','<b>Could</b> you help me, please?　你能帮我吗？']])+
xs([["You <b>must</b> do your homework.","你必须做作业。"],["We <b>mustn’t</b> run in the hall.","我们不许在走廊里跑。"],["You <b>should</b> drink more water.","你应该多喝水。"],["<b>May</b> I use your pen?　—　Yes, you <b>may</b>.","我可以用你的笔吗？可以。"]])+
h('have to：不得不')+
tbl(['','例子','意思'],[
 ['肯定','I <b>have to</b> go now.　She <b>has to</b> help her mother.','不得不（因为外在原因）'],
 ['否定','You <b>don’t have to</b> come.　He <b>doesn’t have to</b> go.','不必'],
 ['疑问','<b>Do</b> you <b>have to</b> go?','必须吗？']])+
warn('<b>mustn’t</b> 是“<b>禁止</b>”：You mustn’t smoke.<br><b>don’t have to</b> 是“<b>不必</b>”：You don’t have to come.<br>两个意思完全不同！')+
warn('<s>You must to go.</s> <s>She should goes.</s>　must、should 后面直接用动词原形：You must <b>go</b>. She should <b>go</b>.'),
qs:[
 C('You ___ be quiet in the library.',['must','mustn’t','don’t have to','may not'],0,'图书馆里必须安静，用 must。'),
 C('You ___ run in the hall.（禁止）',['mustn’t','don’t have to','should','can'],0,'禁止做某事，用 mustn’t。'),
 C('You ___ go to bed early.（建议）',['should','must','mustn’t','have to'],0,'给建议用 should。'),
 C('___ I come in?（礼貌地请求）',['May','Must','Should','Do'],0,'请求许可用 May I ...?'),
 C('He ___ go to school today. It’s Sunday.（不必）',['doesn’t have to','mustn’t','can’t','should'],0,'不必做用 doesn’t have to。'),
 C('She ___ help her mother every day.（不得不）',['has to','have to','must to','having to'],0,'主语 she，要用 has to。'),
 C('___ you help me, please?（更礼貌）',['Could','Must','Should','Do'],0,'Could you ...? 比 Can you ...? 更礼貌。'),
 C('May I use your pen? 肯定回答是？',['Yes, you may.','Yes, I may.','Yes, you do.','Yes, I must.'],0,'用 May 提问，用 you may 回答。'),
 C('You don’t have to come. 的意思是？',['你不必来','你不许来','你必须来','你不能来'],0,'don’t have to 表示“不必”。'),
 F('You should ___ more water.（drink）','drink','should 后面用动词原形。'),
 F('May I ___ your bike?（use）','use','May I 后面用动词原形。'),
 F('We ___ not talk in class.（must / may）','must','mustn’t 是 must not 的缩写。'),
 J('You must to finish your homework.',false,'must 后面不加 to：You must finish your homework.'),
 J('She should goes to bed.',false,'should 后面用动词原形：She should go to bed.'),
 J('We mustn’t talk in class.',true,'mustn’t 表示禁止，句子正确。'),
 O('你应该早点睡觉。','You should go to bed early.','should + 动词原形。'),
 O('我可以进来吗？','May I come in?','May I + 动词原形？'),
 O('你必须保持安静。','You must be quiet.','must + be + 形容词。'),
 O('我现在必须走了。','I have to go now.','have to + 动词原形。')
]},
/* 31 现在完成时 */
{id:'u31',cn:'现在完成时（基础）',en:'Present Perfect',sum:'have / has + 过去分词：已经、去过、一直',
intro:'有些事发生在过去，但跟现在有关系，就用现在完成时。这是小学高年级的小提高，先认识最基本的用法。',
lesson:
h('怎么构成？')+
rule('<b>have / has + 过去分词</b>（I / you / we / they 用 have；he / she / it 用 has）')+
xs([["I <b>have lost</b> my key.","我把钥匙丢了。（现在还没找到）"],["She <b>has finished</b> her homework.","她已经做完作业了。"],["I <b>have lived</b> here for five years.","我在这里住了五年了。（现在还住着）"],["I <b>have been</b> to Beijing.","我去过北京。（经历）"]])+
h('什么时候用？三种常见情况')+
tbl(['情况','例子'],[
 ['① 刚做完，对现在有影响','She has just left.　她刚走。'],
 ['② 从过去持续到现在','I have lived here <b>for</b> five years / <b>since</b> 2020.'],
 ['③ 有过某种经历','Have you <b>ever</b> seen a panda?　你见过熊猫吗？']])+
tbl(['常见提示词','意思'],[['already','已经（肯定句）'],['yet','还（否定句、疑问句）'],['just','刚刚'],['ever','曾经（疑问句）'],['never','从未'],['for + 一段时间','for five years'],['since + 时间点','since 2020']])+
h('过去分词怎么变？')+
tbl(['类型','例子'],[
 ['规则动词：和过去式一样，加 ed','play → played → played<br>watch → watched → watched'],
 ['不规则动词：要一个一个记','go → went → <b>gone</b><br>see → saw → <b>seen</b><br>eat → ate → <b>eaten</b><br>do → did → <b>done</b><br>take → took → <b>taken</b><br>write → wrote → <b>written</b><br>give → gave → <b>given</b><br>be → was / were → <b>been</b>'],
 ['过去式和过去分词一样','have → had → had<br>make → made → made<br>buy → bought → bought'],
 ['三个形式都一样或接近','come → came → <b>come</b><br>run → ran → <b>run</b><br>read → read → read']])+
h('否定句和疑问句')+
xs([["I <b>haven’t</b> finished my homework <b>yet</b>.","我还没做完作业。"],["<b>Have</b> you ever been to Shanghai?","你去过上海吗？"],["Yes, I <b>have</b>.　/　No, I <b>haven’t</b>.","去过 / 没去过。"],["She <b>hasn’t</b> had lunch.","她还没吃午饭。"]])+
h('have been to 和 have gone to')+
tbl(['','意思','例子'],[['have / has been to','去过（已经回来了）','I have been to Beijing.'],['have / has gone to','去了（还没回来）','He has gone to Beijing. He isn’t here.']])+
warn('现在完成时<b>不能</b>和 yesterday, last week, ago 这种<b>明确的过去时间</b>连用：<br><s>I have seen him yesterday.</s>　✓ I <b>saw</b> him yesterday.（用一般过去时）'),
qs:[
 F('I have ___ that movie.（see）','seen','see 的过去分词是 seen。'),
 F('She has ___ lunch.（eat）','eaten','eat 的过去分词是 eaten。'),
 F('They have ___ their homework.（do）','done','do 的过去分词是 done。'),
 F('He has ___ a letter.（write）','written','write 的过去分词是 written。'),
 F('We have ___ here for ten years.（live）','lived','规则动词，live 加 d。'),
 F('I have ___ to Beijing.（be）','been','have been to 表示“去过”。'),
 C('He ___ lunch already.',['has had','had','have had','is having'],0,'主语 he，用 has + 过去分词。'),
 C('I ___ my homework yet.（还没有）',['haven’t finished','didn’t finished','don’t finish','hasn’t finished'],0,'主语 I，否定用 haven’t + 过去分词。'),
 C('Have you ever ___ to Shanghai?',['been','be','was','being'],0,'Have you ever been to ...? 问“你去过……吗”。'),
 C('She ___ to Shanghai. She isn’t here now.',['has gone','has been','went','is going'],0,'人还没回来，用 has gone to。'),
 C('___ you ever seen a panda?',['Have','Has','Did','Are'],0,'主语 you，用 Have 提问。'),
 C('He has lived here ___ 2010.',['since','for','in','at'],0,'since 后面接时间点。'),
 C('We have lived here ___ five years.',['for','since','in','at'],0,'for 后面接一段时间。'),
 C('Have you finished? 否定回答是？',['No, I haven’t.','No, I didn’t.','No, I don’t.','No, I wasn’t.'],0,'用 Have 提问，用 haven’t 回答。'),
 J('I have seen him yesterday.',false,'有明确的过去时间 yesterday，要用一般过去时：I saw him yesterday.'),
 J('She has just left.',true,'just 表示刚刚，用现在完成时。'),
 O('我已经吃过早饭了。','I have already had breakfast.','already 放在 have 和过去分词之间。'),
 O('你去过北京吗？','Have you ever been to Beijing?','Have you ever been to ...?'),
 O('她还没有做完作业。','She hasn’t finished her homework yet.','否定句用 yet。')
]},
/* 32 过去进行时 */
{id:'u32',cn:'过去进行时',en:'Past Continuous',sum:'was / were + -ing：当时正在做',
intro:'说“在过去的某个时候，正在做某事”，就用过去进行时。',
lesson:
h('怎么构成？')+
rule('<b>was / were + 动词 -ing</b>（I / he / she / it 用 was；you / we / they 用 were）')+
xs([["I <b>was watching</b> TV at eight last night.","昨晚八点我正在看电视。"],["They <b>were playing</b> football at that time.","他们当时正在踢足球。"],["It <b>was raining</b> when I got up.","我起床的时候正在下雨。"]])+
tbl(['常见时间提示','意思'],[['at 8 o’clock yesterday','昨天八点'],['at that time','那时'],['when …','当……的时候'],['while …','当……期间']])+
h('否定句和疑问句')+
xs([["She <b>wasn’t</b> sleeping.","她当时没有在睡觉。"],["<b>Was</b> he reading?　—　Yes, he <b>was</b>.　/　No, he <b>wasn’t</b>.","他当时在看书吗？"],["What <b>were</b> you <b>doing</b> at seven?","你七点在做什么？"]])+
h('和一般过去时比一比')+
tbl(['','例子','说明'],[['一般过去时','I <b>watched</b> TV last night.','做了这件事（可能是整晚、也可能一小会儿）'],['过去进行时','I <b>was watching</b> TV at eight.','强调那一刻<b>正在</b>做']])+
tip('-ing 的变化规则和现在进行时一样：make → making，run → running。')+
warn('<s>He was play football.</s>　was 后面要用 -ing：He was <b>playing</b> football.'),
qs:[
 F('I was ___ TV at eight last night.（watch）','watching','was + 动词 -ing。'),
 F('They were ___ football at that time.（play）','playing','were + 动词 -ing。'),
 F('She was ___ a book.（read）','reading','was + reading。'),
 F('He was ___ when I called.（sleep）','sleeping','was + sleeping。'),
 F('We were ___ at that time.（run）','running','run 双写 n 再加 ing。'),
 C('What ___ you doing at seven yesterday?',['were','was','are','did'],0,'主语 you，过去进行时用 were。'),
 C('It ___ raining when I got up.',['was','were','is','did'],0,'主语 it，用 was。'),
 C('I ___ a shower when the phone rang.',['was taking','took','am taking','take'],0,'电话响的时候我正在洗澡，用过去进行时。'),
 C('We ___ playing at that time.（没有在玩）',['weren’t','wasn’t','aren’t','didn’t'],0,'主语 we，用 weren’t。'),
 C('Was she sleeping? 否定回答是？',['No, she wasn’t.','No, she didn’t.','No, she isn’t.','No, she weren’t.'],0,'用 Was 提问，用 wasn’t 回答。'),
 J('He was play football.',false,'was 后面要用 -ing：He was playing football.'),
 J('They were having lunch at noon.',true,'were + having，句子正确。'),
 O('昨晚八点我正在看电视。','I was watching TV at eight last night.','was + watching。'),
 O('她当时正在睡觉。','She was sleeping at that time.','was + sleeping。')
]},
/* 33 不定代词 */
{id:'u33',cn:'不定代词',en:'Indefinite Pronouns',sum:'something / anything / nothing / everyone',
intro:'something、anyone、nothing 这类词不特指某个人或某样东西，叫不定代词。',
lesson:
h('怎么组成？')+
tbl(['','-thing（物）','-one / -body（人）'],[
 ['some-','something（某物）','someone / somebody（某人）'],
 ['any-','anything（任何东西）','anyone / anybody（任何人）'],
 ['no-','nothing（什么也没有）','no one / nobody（没有人）'],
 ['every-','everything（所有东西）','everyone / everybody（每个人）']])+
h('怎么用？')+
tbl(['词','用在','例子'],[
 ['some-','肯定句；邀请、请求的疑问句','I have <b>something</b> to tell you.<br>Would you like <b>something</b> to drink?'],
 ['any-','否定句、疑问句','I don’t know <b>anything</b>.<br>Is there <b>anyone</b> at home?'],
 ['no-','表示“没有”（本身就是否定）','There is <b>nothing</b> in the box.'],
 ['every-','表示“全部、每个”','<b>Everyone</b> is here.']])+
rule('<b>everyone / everything</b> 虽然表示“全部”，但谓语动词用<b>单数</b>：Everyone <b>is</b> happy.')+
h('形容词放在后面')+
xs([["I want something <b>cold</b>.","我想要点凉的东西。"],["Is there anything <b>interesting</b>?","有什么有趣的东西吗？"]])+
warn('<s>I don’t have nothing.</s>　nothing 已经是否定，不要再加 don’t：I have <b>nothing</b>. 或者 I don’t have <b>anything</b>.<br><s>Everyone are happy.</s>　应该是 Everyone <b>is</b> happy.'),
qs:[
 C('I have ___ to tell you.（肯定句）',['something','anything','nothing','everything'],0,'肯定句里用 something。'),
 C('Is there ___ in the box?',['anything','something','nothing','everything'],0,'疑问句用 anything。'),
 C('The room is empty. There is ___ in it.',['nothing','something','anything','everything'],0,'什么也没有，用 nothing。'),
 C('___ is here. We can start.（每个人）',['Everyone','Someone','No one','Anyone'],0,'每个人都到了，用 Everyone。'),
 C('I don’t know ___ about it.',['anything','something','nothing','everything'],0,'否定句里用 anything。'),
 C('Would you like ___ to drink?',['something','anything','nothing','everything'],0,'邀请别人时，疑问句里也用 something。'),
 C('Everyone ___ here.',['is','are','am','be'],0,'everyone 后面的谓语动词用单数。'),
 C('I want something ___.（凉的）',['cold','coldly','a cold','colds'],0,'形容词放在 something 的后面。'),
 F('The fridge is empty. There is ___ in it.（nothing / something）','nothing','什么也没有，用 nothing。'),
 F('I’d like ___ hot.（something / anything）','something','表示想要，用 something。'),
 J('I don’t have nothing.',false,'nothing 已经是否定，不要再加 don’t。'),
 J('Everyone are happy.',false,'everyone 后面用 is：Everyone is happy.'),
 J('Is there anyone at home?',true,'疑问句里用 anyone，句子正确。'),
 O('每个人都在教室里。','Everyone is in the classroom.','Everyone + is。'),
 O('冰箱里什么也没有。','There is nothing in the fridge.','There is nothing + 地点。')
]},
/* 34 动词短语 */
{id:'u34',cn:'常用动词短语',en:'Common Phrases',sum:'look at、listen to、put on、be good at',
intro:'英语里很多动词要和一个小词（介词或副词）搭配，意思才完整。这些搭配要整体记。',
lesson:
h('看、听、找、等')+
tbl(['短语','意思','例子'],[
 ['look at','看','Please <b>look at</b> the blackboard.'],
 ['look for','寻找','I’m <b>looking for</b> my key.'],
 ['look like','看起来像','The baby <b>looks like</b> her mother.'],
 ['listen to','听','<b>Listen to</b> me.'],
 ['wait for','等待','Wait <b>for</b> me!'],
 ['talk to / with','和……说话','Can I <b>talk to</b> you?']])+
h('穿、脱、开、关')+
tbl(['短语','意思','例子'],[
 ['put on','穿上、戴上','It’s cold. <b>Put on</b> your coat.'],
 ['take off','脱下','<b>Take off</b> your shoes.'],
 ['turn on','打开（电器）','<b>Turn on</b> the light.'],
 ['turn off','关上（电器）','<b>Turn off</b> the TV.']])+
h('起床、睡觉、坐、站')+
tbl(['短语','意思','例子'],[
 ['get up','起床','I <b>get up</b> at six.'],
 ['wake up','醒来','He <b>woke up</b> late.'],
 ['go to bed','上床睡觉','I <b>go to bed</b> at nine.'],
 ['sit down / stand up','坐下 / 站起来','Please <b>sit down</b>.'],
 ['come back','回来','Come <b>back</b> soon.'],
 ['pick up','捡起','<b>Pick up</b> the pen.']])+
h('动词 / 形容词 + 介词')+
tbl(['短语','意思','例子'],[
 ['be good at','擅长','She is <b>good at</b> English.'],
 ['be late for','迟到','Don’t <b>be late for</b> school.'],
 ['be ready for','为……做好准备','I’m <b>ready for</b> the test.'],
 ['thank sb. for','为……感谢某人','Thank you <b>for</b> your help.'],
 ['play with','和……玩','He <b>plays with</b> his dog.'],
 ['think about','考虑','I’m <b>thinking about</b> it.'],
 ['help sb. with sth.','在某事上帮助某人','She <b>helps</b> me <b>with</b> my English.']])+
tip('学短语时，把<b>整个搭配</b>当成一个词来背：look <b>at</b>、listen <b>to</b>，别只记前面的动词。'),
qs:[
 C('Please ___ the blackboard.（看）',['look at','look for','look like','listen to'],0,'look at 表示“看”。'),
 C('Listen ___ me.',['to','at','for','with'],0,'listen to 是“听”。'),
 C('It’s cold. Please ___ your coat.',['put on','take off','turn on','pick up'],0,'put on 是“穿上”。'),
 C('I’m ___ my key.（寻找）',['looking for','looking at','looking like','listening to'],0,'look for 是“寻找”。'),
 C('___ the light, please.（关）',['Turn off','Turn on','Take off','Put on'],0,'turn off 是“关上”。'),
 C('He ___ at six every day.（起床）',['gets up','get up','wakes','sits down'],0,'主语 he，get up 要加 s。'),
 C('Wait ___ me!',['for','at','to','with'],0,'wait for 是“等待”。'),
 C('She is good ___ English.',['at','in','on','for'],0,'be good at 是“擅长”。'),
 C('Thank you ___ your help.',['for','to','at','with'],0,'thank sb. for sth. 是“为某事感谢某人”。'),
 C('Don’t be late ___ school.',['for','at','to','in'],0,'be late for 是“迟到”。'),
 C('The baby ___ her mother.（长得像）',['looks like','looks at','looks for','looks after'],0,'look like 是“看起来像”。'),
 F('Please ___ down.（sit）','sit','sit down 是“坐下”。'),
 F('Come ___ here.（back）','back','come back 是“回来”。'),
 J('Look at to the picture.',false,'look at 后面直接接名词：Look at the picture.'),
 J('I’m waiting for you.',true,'wait for 是“等待”，句子正确。'),
 O('请看黑板。','Please look at the blackboard.','look at 是“看”。'),
 O('我在找我的书包。','I am looking for my bag.','look for 是“寻找”。'),
 O('请把灯关上。','Please turn off the light.','turn off 是“关上”。')
]}
);
