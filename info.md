# git 是什么?

集中式版本控制系统（cvcs）=> svn
分布式版本控制系统（dvcs）=> git

# git 的作用?

在项目开发的进程中 对值得记录的时间节点进行“备份” 方便后期恢复（后悔药）
方便团队协作开发

# git 管理文件的三种状态?

Git 有三种状态，你的文件可能处于其中之一：

- 已修改（modified）：表示修改(新增、更新、删除)了文件，但还没保存到数据库中。（红色）
- 已暂存（staged）：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
- 已提交（committed）：表示数据已经安全地保存在本地数据库中。
  这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。

# 初次运行 Git 前的配置

_配置用户名和邮箱_

```bash
git config --global user.name "shenhongchun"
git config --global user.email "cc_0820@163.com"
```

_查看配置信息_

```bash
git config --list
git config user.name
git config user.email
```

# 获取 Git 仓库（repo）

- 自行初始化 git 仓库 （git init）
- 克隆远程（服务器）仓库 (git clone 【repo_url】)
  git clone http://192.168.122.33:3080/shenhongchun/SLXM.git

  U（Untracked） 未跟踪（新增）
  A（added）
  M（modified） 跟踪后被修改

# 创建快照（备份）

git add . 将所有文件放到暂存区（经常做的）
git commit -m "提交信息" 将暂存区文件提交到仓库（某个功能完成的时候/在必要时候提交）

【工作区】 ----git add .--> 【暂存区】---- git commit -m "xxxx" -----> 【repo】
【工作区】 ----git commit -a -m "xxx" -----> 【repo】(vim 编辑器操作)

git reset --soft commit_id 将当前版本的内容回退到暂存区
git reset --hard commit_id 将当前版本的内容删除
git reset commit_id (默认) 将当前版本的内容回退工作区
HEAD => 当前版本
HEAD^ => 当前版本的上一个版本
HEAD ～ n => 当前版本的上 n 个版本
【暂存区】<---- git reset --soft commit_id ----- 【repo】
【工作区】<---- git reset commit_id ----- 【repo】
【移除】<---- git reset --hard commit_id ----- 【repo】

我们今天要学习的命令：
分支 branch 相关：

- 查看本地仓库分支 git branch -v
- 查看本地仓库及关联仓库的所有分支 git branch -a
- 分支前带`*`表示你现在所处的分支（你的修改 你的提交都会影响该分支）
- 新建分支 git branch <branch_name>
- 分支间是相互独立且隔离的。
- 删除分支 git brach -d <branch_name>
- 强制删除分支 git brach -D <branch_name>
- 切换分支 git checkout <branch_name>
- 创建并切换该分支 git checkout -b <branch_name>

git commit -a -m "xxx" （不适用于新增的文件[从未做过一个 add 操作]）
