//插件设置
module.exports = [
  ['dynamic-title', {
    showIcon: '/favicon.ico',
    showText: '(｡･∀･)ﾉﾞAlanCorn\'s Blog',
    hideIcon: '/favicon.ico',
    hideText: '(´･_･`)AlanCorn\'s Blog',
    recoverTime: 2000,
  }],
  ['cursor-effects', {
    size: 2, // size of the particle, default: 2
    shape: ['star'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  }],
  ['@vuepress-reco/vuepress-plugin-rss', {
    //RSS
    site_url: "https://alancorn.github.io",
  }]
]