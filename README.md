---
home: true
modules:
  - BannerBrand
  - Blog
  # - MdContent
  - Footer
  # - Banner
banner: # banner 模块的配置
  heroText: 午后南杂
  tagline: Enjoy when you can, and endure when you must.
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /banner.jpg
  bgImageStyle:
    height: 450px
bannerBrand:
  bgImage: '/bg.svg'
  title: AlanCorn' Blog
  description:  欢迎光顾 🍬AlanCorn 的个人博客🥰
  # tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  # buttons:
  #   - { text: Guide, link: '/docs/guide/introduce' }
  #   - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
  socialLinks: [  
    { icon: 'LogoGithub', link: 'https://github.com/AlanCorn' },
    { icon: 'LogoTwitter', link: 'https://twitter.com/AlanCorn_02' },
    { icon: 'Chat', link: 'https://t.me/alancorn_msg_bot' },
    { icon: 'Bullhorn', link: '"https://t.me/s/AlanCorn_Share"' },
    { icon: 'Email', link: '/blogs/Other/Envelope' }
  ]
blog:
  socialLinks: [
    { icon: 'LogoGithub', link: 'https://github.com/AlanCorn' },
    { icon: 'LogoTwitter', link: 'https://twitter.com/AlanCorn_02' },
    { icon: 'Chat', link: 'https://t.me/alancorn_msg_bot' },
    { icon: 'Bullhorn', link: '"https://t.me/s/AlanCorn_Share"' },
    { icon: 'Email', link: '/blogs/Other/Envelope' }
  ]
footer: # 底部模块的配置
  # record: 域名备案文案
  # recordLink: 域名备案地址
  # cyberSecurityRecord: 公安备案文案
  # cyberSecurityLink: 公安备案地址
  startYear: 2021

isShowTitleInHome: false
actionText: About
actionLink: /views/other/about
---
<!-- 
## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
``` -->
