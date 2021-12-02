//插件设置
module.exports = [
  ['dynamic-title', {
    showIcon: '/favicon.ico',
    showText: '(/≧▽≦/)咦！又好了！',
    hideIcon: '/failure.ico',
    hideText: '(●—●)喔哟，崩溃啦！',
    recoverTime: 2000,
  },
  ],
  ['cursor-effects', {
    size: 2, // size of the particle, default: 2
    shape: ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  },
  ],
  ['@vuepress-reco/vuepress-plugin-rss', {
    //RSS
    site_url: "https://alancorn.github.io",
  }]
]