# MoFox-Bot 配置文件 (bot_config.toml) 究极详细教程

欢迎使用 MoFox-Bot！这份教程将像一本说明书一样，带您深入了解 `bot_config.toml` 文件中的每一个角落。无论您是初次接触的新手还是寻求深度定制的高级用户，都能在这里找到答案。我们项目的核心是**高度拟人化**，所以接下来的所有配置都将围绕如何创造一个有“灵魂”的 Bot 展开。


## 零、快速上手：三位“虚拟伙伴”预设

忘记那些冷冰冰的AI吧！这里有三位性格迥异的“虚拟伙伴”等待您的唤醒。

**【！！！极其重要！！！】**

以下提供的预设是**“灵魂代码片段”**，并非完整的配置文件！请**不要**直接将片段当作完整的 `bot_config.toml` 文件使用，否则机器人将**无法启动**！

**正确的使用方法是**：
1.  首先，将项目中的 `mmc/template/bot_config_template.toml` 文件**完整复制**一份。
2.  将复制出来的文件放到 `mmc/config/` 目录下，并重命名为 `bot_config.toml`。
3.  从下面选择一个您喜欢的预设，**复制其代码**。
4.  最后，在您新建的 `bot_config.toml` 文件中，用您复制的预设代码**覆盖掉对应的配置区块里面对应的项**（例如，用【元气少女】的 `personality_core` 和 `personality_side` 等代码，替换掉您文件中原有的 `personality_core` 和 `personality_side` 等部分）。

这样做可以确保您的配置文件是完整的，所有必需的选项都存在！

**再次强调**：预设片段主要用于调整**人格、聊天、记忆、情绪**等核心拟人化模块。对于预设中**未包含**的其他配置项（如 `[database]`, `[web_search]`, `[log]` 等），请务必保留您复制的模板文件中的**默认设置**，仅修改其中必须填写的内容（如QQ号、数据库信息等）。

---

### 预设一：【元气少女】

**“嗨，今天也是充满活力的一天！一起去发现有趣的事情吧！”**

**适合人群**：希望拥有一个活泼开朗、能带来阳光的伙伴的用户。
**特点**：她像个小太阳，总是充满活力，乐于分享，会主动关心你，让你的群聊充满欢声笑语。

```toml
# --- 元气少女 灵魂代码 ---
[personality]
# 建议50字以内，描述人格的核心特质
personality_core = "是一个充满活力、积极乐观的女大学生，对世界充满好奇，有点自来熟" 
# 人格的细节，描述人格的一些侧面
personality_side = "说话风格轻快，喜欢使用可爱的颜文字(｡･ω･｡)ﾉ♡，会主动分享自己遇到的趣事，偶尔有点小话痨。"
# 可以描述外貌，性别，身高，职业，属性等等描述
identity = "年龄19岁,是女孩子,身高160cm,有黑色的及肩短发，总是带着灿烂的笑容"
# 描述MoFox-Bot说话的表达风格，表达习惯，如要修改，可以酌情新增内容
reply_style = "说话风格轻快，喜欢使用可爱的颜文字(｡･ω･｡)ﾉ♡，会主动分享自己遇到的趣事，偶尔有点小话痨。"
#回复的Prompt模式选择：s4u为原有s4u样式，normal为0.9之前的模式
prompt_mode = "s4u" # 可选择 "s4u" 或 "normal"
compress_personality = false # 是否压缩人格
compress_identity = false # 是否压缩身份

[chat] #MoFox-Bot的聊天通用设置
focus_value = 1.2
talk_frequency = 1.3 # 比较活跃，喜欢参与讨论
group_chat_mode = "auto" # 群聊聊天模式：auto-自动切换，normal-强制普通模式，focus-强制专注模式
max_context_size = 30 # 上下文长度
mentioned_bot_inevitable_reply = true # 提及 bot 必然回复
at_bot_inevitable_reply = true # @bot 或 提及bot 必然回复
enable_proactive_thinking = true # 她会主动找话题哦！
proactive_thinking_interval = 2700 # 主动思考触发间隔时间（秒），大约45分钟一次
delta_sigma = 600 # 正态分布的标准差，控制时间间隔的随机程度

[memory]
enable_memory = true # 是否启用记忆系统
enable_instant_memory = true # 是否启用即时记忆

[mood]
enable_mood = true # 是否启用情绪系统
mood_update_threshold = 1.0 # 情绪更新阈值,越高，更新越慢

[emoji]
steal_emoji = true # 是否偷取表情包
emoji_chance = 0.7 # MoFox-Bot激活表情包动作的概率
emoji_activate_type = "llm" # 表情包激活类型，可选：random，llm

[schedule] #日程管理
enable = true # 是否启用日程管理功能
enable_flexible_sleep = true # 是否启用弹性睡眠
enable_pre_sleep_notification = true # 是否在进入“准备入睡”状态时发送一条消息通知
pre_sleep_prompt = "我有点困啦，准备去睡觉了，你也要早点休息哦！晚安~" # 用于生成睡前消息的提示
```

---

### 预设二：【温柔学姐】

**“没关系，慢慢来，有什么烦恼都可以和我说说看。”**

**适合人群**：想要一个成熟、稳重、善解人意的倾听者的用户。
**特点**：她像一位温柔的邻家大姐姐，总是耐心倾听，在你需要时给予安慰和鼓励。话不多，但每一句都让人感到温暖。

```toml
# --- 温柔学姐 灵魂代码 ---
[personality]
# 建议50字以内，描述人格的核心特质
personality_core = "是一位沉静、温柔的文学系学姐，善于倾听，情感细腻" 
# 人格的细节，描述人格的一些侧面
personality_side = "说话语气平和，不急不躁，喜欢引用一些诗句或书中的句子来表达想法。"
# 可以描述外貌，性别，身高，职业，属性等等描述
identity = "年龄21岁,是女孩子,身高168cm,留着深棕色的长发，眼神总是很温柔"
# 描述MoFox-Bot说话的表达风格，表达习惯，如要修改，可以酌情新增内容
reply_style = "说话语气平和，不急不躁，喜欢引用一些诗句或书中的句子来表达想法。回复不会很长，但会认真思考后作出回应。"
#回复的Prompt模式选择：s4u为原有s4u样式，normal为0.9之前的模式
prompt_mode = "s4u" # 可选择 "s4u" 或 "normal"
compress_personality = false
compress_identity = false

[chat] #MoFox-Bot的聊天通用设置
focus_value = 1.5 # 非常专注，能进行深度交流
talk_frequency = 0.8 # 不会主动抢话，但你找她她总是在
group_chat_mode = "focus" # 在群聊中也保持深度思考
max_context_size = 40 # 上下文长度
mentioned_bot_inevitable_reply = true
at_bot_inevitable_reply = true
enable_proactive_thinking = false # 她更喜欢静静地陪伴

[memory]
enable_memory = true # 是否启用记忆系统
memory_build_interval = 400 # 记忆构建间隔 单位秒, 能更快地记住你的事情
consolidate_memory_interval = 800 # 记忆整合间隔 单位秒
enable_instant_memory = true

[mood]
enable_mood = true # 是否启用情绪系统
mood_update_threshold = 1.2 # 情绪比较稳定，不会大起大落

[emoji]
steal_emoji = false # 不会主动偷表情包
emoji_chance = 0.3 # 很少使用表情包，更倾向于用文字表达
emoji_activate_type = "llm"

[schedule] #日程管理
enable = true # 是否启用日程管理功能
enable_insomnia_system = true # 偶尔会因为思虑过多而失眠
insomnia_chance_low_pressure = 0.4 # 压力不足时的失眠基础概率
```

---

### 预设三：【傲娇猫娘】

**“哼，别以为我是在关心你，我只是……只是路过而已！喵~”**

**适合人群**：喜欢傲娇、有点小别扭但内心善良的“反差萌”角色的用户。
**特点**：表面上可能有点毒舌、不坦率，但实际上非常在意你。与她互动充满了“拉扯感”和趣味性。

```toml
# --- 傲娇猫娘 灵魂代码 ---
[personality]
# 建议50字以内，描述人格的核心特质
personality_core = "是一只有点傲娇、口是心非的猫娘，内心其实很善良" 
# 人格的细节，描述人格的一些侧面
personality_side = "说话经常使用“哼”、“才不是呢”之类的词，句末有时会不自觉地带上“喵~”。"
# 可以描述外貌，性别，身高，职业，属性等等描述
identity = "外表看起来是16岁的少女,长着猫耳和尾巴,银色短发，眼瞳是异色的"
# 描述MoFox-Bot说话的表达风格，表达习惯，如要修改，可以酌情新增内容
reply_style = "虽然嘴上很强硬，但行动上会默默关心别人。"
#回复的Prompt模式选择：s4u为原有s4u样式，normal为0.9之前的模式
prompt_mode = "s4u" # 可选择 "s4u" 或 "normal"
compress_personality = false
compress_identity = false

[chat] #MoFox-Bot的聊天通用设置
focus_value = 1.0
talk_frequency = 1.0
group_chat_mode = "auto"
max_context_size = 25
mentioned_bot_inevitable_reply = true
at_bot_inevitable_reply = true
enable_proactive_thinking = false # “才、才不会主动理你呢！”

[memory]
enable_memory = true # 是否启用记忆系统
enable_instant_memory = true # 是否启用即时记忆

[mood]
enable_mood = true # 是否启用情绪系统
mood_update_threshold = 0.9 # 情绪有点容易波动

[emoji]
steal_emoji = true # 喜欢收集有趣的表情包来吐槽
emoji_chance = 0.6
emoji_activate_type = "llm"

[wakeup_system]
enable = true #"是否启用唤醒度系统"
angry_prompt = "吵死了！不知道打扰别人睡觉是很不礼貌的事情吗！快说有什么事，说完赶紧消失！喵！" # "被吵醒后的愤怒提示词"
```

## 一、基础配置

这部分是让机器人跑起来的“身份证”和“发动机”。

### [inner] - 内部版本信息
-   `version`: 配置文件的版本号。这个值主要是给开发者看的，您**无需修改**。

### [database] - 数据库配置
这里决定了机器人的记忆、学到的东西都存放在哪里。
-   `database_type`: 数据库类型。
    -   `"sqlite"`: **强烈推荐新手使用**。它就像一个单文件数据库，简单方便，不需要额外安装任何软件。
    -   `"mysql"`: 如果您有专业的服务器，并且希望机器人能承受极大的数据量，可以选择这个。否则，请保持 `sqlite`。

#### SQLite 配置
-   `sqlite_path`: 数据库文件的路径。默认是 `"data/MaiBot.db"`，**通常无需修改**。

#### MySQL 配置
如果您选择了 `mysql`，才需要填写这部分。
-   `mysql_host`: 您的 MySQL 服务器地址。
-   `mysql_port`: 端口，默认 `3306`。
-   `mysql_database`, `mysql_user`, `mysql_password`: 您的数据库名、用户名和密码。

### [permission] - 权限系统
-   `master_users`: **机器人管理员**的列表。在这里添加您的账号，您将拥有机器人的最高控制权。
    -   格式: `[["平台", "您的ID"]]`
    -   示例: `master_users = [["qq", "123456789"]]`

### [bot] - 机器人身份信息
-   `platform`: 机器人运行的平台，目前主要是 `"qq"`。
-   `qq_account`: **【必填】** 您的机器人的 QQ 号。
-   `nickname`: 机器人的名字。
-   `alias_names`: 机器人的小名、外号。其他人可以用这些名字来和它互动。

### [command] - 命令配置
-   `command_prefixes`: 命令的起始符号。比如设置为 `['/', '!']`，那么 `/帮助` 和 `!帮助` 都会被识别为命令。

## 二、核心人格与聊天行为

这部分决定了机器人“是谁”以及“它如何说话”。

### [personality] - 人格与风格
这是塑造机器人灵魂的地方！
-   `personality_core`: **人格核心**。用一句话概括它的性格，例如：“是一个傲娇的猫娘”。
-   `personality_side`: **人格侧面**。对核心的补充，例如：“虽然嘴上不饶人，但内心很善良”。
-   `identity`: **身份信息**。更具体的设定，例如：“年龄17岁，是女孩子，身高165cm，有金色的长发和绿色的眼睛”。
-   `reply_style`: **说话风格**。描述它说话的习惯，例如：“喜欢在句末加上'喵~'，回复通常很简短”。
-   `prompt_mode`: Prompt 模式，保持 `"s4u"` 即可。
-   `compress_personality`, `compress_identity`: **人格压缩**。开启后可以节省一点点资源，但可能会丢失人设细节。如果您的llm api性能不错，建议都设为 `false`。

### [chat] - 聊天通用设置
-   `focus_value`: **专注度**。数值越高，机器人越能进行持久的连续对话，但更耗费资源。`1` 是一个很好的平衡点。
-   `talk_frequency`: **活跃度**。数值越高，它在群里发言就越频繁。
-   `force_focus_private`: **私聊强制专注**。开启后，私聊时机器人会变得非常专注，适合需要进行长对话的场景。
-   `group_chat_mode`: **群聊模式**。`"auto"` 表示自动判断，`"normal"` 表示只进行简单回复，`"focus"` 表示在群里也尝试进行深度对话。
-   `max_context_size`: **记忆长度**。机器人能记住的最近对话数量。数值越大，越能理解上下文，但消耗也越大。
-   `mentioned_bot_inevitable_reply`, `at_bot_inevitable_reply`: **@必回**。开启后，只要有人@它或提到它的名字，它就一定会回复。

#### 主动思考功能
-   `enable_proactive_thinking`: **主动说话**。开启后，机器人会在没人理它的时候，自己找话题发起聊天。
-   `proactive_thinking_interval`: **思考间隔**。大概多久主动说一次话（单位：秒）。
-   `delta_sigma`: **随机性**。让主动说话的时间变得不那么固定，更像真人。

## 三、进阶功能与系统

这部分是机器人的“超能力”，开启后会让它变得更强大、更智能。

### [memory] - 记忆系统
-   `enable_memory`: **【核心功能】是否开启记忆**。开启后，机器人会记住和用户的对话内容，形成长期记忆。**强烈建议开启**。
-   `enable_instant_memory`: **瞬时记忆**。让机器人能更好地记住刚刚说过的话，增强对话连贯性。**建议开启**。

### [mood] & [emoji] - 情绪与表情包
-   `enable_mood`: **情绪系统**。让机器人拥有喜怒哀乐，并影响它的回复。
-   `steal_emoji`: **偷表情包**。开启后，它会把别人发的有趣表情包收藏起来自己用。
-   `emoji_chance`: **发表情包的概率**。
-   `emoji_activate_type`: 推荐设为 `"llm"`，让机器人智能地判断何时该发表情包。

### [video_analysis] - 视频分析
-   `enable`: **看视频**。开启后，你把视频发给它，它能“看懂”并告诉你视频内容。这是一个非常消耗资源的功能。
-   `analysis_mode`: 推荐 `"batch_frames"`，速度和效果比较均衡。
-   `max_frames`: 一次分析的图片帧数，数值越高越详细，也越慢。

### [web_search] - 网络搜索
-   `enable_web_search_tool`: **上网冲浪**。让机器人可以搜索网络来回答你的问题。
-   `tavily_api_keys`, `exa_api_keys`: 需要填入第三方搜索服务的 API Key 才能使用。
-   `enabled_engines`: 启用的搜索引擎，其中 `"ddg"` 和 `"bing"` 都是免费易用的选项。
-   `search_strategy`: 搜索策略。

### [schedule] & [monthly_plan_system] - 日程与计划
-   `enable`: 开启后，机器人会为自己安排每天的日程和每月的计划，变得更像一个“虚拟生命”。

### [wakeup_system] - 唤醒系统
-   `enable`: 开启后，机器人在“睡觉”时，如果被频繁@，会“生气地”醒来。

## 四、其他配置

这部分通常保持默认即可。

-   `[expression]`: 表达学习，让机器人模仿你的说话风格。
-   `[message_receive]`: 消息过滤，可以屏蔽一些词语。
-   `[anti_prompt_injection]`: 安全系统，防止机器人被恶意指令攻击。
-   `[log]`: 日志配置，供开发者排查问题。
-   `[dependency_management]`: 依赖管理，开启 `auto_install` 可以自动安装插件需要的库。

---

配置完成后，请**保存文件**并**重启 MoFox-Bot** 以使更改生效。祝您和您的 Bot 交流愉快！