module.exports = {
  "title": "AlanCorn's Blog",		//博客标题
  "description": "'A simple personal blog build with vuepress-theme-reco",		//描述
  "dest": "docs",			//部署时的输出文件夹
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
    //导航栏配置
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "VuePress",
            "link": "https://vuepress.vuejs.org/guide/"
          },
          {
            "text": "VuePress-reco",
            "link": "https://vuepress-theme-reco.recoluan.com/"
          },
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "link": "/blogs/Other/About.md"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          { "text": "GitHub", "link": "https://github.com/AlanCorn/AlanCorn.github.io", "icon": "reco-github" },
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/57355517', icon: 'reco-bilibili' },
          { text: 'Twitter', link: 'https://twitter.com/AlanCorn_02', icon: 'reco-twitter' }
        ]
      }
    ],
    //子侧边栏配置
    "subSidebar": 'auto',
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
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
        { icon: 'fa-spotify', link: 'https://open.spotify.com/user/zc33qvecqt4zrfnpy85bdkxl9' },
        //{ icon: 'fa-envelope', link: 'https://www.bing.com/search?q=AlanCorn_02@foxmail.com' }
      ]
    },
    //友情链接
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
    ],
    //评论区设置
    "valineConfig": {
      appId: 'W4etSMmQ8kOOJBaclLWpmKCC-gzGzoHsz',// your appId
      appKey: 'pnVhrKPzvpnn9AtzYkKdffmv', // your appKey
    },
    //代码主题
    //"codeTheme": 'solarizedlight',
    //插件设置
    plugins: [
      [
        'dynamic-title',
        {
          showIcon: '/favicon.ico',
          showText: '(/≧▽≦/)咦！又好了！',
          hideIcon: '/failure.ico',
          hideText: '(●—●)喔哟，崩溃啦！',
          recoverTime: 2000,
        },
      ],
      [
        'cursor-effects',
        {
          size: 2, // size of the particle, default: 2
          shape: ['star' | 'circle'], // shape of the particle, default: 'star'
          zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
      ],
    ],
    //其他
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "AlanCorn_02",
    "authorAvatar": "/avatar.png",
    //"record": "xxxx",备案号
    "startYear": "2021",
    //404腾讯公益
    "noFoundPageByTencent": false
  },
  "markdown": {
    "lineNumbers": true
  }
}
