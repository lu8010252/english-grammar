/* 听力单元：听音辨句、听单词和数字、听写、听短对话
 * 
 */
U.push(
/* 25 听音辨句 */
{id:'u25',cn:'听音辨句',en:'Listening',sum:'听一听，选出你听到的句子',
intro:'这一单元的题目要<b>听</b>。点喇叭听一听，再选答案。听不清可以多点几次。',
lesson:
h('听力小窍门')+
rule('<ol><li>先看选项，找出它们<b>哪里不一样</b>（动词形式？单复数？数字？）。</li><li>点喇叭听，抓住那个不一样的地方。</li><li>听不清可以再听一次，不用着急。</li></ol>')+
h('容易听错的发音')+
tbl(['情况','读音','例子'],[
 ['名词复数、动词三单 -s','清辅音后读 /s/','books, cats, stops'],
 ['','浊辅音或元音后读 /z/','pens, dogs, plays'],
 ['','s, x, sh, ch 后读 /ɪz/','buses, boxes, watches'],
 ['过去式 -ed','清辅音后读 /t/','helped, watched'],
 ['','浊辅音或元音后读 /d/','played, called'],
 ['','t, d 后读 /ɪd/','wanted, needed']])+
tbl(['容易混的','区别'],[
 ['thirteen / thirty','thir<b>teen</b> 重音在后；<b>thir</b>ty 重音在前'],
 ['five / fifty','fifty 的 -ty 听起来很轻'],
 ['can / can’t','can 读得轻短；can’t 读得重长'],
 ['he’s / she’s','开头不同：he 和 she']])+
xs([["I <b>can’t</b> swim.","我不会游泳。"],["I am <b>thirteen</b> years old.","我十三岁。"]])+
tip('用手机或电脑听时，要保证声音打开。如果没有声音，可能是浏览器不支持朗读，换一个浏览器试试。'),
qs:[
 L('She likes apples.','你听到的是哪一句？',['She like apples.','She likes apples.','He likes apples.','She liked apples.'],1,'注意 likes 的 -s 和主语 She。'),
 L('They are playing football.','你听到的是哪一句？',['They play football.','They are playing football.','They played football.','They will play football.'],1,'are playing 是现在进行时。'),
 L('I can’t swim.','你听到的是哪一句？',['I can swim.','I can’t swim.','I won’t swim.','I didn’t swim.'],1,'can’t 读得重而长。'),
 L('I am thirteen years old.','你听到的是哪一句？',['I am thirty years old.','I am thirteen years old.','I am three years old.','I am thirteen year old.'],1,'thirteen 是 13，重音在后。'),
 L('Where is my bag?','你听到的是哪一句？',['Where is my bag?','Where are my bags?','What is my bag?','Who is my bag?'],0,'注意疑问词 Where 和单数 bag。'),
 L('He went to Beijing yesterday.','你听到的是哪一句？',['He goes to Beijing every day.','He went to Beijing yesterday.','He will go to Beijing tomorrow.','He is going to Beijing now.'],1,'went 是过去式，yesterday 是过去。'),
 L('Tom’s bag is on the desk.','你听到的是哪一句？',['Tom’s bag is on the desk.','Toms bag are on the desk.','Tom is a bag on the desk.','Tom’s bags are on the desk.'],0,'Tom’s 表示“汤姆的”。'),
 L('Do you like fish?','你听到的是哪一句？',['Do you like fish?','Does he like fish?','Did you like fish?','Can you like fish?'],0,'注意句首的助动词 Do 和主语 you。'),
 L('What time is it?','你听到的是哪一句？',['What time is it?','What day is it?','What colour is it?','What is it?'],0,'注意 time。'),
 L('There are five apples in the box.','你听到的是哪一句？',['There is an apple in the box.','There are five apples in the box.','There are fifty apples in the box.','There are five apples on the box.'],1,'five 是 5，fifty 是 50；in 表示“里面”。'),
 L('I am going to swim tomorrow.','听一听，这句话的意思是？',['我昨天去游泳了。','我明天打算去游泳。','我正在游泳。','我每天都游泳。'],1,'am going to 和 tomorrow 表示将来。'),
 L('She is reading a book.','听一听，这句话的意思是？',['她喜欢书。','她正在看书。','她昨天看了书。','她会看书。'],1,'is reading 表示正在看。'),
 L('Don’t run in the classroom!','听一听，这句话的意思是？',['在教室里跑！','不要在教室里跑！','我们去教室吧。','教室里有人在跑。'],1,'Don’t + 动词原形，表示“不要……”。')
]},
/* 26 听单词和数字 */
{id:'u26',cn:'听单词和数字',en:'Listening: Words & Numbers',sum:'听清相近的单词、数字、时间和日期',
intro:'先练最基础的：把<b>一个词</b>听清楚。点 🔊 正常速度，听不清就点 🐢 慢速，可以反复听。',
lesson:
h('怎么练？')+
rule('<ol><li>点 <b>🐢 慢速</b> 先听清楚，再点 <b>🔊 正常</b> 听一遍。</li><li>先看选项，想一想它们<b>哪里不一样</b>。</li><li>还听不清，就打开上面的 <b>“显示文字”</b>，边看边听，看熟了再关掉。</li></ol>')+
h('先听这些容易混的词')+
xs([["thir<b>teen</b> — <b>thir</b>ty","13 — 30（重音位置不同）"],["four<b>teen</b> — <b>for</b>ty","14 — 40"],["six<b>teen</b> — <b>six</b>ty","16 — 60"],["<b>five</b> — <b>fif</b>ty","5 — 50"]])+
h('相近的音')+
tbl(['对比','例子'],[
 ['ship / sheep','船 / 绵羊（短音 i 和长音 ee）'],
 ['bed / bad','床 / 坏的'],
 ['pen / pan','钢笔 / 平底锅'],
 ['light / right','灯 / 右边（l 和 r）'],
 ['three / tree','三 / 树（th 要把舌尖放在牙齿中间）']])+
h('时间和日期')+
xs([["It’s <b>half past</b> eight.","现在八点半。（8:30）"],["It’s <b>a quarter to</b> nine.","现在差一刻九点。（8:45）"],["My birthday is on May the <b>fifth</b>.","我的生日是五月五日。"]])+
tip('听数字时，在脑子里或者纸上<b>马上写下来</b>，不要等到最后才想。'),
qs:[
 L('thirteen','听一听，你听到的是哪个词？',['thirty','thirteen','three','third'],1,'thirteen 是 13，重音在 -teen 上。'),
 L('thirty','听一听，你听到的是哪个词？',['thirteen','thirty','three','third'],1,'thirty 是 30，重音在前面。'),
 L('fifty','听一听，你听到的是哪个词？',['fifteen','fifty','five','fifth'],1,'fifty 是 50。'),
 L('fourteen','听一听，你听到的是哪个词？',['forty','fourteen','four','fourth'],1,'fourteen 是 14，注意后面有 -teen。'),
 L('sixteen','听一听，你听到的是哪个词？',['sixty','sixteen','six','sixth'],1,'sixteen 是 16。'),
 L('seventy','听一听，你听到的是哪个词？',['seventeen','seventy','seven','seventh'],1,'seventy 是 70。'),
 L('eighteen','听一听，你听到的是哪个词？',['eighty','eighteen','eight','eighth'],1,'eighteen 是 18。'),
 L('sheep','听一听，你听到的是哪个词？',['ship','sheep','chip','sip'],1,'sheep 是绵羊，元音是长音。'),
 L('bed','听一听，你听到的是哪个词？',['bad','bed','bid','bud'],1,'bed 是床。'),
 L('pen','听一听，你听到的是哪个词？',['pan','pen','pin','pun'],1,'pen 是钢笔。'),
 L('three','听一听，你听到的是哪个词？',['tree','three','free','thee'],1,'three 是数字 3，开头是 th。'),
 L('light','听一听，你听到的是哪个词？',['right','light','night','like'],1,'light 开头是 l。'),
 L('apple','听一听，这个词是什么意思？',['苹果','香蕉','橙子','西瓜'],0,'apple 是苹果。'),
 L('rabbit','听一听，这个词是什么意思？',['兔子','老虎','小狗','小鸟'],0,'rabbit 是兔子。'),
 L('window','听一听，这个词是什么意思？',['窗户','门','桌子','椅子'],0,'window 是窗户。'),
 L('Wednesday','听一听，这个词是什么意思？',['星期二','星期三','星期四','星期五'],1,'Wednesday 是星期三。'),
 L('teacher','听一听，这个词是什么意思？',['老师','学生','医生','警察'],0,'teacher 是老师。'),
 L('yesterday','听一听，这个词是什么意思？',['昨天','今天','明天','后天'],0,'yesterday 是昨天。'),
 L('It’s half past eight.','听一听，现在几点？',['8:30','8:15','7:30','8:45'],0,'half past eight 是八点半。'),
 L('It’s a quarter to nine.','听一听，现在几点？',['8:45','9:15','9:45','8:15'],0,'a quarter to nine 是差一刻九点，也就是 8:45。'),
 L('It’s seven o’clock.','听一听，现在几点？',['7:00','7:10','8:00','6:00'],0,'o’clock 表示整点。'),
 L('My birthday is on May the fifth.','听一听，生日是几月几日？',['5 月 5 日','5 月 15 日','5 月 25 日','6 月 5 日'],0,'May the fifth 是 5 月 5 日。'),
 L('I have fifteen books.','听一听，他有几本书？',['5 本','15 本','50 本','13 本'],1,'fifteen 是 15。')
]},
/* 27 听写 */
{id:'u27',cn:'听写练习',en:'Dictation',sum:'听一听，把单词和句子写下来',
intro:'听写是提高听力最有效的办法之一：<b>听到什么，就写什么</b>。',
lesson:
h('听写的步骤')+
rule('<ol><li>先听一遍，大概知道说了什么。</li><li>再点 <b>🐢 慢速</b> 听，一个词一个词地写。</li><li>写完检查：<b>单词拼对了吗？复数 s、过去式 ed 有没有漏？</b></li></ol>')+
xs([["I like <b>apples</b>.","apples 最后有 s（复数）"],["She <b>watched</b> TV.","watched 最后有 ed（过去式）"],["He <b>goes</b> to school.","goes 是 go 的三单形式"]])+
tip('写句子时，大小写和句末的标点不会被扣分，重点是<b>单词对不对</b>。听不出来的词，先写开头的字母，再回忆整个单词。'),
qs:[
 W('apple','apple','apple 是苹果。','一种水果'),
 W('banana','banana','banana 是香蕉。','一种水果'),
 W('window','window','window 是窗户。','房间里让光进来的东西'),
 W('Monday','Monday','Monday 是星期一，首字母要大写。','星期几'),
 W('teacher','teacher','teacher 是老师。','学校里教你的人'),
 W('thirteen','thirteen','thirteen 是 13。','数字 13'),
 W('beautiful','beautiful','beautiful 是美丽的。','形容词，意思是“美丽的”'),
 W('because','because','because 是因为。','连词，意思是“因为”'),
 W('yesterday','yesterday','yesterday 是昨天。','时间词，意思是“昨天”'),
 W('breakfast','breakfast','breakfast 是早饭。','一天中的第一顿饭'),
 W('I like apples.','I like apples.','like 后面的 apples 是复数，要加 s。','4 个词'),
 W('She is my sister.','She is my sister.','She is + 名词。','5 个词'),
 W('He goes to school by bus.','He goes to school by bus.','主语是 he，go 要变成 goes。','7 个词'),
 W('What is your name?','What is your name?','问名字：What is your name?','4 个词，是一个问句'),
 W('There are five books.','There are five books.','books 是复数，用 There are。','4 个词，说有几本书')
]},
/* 28 听短对话 */
{id:'u28',cn:'听短对话',en:'Short Dialogues',sum:'听一小段话，回答问题',
intro:'这一单元听的是<b>一小段对话</b>。不用每个词都听懂，抓住<b>关键信息</b>就行。',
lesson:
h('先抓住关键信息')+
tbl(['听到的问题','要找的信息'],[
 ['Where ...?','地点（in, on, under, at …）'],
 ['What time ...?','几点（数字）'],
 ['How old ...? / How many ...?','年龄、数量（数字）'],
 ['What ... doing? / do?','动作（动词）'],
 ['Whose ...?','谁的（Tom’s, mine …）'],
 ['Yesterday / Tomorrow','时间词，决定用过去还是将来']])+
rule('<ol><li>先看<b>问题</b>和<b>选项</b>，知道要听什么。</li><li>听的时候只抓关键词。</li><li>听不清，打开“显示文字”，看一遍再听。</li></ol>')+
tip('“No, I do not.”（不）后面的内容才是真正的答案。听到 not、don’t、can’t 要特别留意。'),
qs:[
 L('Where is the cat? It is under the chair.','猫在哪里？',['在椅子下面','在椅子上面','在椅子后面','在椅子里面'],0,'under 是“在……下面”。'),
 L('What time is it? It is half past seven.','现在几点？',['7:30','7:15','6:30','8:30'],0,'half past seven 是 7:30。'),
 L('How old are you? I am ten years old.','他几岁？',['十岁','十二岁','二十岁','九岁'],0,'ten 是 10。'),
 L('Do you like fish? No, I do not. I like chicken.','他喜欢什么？',['鱼','鸡肉','牛奶','米饭'],1,'他说不喜欢鱼，喜欢鸡肉。'),
 L('What are you doing? I am reading a book.','他在做什么？',['看书','写字','看电视','睡觉'],0,'reading a book 是看书。'),
 L('Where did you go yesterday? I went to the park.','他昨天去了哪里？',['公园','学校','商店','没出门'],0,'went to the park 是去了公园。'),
 L('What will you do tomorrow? I will play football with my friends.','他明天打算做什么？',['踢足球','游泳','看电影','写作业'],0,'will play football 是将要踢足球。'),
 L('Can you swim? Yes, I can. But my brother can not.','谁不会游泳？',['说话的人','他的哥哥','两个人都不会','两个人都会'],1,'but my brother can not，哥哥不会游泳。'),
 L('How much is the book? It is twenty yuan.','书多少钱？',['20 元','12 元','50 元','2 元'],0,'twenty 是 20。'),
 L('Whose bag is this? It is Tom’s.','这是谁的包？',['汤姆的','露西的','我的','老师的'],0,'Tom’s 是汤姆的。'),
 L('There is a cat and two dogs in the room.','房间里一共有几只动物？',['三只','两只','一只','四只'],0,'一只猫加两只狗，一共三只。'),
 L('My birthday is in October. I will be eleven.','他几月过生日？',['十月','十一月','十二月','九月'],0,'in October 是在十月。'),
 L('Look! The boy is running fast. He is very happy.','男孩现在在做什么？',['跑步','睡觉','游泳','看书'],0,'is running 是正在跑。'),
 L('I get up at six every day. Then I eat breakfast.','他每天几点起床？',['6 点','7 点','8 点','5 点'],0,'at six 是 6 点。')
]}
);
