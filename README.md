# 英语语法小课堂（docker 版）

给小学生的英语语法网站（按人教PEP新版四年级，默认显示四年级内容，有课本对照页）：38 个语法/词性/听力/自然拼读单元，约 810 道题。
题型：选择 / 填空 / 连词成句 / 判断 / 听力 / 听写。带学习者档案、错题本、学习报告、数据清除与备份。
服务端只用 Node 自带模块，构建时不需要 npm install。

## 部署

不用下载源码，新建一个目录，放入下面的 `docker-compose.yml`（或直接贴到 1Panel 的编排里）：

```yaml
services:
  english-grammar:
    image: ghcr.io/lu8010252/english-grammar:latest
    container_name: english-grammar
    restart: unless-stopped
    ports:
      - "8092:8092"
    environment:
      - TZ=Asia/Shanghai
      - ADMIN_PIN=
    volumes:
      - ./data:/data
```
然后 `docker compose up -d`，访问 `http://服务器IP:8092`。更新：`docker compose pull && docker compose up -d`。

镜像由 GitHub Actions 在每次推送 main 后自动构建（amd64 / arm64）。想自己构建，把 `image:` 换成 `build: .` 即可。

## 目录结构

```
server.js              服务端（接口 + 静态文件，已开启 gzip 和缓存校验）
docker-compose.yml
public/
  index.html           页面外壳（基本不用改）
  css/app.css          样式（颜色全是变量）
  js/theme.js          外观：深浅模式、日出日落、渐变配色
  js/core.js           出题和排版用的小工具
  js/loader.js         自动加载 content/ 里的内容文件
  js/app.js            程序主体
  content/             ← 题目和讲解都在这里，加内容只改这里
    10-grammar-1.js        语法单元 u1–u15
    11-grammar-2.js        语法单元（词类、所有格、数词、副词、现在完成时等）
    20-listening.js        听力单元
    30-phonics.js          自然拼读
    45-dictionary.js       点读小词典（音标、词性、中文）
    12-grammar-3.js        课本句型单元（按四年级课本目录整理，可点读）
    46-dictionary-2.js     点读小词典（补充）
    50-order.js            单元显示顺序
    52-textbook.js         课本对照（四年级上、下册的单元、重点句型、对应的网站单元）
    51-grades.js           每个单元属于哪个年级（四/五/六年级、拓展）
    60-more-questions.js   给已有单元追加的题目
    62-more-4.js           追加题目（词性术语的听力和听写）
data/                  学习数据（运行后自动生成）
```

## 怎么加内容

内容文件都在镜像里的 `public/`，改完推送仓库、等 Actions 构建完，再 `docker compose pull && docker compose up -d` 即可。
（本地调试可在 compose 里加一行 `- ./public:/app/public:ro`，改文件刷新就生效。）

- **给已有单元加题**：在 content/ 里新建一个文件，文件名数字比现有的大，例如 `61-more-3.js`：
  ```js
  MORE.push({
    u6:[ F('She ___ (like) apples.','likes','三单加 s。'), C('题干',['正确答案','错1','错2','错3'],0,'解析') ]
  });
  ```
  题目函数：`C` 选择、`F` 填空、`O` 连词成句、`J` 判断、`L` 听力选择、`W` 听写。
  每次都新建一个文件追加，不要改旧文件里的题，也不要在中间插入或删除，已有的错题记录才不会对不上。
- **加新单元**：新建文件，例如 `12-grammar-3.js`，里面 `U.push({id:'u37',cn:'……',en:'……',sum:'……',intro:'……',lesson:……,qs:[……]});`，格式可参照 `11-grammar-2.js`。想排在指定位置，把 id 加到 `50-order.js` 里；不写则排在最后。
- **点读小词典**：在 `45-dictionary.js` 里加一行 `单词|音标|词性|中文`。讲解页里任何英文单词都能点读，词典里有的还会显示音标（英式）、词性和中文意思。
- **调整年级**：在 `51-grades.js` 里改单元对应的年级（`'4'` 四年级、`'5'`、`'6'`、`'x'` 拓展）。首页可以按年级筛选，综合测验、每日一练、听力训练也只抽当前年级的题。
- 文件名前面的数字决定加载顺序。以后做出其他类型的内容（比如阅读、语音跟读），也是新建文件，再让我改 `js/app.js` 里对应的页面。

## 外观

「设置」页最上面是外观设置，保存在这台设备的浏览器里：
- 深浅模式：自动（日出日落）、跟随系统、浅色、深色。自动模式默认 6:00–18:00 用浅色，其余时间用深色，时间可以改。
- 背景：渐变色（晴空、极光、晚霞、樱花、海洋、薰衣草、石墨，浅色和深色各一套）或纯色。
- 主题色、毛玻璃模糊、面板不透明度。
- 页面右上角的 🌗 按钮可以快速切换：自动 → 浅色 → 深色。

## 数据

- 学习数据在 `./data/data.json`，重建、更新容器都不会丢。备份就复制 data 目录，或在「设置」里导出。
- 「设置」里可以清空错题本、清除学习数据、删除学习者、导出/导入备份。
- 想整体清空：`docker compose down && rm -rf data && docker compose up -d`。
- 可选家长密码：docker-compose.yml 里设 `ADMIN_PIN=你的密码`，清除、删除、导入时需要输入。

## 点读和音标

- 讲解页里**任何英文单词**都可以点一下：朗读，并弹出音标、词性、中文意思（可再点 🔊 重听、🐢 慢速）。
- 词性页里的英文全称（noun、verb、adjective 等）带 🔊 和音标。
- 朗读优先用英式英语语音（和课本音标一致），没有就用美式；有些国产安卓浏览器没有英文语音，可换 Chrome / Edge。

## 听力

- 讲解里每个例句有 🔊 正常、🐢 慢速两个按钮。
- 听力题、听写题可以反复听，支持「自动慢速播放」和「显示文字」。
- 首页「听力训练」随机抽 10 题；学习报告里单独统计听力正确率。
- 朗读用浏览器自带的英文语音（Chrome / Edge / Safari 较好）。有些国产安卓浏览器没有英文语音，可换浏览器或安装英文语音包。
