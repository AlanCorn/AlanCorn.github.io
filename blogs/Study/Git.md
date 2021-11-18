---
title: Git学习笔记
date: 2021-7-22
tags:
 - Git
categories:
 - 学习笔记
---
# Git终端命令及解释

## 常用

| 命令                         | 功能                        |
| ---------------------------- | --------------------------- |
| git init                     | 将当前文件夹初始化为Git仓库 |
| git add \<file>              | 暂存文件                    |
| git commit -m "message"      | 提交文件到仓库              |
| git status                   | 查看仓库状态                |
| git config core.editor "vim" | 默认编辑器设置为vim         |

## 版本控制

| 命令                                             | 功能                                   |
| ------------------------------------------------ | -------------------------------------- |
| git diff                                         | 查看修改行具体内容                     |
| git log  （--pretty=oneline）                    | 查看版本历史                           |
| git log --graph --pretty=oneline --abbrev-commit | 图形显示版本历史                       |
| git commit --amend                               | 修改最近一次commit信息                 |
| git reset –hard <版本号ID/HEAD^/HEAD~12>         | 版本回退（-hard谨慎使用）              |
| git reflog                                       | 查看命令使用记录(可以间接回到未来版本) |
| git checkout – file                              | 丢弃工作区修改（若有暂存则回到暂存）   |
| git reset HEAD \<file>                           | 撤销暂存区文件                         |

## 远程仓库

| 命令                                | 功能                               |
| ----------------------------------- | ---------------------------------- |
| git push (-u) \<origin> [branch]    | 推送branch分支到(第一次推送加-u)   |
| git remote -v                       | 查看远程库信息                     |
| git remote rm \<origin>             | 解除与origin的链接关系             |
| git remote add \<origin> \<url/ssh> | 与远程库链接并标记远程仓库为origin |
| git clone \<url/ssh>                | 克隆远程库到工作目录               |

## 分支管理

| 命令                                                     | 功能                         |
| -------------------------------------------------------- | ---------------------------- |
| git branch \<branch>                                     | 创建新分支                   |
| git switch \<branch>                                     | 切换到一个分支               |
| git checkout \<branch>                                   | 切换到一个分支               |
| git merge -m "message" \<branch>                         | 合并分支到当前分支           |
| git merge --no-ff branch                                 | 合并分支,并且之后可以查看到  |
| git branch -d \<branch>                                  | 删除一个(合并之后的)分支     |
| git branch --set-upstream branch-name origin/branch-name | 建立本地分支和远程分支的关联 |

## 其他

| 命令                        | 功能                                   |
| --------------------------- | -------------------------------------- |
| git stash                   | 暂时保存当前的工作状态(类似计算机休眠) |
| git stash list              | 列出之前保存的工作状态                 |
| git stash apply             | 恢复到某个工作状态                     |
| git stash drop              | 删除某个工作状态                       |
| git stash pop               | 恢复并且删除                           |
|                             |
| git tag \<v1.0>             | 给最新的commit打上\<v1.0>的标签        |
| git tag \<v0.9> \<commitID> | 给指定commit打上<0.9>的标签            |
| git tag -d \<v1.0>          | 删除<v1.0>标签                         |
