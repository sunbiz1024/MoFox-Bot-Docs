# 关于 Maibot 的常见错误报告

## 1. 使用 Windows 平台 QQ 的用户被下线问题的相关解析

## 2. 使用 Linux（Windows For Linux）用户出现的 NapCat 问题的相关解析

---

### 文件/.py/可执行文件的报错问题的相关解析

1. 报错提示为某文件配置错误的相关解析
2. ~~报错提示为某文件xxxxxxx的相关解析~~

---

### 一键包的废弃功能导致的报错的相关解析

1. 废弃功能的相关解析

---

### pip 命令的使用解析和功能解析

1. 有关于 pip 各个常用命令
2. 有关于 install/uninstall 的解析
3. 有关于 show 命令的解析
4. 有关于 update/upgrade 的相关解析

---

### 小糖人必看内容！！！！！！！！！！！！！

1. 不看的有问题别来问
2. 不看的可以自觉退出这个项目了，就算是 user 也退！

---

# 关于网络问题的相关解析

## 401 问题

1. API key 的填写
2. 你可能没有填写对应的 API key

> 默认硅基流动的 API 在 `"MoFox_bot\Bot\config\model_config.toml"` 文件修改

## 403 问题

1. 没有删除 pro/deepseekai/deepseekV3 的 “pro/” 前缀  
   > 因为这是真钱模型，位置同上
2. 在 `"MoFox_bot\Bot\config\model_config.toml"` 文件修改

---

# 关于数字报错的相关解析

## 服务器问题

1. **服务器错误是你的模型平台炸了，请检查平台或服务器的服务器压力或等着恢复**

## 个人中转 API 平台的连接问题

2. **连接错误是你与你的 API key 平台的连接错误，请检查**  
   `"MoFox_bot\Bot\config\model_config.toml"`  
   **里的 URL 是否填写正确/是否保存文件/是否挂上了梯子/是否开启对应平台本地服务**

## 文件下载/更新一键包时文件下载失败/下载依赖时文件下载失败

1. 下载失败请开启梯子  
   - [一元机场](https://xn--4gq62f.com/#/register?code=gpwiVnOu) 费用是 12 元一年 100G 每月/7 元一个月 2048G 网速很捉襟见肘  
   - [一云梯](https://inv02.1ytaff.com/register?aff=UZ0ZzCHc) 15 元每月 100G 网速尚可
2. 是否正确使用镜像源

---

## Windows 平台的 NapCat 用户在使用 MaiBoT 时可能见到的问题的相关解析

### 如何下载 Ubuntu（Linux 发行版）

1. **Win 平台的用户可以尝试转用 WSL 也就是 Windows For Linux 的发行版 → Ubuntu（建议下载 24.xx 的版本，越新越好）**

   - WSL 安装教程  
     参考超详细的 WSL 教程：[Windows上的Linux子系统_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1tW42197za/?vd_source=b783b2c661561c8519e805a899d94227)
   - 第一步，如果你是 win10，先来到应用商店下载 "Windows terminal"
   - 第二步，打开 "Windows terminal" 输入 `wsl --install`
   - 等待进度跑完
   - 点击终端的加号旁边的小三角
   - 选择并点击 Ubuntu
   - 复制下面这段命令，粘贴进去点回车

     ```shell
     curl -o napcat.sh https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh && sudo bash napcat.sh --tui
     ```

   - 选择第一个 shell 安装，sudo 密码为 123456，不显示密码很正常。
   - **若显示 "文件下载失败, 请检查错误。或者手动下载压缩包并放在脚本同目录下" 请到 [NapCatQQ Releases](https://github.com/NapNeko/NapCatQQ/releases/tag/v4.8.113) 下载名为 `NapCat.Shell.zip` 的 zip 文件，并放到**
     ```
     \\wsl.localhost\Ubuntu-24.04\home\你创建的用户名
     ```
     随后重新运行上面的命令
   - 等待进度条完成后用
     ```shell
     xvfb-run -a qq --no-sandbox -q {your_qq_id}
     ```
     打开 Linux 的 napcat，例如：
     ```shell
     xvfb-run -a qq --no-sandbox -q 114514
     ```

2. **请前往 napcat 的 github 网页查看 Linux 部署的相关问题，在 Linux 部署后请在 ada/config 中将 localhost 改为你在 Ubuntu 中的 IP**

   1. 使用
      ```shell
      ip route show | grep -i default | awk '{ print $3 }'
      ```
      获得你的 Ubuntu 的 IP
   2. 在你启动 napcat 的窗口最上面寻找 `token=xxxxxxxxxx`  
      token=后的就是你的 napcat 密码
   3. 将 napcat 中网络配置中的 IP 替换为上一步获取到的 IP  
      例如将
      ```
      ws://localhost:8095
      ```
      改为
      ```
      ws://192.168.1.1:8095
      ```
      一定要将端口改为 8095
   4. 再打开 ada 的配置文件将 IP 改为你在 Ubuntu 中获取到的 IP，ada 的文件地址为
      ```
      MaiBotOneKey/modules/MaiBot-Napcat-Adapter/config.toml
      ```
   5. 随后点火！启动！

3. **一键包用户请在控制台里启动 ada/主程序，后手动打开你的 Linux（Ubuntu）输入 `xvfb-run -a qq --no-sandbox -q {your_qq_id}` #此处看上方示例**

   1. 安装了 Linux 版的 napcat 后要如何开启 maibot，只需要在控制台开启 **Ada** 和 **主程序**，随后在 Ubuntu 里使用
      ```
      xvfb-run -a qq --no-sandbox -q {your_qq_id}
      ```
      来开启 napcat，这样你就成功开启完了所有的程序

---

## 文件/.py/可执行文件报错问题的相关解析

1. 可在其所在的根文件夹下寻找 "template"，里面会有你要的模板文件，请复制到原文件的文件夹里，记得在编写完成模板文件后更改其文件名  
   （如我要寻找位于
   ```
   MaiBotOneKey/modules/MaiBot/config/bot_config
   ```
   的文件的模板的话我可以去
   ```
   MaiBotOneKey/modules/MaiBot/template
   ```
   里寻找 `bot_config_template.toml`，这就是我要的 `bot_config` 的模板文件）

---

## 一键包问题的相关解析

1. 一键包控制台是 0.9 版本的，在上面填 key 的信息已经没用了，现在在
   ```
   MaiBotOneKey/modules/MaiBot/config/model_config.toml
   ```
   里修改和填写 key

---

## pip 命令的使用解析和功能解析

1. pip 是 Python 的包管理器，主要命令有  
   `pip show` / `pip install` / `pip uninstall` / `pip upgrade`

2. `pip show` ：用来展示包的安装状况，包括版本/安装地址等  
   附加命令有 `-v` 显示所有包信息 / `-f` 显示包文件地址  
   例如：
   - `pip show -f {package_name}` 展示包的所有文件地址
   - `pip show {package_name}` 验证包的安装

3. `pip install` 的作用一目了然，就是用来安装包的命令  
   例如：
   - `pip install {package_name}` 最简单的使用方法
   - `pip install package==1.2.3` 安装指定版本
   - `pip install package>=1.0,<2.0` 安装某个版本区间的包
   - `pip install -r requirements.txt` 根据依赖文件批量安装
   - `pip install --upgrade package` 升级已安装包
   - `pip install`：安装当前目录下的包（需含 setup.py 或 pyproject.toml）
   - `pip install -e` 以开发模式安装当前目录的包（源码改动即时生效）

   国内常用的镜像站：
   - 清华：https://pypi.tuna.tsinghua.edu.cn/simple
   - 阿里云：https://mirrors.aliyun.com/pypi/simple

---

## pip uninstall 与 pip install 十分类似

- `pip uninstall -r requirements.txt` 根据依赖文件进行批量卸载
- `pip uninstall {package_name}` 用于卸载包
- 多个包可直接 `uninstall`，例如：
  ```
  pip uninstall name_1 name_2 name_3
  ```
  不同 name 中间要加上空格，install 同理，下载多个包是加上空格

---

## pip upgrade 也就是 pip update，用来更新包名与 install/uninstall 类似

- `pip install --upgrade <package_name> -i https://pypi.tuna.tsinghua.edu.cn/simple`  
  使用清华源更新名为 package_name 的包
- `pip install --upgrade <package_name> -r requirements.txt`

---

## 常用源

- 清华：https://pypi.tuna.tsinghua.edu.cn/simple
- 阿里云：https://mirrors.aliyun.com/pypi/simple

---

# 小糖人必看！！！！

- 我不会在一棵树上吊死，遇到当前设备不支持某授权模式时不会死活赖在那一个不能用的模式上
- 我是一个拥有阅读能力的正常人，会阅读屏幕上的每个文字和每条提示，不会无视任何提示
- 我会正确地提问题，在提问的时候自己提供当前设备信息，操作录屏等信息，而不是把别人当作算命先生然后来一句“怎么办”
- 我拥有自我学习能力，能通过互联网搜索我所不知道的新事物，并通过网络快速获得答案而不是花上几十分钟去群里问还问不出答案

---

# 完！