(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{562:function(t,v,_){"use strict";_.r(v);var r=_(12),d=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"git终端命令及解释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git终端命令及解释"}},[t._v("#")]),t._v(" Git终端命令及解释")]),t._v(" "),_("h2",{attrs:{id:"常用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用"}},[t._v("#")]),t._v(" 常用")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("git init")]),t._v(" "),_("td",[t._v("将当前文件夹初始化为Git仓库")])]),t._v(" "),_("tr",[_("td",[t._v("git add <file>")]),t._v(" "),_("td",[t._v("暂存文件")])]),t._v(" "),_("tr",[_("td",[t._v('git commit -m "message"')]),t._v(" "),_("td",[t._v("提交文件到仓库")])]),t._v(" "),_("tr",[_("td",[t._v("git status")]),t._v(" "),_("td",[t._v("查看仓库状态")])]),t._v(" "),_("tr",[_("td",[t._v('git config core.editor "vim"')]),t._v(" "),_("td",[t._v("默认编辑器设置为vim")])])])]),t._v(" "),_("h2",{attrs:{id:"版本控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[t._v("#")]),t._v(" 版本控制")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("git diff")]),t._v(" "),_("td",[t._v("查看修改行具体内容")])]),t._v(" "),_("tr",[_("td",[t._v("git log  （--pretty=oneline）")]),t._v(" "),_("td",[t._v("查看版本历史")])]),t._v(" "),_("tr",[_("td",[t._v("git log --graph --pretty=oneline --abbrev-commit")]),t._v(" "),_("td",[t._v("图形显示版本历史")])]),t._v(" "),_("tr",[_("td",[t._v("git commit --amend")]),t._v(" "),_("td",[t._v("修改最近一次commit信息")])]),t._v(" "),_("tr",[_("td",[t._v("git reset –hard <版本号ID/HEAD^/HEAD~12>")]),t._v(" "),_("td",[t._v("版本回退（-hard谨慎使用）")])]),t._v(" "),_("tr",[_("td",[t._v("git reflog")]),t._v(" "),_("td",[t._v("查看命令使用记录(可以间接回到未来版本)")])]),t._v(" "),_("tr",[_("td",[t._v("git checkout – file")]),t._v(" "),_("td",[t._v("丢弃工作区修改（若有暂存则回到暂存）")])]),t._v(" "),_("tr",[_("td",[t._v("git reset HEAD <file>")]),t._v(" "),_("td",[t._v("撤销暂存区文件")])])])]),t._v(" "),_("h2",{attrs:{id:"远程仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("git push (-u) <origin> [branch]")]),t._v(" "),_("td",[t._v("推送branch分支到(第一次推送加-u)")])]),t._v(" "),_("tr",[_("td",[t._v("git remote -v")]),t._v(" "),_("td",[t._v("查看远程库信息")])]),t._v(" "),_("tr",[_("td",[t._v("git remote rm <origin>")]),t._v(" "),_("td",[t._v("解除与origin的链接关系")])]),t._v(" "),_("tr",[_("td",[t._v("git remote add <origin> <url/ssh>")]),t._v(" "),_("td",[t._v("与远程库链接并标记远程仓库为origin")])]),t._v(" "),_("tr",[_("td",[t._v("git clone <url/ssh>")]),t._v(" "),_("td",[t._v("克隆远程库到工作目录")])])])]),t._v(" "),_("h2",{attrs:{id:"分支管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("git branch <branch>")]),t._v(" "),_("td",[t._v("创建新分支")])]),t._v(" "),_("tr",[_("td",[t._v("git switch <branch>")]),t._v(" "),_("td",[t._v("切换到一个分支")])]),t._v(" "),_("tr",[_("td",[t._v("git checkout <branch>")]),t._v(" "),_("td",[t._v("切换到一个分支")])]),t._v(" "),_("tr",[_("td",[t._v('git merge -m "message" <branch>')]),t._v(" "),_("td",[t._v("合并分支到当前分支")])]),t._v(" "),_("tr",[_("td",[t._v("git merge --no-ff branch")]),t._v(" "),_("td",[t._v("合并分支,并且之后可以查看到")])]),t._v(" "),_("tr",[_("td",[t._v("git branch -d <branch>")]),t._v(" "),_("td",[t._v("删除一个(合并之后的)分支")])]),t._v(" "),_("tr",[_("td",[t._v("git branch --set-upstream branch-name origin/branch-name")]),t._v(" "),_("td",[t._v("建立本地分支和远程分支的关联")])])])]),t._v(" "),_("h2",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("git stash")]),t._v(" "),_("td",[t._v("暂时保存当前的工作状态(类似计算机休眠)")])]),t._v(" "),_("tr",[_("td",[t._v("git stash list")]),t._v(" "),_("td",[t._v("列出之前保存的工作状态")])]),t._v(" "),_("tr",[_("td",[t._v("git stash apply")]),t._v(" "),_("td",[t._v("恢复到某个工作状态")])]),t._v(" "),_("tr",[_("td",[t._v("git stash drop")]),t._v(" "),_("td",[t._v("删除某个工作状态")])]),t._v(" "),_("tr",[_("td",[t._v("git stash pop")]),t._v(" "),_("td",[t._v("恢复并且删除")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("git tag <v1.0>")]),t._v(" "),_("td",[t._v("给最新的commit打上<v1.0>的标签")])]),t._v(" "),_("tr",[_("td",[t._v("git tag <v0.9> <commitID>")]),t._v(" "),_("td",[t._v("给指定commit打上<0.9>的标签")])]),t._v(" "),_("tr",[_("td",[t._v("git tag -d <v1.0>")]),t._v(" "),_("td",[t._v("删除<v1.0>标签")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);