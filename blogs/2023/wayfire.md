---
title: Wayfire相关配置与美化方案
date: 2023-2-25
tags:
  - Linux
  - Archlinux
  - Wayfire
categories:
  - 个人配置
  - 问题记录
---
![](https://user-images.githubusercontent.com/80396543/196081729-31fdc2db-270d-417e-b3e8-c8c52c606435.png)

> 参阅 https://github.com/WayfireWM/wayfire/wiki  
> wayfire配置文件位置：```~/.config/wayfire.ini```  
> 我的dotfiles仓库：https://github.com/AlanCorn/dotfiles

## 安装Wayfire WM
在Aur中可选择的有```wayfire```和```wayfire-git```两个版本，区别不大，就之前使用的经验而论，可能它们的特性(Bug)不一样，选择版本号比较新的即可  
其他发行版的安装方式请参阅文首的wiki

```
paru -S wayfire
```
> paru作为aur helper，其用法和yay基本一致  

安装完成后，如果你正处于其他桌面环境(如KDE、Gnome、I3等)，可以直接在终端模拟器输入wayfire来启动，它会创建一个新的窗口  
如果你没有事先进行配置，你应该会看到一个黑漆漆的没有内容的窗口，不用担心，接下来我们来介绍如何配置wayfire  

## wayfire配置
默认情况下```.config```目录下是不存在```wayfire.ini```配置文件的，你可以按照wiki里的做法拷贝一份官方的wayfire.ini配置文件进行自己的配置  
当然，我更加推荐你直接复制我的来

接下来将按照官方配置文件的顺序来逐个讲解，以获得最适合你的配置

## [input]配置键盘与鼠标

这一部分有关于键盘、鼠标以及触控板的配置，同样可以配置的很多，基本上默认的就足够用了
```
# ~/.config/wayfire.ini
[input]
xkb_layout = us                   # 键盘格式
# xkb_variant = dvorak,bepo       # 键盘变体，除了默认的qwer式的布局之外的其他，一般不需要配置
kb_numlock_default_state = true   # 键盘数字锁默认是否开启
mouse_accel_profile = adaptive    # 关于鼠标速度的配置方案，adaptive意为“适应”
cursor_theme = Adwaita            # 鼠标指针样式
cursor_size = 24                  # 鼠标指针大小，默认为24
```

## [output]配置显示输出

wayfire是个对多显示屏支持良好的桌面环境，如果你有多个显示器，务必要仔细进行配置
当然，你也可以尝试使用kanshi来进行自动的显示器配置，这需要安装kanshi，这在后文有所提及
```
# ~/.config/wayfire.ini

[output:eDP-1]
#屏幕输出分辨率，位置，方向，缩放等
mode = 1920x1080@60000
position = 0,0
transform = normal
scale = 1.000000

[output:HDMI-A-1]
mode = 2560x1440@60000
position = 1920,0
transform = normal
scale = 1.000000

# You can get the names of your outputs with wlr-randr.
# 你可以通过wlr-randr来查看你的显示器名
# https://github.com/emersion/wlr-randr
#
# See also kanshi for configuring your outputs automatically.
# https://wayland.emersion.fr/kanshi/
#
# See Output options for a complete reference.
# https://github.com/WayfireWM/wayfire/wiki/Configuration#output
```
## [core]核心选项与插件配置

这一部分主要包含插件配置，其中包括有桌面动效、窗口管理方式等  
比如说，你可能疑惑自己的wayfire不是平铺式的窗口管理模式，那是因为没有加入```simple-tile```插件
```
# ~/.config/wayfire.ini

[core]
# List of plugins to be enabled.
# See the Configuration document for a complete list.
plugins = \
  alpha \
  animate \
  autostart \
  blur \        # blur 默认配置中不开启，因为它可能会占用大量资源，但这里已开启
  command \
  cube \
  decoration \
  expo \
  fast-switcher \
  fisheye \
  grid \
  idle \
  invert \
  move \
  oswitch \
  place \
  resize \
  switcher \
  vswitch \
  window-rules \
  wm-actions \
  wobbly \
  wrot \
  zoom \
  simple-tile         # 窗口平铺

close_top_view = <super> KEY_X | <alt> KEY_F4   # 关闭窗口的快捷键

# 工作区间数量比例
vwidth = 2
vheight = 2

# Prefer client-side decoration or server-side decoration
preferred_decoration_mode = server    # 首选窗口装饰，server去除了窗口标题栏，默认为client

```
可以看到插件的数量非常多，因为实际上wayfire只是一个```基于Wayland的3D混成器```，因此以插件的形式，提供一种模块化的配置方式
这些配置影响的有按键绑定、桌面样式等

### 1. 窗口平铺设置[simple-tile]
[wiki](https://github.com/WayfireWM/wayfire/wiki/Configuration#simple-tile)
```
# ~/.config/wayfire.ini

[simple-tile]
# 设置平铺窗口间隔
outer_horiz_gap_size = 4
outer_vert_gap_size = 4
```
### 2. 桌面特效[animate]

[wiki](https://github.com/WayfireWM/wayfire/wiki/Configuration#animate)

```
# ~/.config/wayfire.ini

[animate]
open_animation = fade     # 窗口打开特效,可选的还有zoom、fire、none
close_animation = fade    # 窗口关闭特效
duration = 200            # 持续时间
```
### 3. 窗口装饰[decoration]
[wiki](https://github.com/WayfireWM/wayfire/wiki/Configuration#decoration)
给窗口加一个外边框，让处于焦点的窗口颜色突出显示作为区分

```
# ~/.config/wayfire.ini

[decoration]
title_height =  0                                 # 标题栏高度
active_color = 0.36862745 0.505882 0.67450 1      # 焦点窗口
inactive_color = 0.298039215 0.33725490196078434 0.41568627450980394 1
```

### 4. 窗口移动绑定[move]
[wiki](https://github.com/WayfireWM/wayfire/wiki/Configuration#move)
```
[move]
# ~/.config/wayfire.ini

activate = <super> BTN_LEFT     # 窗口移动，super+左键 BTN_LEFT是鼠标左键
```

### 5. 更改窗口大小[resize]

```
# ~/.config/wayfire.ini

[resize]
activate = <super> BTN_RIGHT    # 窗口大小，super+右键
```
### 6. 放大镜[zoom]
```
# ~/.config/wayfire.ini

[zoom]
modifier = <super>              # 缩放(放大镜) super+滚轮
speed = 0.010000
smoothing_duration = 300
```

### 7. 窗口透明度[alpha]


```
# ~/.config/wayfire.ini

[alpha]
modifier = <super> <alt>        # 窗口透明度 super+alt+滚轮
```

### 8. 窗口旋转[wrot]

在wayfire,你甚至可以旋转自己的窗口，不觉得这很酷吗，作为一个理工男我觉得这简直太酷了
```
# ~/.config/wayfire.ini

[wrot]
activate = <super> <alt> BTN_RIGHT  # 窗口旋转 super+alt+右键
```

### 9. 鱼眼[fisheye]

```
# ~/.config/wayfire.ini

[fisheye]
toggle = <super> <ctrl> KEY_F
```

### 10.自启动[autostart]
```
paru -S kanshi fcitx5 waybar swaybg mako
```


包括输入法、壁纸、waybar等都可以在这里配置  
首先需要先确保```autostart_wf_shell```选项设置为ture

```
# ~/.config/wayfire.ini

# 自启
[autostart]
# Automatically start background and panel.
# Set to false if you want to override the default clients.
#
# Set the wallpaper, start a panel and dock if you want one.
# https://github.com/WayfireWM/wf-shell
#
# These are started by the autostart_wf_shell option above.
#
# 确认开启自启
autostart_wf_shell = true
```


#### **a. 壁纸配置**

wayfire默认使用的是wpaperd，而笔者使用的是swaybg来做演示，可根据自身需求选择
```
paru -S swaybg
```

```
# ~/.config/wayfire.ini

# 1. 指定单张壁纸
background = swaybg -i /home/alancorn/Pictures/95499772_p0.png -m fill
# 2. 随机壁纸(从targetDir目录下随即选择一张作为壁纸)
# background = swaybg -i $(find [targetDir] -type f | shuf -n1) -m fill
# 3. 指定时间自动更换壁纸
# 方法有很多，如果有需要可以自己写个脚本
# 4. 视频壁纸,有兴趣可自行折腾一下
# eDP-1_video_background = mpvpaper -p -n 50 -o "no-audio loop loop-playlist" eDP-1 ~/Moichi_Lin/wallpaper/mpvpaper/
# HDMI_video_background = mpvpaper -p -n 50 -o "no-audio loop loop-playlist" HDMI-A-1 ~/Moichi_Lin/wallpaper/mpvpaper/

```
#### **b. 桌面工具栏配置**

可以选择分别根据需求配置bar、panel、dock等  
笔者倾向于使用waybar
```
paru -S waybar
```
```
# ~/.config/wayfire.ini

bar = waybar
# panel = wf-panel
# dock = wf-dock
```

#### **c. 输入法**
直接用我在kde上常用的fcitx5输入法

```
paru -S fcitx5
```

```
# ~/.config/wayfire.ini

# 输入法
inputmethod = fcitx5
```

#### **d. 自适应屏幕输出**
```
paru -S kanshi
```

```
# ~/.config/wayfire.ini

# Output configuration
# 屏幕输出
# https://wayland.emersion.fr/kanshi/
outputs = kanshi
```

#### **e. 消息通知**
```
paru -S mako
```
```
# ~/.config/wayfire.ini

# Notifications
# 通知
# https://wayland.emersion.fr/mako/
notifications = mako
```

#### **f. 屏幕色温**
```
# ~/.config/wayfire.ini

# Screen color temperature
# 屏幕色温 已关闭，启用时请安装 wlsunset
# https://sr.ht/~kennylevinsen/wlsunset/
# gamma = wlsunset
```

#### **g. 空闲设置**
即休眠和锁屏配置
```
paru -S swayidle swaylock
```
```
# ~/.config/wayfire.ini

# Idle configuration
# 空闲设置
# https://github.com/swaywm/swayidle
# https://github.com/swaywm/swaylock
idle = swayidle before-sleep swaylock
```
#### **h. XDG desktop portal**
默认配置中的内容，似乎没什么影响，姑且保留了
```
# ~/.config/wayfire.ini

# XDG desktop portal
# Needed by some GTK applications
portal = /usr/libexec/xdg-desktop-portal
```

### 11.休眠设置[autostart]

```
# ~/.config/wayfire.ini

[idle]
# toggle = <super> KEY_L          
screensaver_timeout = 300       # 无活动300秒锁屏
dpms_timeout = 600              # 无活动600秒静如节能模式
# Disables the compositor going idle with Super + z.
# This will lock your screen after 300 seconds of inactivity, then turn off
# your displays after another 300 seconds.
```

### 12. 自定义命令[command]
```
paru -S thunar brightnessctl rofi alacritty grim slurp amixer  wl-clipboard
```
主要是一些快捷键

```
# ~/.config/wayfire.ini

# 自定义命令
[command]
# 文件管理器
binding_file_manager = <super> <alt> KEY_F
command_file_manager = thunar

# 浏览器
binding_browser = <super> <alt> KEY_B
command_browser = google-chrome-stable

# brightnessctl 屏幕亮度 先装brightnessctl这个包
binding_brightness_down = KEY_BRIGHTNESSDOWN
command_brightness_down = brightnessctl set 5%-
binding_brightness_up = KEY_BRIGHTNESSUP
command_brightness_up = brightnessctl set +5%

# Start a terminal
# 启动一个终端
# https://github.com/alacritty/alacritty
binding_terminal = <super> KEY_Z
# command_terminal = kitty
command_terminal = alacritty

# Toggle Waybar
# 切换是否隐藏waybar
binding_waybar = <super> KEY_Q
command_waybar = killall -s USR1 waybar

# Start your launcher
# 启动luncher
# https://hg.sr.ht/~scoopta/wofi
# Note: Add mode=run or mode=drun to ~/.config/wofi/config.
# You can also specify the mode with --show option.
binding_launcher = <super> <shift> KEY_ENTER
command_launcher = rofi -show drun

# Screen locker
# 屏幕锁屏
# https://github.com/swaywm/swaylock
binding_lock = <super> <shift> KEY_ESC
command_lock = swaylock

# Logout
# 登出 登录管理器
# https://github.com/ArtsyMacaw/wlogout
binding_logout = <super> KEY_ESC
# command_logout = wlogout
command_logout = bash ~/.config/rofi/leave/leave.sh

# Screenshots
# 截图
# https://wayland.emersion.fr/grim/
# https://wayland.emersion.fr/slurp/
binding_screenshot = <ctrl> <super> <alt> KEY_C
command_screenshot = grim $HOME/Pictures/screenshot/$(date "+%F_%T").png

binding_screenshot_clip_paste = <ctrl> <alt> KEY_C
command_screenshot_clip_paste = slurp | grim -g - - | wl-copy && wl-paste > ~/Pictures/screenshot/$(date '+%F_%T').png

# Volume controls
# 音量控制
# https://alsa-project.org
repeatable_binding_volume_up = KEY_VOLUMEUP
command_volume_up = amixer set Master 5%+
repeatable_binding_volume_down = KEY_VOLUMEDOWN
command_volume_down = amixer set Master 5%-
binding_mute = KEY_MUTE
command_mute = amixer set Master toggle
```


### 12. 窗口管理

```
# ~/.config/wayfire.ini

# 窗口
# Actions related to window management functionalities.
#
# 窗口管理器动作
[wm-actions]
toggle_fullscreen = <super> KEY_F
# toggle_always_on_top = <super> KEY_X #始终置顶
# toggle_sticky = <super> <shift> KEY_X

# Position the windows in certain regions of the output.
# 设定窗口显示在屏幕的位置
[grid]
#
# ⇱ ↑ ⇲   │ 7 8 9
# ← f →   │ 4 5 6
# ⇱ ↓ ⇲ d │ 1 2 3 0
# ‾   ‾
# b是bottom c是center t是top
# l是左 r是右
# 所以可以显示在左下，右上，中间，左边什么的
# 通过super加小键盘数字键设置
slot_bl = <super> KEY_KP1
slot_b = <super> KEY_KP2
slot_br = <super> KEY_KP3
slot_l = <super> KEY_LEFT | <super> KEY_KP4
slot_c = <super> KEY_UP | <super> KEY_KP5
slot_r = <super> KEY_RIGHT | <super> KEY_KP6
slot_tl = <super> KEY_KP7
slot_t = <super> KEY_KP8
slot_tr = <super> KEY_KP9

# Restore default.
# 恢复窗口位置
restore = <super> KEY_DOWN | <super> KEY_KP0

# Change active window with an animation.
# 切换活动窗口
[switcher]
next_view = <alt> KEY_TAB
prev_view = <alt> <shift> KEY_TAB

# Simple active window switcher.
# 快速切换窗口
[fast-switcher]
activate = <alt> KEY_ESC

# Workspaces ───────────────────────────────────────────────────────────────────
# 工作区间
# Switch to workspace.
# 工作区间切换
[vswitch]
binding_left = <super> KEY_A
binding_down = <super> KEY_S
binding_up = <super> KEY_W
binding_right = <super> KEY_D
# 以下是默认
# binding_left = <ctrl> <super> KEY_LEFT
# binding_down = <ctrl> <super> KEY_DOWN
# binding_up = <ctrl> <super> KEY_UP
# binding_right = <ctrl> <super> KEY_RIGHT

# Move the focused window with the same key-bindings, but add ctrl.
# 带着活动窗口一起切换工作区间
with_win_left = <super> <ctrl> KEY_A
with_win_down = <super> <ctrl> KEY_S
with_win_up = <super> <ctrl> KEY_W
with_win_right = <super> <ctrl> KEY_D

# Show the current workspace row as a cube.
# 以立方体显示所有工作区间
[cube]
activate = <ctrl> <alt> BTN_LEFT

# Switch to the next or previous workspace.
# 快速切换到下一个工作区间
rotate_left = <super> <shift> KEY_A
rotate_right = <super> <shift> KEY_D

# Show an overview of all workspaces.
# 显示所有工作区间
[expo]
toggle = <super>
# Select a workspace.
# Workspaces are arranged into a grid of 3 × 3.
# The numbering is left to right, line by line.
# 编号是从左到右，从上到下一行一行
# See core.vwidth and core.vheight for configuring the grid.
# 切换到指定工作区间(根据自己有多少个来设置)
select_workspace_1 = KEY_1
select_workspace_2 = KEY_2
select_workspace_3 = KEY_3
select_workspace_4 = KEY_4
select_workspace_5 = KEY_5
select_workspace_6 = KEY_6
select_workspace_7 = KEY_7
select_workspace_8 = KEY_8
select_workspace_9 = KEY_9

# Outputs ──────────────────────────────────────────────────────────────────────
# 输出(屏幕)
# Change focused output.
# 屏幕切换，如果你接双屏的话
[oswitch]
# Switch to the next output.
# 切换到下一个屏幕
next_output = <super> KEY_O

# Same with the window.
# 带上活动窗口切换到下一个屏幕
next_output_with_win = <super> <shift> KEY_O

# Invert the colors of the whole output.
# 反色
[invert]
toggle = <super> KEY_I

# Rules ────────────────────────────────────────────────────────────────────────
# 规则
# Example configuration:
# 举例
# [window-rules]
# maximize_alacritty = on created if app_id is "Alacritty" then maximize
#
# You can get the properties of your applications with the following command:
# $ WAYLAND_DEBUG=1 alacritty 2>&1 | kak
#
# See Window rules for a complete reference.
# https://github.com/WayfireWM/wayfire/wiki/Configuration#window-rules

# 窗口规则
[window-rules]
rule_1 = on created if app_id is "waybar" then keepabove
```

<!-- ## 其他软件的配置

### waybar

waybar主要参考的配置有riverwm、依云

paru -S pamixer
```
pip install argparse dbus-python 
```-->



## 常见问题

### 1. 应用(waybar、telegram等)启动缓慢

这个问题是概率性的，由你自身的配置而决定，比如我在半年前配置时没有遇到，但在写本文的时候出现了这个问题  
解决的方式也十分简单，只需要在[autostart]里加入一行环境变量的配置就行了  
> 参见:https://github.com/WayfireWM/wayfire/issues/775  

```
environment = dbus-update-activation-environment --systemd WAYLAND_DISPLAY DISPLAY XAUTHORITY
```

### 2. 参考了我的配置，但一些功能不正常，比如截图保存到剪切板的快捷键不生效

多半是因为少了一些软件包，回去翻配置把该装的装好就行了

### 3. waybar中的wlr/workspace或sway/workspace模块无法使用

这是因为wlr/workspace在wayfire中是一个实验性选项，若一定要用，可以在编译的时候开启实验性选项