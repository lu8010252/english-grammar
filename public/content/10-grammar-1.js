/* 语法单元（一）：u1–u15 基础语法
 * 新单元请另建文件，用 U.push({...}) 添加；单元内的题目只往 qs 的末尾追加。
 */
U.push(
/* 1 */
{id:'u1',cn:'句子的样子',en:'Sentences',sum:'大小写、标点符号、句子的基本语序',
intro:'先学会写一个漂亮、正确的英语句子。',
lesson:
h('一个句子有哪几部分？')+
p('最简单的英语句子 = <b>谁（主语）</b> + <b>做什么 / 是什么（谓语）</b> + <b>其他</b>。顺序和中文很像：')+
xs([["I <b>like</b> apples.","我 喜欢 苹果。"],["She <b>is</b> my sister.","她 是 我的姐姐。"],["Tom <b>plays</b> football.","汤姆 踢 足球。"]])+
h('写句子的三条规矩')+
rule('<ol><li>句子的<b>第一个字母要大写</b>。</li><li>句子的最后要有<b>标点符号</b>。</li><li>单词和单词之间要<b>空一格</b>。</li></ol>')+
h('四种常见的标点')+
tbl(['标点','名字','用在哪里','例子'],[
 ['.','句号','说明一件事（陈述句）','She is a girl.'],
 ['?','问号','问问题（疑问句）','Are you OK?'],
 ['!','感叹号','很惊讶、很开心、大声喊','What a nice day!'],
 [',','逗号','停顿、并列、回答 Yes / No 后','Yes, I am.']])+
h('哪些字母必须大写？')+
tbl(['要大写的','例子'],[
 ['句子的第一个字母','<b>T</b>he cat is black.'],
 ['“我”这个词 I，永远大写','Today <b>I</b> am ten.'],
 ['人名','<b>T</b>om, <b>L</b>ucy, <b>L</b>i <b>M</b>ing'],
 ['国家、城市、地名','<b>C</b>hina, <b>B</b>eijing'],
 ['星期、月份、节日','<b>M</b>onday, <b>M</b>arch, <b>N</b>ational <b>D</b>ay']])+
warn('<s>i am tom.</s>　错了三处：i 要大写，tom 要大写，<br>正确写法：<b>I am Tom.</b>')+
tip('英语和中文最大的不同之一：地点、时间常常放在句子<b>后面</b>。<br>我在学校学习 → I study <b>at school</b>.'),
qs:[
 C('下面哪个句子写得完全正确？',['my name is Tom.','My name is Tom.','My name is tom.','My name is Tom'],1,'句首要大写，人名 Tom 要大写，句末要有句号。'),
 C('What is your name___',['.','?','!',','],1,'这是在问问题，句末用问号 ?。'),
 C('下面哪个单词不管在句子的什么位置，都必须大写？',['I','you','he','it'],0,'表示“我”的 I 永远大写。'),
 C('Wow! What a big cake___',['.','?','!',','],2,'表示惊讶和赞叹的句子，句末用感叹号 !。'),
 C('哪一句里该大写的字母都大写了？',['I am from china.','I am from China.','i am from China.','I Am From China.'],1,'I、句首字母、国家名 China 要大写，其余单词不用。'),
 F('Today is ___.（星期一，首字母要大写）','Monday','星期的名字首字母要大写：Monday。'),
 O('我是一个学生。','I am a student.','主语 I + 谓语 am + 其他 a student。'),
 O('这是我的书。','This is my book.','This（这）+ is（是）+ my book（我的书）。'),
 O('你叫什么名字？','What is your name?','问句以 What 开头，句末用问号。')
]},
/* 2 */
{id:'u2',cn:'名词',en:'Nouns',sum:'可数与不可数、名词复数变化',
intro:'名词是表示人、东西、地方的词，比如 teacher, book, school。',
lesson:
h('可数名词和不可数名词')+
p('能一个、两个数出来的，是<b>可数名词</b>：a book, two books。数不出来或成团成堆的，是<b>不可数名词</b>：water, milk, rice。')+
xs([["I have <b>a book</b>.","我有一本书。"],["I have <b>three books</b>.","我有三本书。"],["I drink <b>some water</b>.","我喝一些水。"]])+
rule('<ul><li>可数名词：单数前面可以加 a / an，复数要变形。</li><li>不可数名词：<b>没有复数</b>，前面不能加 a / an，也不能直接加数字。</li><li>常见的不可数名词：water, milk, juice, tea, rice, bread, paper, money</li></ul>')+
h('不可数名词怎么数？加“量词”')+
xs([["a <b>glass of</b> water","一杯水（玻璃杯）"],["a <b>cup of</b> tea","一杯茶"],["a <b>bottle of</b> milk","一瓶牛奶"],["a <b>bowl of</b> rice","一碗米饭"],["a <b>piece of</b> bread","一片面包"],["two <b>glasses of</b> water","两杯水（量词变复数，water 不变）"]])+
h('名词变复数的规则')+
tbl(['变化规则','例子'],[
 ['一般情况，直接加 <b>s</b>','book → books<br>pen → pens<br>cat → cats'],
 ['以 s, x, sh, ch 结尾，加 <b>es</b>','bus → buses<br>box → boxes<br>dish → dishes<br>watch → watches'],
 ['“辅音字母 + y”结尾，去 y 加 <b>ies</b>','city → cities<br>baby → babies<br>story → stories'],
 ['“元音字母 + y”结尾，直接加 <b>s</b>','boy → boys<br>day → days<br>toy → toys'],
 ['以 f / fe 结尾，变 f 为 v 加 <b>es</b>','leaf → leaves<br>knife → knives<br>shelf → shelves<br>wolf → wolves'],
 ['以 o 结尾：tomato、potato 加 <b>es</b>，其他大多加 s','tomato → tomatoes<br>potato → potatoes<br>photo → photos<br>piano → pianos'],
 ['不规则变化，要单独记','man → men<br>woman → women<br>child → children<br>foot → feet<br>tooth → teeth<br>mouse → mice'],
 ['单复数一样','sheep → sheep<br>fish → fish']])+
warn('<s>two book</s>　数词比 1 大，名词要用复数：<b>two books</b>。<br><s>a milk</s>　milk 不可数：<b>some milk</b> 或 <b>a bottle of milk</b>。')+
tip('people（人们）本身就是复数，不能再加 s。'),
qs:[
 F('I have two ___.（box）','boxes','box 以 x 结尾，加 es。'),
 F('There are three ___ in the park.（baby）','babies','baby 是“辅音 b + y”，去 y 加 ies。'),
 F('Look at those ___!（leaf）','leaves','leaf 以 f 结尾，变 f 为 v 加 es。'),
 F('The ___ are playing.（child）','children','child 是不规则变化，复数是 children。'),
 F('There are many ___ on the hill.（sheep）','sheep','sheep 的单数和复数一样。'),
 F('I want two ___ of water.（glass）','glasses','量词 glass 以 s 结尾，加 es；water 不变。'),
 C('下面哪个是不可数名词？',['apple','water','book','egg'],1,'water 数不出个数，是不可数名词。'),
 C('boy 的复数是？',['boys','boies','boyes','boyies'],0,'boy 是“元音 o + y”，直接加 s。'),
 C('a bottle of ___',['milk','milks','books','eggs'],0,'bottle of 后面接不可数名词 milk。'),
 C('下面哪一组复数全部正确？',['tomatoes, photos, knives','tomatos, photoes, knifes','tomatoes, photoes, knives','tomatos, photos, knifes'],0,'tomato 加 es，photo 加 s，knife 变 knives。')
]},
/* 3 */
{id:'u3',cn:'冠词',en:'Articles: a / an / the',sum:'a、an、the 怎么选，什么时候不用冠词',
intro:'冠词就是 a、an、the，放在名词前面。',
lesson:
h('a 和 an：看“发音”，不看字母')+
rule('<ul><li>单词第一个<b>发音</b>是辅音 → 用 <b>a</b>：a book, a cat, a dog</li><li>单词第一个<b>发音</b>是元音（/a/ /e/ /i/ /o/ /u/ 这类音）→ 用 <b>an</b>：an apple, an egg, an orange, an umbrella</li></ul>')+
xs([["I have <b>an</b> apple.","我有一个苹果。"],["She has <b>an</b> egg.","她有一个鸡蛋。"],["He is <b>a</b> good boy.","他是个好男孩。"]])+
warn('有些词字母和发音不一致：<br>an <b>h</b>our（h 不发音，读起来像 our）→ <b>an</b> hour<br><b>u</b>niversity（读 /ju/，是辅音音）→ <b>a</b> university')+
h('什么时候用 the？')+
tbl(['情况','例子'],[
 ['上文提到过，现在再说一次（特指）','I have a cat. <b>The</b> cat is white.'],
 ['世界上独一无二的东西','<b>the</b> sun, <b>the</b> moon, <b>the</b> earth'],
 ['乐器前','play <b>the</b> piano, play <b>the</b> guitar'],
 ['序数词、最高级前','<b>the</b> first day, <b>the</b> tallest boy']])+
h('什么时候不用冠词？')+
tbl(['情况','例子'],[
 ['球类运动','play football, play basketball'],
 ['三餐','have breakfast, have lunch'],
 ['学科','I like English and maths.'],
 ['复数、不可数名词泛指','I like cats. I like milk.'],
 ['国名、人名','China, Tom']])+
tip('a / an 只能用在<b>单数可数名词</b>前面，复数名词前不能用：<s>a books</s>。'),
qs:[
 C('I eat ___ apple every day.',['a','an','the','不填'],1,'apple 以元音 /æ/ 开头，用 an。'),
 C('She is ___ honest girl.',['a','an','the','不填'],1,'honest 的 h 不发音，以元音开头，用 an。'),
 C('My father is ___ university teacher.',['a','an','the','不填'],0,'university 读 /ju/，是辅音开头，用 a。'),
 F('I have a cat. ___ cat is white.（填冠词）','the','上文提到过的猫，再次提到用 the。'),
 C('I play ___ piano.',['a','an','the','不填'],2,'乐器前面用 the。'),
 C('I play ___ basketball after school.',['a','an','the','不填'],3,'球类运动前不用冠词。'),
 C('___ sun is very big.',['A','An','The','不填'],2,'世界上独一无二的 sun，用 the。'),
 C('Let’s have ___ lunch.',['a','an','the','不填'],3,'三餐前不用冠词。'),
 F('I need ___ umbrella.（填 a 或 an）','an','umbrella 以元音 /ʌ/ 开头，用 an。'),
 C('下面哪个短语是错的？',['a pencil','an egg','an book','a bag'],2,'book 以辅音开头，应该用 a book。')
]},
/* 4 */
{id:'u4',cn:'代词',en:'Pronouns',sum:'I/me/my/mine、this/that/these/those',
intro:'代词用来代替名词，让句子不啰嗦。',
lesson:
h('人称代词：主格和宾格')+
tbl(['意思','主格（做主语，放在动词前）','宾格（做宾语，放在动词/介词后）'],[
 ['我','I','me'],['你 / 你们','you','you'],['他','he','him'],['她','she','her'],['它','it','it'],['我们','we','us'],['他们 / 她们 / 它们','they','them']])+
xs([["<b>She</b> likes <b>me</b>.","她喜欢我。（She 做主语，me 做宾语）"],["I love <b>him</b>.","我爱他。"],["Look at <b>them</b>!","看他们！（介词 at 后面用宾格）"]])+
h('物主代词：表示“……的”')+
tbl(['意思','形容词性（后面必须接名词）','名词性（后面不接名词）'],[
 ['我的','my','mine'],['你的','your','yours'],['他的','his','his'],['她的','her','hers'],['它的','its','—'],['我们的','our','ours'],['他们的','their','theirs']])+
xs([["This is <b>my</b> book.","这是我的书。"],["This book is <b>mine</b>.","这本书是我的。（mine = my book）"]])+
h('指示代词：this, that, these, those')+
tbl(['','近处','远处'],[['单数','this（这个）','that（那个）'],['复数','these（这些）','those（那些）']])+
xs([["<b>This</b> is my pen.","这是我的钢笔。"],["<b>Those</b> are my friends.","那些是我的朋友。"]])+
warn('<s>He is I friend.</s>　应该用“我的”：He is <b>my</b> friend.<br><s>Give the book to I.</s>　to 后面用宾格：Give the book to <b>me</b>.<br><s>Her is a teacher.</s>　做主语用主格：<b>She</b> is a teacher.')+
tip('名字加 <b>’s</b> 也表示“……的”：Tom<b>’s</b> bag（汤姆的书包）。'),
qs:[
 C('___ is my teacher.（她）',['She','Her','Hers','Hes'],0,'做主语用主格 She。'),
 C('I like ___.（他们）',['they','them','their','theirs'],1,'like 的后面是宾语，用宾格 them。'),
 F('This is ___ bag.（我的）','my','后面有名词 bag，用形容词性物主代词 my。'),
 C('Look at Tom. ___ is very tall.',['He','Him','His','Her'],0,'Tom 是男孩，做主语用 He。'),
 C('The red pen is ___.（我的）',['my','mine','me','I'],1,'后面没有名词，用名词性物主代词 mine。'),
 C('Please give ___ the book.（我们）',['we','our','us','ours'],2,'give 后面是宾语，用宾格 us。'),
 C('___ are my friends.（远处那些人）',['This','That','These','Those'],3,'复数 + 远处，用 those。'),
 F('Lucy has a cat. ___ name is Mimi.（她的）','Her','后面有名词 name，用 her。'),
 F('The dog is playing with ___ ball.（它的）','its','“它的”是 its，没有撇号。'),
 C('下面哪句话是对的？',['Me am a student.','I am a student.','My am a student.','Mine am a student.'],1,'做主语要用主格 I。'),
 O('他们是我的朋友。','They are my friends.','They（他们）+ are + my friends。')
]},
/* 5 */
{id:'u5',cn:'be 动词',en:'am / is / are',sum:'am、is、are 的用法，肯定、否定和疑问',
intro:'be 动词是英语里最常用的动词，意思是“是、在”。',
lesson:
h('什么时候用 am、is、are？')+
rule('口诀：<b>我（I）用 am，你（you）用 are，is 跟着 he, she, it；单数名词用 is，复数名词全用 are。</b>')+
tbl(['主语','be 动词','缩写','例句'],[
 ['I','am','I’m','I am a student.'],
 ['you','are','you’re','You are my friend.'],
 ['he','is','he’s','He is a teacher.'],
 ['she','is','she’s','She is ten.'],
 ['it','is','it’s','It is a cat.'],
 ['we','are','we’re','We are in the park.'],
 ['they','are','they’re','They are happy.'],
 ['单数名词（Tom, the book）','is','—','Tom is tall.'],
 ['复数名词（my parents）','are','—','My parents are at home.']])+
xs([["I <b>am</b> ten years old.","我十岁了。"],["Tom <b>is</b> in the classroom.","汤姆在教室里。"],["The books <b>are</b> on the desk.","书在桌子上。"]])+
h('否定句：be 后面加 not')+
xs([["I am <b>not</b> a doctor.","我不是医生。（am not 不能缩写）"],["He <b>isn’t</b> at home.","他不在家。（is not = isn’t）"],["They <b>aren’t</b> students.","他们不是学生。（are not = aren’t）"]])+
h('疑问句：把 be 提到句子最前面')+
xs([["You are a student. → <b>Are</b> you a student?","你是学生吗？"],["Yes, I <b>am</b>.　/　No, I’m not.","是的 / 不是。"],["<b>Is</b> she your sister?","她是你的姐姐吗？"],["Yes, she <b>is</b>.　/　No, she isn’t.","是的 / 不是。"]])+
warn('<s>I are a student.</s> <s>He am a teacher.</s>　主语和 be 要“配对”。<br><s>Yes, she’s.</s>　Yes 回答不缩写，要写 Yes, she <b>is</b>.<br><s>I am go to school.</s>　be 动词不和别的动词连用，应该是 I <b>go</b> to school.'),
qs:[
 F('I ___ a student.（am / is / are）','am','主语是 I，用 am。'),
 F('She ___ my sister.（am / is / are）','is','主语是 she，用 is。'),
 F('They ___ in the classroom.（am / is / are）','are','主语是 they，用 are。'),
 C('My books ___ on the desk.',['am','is','are','be'],2,'books 是复数，用 are。'),
 C('Tom ___ ten years old.',['am','is','are','be'],1,'Tom 是单数，用 is。'),
 C('He is not a doctor. 缩写成？',['He isn’t a doctor.','He amn’t a doctor.','He aren’t a doctor.','He not is a doctor.'],0,'is not 缩写成 isn’t。'),
 C('Is she your friend? 肯定回答是？',['Yes, she is.','Yes, she’s.','Yes, she are.','Yes, is she.'],0,'Yes 开头的回答，be 动词不缩写。'),
 C('下面哪句是错的？',['I am Tom.','You are a boy.','He are a teacher.','We are friends.'],2,'he 要配 is：He is a teacher.'),
 F('___ your parents at home?','Are','parents 是复数，疑问句把 are 提到句首。'),
 O('你是老师吗？','Are you a teacher?','把 be 动词 Are 提到句首。'),
 O('我不是医生。','I am not a doctor.','be 动词 am 后面加 not。')
]},
/* 6 */
{id:'u6',cn:'一般现在时',en:'Simple Present',sum:'经常做的事、动词三单变化、don’t / doesn’t',
intro:'一般现在时说的是：习惯、经常做的事、事实。',
lesson:
h('什么时候用？')+
xs([["I <b>get</b> up at six every day.","我每天六点起床。（习惯）"],["The sun <b>rises</b> in the east.","太阳从东方升起。（事实）"],["She <b>likes</b> milk.","她喜欢牛奶。（特点）"]])+
tbl(['提示词','意思'],[['always','总是'],['usually','通常'],['often','经常'],['sometimes','有时'],['never','从不'],['every day / week','每天 / 每周'],['on Sundays','每个星期天']])+
tip('always / usually / often / sometimes / never 放在 <b>be 动词后面</b>、<b>实义动词前面</b>：<br>He is <b>always</b> early.　She <b>often</b> reads books.')+
h('动词怎么变？')+
rule('主语是 <b>I / you / we / they</b> 和复数时，动词用<b>原形</b>。<br>主语是 <b>he / she / it / 单数名词</b>（第三人称单数）时，动词要<b>加 s 或 es</b>。')+
tbl(['变化规则','例子'],[
 ['一般情况加 <b>s</b>','read → reads<br>play → plays<br>like → likes'],
 ['以 s, x, sh, ch, o 结尾加 <b>es</b>','watch → watches<br>wash → washes<br>go → goes<br>do → does<br>pass → passes'],
 ['“辅音 + y”结尾，去 y 加 <b>ies</b>','study → studies<br>fly → flies<br>cry → cries'],
 ['不规则','have → <b>has</b>']])+
h('否定句：don’t / doesn’t + 动词原形')+
xs([["I <b>don’t</b> like milk.","我不喜欢牛奶。"],["She <b>doesn’t</b> like milk.","她不喜欢牛奶。"]])+
h('疑问句：Do / Does 放句首')+
xs([["<b>Do</b> you like cats?","你喜欢猫吗？"],["Yes, I <b>do</b>.　/　No, I <b>don’t</b>.","是的 / 不是。"],["<b>Does</b> he play football?","他踢足球吗？"],["Yes, he <b>does</b>.　/　No, he <b>doesn’t</b>.","是的 / 不是。"]])+
warn('<s>She doesn’t likes milk.</s> <s>Does he plays football?</s><br>有了 doesn’t / Does，后面的动词就要<b>还原成原形</b>：She doesn’t <b>like</b> milk. Does he <b>play</b> football?'),
qs:[
 F('He ___ to school by bus.（go）','goes','go 以 o 结尾，三单加 es。'),
 F('My mother ___ TV every night.（watch）','watches','watch 以 ch 结尾，加 es。'),
 F('The baby ___ a lot.（cry）','cries','cry 是“辅音 r + y”，变 y 为 i 加 es。'),
 F('Tom ___ a new bike.（have）','has','have 的三单形式是 has。'),
 C('I ___ like carrots.',['don’t','doesn’t','not','am not'],0,'主语是 I，否定用 don’t。'),
 C('She doesn’t ___ milk.',['drink','drinks','drinking','drank'],0,'doesn’t 后面动词用原形。'),
 C('___ your father work in a hospital?',['Do','Does','Is','Are'],1,'your father 是单数第三人称，用 Does。'),
 C('Does he like fish? 肯定回答是？',['Yes, he does.','Yes, he do.','Yes, he is.','Yes, he likes.'],0,'用 Does 提问，就用 does 回答。'),
 C('哪一句话的频度副词位置是对的？',['He always is early.','He is always early.','Always he is early.','He is early always.'],1,'always 放在 be 动词 is 的后面。'),
 F('Does she ___ the piano?（play）','play','Does 后面动词用原形。'),
 O('我每天七点起床。',['I get up at seven every day.','Every day I get up at seven.'],'every day 可以放在句末，也可以放在句首。'),
 O('他不喜欢鱼。','He doesn’t like fish.','doesn’t + 动词原形 like。')
]},
/* 7 */
{id:'u7',cn:'情态动词 can',en:'Can',sum:'表示“能、会、可以”',
intro:'can 表示“会”“能够”“可以”，是个很好用的小助手。',
lesson:
h('can 的用法')+
rule('<b>can + 动词原形</b>。can 对所有人都一样：不加 s，后面也不加 to。')+
xs([["I <b>can</b> swim.","我会游泳。"],["He <b>can</b> speak English.","他会说英语。"],["You <b>can</b> go home now.","你现在可以回家了。（许可）"]])+
h('否定句：can’t 或 cannot')+
xs([["I <b>can’t</b> see anything.","我什么也看不见。"],["She <b>cannot</b> swim.","她不会游泳。（cannot 要写成一个词）"]])+
h('疑问句：Can 放句首')+
xs([["<b>Can</b> you speak English?","你会说英语吗？"],["Yes, I <b>can</b>.　/　No, I <b>can’t</b>.","是的 / 不是。"],["<b>Can</b> I use your pen?","我可以用你的笔吗？（请求许可）"]])+
warn('<s>He cans swim.</s> <s>I can to swim.</s> <s>Can you swims?</s><br>can 后面直接跟<b>动词原形</b>：He can swim. Can you swim?')+
tip('想更礼貌地请求许可，可以用 <b>May I ...?</b>：May I come in?（我可以进来吗？）'),
qs:[
 C('He ___ swim.',['can','cans','is can','can to'],0,'can 不加 s，后面直接接动词原形。'),
 C('She can ___ the guitar.',['play','plays','playing','to play'],0,'can 后面用动词原形。'),
 C('I ___ see anything.（我什么也看不见）',['can','can’t','am not','don’t can'],1,'“看不见”要用否定 can’t。'),
 C('Can he run fast? 否定回答是？',['No, he can’t.','No, he doesn’t.','No, he isn’t.','No, he cans.'],0,'用 Can 提问，用 can’t 回答。'),
 C('下面哪句是错的？',['She can dance.','She can’t dance.','She can dances.','Can she dance?'],2,'can 后面动词用原形：She can dance.'),
 F('Can your sister ___?（cook）','cook','Can 后面用动词原形。'),
 C('Can I use your pen? 这句话是在？',['问对方会不会用笔','请求许可','说自己不会用笔','命令别人'],1,'Can I ...? 常用来请求许可。'),
 O('你会说英语吗？','Can you speak English?','Can 放句首，speak 用原形。'),
 O('我不会游泳。','I can’t swim.','can’t + 动词原形。')
]},
/* 8 */
{id:'u8',cn:'形容词和比较级',en:'Adjectives & Comparison',sum:'描述特点；taller / the tallest / more beautiful',
intro:'形容词用来描述人或东西的样子、特点。',
lesson:
h('形容词放在哪里？')+
xs([["a <b>tall</b> boy","一个高个子男孩（放在名词前）"],["The boy is <b>tall</b>.","这个男孩很高。（放在 be 动词后）"],["an <b>old</b> man","一位老人（形容词发音决定用 a 还是 an）"]])+
h('比较级：两个人或两件东西比')+
p('结构：<b>A + be + 比较级 + than + B</b>')+
xs([["I am <b>taller than</b> you.","我比你高。"],["This book is <b>more interesting than</b> that one.","这本书比那本更有趣。"]])+
h('最高级：三个或三个以上比')+
xs([["She is <b>the tallest</b> girl in our class.","她是我们班最高的女孩。"],["This is <b>the most beautiful</b> flower.","这是最美的花。"]])+
tbl(['变化规则','原级','比较级','最高级'],[
 ['一般加 er / est','tall<br>long','taller<br>longer','tallest<br>longest'],
 ['以 e 结尾加 r / st','nice<br>large','nicer<br>larger','nicest<br>largest'],
 ['“辅音 + y”变 y 为 i 再加 er / est','happy<br>easy<br>heavy','happier<br>easier<br>heavier','happiest<br>easiest<br>heaviest'],
 ['重读闭音节，双写最后字母','big<br>hot<br>thin','bigger<br>hotter<br>thinner','biggest<br>hottest<br>thinnest'],
 ['多音节词，前面加 more / most','beautiful<br>interesting','more beautiful<br>more interesting','most beautiful<br>most interesting'],
 ['不规则','good / well<br>bad<br>many / much','better<br>worse<br>more','best<br>worst<br>most']])+
warn('<s>more taller</s>　比较级只能“加 er”或“加 more”，不能一起用：<b>taller</b>。<br><s>He is tall than me.</s>　比较级要写完整：He is <b>taller</b> than me.<br>最高级前面一般要加 <b>the</b>。'),
qs:[
 F('A cat is ___ than a dog.（small）','smaller','small 加 er。'),
 F('Today is ___ than yesterday.（hot）','hotter','hot 是重读闭音节，双写 t 再加 er。'),
 F('This book is ___ than that one.（interesting）','more interesting','interesting 是多音节词，前面加 more。'),
 F('She is the ___ girl in our class.（tall）','tallest','最高级：the + tallest。'),
 F('This is the ___ apple.（big）','biggest','big 双写 g 再加 est。'),
 C('good 的比较级是？',['gooder','more good','better','best'],2,'good 是不规则变化：good - better - best。'),
 C('He is ___ old man.',['a','an','the','不填'],1,'old 以元音开头，用 an。'),
 C('My sister is ___ than me.（更快乐）',['happy','happyer','happier','more happy'],2,'happy 变 y 为 i 再加 er。'),
 C('下面哪个是错的？',['taller','more taller','bigger','more beautiful'],1,'tall 是短词，加 er 就行，不能再加 more。'),
 O('我比你高。','I am taller than you.','比较级 taller + than + 比较对象。')
]},
/* 9 */
{id:'u9',cn:'There be 句型',en:'There is / There are',sum:'表示“某地有某物”',
intro:'想说“……有……”，就用 There be 句型。',
lesson:
h('怎么用？')+
rule('<b>There is</b> + 单数名词 / 不可数名词 + 地点<br><b>There are</b> + 复数名词 + 地点')+
xs([["There <b>is</b> a cat under the tree.","树下有一只猫。"],["There <b>is</b> some water in the bottle.","瓶子里有一些水。"],["There <b>are</b> three books on the desk.","桌子上有三本书。"]])+
h('就近原则')+
p('后面有好几个名词时，be 动词跟<b>离它最近</b>的那个名词保持一致：')+
xs([["There <b>is</b> a pen and two books on the desk.","桌上有一支笔和两本书。（离得最近的是 a pen）"],["There <b>are</b> two books and a pen on the desk.","桌上有两本书和一支笔。（离得最近的是 two books）"]])+
h('否定句和疑问句')+
xs([["There <b>isn’t</b> a cat in the room.","房间里没有猫。"],["There <b>aren’t any</b> apples in the box.","盒子里没有苹果。（否定句用 any）"],["<b>Is there</b> a pen on the desk?","桌上有笔吗？"],["Yes, there <b>is</b>.　/　No, there <b>isn’t</b>.","有 / 没有。"],["<b>Are there any</b> books on the desk?","桌上有书吗？"],["Yes, there <b>are</b>.　/　No, there <b>aren’t</b>.","有 / 没有。"],["How many pens <b>are there</b> on the desk?","桌上有几支笔？"]])+
h('There be 和 have 的区别')+
tbl(['','意思','例子'],[['have / has','某人“拥有”某物','I have a book.（我有一本书）'],['There be','某地“存在”某物','There is a book on the desk.（桌子上有一本书）']])+
warn('<s>There have a book on the desk.</s>　there be 和 have 不能一起用。'),
qs:[
 F('There ___ a bird in the tree.（is / are）','is','a bird 是单数，用 is。'),
 F('There ___ two cats on the sofa.（is / are）','are','two cats 是复数，用 are。'),
 C('There ___ a pen and two books on the desk.',['is','are','have','has'],0,'就近原则：离 be 最近的是 a pen，用 is。'),
 C('There ___ some milk in the glass.',['is','are','have','am'],0,'milk 是不可数名词，用 is。'),
 C('盒子里没有苹果。',['There isn’t any apples in the box.','There aren’t any apples in the box.','There aren’t some apples in the box.','There haven’t any apples in the box.'],1,'apples 是复数，用 aren’t；否定句里用 any。'),
 C('Is there a cat in the room? 否定回答是？',['No, there isn’t.','No, it isn’t.','No, there aren’t.','No, there not.'],0,'用 Is there 提问，用 there isn’t 回答。'),
 C('下面哪句是错的？',['There is a book on the desk.','There are two cats.','There have a book on the desk.','Is there a pen?'],2,'There be 句型里不能用 have。'),
 F('How many boys ___ there in your class?','are','boys 是复数，用 are。'),
 O('桌子上有一本书。','There is a book on the desk.','There is + 单数名词 + 地点。'),
 O('教室里有五十个学生。','There are fifty students in the classroom.','students 是复数，用 There are。')
]},
/* 10 */
{id:'u10',cn:'介词',en:'Prepositions',sum:'in on under …　at / on / in 表示时间',
intro:'介词能告诉我们“在哪里”“什么时候”。',
lesson:
h('表示位置')+
tbl(['介词','意思','例子'],[
 ['in','在……里面','The cat is <b>in</b> the box.'],
 ['on','在……上面（接触）','The book is <b>on</b> the desk.'],
 ['under','在……下面','The ball is <b>under</b> the chair.'],
 ['behind','在……后面','He is <b>behind</b> the door.'],
 ['in front of','在……前面（外部）','A tree is <b>in front of</b> the house.'],
 ['next to / beside','紧挨着','She sits <b>next to</b> me.'],
 ['between … and …','在两者之间','The school is <b>between</b> the park and the hospital.'],
 ['near','在……附近','My home is <b>near</b> the school.'],
 ['at','在某个地点（小地方）','at school, at home, at the bus stop']])+
xs([["The cat is <b>under</b> the table.","猫在桌子下面。"],["I live <b>near</b> the park.","我住在公园附近。"]])+
h('表示时间：at / on / in')+
tbl(['介词','用在','例子'],[
 ['<b>at</b>','具体的钟点、中午、夜里','at 7 o’clock, at noon, at night'],
 ['<b>on</b>','星期、具体的日期、某一天的上午下午','on Monday, on May 1st, on Sunday morning, on my birthday'],
 ['<b>in</b>','月份、年份、季节、一天里的早中晚','in March, in 2024, in summer, in the morning / afternoon / evening']])+
xs([["I get up <b>at</b> six o’clock.","我六点起床。"],["We have English <b>on</b> Monday.","我们星期一上英语课。"],["My birthday is <b>in</b> October.","我的生日在十月。"]])+
h('还有几个常用的')+
xs([["I go to school <b>by</b> bike.","我骑自行车上学。（by + 交通工具）"],["This is a gift <b>for</b> you.","这是给你的礼物。"],["He is <b>from</b> China.","他来自中国。"]])+
warn('<s>in Monday</s> → <b>on</b> Monday　　<s>at the morning</s> → <b>in</b> the morning　　<s>on night</s> → <b>at</b> night')+
tip('“某一天的上午”要用 on：on Sunday morning。只说“早上”才用 in the morning。'),
qs:[
 C('The cat is ___ the box.（在里面）',['in','on','under','at'],0,'在里面用 in。'),
 C('The ball is ___ the chair.（在下面）',['in','on','under','behind'],2,'在下面用 under。'),
 C('I get up ___ six o’clock.',['at','on','in','by'],0,'具体的钟点用 at。'),
 C('We have an English class ___ Monday.',['at','on','in','by'],1,'星期前面用 on。'),
 C('My birthday is ___ October.',['at','on','in','by'],2,'月份前面用 in。'),
 C('I often read books ___ the evening.',['at','on','in','by'],2,'in the evening（在晚上）。'),
 C('He goes to school ___ bike.',['at','on','in','by'],3,'by + 交通工具。'),
 C('The school is ___ the park and the hospital.',['between','behind','in','on'],0,'在两者之间用 between … and …。'),
 C('下面哪个短语是错的？',['in the morning','on Sunday morning','at night','in Monday'],3,'星期前面应该用 on：on Monday。'),
 F('I do my homework ___ night.（at / on / in）','at','night 前面用 at。'),
 F('The library is ___ my home.（附近）','near','near 表示“在……附近”。')
]},
/* 11 */
{id:'u11',cn:'现在进行时',en:'Present Continuous',sum:'正在做的事：be + 动词 -ing',
intro:'说“现在正在做什么”，就用现在进行时。',
lesson:
h('怎么用？')+
rule('<b>am / is / are + 动词 -ing</b>')+
xs([["I <b>am reading</b> a book.","我正在看书。"],["She <b>is cooking</b> dinner.","她正在做晚饭。"],["They <b>are playing</b> football.","他们正在踢足球。"]])+
tbl(['提示词','意思'],[['now / right now','现在 / 此刻'],['at the moment','此刻'],['Look! / Listen!','看！/ 听！']])+
h('动词 -ing 怎么变？')+
tbl(['变化规则','例子'],[
 ['一般直接加 <b>ing</b>','play → playing<br>read → reading<br>eat → eating'],
 ['不发音的 e 结尾，去 e 加 <b>ing</b>','make → making<br>write → writing<br>dance → dancing<br>have → having'],
 ['重读闭音节，双写最后字母加 <b>ing</b>','run → running<br>swim → swimming<br>sit → sitting<br>get → getting'],
 ['ie 结尾，变 ie 为 y 加 <b>ing</b>','lie → lying<br>die → dying']])+
h('否定句和疑问句')+
xs([["She <b>isn’t</b> sleeping.","她没有在睡觉。（be 后面加 not）"],["<b>Is</b> she sleeping?","她在睡觉吗？（be 提到句首）"],["Yes, she <b>is</b>.　/　No, she <b>isn’t</b>.","是的 / 不是。"],["What <b>are</b> you <b>doing</b>?","你在做什么？"],["I’m reading.","我在看书。"]])+
warn('<s>He is play.</s>　只有 is 没有 -ing，错。<s>He playing.</s>　只有 -ing 没有 is，也错。<br>两部分缺一不可：He <b>is playing</b>.')+
tip('like, love, know, want 这类表示“喜欢、知道、想要”的词，一般不用进行时。'),
qs:[
 F('Look! The boy is ___ fast.（run）','running','run 双写 n，加 ing。'),
 F('She is ___ a cake now.（make）','making','make 去 e 加 ing。'),
 F('They are ___ in the river.（swim）','swimming','swim 双写 m，加 ing。'),
 F('I am ___ a letter.（write）','writing','write 去 e 加 ing。'),
 C('Listen! Someone ___ the piano.',['plays','is playing','play','played'],1,'Listen! 表示正在发生，用 is playing。'),
 C('What are you ___?',['do','does','doing','did'],2,'现在进行时：are + doing。'),
 C('He ___ TV now.（没有在看）',['doesn’t watch','isn’t watching','don’t watching','not watching'],1,'现在进行时否定：isn’t + 动词 -ing。'),
 C('Are you eating? 肯定回答是？',['Yes, I am.','Yes, I do.','Yes, I eat.','Yes, I’m.'],0,'用 Are 提问，用 am 回答，Yes 回答不缩写。'),
 C('下面哪句是错的？',['He is playing football.','He is play football.','Is he playing football?','He isn’t playing football.'],1,'be + 动词 -ing，play 要变成 playing。'),
 O('我正在读一本书。','I am reading a book.','am + reading（动词 -ing）。'),
 O('她在睡觉吗？','Is she sleeping?','be 动词 Is 提到句首。')
]},
/* 12 */
{id:'u12',cn:'一般过去时',en:'Simple Past',sum:'过去发生的事：-ed 和不规则动词',
intro:'说“过去做了什么”，就用一般过去时。',
lesson:
h('什么时候用？')+
xs([["I <b>watched</b> TV last night.","我昨晚看电视了。"],["She <b>went</b> to Beijing last year.","她去年去了北京。"]])+
tbl(['提示词','意思'],[['yesterday','昨天'],['last night / week / year','昨晚 / 上周 / 去年'],['two days ago','两天前'],['in 2020','在 2020 年'],['just now','刚才']])+
h('规则动词：加 ed')+
tbl(['变化规则','例子'],[
 ['一般直接加 <b>ed</b>','play → played<br>want → wanted<br>help → helped'],
 ['以 e 结尾只加 <b>d</b>','like → liked<br>live → lived<br>dance → danced'],
 ['“辅音 + y”结尾，变 y 为 i 加 <b>ed</b>','study → studied<br>carry → carried<br>try → tried'],
 ['重读闭音节，双写最后字母加 <b>ed</b>','stop → stopped<br>plan → planned']])+
tip('-ed 的读音有三种：t 和 d 后面读 /ɪd/（wanted, needed）；清辅音后读 /t/（helped, watched）；其他读 /d/（played, called）。')+
h('不规则动词：要一个一个记')+
tbl(['原形','过去式','原形','过去式'],[
 ['am / is','was','are','were'],['go','went','come','came'],['see','saw','eat','ate'],['drink','drank','have','had'],
 ['do','did','take','took'],['make','made','buy','bought'],['get','got','give','gave'],['run','ran','write','wrote'],
 ['say','said','sit','sat'],['sleep','slept','swim','swam'],['fly','flew','know','knew'],['sing','sang','win','won'],
 ['read','read（读 /red/）','put','put']])+
h('否定句和疑问句')+
xs([["I <b>didn’t</b> go to school yesterday.","我昨天没去上学。"],["<b>Did</b> you watch TV?","你看电视了吗？"],["Yes, I <b>did</b>.　/　No, I <b>didn’t</b>.","是的 / 不是。"],["He <b>was</b> at home.　They <b>were</b> at school.","他在家。他们在学校。"],["<b>Was</b> he at home?","他在家吗？"]])+
warn('<s>I didn’t went.</s> <s>Did you went?</s>　有了 didn’t / Did，动词要<b>还原成原形</b>：I didn’t <b>go</b>. Did you <b>go</b>?<br><s>goed</s> <s>eated</s>　不规则动词不能加 ed：<b>went</b>, <b>ate</b>。'),
qs:[
 F('I ___ TV last night.（watch）','watched','watch 加 ed。'),
 F('She ___ hard yesterday.（study）','studied','study 变 y 为 i 加 ed。'),
 F('We ___ the car.（stop）','stopped','stop 双写 p 加 ed。'),
 F('He ___ to Beijing last year.（go）','went','go 的过去式是 went。'),
 F('I ___ a movie yesterday.（see）','saw','see 的过去式是 saw。'),
 F('She ___ a letter last week.（write）','wrote','write 的过去式是 wrote。'),
 F('He didn’t ___ a book.（buy）','buy','didn’t 后面用动词原形。'),
 C('They ___ at home yesterday.',['was','were','are','is'],1,'They 的 be 动词过去式是 were。'),
 C('I didn’t ___ to school yesterday.',['go','went','goes','going'],0,'didn’t 后面动词用原形。'),
 C('___ you play football yesterday?',['Do','Does','Did','Are'],2,'过去的事，疑问句用 Did。'),
 C('Did he have lunch? 否定回答是？',['No, he didn’t.','No, he doesn’t.','No, he wasn’t.','No, he hadn’t.'],0,'用 Did 提问，用 didn’t 回答。'),
 C('哪一句是对的？',['She goed home.','She went home.','She did go homes.','She goes home yesterday.'],1,'go 的过去式是 went，不是 goed。'),
 O('我昨天去公园了。','I went to the park yesterday.','went 是 go 的过去式。'),
 O('你昨晚做作业了吗？','Did you do your homework last night?','Did 后面用动词原形 do。')
]},
/* 13 */
{id:'u13',cn:'一般将来时',en:'Future: be going to / will',sum:'将要发生的事',
intro:'说“将要做什么”，有两种常用说法。',
lesson:
h('说法一：be going to + 动词原形')+
p('表示<b>打算、计划</b>做的事，或者<b>看得出来</b>要发生的事。')+
xs([["I <b>am going to</b> visit my aunt tomorrow.","我明天打算去看望我阿姨。"],["It <b>is going to</b> rain.","要下雨了。（看天色阴沉）"]])+
h('说法二：will + 动词原形')+
p('表示<b>临时决定</b>、<b>预测</b>或<b>承诺</b>。所有人称都用 will。')+
xs([["I <b>will</b> help you.","我来帮你。（临时决定）"],["She <b>will be</b> twelve next year.","她明年十二岁。"]])+
tbl(['缩写','意思'],[['I’ll, you’ll, he’ll, she’ll, we’ll, they’ll','I will …'],['won’t','will not']])+
tbl(['提示词','意思'],[['tomorrow','明天'],['next week / month / year','下周 / 下个月 / 明年'],['tonight','今晚'],['soon','很快'],['this afternoon','今天下午']])+
h('否定句和疑问句')+
xs([["I <b>am not going to</b> swim.","我不打算游泳。"],["He <b>won’t</b> come.","他不会来了。"],["<b>Are</b> you <b>going to</b> play football?","你打算踢足球吗？"],["<b>Will</b> you help me?","你会帮我吗？"],["Yes, I <b>will</b>.　/　No, I <b>won’t</b>.","会 / 不会。"]])+
warn('<s>He will goes.</s> <s>I will to go.</s>　will 后面直接跟<b>动词原形</b>：He will <b>go</b>.<br>be going to 里的 to 后面也是原形：I am going to <b>visit</b>.'),
qs:[
 C('I ___ visit my aunt next week.',['am going to','is going to','will going to','going to'],0,'主语是 I，用 am going to。'),
 C('She will ___ here tomorrow.',['come','comes','coming','came'],0,'will 后面用动词原形。'),
 F('It is going to ___ soon.（rain）','rain','be going to 后面用动词原形。'),
 C('He ___ come tomorrow.（他不会来）',['won’t','doesn’t','isn’t','didn’t'],0,'will not 缩写为 won’t。'),
 C('Will you help me? 肯定回答是？',['Yes, I will.','Yes, I do.','Yes, I am.','Yes, I help.'],0,'用 Will 提问，用 will 回答。'),
 C('下面哪句话表示“将来”？',['I watched TV yesterday.','I am watching TV now.','I am going to watch TV tonight.','I watch TV every day.'],2,'tonight（今晚）是将来，用 be going to。'),
 C('下面哪句是错的？',['She will go to school.','She will goes to school.','She won’t go to school.','Will she go to school?'],1,'will 后面动词用原形：will go。'),
 F('What are you going to ___ this weekend?（do）','do','be going to 后面用动词原形。'),
 O('明天我要去游泳。','I am going to swim tomorrow.','am going to + 动词原形 swim。'),
 O('他明年将十二岁。','He will be twelve next year.','will + be + 年龄。')
]},
/* 14 */
{id:'u14',cn:'特殊疑问词',en:'Question Words',sum:'what who where when why how …',
intro:'想问“什么、谁、哪里、什么时候……”，就靠疑问词。',
lesson:
h('常用疑问词')+
tbl(['疑问词','意思','例子'],[
 ['What','什么','What is this?　这是什么？'],
 ['Who','谁','Who is he?　他是谁？'],
 ['Whose','谁的','Whose bag is this?　这是谁的书包？'],
 ['Where','哪里','Where do you live?　你住在哪里？'],
 ['When','什么时候','When is your birthday?　你的生日是什么时候？'],
 ['Why','为什么','Why are you sad?　你为什么难过？'],
 ['How','怎么样、如何','How are you?　你好吗？'],
 ['Which','哪一个','Which do you like, tea or milk?　你喜欢哪个？']])+
h('“How”和“What”加词')+
tbl(['问法','意思','例子'],[
 ['What time','几点','What time is it?　It’s 7:30.'],
 ['What colour','什么颜色','What colour is it?　It’s red.'],
 ['How old','几岁','How old are you?　I’m ten.'],
 ['How many + 可数名词复数','多少个','How many apples do you have?'],
 ['How much + 不可数名词','多少（量）','How much water do you want?'],
 ['How much','多少钱','How much is it?　It’s ten yuan.'],
 ['How long','多长','How long is the river?'],
 ['How often','多久一次','How often do you read?　Every day.']])+
h('疑问词的语序')+
rule('<b>疑问词 + be / do / does / did / can … + 主语 + 其他？</b>')+
xs([["<b>Where do</b> you live?","你住在哪里？"],["<b>What is</b> your name?","你叫什么名字？"],["<b>Why</b> are you late?　<b>Because</b> the bus was late.","你为什么迟到？因为公共汽车晚点了。"]])+
h('回答要对得上')+
tbl(['问','答'],[['Who …?','He is my father.'],['Where …?','In Beijing.'],['When …?','On May 1st.'],['Why …?','Because …（因为……）']])+
warn('<s>Where you live?</s>　疑问词后面不能直接接主语，要加 do：Where <b>do</b> you live?<br><s>How many water?</s>　water 不可数，要用 How <b>much</b> water?'),
qs:[
 C('___ is your name? My name is Tom.',['What','Who','Where','When'],0,'问“名字是什么”，用 What。'),
 C('___ is that boy? He is my brother.',['What','Who','Where','Whose'],1,'问“人是谁”，用 Who。'),
 C('___ do you live? In Beijing.',['Who','What','Where','When'],2,'回答是地点，所以问 Where。'),
 C('___ is your birthday? On May 1st.',['What','Where','Why','When'],3,'回答是日期，所以问 When。'),
 C('___ are you late? Because the bus was late.',['Why','Who','Where','What'],0,'回答用 Because，所以问 Why。'),
 C('How ___ water do you want?',['many','much','old','long'],1,'water 是不可数名词，用 How much。'),
 C('How ___ books do you have?',['many','much','old','long'],0,'books 是可数名词复数，用 How many。'),
 C('___ bag is this? It’s mine.',['Who','Whose','Where','Which'],1,'问“谁的”，用 Whose。'),
 C('How old is she? 合适的回答是？',['She is ten.','She is a girl.','She is in Beijing.','She is my sister.'],0,'How old 问年龄，回答年龄。'),
 F('___ time is it? It’s 7:30.','What','问几点：What time。'),
 O('你几岁了？','How old are you?','How old + be + 主语？'),
 O('你住在哪里？','Where do you live?','Where + do + 主语 + 动词原形？')
]},
/* 15 */
{id:'u15',cn:'连词和祈使句',en:'Conjunctions & Imperatives',sum:'and but or so because；命令、请求、建议',
intro:'用连词把句子连起来，用祈使句请别人做事。',
lesson:
h('常用连词')+
tbl(['连词','意思','例子'],[
 ['and','和、并且','I like apples <b>and</b> bananas.'],
 ['but','但是（转折）','I like tea, <b>but</b> he likes milk.'],
 ['or','或者、还是（选择）','Do you want tea <b>or</b> coffee?'],
 ['so','所以（说结果）','It was raining, <b>so</b> we stayed at home.'],
 ['because','因为（说原因）','I’m happy <b>because</b> it’s my birthday.']])+
xs([["I like tea, <b>but</b> he likes coffee.","我喜欢茶，但是他喜欢咖啡。"],["I was tired, <b>so</b> I went to bed early.","我累了，所以早早睡了。"],["I am happy <b>because</b> it’s my birthday.","我很开心，因为今天是我的生日。"]])+
warn('中文常说“因为……所以……”，但英文里 <b>because 和 so 不能同时用</b>！<br><s>Because it rained, so we stayed at home.</s><br>✓ Because it rained, we stayed at home.<br>✓ It rained, so we stayed at home.')+
h('祈使句：请别人做事')+
rule('祈使句以<b>动词原形</b>开头，省略 you。<br>否定：<b>Don’t + 动词原形</b>。　建议：<b>Let’s + 动词原形</b>。')+
xs([["<b>Open</b> the door, please.","请开门。"],["<b>Sit</b> down, please.","请坐下。"],["<b>Don’t run</b> in the classroom!","不要在教室里跑！"],["<b>Be</b> quiet!","安静！（be 动词也可以做祈使句）"],["<b>Let’s go</b> to the park.","我们去公园吧。"],["<b>Let’s play</b> football.","我们踢足球吧。"]])+
tip('加上 <b>please</b> 更礼貌，可以放在句首或句尾：Please sit down. / Sit down, please.'),
qs:[
 C('I like tea ___ he likes coffee.',['and','but','or','so'],1,'两个意思相反，用 but。'),
 C('Do you want milk ___ juice?',['and','but','or','so'],2,'二选一的问句，用 or。'),
 C('I was tired, ___ I went to bed early.',['and','but','or','so'],3,'前面是原因，后面是结果，用 so。'),
 C('I am happy ___ it’s my birthday.',['and','but','because','so'],2,'后面说原因，用 because。'),
 C('下面哪句是对的？',['Because it rained, we stayed at home.','Because it rained, so we stayed at home.','So it rained, because we stayed at home.','Because it rained, but we stayed at home.'],0,'because 和 so 不能同时用。'),
 C('___ the door, please.（请关门）',['Close','Closes','Closing','To close'],0,'祈使句用动词原形开头。'),
 C('___ run in the hall!（不要跑）',['Not','No','Don’t','Doesn’t'],2,'否定祈使句用 Don’t + 动词原形。'),
 C('Let’s ___ to the park.',['go','goes','going','to go'],0,'Let’s 后面用动词原形。'),
 F('Let’s ___ basketball.（play）','play','Let’s + 动词原形。'),
 O('请坐下。','Sit down, please.','祈使句以动词原形 Sit 开头。'),
 O('不要说话！','Don’t talk!','Don’t + 动词原形 talk。')
]}
);
