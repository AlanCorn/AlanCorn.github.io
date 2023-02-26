(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{342:function(s,a,t){s.exports=t.p+"assets/img/2022-07-07-15-37-52.84f8d12e.png"},470:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("最近Github似乎更新了ssh key的相关服务，我突然无法正常地"),a("code",[s._v("clone")]),s._v(" 与 "),a("code",[s._v("push")]),s._v("了，似乎和我使用了代理有关，我重新配置了ssh_key,顺便更新一下教程。")]),s._v(" "),a("h2",{attrs:{id:"简易配置过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简易配置过程"}},[s._v("#")]),s._v(" 简易配置过程")]),s._v(" "),a("blockquote",[a("p",[s._v("本文适用的环境为Linux,Windows与MacOS移步官方文档\n官方教程见"),a("a",{attrs:{href:"https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/about-ssh",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github SSH key"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"配置步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置步骤"}},[s._v("#")]),s._v(" 配置步骤")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("email与username配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yourname"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"youremail@163.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("生成SSH密钥")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入保存位置与密码(可选)")])]),s._v(" "),a("li",[a("p",[s._v("添加密钥到ssh代理")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在后台启动ssh代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加私钥到ssh代理")]),s._v("\nssh-add ~/.ssh/id_ed25519\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("记得切换成bash或者zsh环境，比如我在fish环境下执行这条命令就得到了一条报错")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("在Github网站上配置公钥")]),s._v(" "),a("p",[s._v("进入Settings/SSH and GPG keys，点击New SSH Key，cat查看公钥(id_ed25519.pub)并复制上去")])]),s._v(" "),a("li",[a("p",[s._v("验证是否能够连接到Github")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@github.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("p",[s._v("在代理环境下，可能会得到下面这样的报错，我就是因为这个问题导致的不能正常clone与push\n"),a("img",{attrs:{src:t(342),alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("官方文档："),a("a",{attrs:{href:"https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 HTTPS 端口使用 SSH"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);