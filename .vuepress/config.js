const plugins = require('./config/plugins')
const nav = require('./config/nav')
const friendLink = require('./config/friendLink')

module.exports = {
  "title": "AlanCorn's Blog",		//博客标题
  "description": "欢迎光顾 🍬AlanCorn 的个人博客🥰",	//描述
  "dest": "dist",			//部署时的输出文件夹
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"		//图标
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",			//vuepress挂载的主题
  "themeConfig": {
    //子侧边栏配置
    "subSidebar": 'auto',
    "type": "blog",
    //博客设置  
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'fa-github', link: 'https://github.com/AlanCorn' },
        //{ icon: 'reco-bilibili', link: 'https://space.bilibili.com/57355517' },
        { icon: 'fa-twitter', link: 'https://twitter.com/AlanCorn_02' },
        { icon: 'fa-telegram', link: 'https://t.me/AlanCorn_02' },
        { icon: 'fa-spotify', link: 'https://open.spotify.com/user/31fvtg35xvb3hcwyzvpcsi2evp6i?si=6c41da6cb47f4ac2' },
        { icon: 'fa-steam', link: "/blogs/Other/Steam" }, 
        // { icon: 'fa-bullhorn', link: "https://t.me/s/AlanCorn_Share" }
        //{ icon: 'fa-rss', link: 'https://alancorn.github.io/rss.xml' },
        { icon: 'fa-envelope', link: '/blogs/Other/Envelope' }
      ]
    },
    //友情链接
    //评论区设置
    "valineConfig": {
      appId: 'W4etSMmQ8kOOJBaclLWpmKCC-gzGzoHsz',// your appId
      appKey: 'pnVhrKPzvpnn9AtzYkKdffmv', // your appKey
    },
    //代码主题
    //"codeTheme": 'solarizedlight',
    //其他
    "logo": "/logo.png",
    "search": true,
    
    "searchMaxSuggestions": 10,
    "author": "AlanCorn_02",
    "authorAvatar": "/avatar.png",
    //"record": "xxxx",备案号
    "startYear": "2021",
    //404腾讯公益
    "noFoundPageByTencent": false,
    "lastUpdated": "最近修改：",
    //导航栏配置
    nav,
    //sidebar,
    //友情链接
    friendLink,
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins
}
