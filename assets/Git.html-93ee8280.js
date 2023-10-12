import{_ as t,p as d,q as r,Y as e}from"./framework-e1bed10d.js";const a={},i=e('<h1 id="git终端命令及解释" tabindex="-1"><a class="header-anchor" href="#git终端命令及解释" aria-hidden="true">#</a> Git终端命令及解释</h1><h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h2><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td>git init</td><td>将当前文件夹初始化为Git仓库</td></tr><tr><td>git add&lt;file&gt;</td><td>暂存文件</td></tr><tr><td>git commit -m &quot;message&quot;</td><td>提交文件到仓库</td></tr><tr><td>git status</td><td>查看仓库状态</td></tr><tr><td>git config core.editor &quot;vim&quot;</td><td>默认编辑器设置为vim</td></tr></tbody></table><h2 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h2><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td>git diff</td><td>查看修改行具体内容</td></tr><tr><td>git log （--pretty=oneline）</td><td>查看版本历史</td></tr><tr><td>git log --graph --pretty=oneline --abbrev-commit</td><td>图形显示版本历史</td></tr><tr><td>git commit --amend</td><td>修改最近一次commit信息</td></tr><tr><td>git reset –-hard &lt;版本号ID/HEAD^/HEAD~12&gt;</td><td>版本回退（-hard谨慎使用）</td></tr><tr><td>git reflog</td><td>查看命令使用记录(可以间接回到未来版本)</td></tr><tr><td>git checkout – file</td><td>丢弃工作区修改（若有暂存则回到暂存）</td></tr><tr><td>git reset HEAD&lt;file&gt;</td><td>撤销暂存区文件</td></tr></tbody></table><h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td>git push (-u)&lt;origin&gt; [branch]</td><td>推送branch分支到(第一次推送加-u)</td></tr><tr><td>git remote -v</td><td>查看远程库信息</td></tr><tr><td>git remote rm&lt;origin&gt;</td><td>解除与origin的链接关系</td></tr><tr><td>git remote add&lt;origin&gt; &lt;url/ssh&gt;</td><td>与远程库链接并标记远程仓库为origin</td></tr><tr><td>git clone&lt;url/ssh&gt;</td><td>克隆远程库到工作目录</td></tr></tbody></table><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td>git branch&lt;branch&gt;</td><td>创建新分支</td></tr><tr><td>git switch&lt;branch&gt;</td><td>切换到一个分支</td></tr><tr><td>git checkout&lt;branch&gt;</td><td>切换到一个分支</td></tr><tr><td>git merge -m &quot;message&quot;&lt;branch&gt;</td><td>合并分支到当前分支</td></tr><tr><td>git merge --no-ff branch</td><td>合并分支,并且之后可以查看到</td></tr><tr><td>git branch -d&lt;branch&gt;</td><td>删除一个(合并之后的)分支</td></tr><tr><td>git branch --set-upstream branch-name origin/branch-name</td><td>建立本地分支和远程分支的关联</td></tr></tbody></table><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td>git stash</td><td>暂时保存当前的工作状态(类似计算机休眠)</td></tr><tr><td>git stash list</td><td>列出之前保存的工作状态</td></tr><tr><td>git stash apply</td><td>恢复到某个工作状态</td></tr><tr><td>git stash drop</td><td>删除某个工作状态</td></tr><tr><td>git stash pop</td><td>恢复并且删除</td></tr><tr><td></td><td></td></tr><tr><td>git tag&lt;v1.0&gt;</td><td>给最新的commit打上&lt;v1.0&gt;的标签</td></tr><tr><td>git tag&lt;v0.9&gt; &lt;commitID&gt;</td><td>给指定commit打上&lt;0.9&gt;的标签</td></tr><tr><td>git tag -d&lt;v1.0&gt;</td><td>删除&lt;v1.0&gt;标签</td></tr></tbody></table>',11),h=[i];function g(o,n){return d(),r("div",null,h)}const c=t(a,[["render",g],["__file","Git.html.vue"]]);export{c as default};
