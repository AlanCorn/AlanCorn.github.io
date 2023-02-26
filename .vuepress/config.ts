import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "AlanCorn's Blog", //博客标题
  description: "欢迎光顾 🍬AlanCorn 的个人博客🥰", //描述
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "AlanCorn",
    authorAvatar: "/head.png",
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "/favicon.ico", //图标
        },
      ],
      [
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no",
        },
      ],
    ],
    // autoSetBlogCategories:"true",     // 自动设置文章分类
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    catalogTitle: "目录",
    lastUpdatedText: "",
    primaryColor: "#3aa675",
    // series 为原 sidebar
    // series: {
    //   "/docs/theme-reco/": [
    //     {
    //       text: "module one",
    //       children: ["home", "theme"],
    //     },
    //     {
    //       text: "module two",
    //       children: ["api", "plugin"],
    //     },
    //   ],
    // },
    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "Home",
      },
      { text: "分类", link: "/categories/gerenpeizhi/1/", icon: "Folders" },
      { text: "标签", link: "/tags/Linux/1/", icon: "Tag" },
      {
        text: "文档",
        icon: "Document",
        children: [
          {
            text: "VuePress",
            link: "https://vuepress.vuejs.org/guide/",
          },
          {
            text: "VuePress-reco",
            link: "https://vuepress-theme-reco.recoluan.com/",
          },
        ],
      },
      {
        text: "关于",
        icon: "Information",
        link: "/blogs/Other/About.md",
      },
      {
        text: "频道",
        icon: "Bullhorn",
        link: "https://t.me/s/AlanCorn_Share",
      },
    ],
    // 公告
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    //评论区设置
    // valineConfig: {
    //   appId: "W4etSMmQ8kOOJBaclLWpmKCC-gzGzoHsz", // your appId
    //   appKey: "pnVhrKPzvpnn9AtzYkKdffmv", // your appKey
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
