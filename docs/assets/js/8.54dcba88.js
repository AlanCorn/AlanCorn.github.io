(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{431:function(t,a,s){t.exports=s.p+"assets/img/2022-02-17-19-02-52.be40ebf9.png"},432:function(t,a,s){t.exports=s.p+"assets/img/2022-02-17-19-11-13.8272217b.png"},433:function(t,a,s){t.exports=s.p+"assets/img/2022-02-17-19-14-29.87d8ebd8.png"},434:function(t,a,s){t.exports=s.p+"assets/img/2022-02-17-19-17-47.9b2c7985.png"},435:function(t,a,s){t.exports=s.p+"assets/img/2022-02-17-19-22-35.e8b2052a.png"},436:function(t,a,s){t.exports=s.p+"assets/img/2022-02-17-19-35-29.33f0bbee.png"},437:function(t,a,s){t.exports=s.p+"assets/img/2022-02-17-19-52-37.4fa579c4.png"},480:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、引言"}},[t._v("#")]),t._v(" 一、引言")]),t._v(" "),a("p",[t._v("家里的一台用了七八年老电脑(宏碁的一款)主板坏了没办法用，于是扒了一块256G的SSD，经过测试速度还可以，准备用来做一个Windows To Go，留作备用以及起到补全Linux生态的作用。"),a("br"),t._v("\n说是Win To go,不过实际上只是借用了Ventory引导VHD虚拟磁盘文件的功能，但这种实现方式更具灵活性且方便管理，具体的体现有对磁盘分区的管理方式，跟便于迁移、备份等。")]),t._v(" "),a("h2",{attrs:{id:"二、准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、准备"}},[t._v("#")]),t._v(" 二、准备")]),t._v(" "),a("ol",[a("li",[t._v("SSD+硬盘盒")]),t._v(" "),a("li",[t._v("Windows10镜像:"),a("a",{attrs:{href:"https://next.itellyou.cn/Original/Index",target:"_blank",rel:"noopener noreferrer"}},[t._v("MSDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("VirtualBox")]),t._v(" "),a("li",[t._v("Ventoy")]),t._v(" "),a("li",[t._v("GParted")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" virtualbox\nyay "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" ventoy-bin\npacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gparted")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"三、步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、步骤"}},[t._v("#")]),t._v(" 三、步骤")]),t._v(" "),a("h3",{attrs:{id:"一-、通过virtualbox安装windows虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-、通过virtualbox安装windows虚拟机"}},[t._v("#")]),t._v(" (一)、通过VirtualBox安装Windows虚拟机")]),t._v(" "),a("p",[t._v("注意虚拟硬盘类型选择VHD，选择动态分配大小(推荐)/固定大小，分配空间不超过VHD所存放的分区的总大小。"),a("br"),t._v(" "),a("img",{attrs:{src:s(431),alt:""}}),a("br"),t._v("\n打开虚拟机设置，系统->主板->拓展特性中勾选“启用EFI”和“硬件时间使用国际标准时间(UTC)”\n之后只需要正常将Windows安装完成即可")]),t._v(" "),a("h3",{attrs:{id:"二-、使用ventoy格式化可移动存储设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-、使用ventoy格式化可移动存储设备"}},[t._v("#")]),t._v(" (二)、使用Ventoy格式化可移动存储设备")]),t._v(" "),a("ol",[a("li",[t._v("使用Ventory的GUI程序，检查目标是否正确"),a("br"),t._v(" "),a("img",{attrs:{src:s(432),alt:""}})]),t._v(" "),a("li",[t._v("配置选项中将分区类型改为GPT")]),t._v(" "),a("li",[t._v("分区设置中设置好在磁盘最后保留一段空间，我设置了100GB"),a("br"),t._v(" "),a("img",{attrs:{src:s(433),alt:""}}),a("br"),t._v("\n4.确认无误后选择安装"),a("br"),t._v("\n于是我们得到了一块内置Ventoy硬盘"),a("br"),t._v(" "),a("img",{attrs:{src:s(434),alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"三-、使用gparted格式化分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-、使用gparted格式化分区"}},[t._v("#")]),t._v(" (三)、使用GParted格式化分区")]),t._v(" "),a("p",[t._v("引导VHD格式的Windows系统需要放在NTFS文件系统的分区中，默认情况下Ventoy分区是ext4类型，我们可以直接把第一个分区(名称为Ventoy)格式化成NTFS。(注意需要先卸载才能进行格式化)"),a("br"),t._v(" "),a("img",{attrs:{src:s(435),alt:""}}),a("br"),t._v("\n顺便将之前预留的100GB格式化出第三个分区，我这里依然选择NTFS，充当Windows的数据盘(D盘)。根据自己的需求可以选择其他格式")]),t._v(" "),a("h3",{attrs:{id:"四-、安装ventoy-windows-vhd-文件启动插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-、安装ventoy-windows-vhd-文件启动插件"}},[t._v("#")]),t._v(" (四)、安装Ventoy Windows VHD 文件启动插件")]),t._v(" "),a("blockquote",[a("p",[t._v("参考"),a("a",{attrs:{href:"https://www.ventoy.net/cn/plugin_vhdboot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("从"),a("a",{attrs:{href:"https://github.com/ventoy/vhdiso/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1),t._v("中下载 ventoy_vhdboot.img 文件\n把下载后的文件放在U盘第1个分区（就是放ISO文件的分区）的 ventoy 目录下（默认没有这个目录，需手动创建，注意大小写），即 /ventoy/ventoy_vhdboot.img 就可以了")]),t._v(" "),a("h3",{attrs:{id:"五-、将vhd文件放入ventory分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-、将vhd文件放入ventory分区"}},[t._v("#")]),t._v(" (五)、将VHD文件放入Ventory分区")]),t._v(" "),a("p",[t._v("直接拷贝先前VirtualBox创建的虚拟机的VHD即可(不需要是根目录),最后差不多是这样"),a("br"),t._v(" "),a("img",{attrs:{src:s(436),alt:""}})]),t._v(" "),a("h3",{attrs:{id:"六-、启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-、启动"}},[t._v("#")]),t._v(" (六)、启动")]),t._v(" "),a("p",[t._v("将Win To Go插入电脑，进入快速启动菜单(F12),选择对应的启动设备进入Ventoy的Grub界面，之后选择对应的VHD文件启动即可进入Wiindows")]),t._v(" "),a("h3",{attrs:{id:"七-、windows下的一些配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-、windows下的一些配置"}},[t._v("#")]),t._v(" (七)、Windows下的一些配置")]),t._v(" "),a("p",[t._v("更新驱动、安装软件、进入磁盘管理并删除不必要的盘符")]),t._v(" "),a("h2",{attrs:{id:"四、存储结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、存储结构"}},[t._v("#")]),t._v(" 四、存储结构")]),t._v(" "),a("p",[a("img",{attrs:{src:s(437),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"五、可能出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、可能出现的问题"}},[t._v("#")]),t._v(" 五、可能出现的问题")]),t._v(" "),a("ol",[a("li",[t._v("Linux Windows 时间不一致(一般相差8小时),如果步骤(一)中有记得勾选“硬件时间使用国际标准时间(UTC)”的话应该不会出现这个问题不过笔者没试验过，因此把解决方法贴在这里："),a("a",{attrs:{href:"https://eason0210.github.io/post/clock-issue-with-dual-system/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux Windows 时间不一致"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);