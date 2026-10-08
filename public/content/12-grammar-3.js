/* 课本句型（四年级新版）：按课本目录整理的重点句型，每句都可点读 */
U.push(
{id:'u37',cn:'课本句型（四年级新版）',en:'Textbook Patterns',sum:'在家帮忙、天气、班级规则、上学时间、购物：课本重点句型的听力和练习',
intro:'这个单元按你发来的课本目录整理，句子是常考、常用的重点句型。每一句都可以点 🔊 听，也可以点 🐢 慢速听。句子是根据公开的教学资料整理的，和课本原句可能略有出入。',
lesson:
h('上册 Unit 1 Helping at home（在家帮忙）')+
xs([["What’s your mother’s job?","你妈妈是做什么工作的？"],["She’s a doctor.","她是医生。"],["He’s a PE teacher.","他是体育老师。"],["Can you help at home?","你能在家帮忙吗？"],["Yes, I can. I can sweep the floor.","能。我会扫地。"],["What can we do for them?","我们能为他们做些什么？"]])+
tip('can 后面用<b>动词原形</b>：I can <b>sweep</b> the floor.（不是 sweeps、sweeping）')+
h('上册 Unit 5 The weather and us（天气）')+
xs([["What’s the weather like today?","今天天气怎么样？"],["It’s sunny.","晴天。"],["How’s the weather?","天气怎么样？"],["It’s rainy. Take an umbrella.","下雨了，带把伞。"],["It’s cold. Wear a coat.","天冷，穿外套。"]])+
h('下册 Unit 1 Class rules（班级规则）')+
xs([["Please keep the classroom clean.","请保持教室干净。"],["Turn off the lights after school.","放学后关灯。"],["Don’t be late for class.","上课不要迟到。"],["You can’t take toys to school.","你不能把玩具带到学校。"]])+
rule('规则句多用<b>祈使句</b>：动词原形开头（Keep … / Turn off …）；否定用 <b>Don’t + 动词原形</b>；<b>can’t</b> 表示“不可以”。')+
h('下册 Unit 3 Time for school（上学的时间）')+
xs([["What time is it?","几点了？"],["It’s seven o’clock.","七点了。"],["It’s time for English class.","该上英语课了。"],["It’s time to go to school.","该去上学了。"],["Have a nice day!","祝你今天愉快！"]])+
tbl(['句型','后面接','例子'],[['It’s time <b>for</b> …','名词','It’s time for dinner.'],['It’s time <b>to</b> …','动词原形','It’s time to go to bed.']])+
h('下册 Unit 4 Going shopping（去购物）')+
xs([["How much is the skirt?","这条裙子多少钱？"],["It’s thirty yuan.","三十元。"],["How much are the shorts?","这条短裤多少钱？"],["They’re cheap.","它们很便宜。"],["It’s too expensive.","太贵了。"]])+
tip('单数物品用 <b>How much is</b> …?（skirt、jacket）；复数物品用 <b>How much are</b> …?（shorts、trousers、shoes）。')+
h('语音：ar 和 ir / ur')+
xs([["car　farm　park","ar 读 /ɑː/"],["girl　bird　skirt　nurse","ir、ur 读 /ɜː/"]]),
qs:[
 L('What’s your mother’s job?','听一听，你听到的是哪一句？',['What’s your mother’s job?','What’s your mother’s name?','Where’s your mother?','How old is your mother?'],0,'job 是“工作”，问职业用 What’s … job?'),
 L('She’s a doctor.','听一听，你听到的是哪一句？',['She’s a doctor.','She’s a driver.','He’s a doctor.','She’s a nurse.'],0,'注意主语 She 和职业 doctor。'),
 L('I can sweep the floor.','听一听，你听到的是哪一句？',['I can sweep the floor.','I can clean the room.','I can cook dinner.','I can wash the dishes.'],0,'sweep the floor 是扫地。'),
 L('What’s the weather like today?','听一听，你听到的是哪一句？',['What’s the weather like today?','What time is it today?','How are you today?','What day is it today?'],0,'问天气：What’s the weather like?'),
 L('It’s rainy. Take an umbrella.','听一听，天气怎么样？该怎么做？',['下雨，带伞','晴天，戴帽子','刮风，放风筝','冷，穿外套'],0,'rainy 是下雨，umbrella 是伞。'),
 L('It’s cold. Wear a coat.','听一听，天气怎么样？该怎么做？',['冷，穿外套','热，穿短裤','下雨，带伞','晴天，戴帽子'],0,'cold 是冷，coat 是外套。'),
 L('Please keep the classroom clean.','听一听，这条班级规则是？',['保持教室干净','上课不要迟到','不许带玩具','放学后关灯'],0,'keep the classroom clean 是保持教室干净。'),
 L('Turn off the lights after school.','听一听，这条班级规则是？',['放学后关灯','上课不要说话','保持安静','不要迟到'],0,'turn off the lights 是关灯。'),
 L('Don’t be late for class.','听一听，这条班级规则是？',['上课不要迟到','上课要举手','保持教室干净','放学后关灯'],0,'be late for class 是上课迟到。'),
 L('It’s time for English class.','听一听，这句话的意思是？',['该上英语课了','英语课结束了','今天没有英语课','我喜欢英语课'],0,'It’s time for … 是“该……了”。'),
 L('It’s seven o’clock.','听一听，现在几点？',['7:00','7:30','6:00','8:00'],0,'o’clock 表示整点。'),
 L('How much is the skirt?','听一听，你听到的是哪一句？',['How much is the skirt?','How many skirts are there?','How old is the skirt?','Where is the skirt?'],0,'How much 问价钱。'),
 L('It’s too expensive.','听一听，这句话的意思是？',['太贵了','很便宜','很漂亮','太小了'],0,'expensive 是“贵的”。'),
 C('— What’s your father’s job? — He ___ a farmer.',['is','are','am','be'],0,'主语 He，用 is。'),
 C('Can you help at home? 肯定回答是？',['Yes, I can.','Yes, I do.','Yes, I am.','Yes, I help.'],0,'用 Can 提问，用 can 回答。'),
 C('I can ___ the floor.',['sweep','sweeps','sweeping','to sweep'],0,'can 后面用动词原形。'),
 C('— What’s the weather like? — ___',['It’s sunny.','I’m sunny.','He’s sunny.','It sunny.'],0,'说天气，主语用 It。'),
 C('It’s cold. ___ a coat.',['Wear','Wears','Wearing','To wear'],0,'祈使句用动词原形开头。'),
 C('___ be late for class.（不要）',['Don’t','Not','No','Doesn’t'],0,'否定祈使句用 Don’t + 动词原形。'),
 C('Please ___ the classroom clean.',['keep','keeps','keeping','to keep'],0,'Please 后面用动词原形。'),
 C('You ___ take toys to school.（不可以）',['can’t','don’t can','can','isn’t'],0,'can’t 表示不可以。'),
 C('It’s time ___ English class.',['for','to','at','in'],0,'time for + 名词。'),
 C('It’s time ___ go to bed.',['to','for','at','of'],0,'time to + 动词原形。'),
 C('How much ___ the shorts?',['are','is','am','be'],0,'shorts 是复数，用 are。'),
 C('— How much is the skirt? — ___ thirty yuan.',['It’s','They’re','I’m','There’s'],0,'skirt 是单数，用 It’s。'),
 O('你妈妈是做什么工作的？','What’s your mother’s job?','问职业：What’s … job?'),
 O('我会扫地。','I can sweep the floor.','can + 动词原形。'),
 O('放学后关灯。','Turn off the lights after school.','祈使句：动词原形开头。'),
 O('该上英语课了。','It’s time for English class.','It’s time for + 名词。'),
 O('这条裙子多少钱？','How much is the skirt?','How much is + 单数名词？'),
 F('Have a nice ___!（day）','day','Have a nice day! 是“祝你今天愉快”。'),
 F('It’s time ___ go to school.（to / for）','to','time to + 动词原形。'),
 W('It’s seven o’clock.','It’s seven o’clock.','时间：It’s + 钟点 + o’clock。','4 个词，说时间'),
 W('Please keep the classroom clean.','Please keep the classroom clean.','keep 后面接 the classroom clean。','5 个词，一条班级规则'),
 J('It’s time to go to bed.',true,'time to + 动词原形，正确。'),
 J('Don’t late for class.',false,'Don’t 后面要加 be：Don’t be late for class.'),
 J('How much is the shorts?',false,'shorts 是复数：How much are the shorts?')
]}
);
