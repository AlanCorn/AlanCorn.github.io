import{_ as r}from"./2022-04-23-15-24-24-4a0025f3.js";import{_ as t,p as d,q as h,s as e,R as a,t as n,Y as s,n as l}from"./framework-e1bed10d.js";const o="/assets/2022-12-04-16-59-16-09fa6e85.png",c={},u=s('<h2 id="相比于oh-my-fish" tabindex="-1"><a class="header-anchor" href="#相比于oh-my-fish" aria-hidden="true">#</a> 相比于oh-my-fish</h2><p>相比于oh-my-fish，fisher最突出的优点就在于轻量级，并且不那么具有“破坏性”，oh-my-fish会让fish的配置文件变得繁琐(如新产生的init.fish文件)<br> 而fisher在实现oh-my-fish几乎所有功能的同时不改变fish原有的配置目录结构</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="fish与fisher" tabindex="-1"><a class="header-anchor" href="#fish与fisher" aria-hidden="true">#</a> fish与fisher</h3>',4),p={href:"https://github.com/jorgebucaran/fisher",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> fish
<span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://git.io/fisher <span class="token operator">|</span> <span class="token builtin class-name">source</span> <span class="token operator">&amp;&amp;</span> fisher <span class="token function">install</span> jorgebucaran/fisher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更改默认shell" tabindex="-1"><a class="header-anchor" href="#更改默认shell" aria-hidden="true">#</a> 更改默认shell</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chsh <span class="token parameter variable">-l</span>               //列出可用shell
chsh <span class="token parameter variable">-s</span> /bin/fish     //设置shell为/bin/fish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>chsh设置的是命令行终端下的默认shell，使用图形化界面的用户应当同步更改终端模拟器(如kde的konsole)的配置方案 <img src="`+r+'" alt=""></p><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2>',5),f={href:"https://github.com/jorgebucaran/awsm.fish",target:"_blank",rel:"noopener noreferrer"},b=s(`<h3 id="更改外观与配色-prompts" tabindex="-1"><a class="header-anchor" href="#更改外观与配色-prompts" aria-hidden="true">#</a> 更改外观与配色[Prompts]</h3><h4 id="tide" tabindex="-1"><a class="header-anchor" href="#tide" aria-hidden="true">#</a> tide</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fisher install IlanCosman/tide@v5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行输入<code>tide configure</code>，根据提示选择即可完成配置，整个过程就像是填一份问卷</p><h3 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h3>`,5),v={href:"https://github.com/jorgebucaran/nvm.fish",target:"_blank",rel:"noopener noreferrer"},g=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fisher install jorgebucaran/nvm.fish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="z" tabindex="-1"><a class="header-anchor" href="#z" aria-hidden="true">#</a> z</h3><p>一个快速切换常用目录的工具。使用<code>z [keyword]</code>可匹配最近切换过的目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fisher install jethrokuan/z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就像这样<br><img src="`+o+`" alt=""></p><h3 id="done" tabindex="-1"><a class="header-anchor" href="#done" aria-hidden="true">#</a> Done</h3><p>一个非常有意思的插件，他会在命令执行完毕之后发送一条通知</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fisher install franciscolourenco/done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="autopair" tabindex="-1"><a class="header-anchor" href="#autopair" aria-hidden="true">#</a> autopair</h3><p>他能帮你自动补上右括号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fisher install jorgebucaran/autopair.fish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="abbreviation-tips" tabindex="-1"><a class="header-anchor" href="#abbreviation-tips" aria-hidden="true">#</a> Abbreviation Tips</h3><p>如果你有在<code>~/.config/fish/config.fish</code>之中使用abbr配置别名(类似alias，但会显示原本的命令)，他会在你使用原本命令的情况下提示有可替代的别名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fisher install gazorby/fish-abbreviation-tips
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14);function x(_,k){const i=l("ExternalLinkIcon");return d(),h("div",null,[u,e("blockquote",null,[e("p",null,[a("参考"),e("a",p,[a("fisher"),n(i)])])]),m,e("blockquote",null,[e("p",null,[a("更多插件参考"),e("a",f,[a("awsm.fish"),n(i)]),a(" 安装完成后，可以发现和默认的fish似乎没什么区别，这是正常的，毕竟fisher只是个插件管理工具，下面介绍几个常用的插件")])]),b,e("p",null,[a("nvm是一个node版本管理与切换的工具，我们可直接以fisher插件的形式使用，支持.nvmrc，功能简单而强大，使用说明参考："),e("a",v,[a("nvm.fish"),n(i)])]),g])}const z=t(c,[["render",x],["__file","Fisher.html.vue"]]);export{z as default};
