# 关于Maibot的常见错误报告  
>## 目录表  
>* ###   关于报错问题的相关解析  
>    1. 关于网络问题的相关解析
>    2. 关于数字报错的相关解析
>* ###   Windows平台的NapCat用户在使用MaiBoT时可能见到的问题的相关解析
>    1. 使用Windows平台QQ的用户被下线问题的相关解析
>    2. 使用Linux（Windows Fro Linux）用户出现的NapCat问题的相关解析
>* ###    文件/.py/可执行文件的报错问题的相关解析
>    1. 报错提示为某文件配置错误的相关解析
>    2. ~~报错提示为某文件xxxxxxx的相关解析~~
>* ###    一键包的废弃功能导致的报错的相关解析
>    1. 废弃功能的相关解析
>* ###    pip命令的使用解析和功能解析
>    1. 有关于pip各个常用命令
>    2. 有关于install/uninsatll的解析
>    3. 有关于show命令的解析
>    4. 有关于update/upgrade的相关解析
>* ###    小糖人必看内容！！！！！！！！！！！！！  
>    1. 不看的有问题别来问
>    2. 不看的可以自觉退出这个项目了就算是user也退！
 ---  
> # 关于网络问题的相关解析
>> *  ## 401问题：
>>1. APIkey的填写  
>>2. 你可能没有填写对应的apikey
>>     #### 默认硅基流动的API```在"MoFox_bot\Bot\config\model_config.toml"文件修改```
>*   ## 403问题：
>>1. 没有删除pro/deepseekai/deepseekV3的“pro/”前缀  
>>    ####  因为这是真钱模型，位置同上  
>>     2. （在```"MoFox_bot\Bot\config\model_config.toml"文件修改）```
> # 关于数字报错的相关解析
>>*  ## 服务器问题：  
>>1.  **服务器错误是你的模型平台炸了，请检查平台或服务器的服务器压力或等着恢复**
>*  ## 个人中转api平台的连接问题：  
  >> 2. **连接错误是你于你的api key平台的连接错误，请检查**    
 >> ```"MoFox_bot\Bot\config\model_config.toml"```  
  >> **里的URL是否填写正确/是否保存文件/是否挂上了梯子/是否开启对应平台本地服务**
> * ##    文件下载/更新一键包时文件下载失败/下载依赖时文件下载失败
   >> 1. 下载失败请开启梯子  
“https://xn--4gq62f.com/#/register?code=gpwiVnOu”  
    此URL指向一元机场，费用是12元一年100G每月/7元一个月2048G网速很捉襟见肘  
     “https://inv02.1ytaff.com/register?aff=UZ0ZzCHc”  
     此URL指向一云梯 15元每月100G 网速尚可
   >>2. 是否正确使用镜像源  
---
>## Windows平台的NapCat用户在使用MaiBoT时可能见到的问题的相关解析
>* ### 如何下载ubuntu（Linux发行版）
>>1. **win**平台的用户可以尝试转用WS L也就是Windows For Linux的发行版→ubuntu（建议下载24.xx的版本，此处当然是越新的版本越好）  
>>>       Ws l安装教程  
>>>          参考超详细的WSL教程：Windows上的Linux子系统_哔哩哔哩_bilibili  
>>>    https://www.bilibili.com/video/BV1tW42197za/?vd_source=b783b2c661561c8519e805a899d94227  
>>>    1. 第一步，如果你是win10，先来到应用商店下载"Windows terminal"
>>>    2. 第二步，打开  "Windows terminal"  输入wsl –install  
>>>    3. 等待进度跑完  
>>>    4. 点击终端的加号旁边的小三角
>>>    5. 选择并点击ubuntu
>>>    6. 复制下面这段命令，粘贴进去点回车  
      ```shell
          curl -o \
          napcat.sh \
         https://nclatest.znin.net/NapNeko/NapCat-Installer/main/script/install.sh \  
         && sudo bash napcat.sh \
          --tui 
      ```
>>>    7. 选择第一个shell安装，sudo密码为123456,不显示密码很正常。  
>>>    8. **若显示"文件下载失败, 请检查错误。或者手动下载压缩包并放在脚本同目录下"请到  https://github.com/NapNeko/NapCatQQ/releases/tag/v4.8.113  下载名为   ```NapCat.Shell.zip```  的zip文件，并放到  
```\\wsl.localhost\Ubuntu-24.04\home\你创建的用户名```  随后重新运行上面的命令
>>>    9. 等待进度条完成后用  
```  xvfb-run -a qq --no-sandbox -q {your_qq_id}```   
>>> 打开Linux的napcat，例如：  
>>>```xvfb-run -a qq --no-sandbox -q 114514```
>>2. **请前往napcat的github网页查看Linux部署的相关问题，在Linux部署后请在ada/config中将localhost改为你在ubuntu中的ip**
>>> 1. 使用  
```ip route show | grep -i default | awk '{ print $3}'```  
获得你的ubuntu的ip  
>>> 2. 在你启动napcat的窗口最上面寻找 ```token=xxxxxxxxxx```   
token=后的就是你的napcat密码
>>> 3. 将napcat中网络配置中的ip替换为上一步获取到的ip  
例如将```ws://localhost:8095```  
改为```ws://192.168.1.1:8095```
一定要将端口改为8095
>>> 4. 再打开ada的配置文件将ip改为你在乌班图中获取到的ip，ada的文件地址为     
```"MaiBotOneKey\modules\MaiBot-Napcat-Adapter\config.toml"```
>>> 5. 随后点火！ 启动！
>>3. **一键包用户请开启在控制台里启动ada/主程序，后手动打开你的Linux（ubuntu）输入xvfb-run -a qq --no-sandbox -q {your_qq_id}  #此处看上方示例**
>>> 1. 安装了linux版的napcat后要如何开启maibot呢，只需要在控制台开启**Ada**和**主程序**随后在ubuntu里使用  
```Linux（ubuntu）输入xvfb-run -a qq --no-sandbox -q {your_qq_id} #此处看上方示例```  
来开启napcat，这样你就成功开启完了所有的程序
>## 文件/.py/可执行文件报错问题的相关解析
>> 1. 可在其所在的根文件夹下寻找"template"，里面会有你要的模板文件，请复制！复制！复制！到原文件的文件夹里，记得在编写完成模板文件后更改其文件名  
（如我要寻找位于  
```MaiBotOneKey/modules/MaiBot/config/bot_config```  
的文件的模板的话我可以去  
```MaiBotOneKey/modules/MaiBot/template里寻找"bot_config_template.toml"```  
随后我可以看到  
```"bot_config_template.toml```  
这就是我要的  
```"bot_config"```  
的模板文件"）
> ## 一键包问题的相关解析
>> 1. 一键包控制台是0.9版本的，在上面填key的信息已经没用了,现在  ```"MaiBotOneKey\modules\MaiBot\config\model_config.toml"```  
里修改和填写key
> ## pip命令的使用解析和功能解析
>> 1. pip是Python的包管理器，主要命令有   
```pip show```/```pip install```/```pip uninstall```/```pip upgrade```
>>
>> 2. ```pip show``` ：```pip show```用来展示包的安装状况，包括版本/安装地址等  
附加命令有 ```-v``` 显示所有包信息/```-f``` 显示包文件地址  
例如  
>> * ```pip show -f {package_name}```   
用来展示包的所有文件地址 
 也可以直接   
>> *  ```pip show {package_name}```   
 用来验证包的安装  
 若正确安装会展示包的各类数据  
 若安装失败会提示没有该包或未找到该包
 >> 3. pip install的作用一目了然 就是用来安装包的命令  
 例如  
 >> * ```pip install {package_name}```  
  这只是最简单的使用方法  
>>  * ```pip install```
  常用参数↓\
>>  * ```pip install package==1.2.3```  
 安装指定版本  
>>  * ```pip install package>=1.0,<2.0```  
 安装某个版本区间的包  
>>  * ```pip install -r requirements.txt```  
 根据依赖文件批量安装
 项目开发中，通常会把所有依赖记录在```requirements.txt```文件里（格式为 “包名==版本号”，每行一个）  
>>  * ```pip install --upgrade package```  
 升级已安装包。  
>>  * ```pip install ```：安装当前目录下的包（需含 setup.py 或 pyproject.toml）  
>>  * ```pip install -e ```   
 以开发模式安装当前目录的包（源码改动即时生效）  
 国内常用的镜像站↓  
清华：https://pypi.tuna.tsinghua.edu.cn/simple\n  
阿里云：https://mirrors.aliyun.com/pypi/simple
> ## pip uninstall与pip install十分类似
>>* ```pip uninstall -r requirements.txt```  
根据依赖文件进行批量卸载  
>> * ```pip uninstall {package_name}```  
用于卸载包
多个包可直接```uninstall```
例如 ↓  
>> * ```pip uninstall {name_1} {name_2} {name_3}```
等，不同name中间要加上空格 install同理，下载多个包是加上空格
> ## pip upgrade也就是pip update，用来更新包名与install/uninstall类似
>> * ```pip install --upgrade <package_name> -i https://pypi.tuna.tsinghua.edu.cn/simple```  
就是使用清华源更新名为package_name的包  
也可以  
```pip install --upgrade <package_name> -r requirements.txt```     
> ## 常用源
>> * 清华：https://pypi.tuna.tsinghua.edu.cn/simple\n  
阿里云：https://mirrors.aliyun.com/pypi/simple
> # 小糖人必看！！！！！！！！
>> * ## 我不会在一棵树上吊死，遇到当前设备不支持某授权模式时不会死活赖在那一个不能用的模式上
>> * ## 我是一个拥有阅读能力的正常人，会阅读屏幕上的每个文字和每条提示，不会无视任何提示
>> * ## 我会正确地提问题，在提问的时候自己提供当前设备信息，操作录屏等信息，而不是把别人当作算命先生然后来一句“怎么办”
>> * ## 我拥有自我学习能力，能通过互联网搜索我所不知道的新事物，并通过网络快速获得答案而不是花上几十分钟去群里问还问不出答案
> * # 完！