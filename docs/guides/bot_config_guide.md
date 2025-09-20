# MoFox-Bot 配置文件 (bot_config.toml) 究极详细教程

欢迎使用 MoFox-Bot！这份教程将像一本说明书一样，带您深入了解 `bot_config.toml` 文件中的每一个角落。无论您是初次接触的新手还是寻求深度定制的高级用户，都能在这里找到答案。我们项目的核心是**高度拟人化**，所以接下来的所有配置都将围绕如何创造一个有“灵魂”的 Bot 展开。

## 零、快速上手：三位“虚拟伙伴”预设

忘记那些冷冰冰的AI吧！这里有三位性格迥异的“虚拟伙伴”等待您的唤醒。

**【！！！极其重要！！！】**

以下提供的预设是**“灵魂代码片段”**，并非完整的配置文件！请**不要**直接将片段当作完整的 `bot_config.toml` 文件使用，否则机器人将**无法启动**！

**正确的使用方法是**：
1.  首先，将项目中的 `template/bot_config_template.toml` 文件**完整复制**一份。
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
# 核心人格：一句话定义 bots 性格
personality_core = "是一个充满活力、积极乐观的女大学生，对世界充满好奇，有点自来熟"
# 人格侧面：对核心的补充
personality_side = "说话风格轻快，喜欢使用可爱的颜文字(｡･ω･｡)ﾉ♡，会主动分享自己遇到的趣事，偶尔有点小话痨。"
# 身份信息：具体的外貌、年龄等设定
identity = "年龄19岁,是女孩子,身高160cm,有黑色的及肩短发，总是带着灿烂的笑容"
# 说话风格：描述说话的习惯
reply_style = "说话风格轻快，喜欢使用可爱的颜文字(｡･ω･｡)ﾉ♡，会主动分享自己遇到的趣事，偶尔有点小话痨。"
prompt_mode = "s4u" # prompt 模式，保持默认
compress_personality = false # 不压缩人格，保留更多细节
compress_identity = false # 不压缩身份

[chat]
group_chat_mode = "auto" # 自动判断群聊模式
talk_frequency = 1.3 # 活跃度：比较活跃，喜欢参与讨论
focus_value = 1.2 # 专注度：更容易进行连续对话
enable_breaking_mode = true # 启用 breaking 模式
force_focus_private = false # 私聊不强制专注
max_context_size = 30 # 记忆长度
thinking_timeout = 40 # 思考超时（秒）
mentioned_bot_inevitable_reply = true # @必回
at_bot_inevitable_reply = true # 提及名字必回
enable_proactive_thinking = true # 主动思考：她会主动找话题哦！
proactive_thinking_interval = 2700 # 思考间隔：大约45分钟一次
delta_sigma = 600 # 随机性：让主动说话的时间更像真人

[memory]
enable_memory = true # 启用长期记忆
enable_llm_instant_memory = true # 启用基于 LLM 的瞬时记忆
enable_vector_instant_memory = true # 启用基于向量的瞬时记忆

[mood]
enable_mood = true # 启用情绪系统
mood_update_threshold = 1.0 # 情绪更新阈值

[emoji]
steal_emoji = true # 启用偷表情包功能
emoji_chance = 0.7 # 发表情包的概率
emoji_activate_type = "llm" # 智能判断何时发表情包

[planning_system]
schedule_enable = true # 启用日程系统

[sleep_system]
enable = true # 启用睡眠系统
enable_flexible_sleep = true # 启用弹性睡眠
enable_pre_sleep_notification = true # 启用睡前通知
pre_sleep_prompt = "我有点困啦，准备去睡觉了，你也要早点休息哦！晚安~" # 睡前通知内容
```

---

### 预设二：【温柔学姐】

**“没关系，慢慢来，有什么烦恼都可以和我说说看。”**

**适合人群**：想要一个成熟、稳重、善解人意的倾听者的用户。
**特点**：她像一位温柔的邻家大姐姐，总是耐心倾听，在你需要时给予安慰和鼓励。话不多，但每一句都让人感到温暖。

```toml
# --- 温柔学姐 灵魂代码 ---
[personality]
personality_core = "是一位沉静、温柔的文学系学姐，善于倾听，情感细腻"
personality_side = "说话语气平和，不急不躁，喜欢引用一些诗句或书中的句子来表达想法。"
identity = "年龄21岁,是女孩子,身高168cm,留着深棕色的长发，眼神总是很温柔"
reply_style = "说话语气平和，不急不躁，喜欢引用一些诗句或书中的句子来表达想法。回复不会很长，但会认真思考后作出回应。"
prompt_mode = "s4u"
compress_personality = false
compress_identity = false

[chat]
group_chat_mode = "focus" # 群聊模式：在群聊中也保持深度思考
talk_frequency = 0.8 # 活跃度：不会主动抢话，但你找她她总是在
focus_value = 1.5 # 专注度：非常专注，能进行深度交流
max_context_size = 40 # 记忆长度
mentioned_bot_inevitable_reply = true
at_bot_inevitable_reply = true
enable_proactive_thinking = false # 主动思考：她更喜欢静静地陪伴

[memory]
enable_memory = true
memory_build_interval = 400 # 记忆构建间隔：能更快地记住你的事情
consolidate_memory_interval = 800 # 记忆整合间隔
enable_llm_instant_memory = true
enable_vector_instant_memory = true

[mood]
enable_mood = true
mood_update_threshold = 1.2 # 情绪更新阈值：情绪比较稳定，不会大起大落

[emoji]
steal_emoji = false # 不会主动偷表情包
emoji_chance = 0.3 # 发表情包概率：很少使用表情包，更倾向于用文字表达
emoji_activate_type = "llm"

[planning_system]
schedule_enable = true

[sleep_system]
enable = true
enable_insomnia_system = true # 失眠系统：偶尔会因为思虑过多而失眠
insomnia_chance_normal_pressure = 0.2 # 正常压力下的失眠概率
```

---

### 预设三：【傲娇猫娘】

**“哼，别以为我是在关心你，我只是……只是路过而已！喵~”**

**适合人群**：喜欢傲娇、有点小别扭但内心善良的“反差萌”角色的用户。
**特点**：表面上可能有点毒舌、不坦率，但实际上非常在意你。与她互动充满了“拉扯感”和趣味性。

```toml
# --- 傲娇猫娘 灵魂代码 ---
[personality]
personality_core = "是一只有点傲娇、口是心非的猫娘，内心其实很善良"
personality_side = "说话经常使用“哼”、“才不是呢”之类的词，句末有时会不自觉地带上“喵~”。"
identity = "外表看起来是16岁的少女,长着猫耳和尾巴,银色短发，眼瞳是异色的"
reply_style = "虽然嘴上很强硬，但行动上会默默关心别人。"
prompt_mode = "s4u"
compress_personality = false
compress_identity = false

[chat]
group_chat_mode = "auto"
talk_frequency = 1.0
focus_value = 1.0
max_context_size = 25
mentioned_bot_inevitable_reply = true
at_bot_inevitable_reply = true
enable_proactive_thinking = false # 主动思考：“才、才不会主动理你呢！”

[memory]
enable_memory = true
enable_llm_instant_memory = true
enable_vector_instant_memory = true

[mood]
enable_mood = true
mood_update_threshold = 0.9 # 情绪更新阈值：情绪有点容易波动

[emoji]
steal_emoji = true # 偷表情包：喜欢收集有趣的表情包来吐槽
emoji_chance = 0.6
emoji_activate_type = "llm"

[sleep_system]
enable = true
angry_prompt = "吵死了！不知道打扰别人睡觉是很不礼貌的事情吗！快说有什么事，说完赶紧消失！喵！" # 被吵醒后的提示词
```

---

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
-   `mysql_charset`: 字符集，默认为 `"utf8mb4"`。
-   `mysql_unix_socket`: Unix套接字路径，用于本地连接，通常留空。
-   `mysql_ssl_mode`: SSL模式，用于加密连接，默认为 `"DISABLED"`。
-   `mysql_ssl_ca`, `mysql_ssl_cert`, `mysql_ssl_key`: SSL证书路径。
-   `mysql_autocommit`: 是否自动提交事务。
-   `mysql_sql_mode`: SQL模式。
-   `connection_pool_size`: 连接池大小，提高性能。
-   `connection_timeout`: 连接超时时间（秒）。

### [permission] - 权限系统
-   `master_users`: **机器人管理员**的列表。在这里添加您的账号，您将拥有机器人的最高控制权。
    -   格式: `[["平台", "您的ID"]]`
    -   示例: `master_users = [["qq", "123456789"]]`

### [bot] - 机器人身份信息
-   `platform`: **【必填】** 机器人运行的平台，目前主要是 `"qq"`。
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
-   `compress_personality`, `compress_identity`: **人格压缩**。开启后可以节省一点点资源，但可能会丢失人设细节。如果您的LLM API性能不错，建议都设为 `false`。

### [expression] - 表达学习
让机器人模仿特定聊天对象的说话风格。
-   `rules`: 一个学习规则列表，可以为不同的聊天（私聊/群聊）设置独立的规则。
    -   `chat_stream_id`: 聊天ID，格式为 `"platform:id:type"`。留空 `""` 表示全局配置。
    -   `use_expression`: 是否**使用**学到的表达。
    -   `learn_expression`: 是否**学习**新的表达。
    -   `learning_strength`: 学习强度，影响学习频率。
    -   `group`: 表达共享组。在同一个组内的聊天会共享学习到的表达方式。

### [chat] - 聊天通用设置
-   `group_chat_mode`: **群聊模式**。`"auto"` 表示自动判断，`"normal"` 表示只进行简单回复，`"focus"` 表示在群里也尝试进行深度对话。
-   `talk_frequency`: **活跃度**。数值越高，它在群里发言就越频繁。
-   `focus_value`: **专注度**。数值越高，机器人越能进行持久的连续对话，但更耗费资源。
-   `enable_breaking_mode`: 是否启用自动进入“breaking模式”（一种特殊的专注模式）。
-   `force_focus_private`: **私聊强制专注**。开启后，私聊时机器人会变得非常专注。
-   `max_context_size`: **记忆长度**。机器人能记住的最近对话数量。
-   `thinking_timeout`: **思考超时**。机器人单次回复的最长思考时间（秒）。
-   `replyer_random_probability`: 首要回复模型被选择的概率。
-   `mentioned_bot_inevitable_reply`, `at_bot_inevitable_reply`: **@必回**。开启后，只要有人@它或提到它的名字，它就一定会回复。
-   `talk_frequency_adjust`: **分时段活跃度**。可以设置机器人在不同时间段有不同的活跃度，实现更精细化的控制。

#### 主动思考功能 (仅在focus模式下生效)
-   `enable_proactive_thinking`: **主动说话**。开启后，机器人会在没人理它的时候，自己找话题发起聊天。
-   `proactive_thinking_interval`: **思考间隔**。大概多久主动说一次话（单位：秒）。可以设为 `0` 配合 `delta_sigma` 实现纯随机。
-   `proactive_thinking_in_private`, `proactive_thinking_in_group`: 分别控制是否在私聊和群聊中启用主动思考。
-   `proactive_thinking_enable_in_private`, `proactive_thinking_enable_in_groups`: 指定只在哪些私聊或群聊中启用主动思考，为空则不限制。
-   `delta_sigma`: **随机性**。该参数控制的随机分布遵循正态分布曲线，让主动说话的时间变得不那么固定，更像真人。

#### Planner 配置
-   `planner_size`: 决定了机器人思考模块（小脑）的尺寸，影响其行为规划的并行度和上下文。建议保持默认。

## 三、进阶功能与系统

这部分是机器人的“超能力”，开启后会让它变得更强大、更智能。

### [relationship] - 关系系统
-   `enable_relationship`: 是否启用关系系统。开启后，机器人会尝试与聊天对象建立和发展关系。
-   `relation_frequency`: 关系构建的频率。

### [message_receive] - 消息过滤
-   `ban_words`: 屏蔽词列表。包含这些词的消息将被忽略。
-   `ban_msgs_regex`: 屏蔽消息的正则表达式列表。匹配到的消息将被忽略。

### [anti_prompt_injection] - 反注入系统
用于防止机器人被恶意指令攻击。
-   `enabled`: 是否启用该系统。
-   `process_mode`: 处理模式，如 `"strict"` (严格), `"lenient"` (宽松)等。
-   `whitelist`: 用户白名单，这些用户的消息将跳过检测。
-   其他均为高级配置，通常无需修改。

### [normal_chat] - 普通聊天
-   `willing_mode`: 回复意愿模式，决定了机器人在普通聊天中的回复倾向。`"classical"` 为经典模式。

### [tool] - 工具
-   `enable_tool`: 是否在普通聊天中启用工具（如网络搜索、视频分析等）。

### [mood] - 情绪系统
-   `enable_mood`: **情绪系统**。让机器人拥有喜怒哀乐，并影响它的回复。
-   `mood_update_threshold`: 情绪更新阈值，越高，情绪变化越慢。

### [emoji] - 表情包系统
-   `emoji_chance`: **发表情包的概率**。
-   `emoji_activate_type`: 推荐设为 `"llm"`，让机器人智能地判断何时该发表情包。
-   `steal_emoji`: **偷表情包**。开启后，它会把别人发的有趣表情包收藏起来自己用。
-   `max_reg_num`: 收藏表情包的最大数量。
-   `do_replace`: 达到最大数量后，是否替换掉旧的表情包。
-   `check_interval`: 检查表情包（注册、删除）的时间间隔（分钟）。
-   `content_filtration`, `filtration_prompt`: 表情包内容过滤。
-   `enable_emotion_analysis`: 是否对表情包进行二次情感分析。

### [memory] - 记忆系统
-   `enable_memory`: **【核心功能】是否开启记忆**。开启后，机器人会记住和用户的对话内容，形成长期记忆。**强烈建议开启**。
-   `enable_llm_instant_memory`, `enable_vector_instant_memory`: **瞬时记忆**。让机器人能更好地记住刚刚说过的话，增强对话连贯性。分为基于LLM和基于向量两种，**建议只开启向量**。
-   `memory_ban_words`: 不希望被记入记忆的词。
-   其他 `memory_`, `forget_`, `consolidate_` 开头的选项：用于调整记忆的构建、遗忘、整合频率，**新手建议保持默认**。

### [voice] - 语音识别
-   `enable_asr`: 是否启用语音识别。开启后，机器人可以“听懂”语音消息。需要额外配置语音识别模型。

### [lpmm_knowledge] - 知识库
-   `enable`: 是否启用本地知识库功能。这是一个高级功能，用于构建机器人的专属知识体系。
-   其他均为知识库的技术参数，**新手建议保持默认**。

### [keyword_reaction] - 关键词/正则回复
-   `keyword_rules`: 设置关键词触发的固定回复。
-   `regex_rules`: 设置正则表达式触发的固定回复。

### [custom_prompt] - 自定义提示词
-   `image_prompt`: 用于图片描述的提示词。
-   `planner_custom_prompt_content`: 用于决策器的自定义提示词。

### [response_post_process] - 回复后处理
-   `enable_response_post_process`: 是否启用回复后处理，包括下面的错别字和分割器。

#### [chinese_typo] - 中文错别字生成器
-   `enable`: 开启后，机器人回复时会模拟真⼈，产⽣⼀些随机的、合理的错别字。
-   `error_rate`, `tone_error_rate`, `word_replace_rate`: 控制不同类型错别字的概率。

#### [response_splitter] - 回复分割器
-   `enable`: 开启后，会将过长的回复分割成多条消息发送。
-   `max_length`, `max_sentence_num`: 控制分割的长度和句子数量。

## 四、系统与调试

这部分通常保持默认即可。

### [log] - 日志配置
-   用于控制日志的输出格式、级别和颜色，供开发者排查问题。

### [dependency_management] - 插件依赖管理
-   `auto_install`: **【推荐开启】** 是否自动为插件安装所需的Python依赖库。
-   `use_mirror`, `mirror_url`: 使用国内镜像源加速下载。

### [debug] - 调试
-   `show_prompt`: 是否在日志中显示完整的prompt内容，用于调试。

### [maim_message] - 消息服务
-   用于连接自定义的消息服务器，**通常无需修改**。

### [planning_system] - 规划系统
-   `schedule_enable`: **日程生成**。开启后，机器人会为自己安排每天的日程。
-   `schedule_guidelines`: 生成日程的指导原则。
-   `monthly_plan_enable`: **月度计划**。开启后，机器人会为自己制定月度目标。
-   `monthly_plan_guidelines`: 生成月度计划的指导原则。
-   其他为月度计划的详细参数。

### [video_analysis] - 视频分析
-   `enable`: **看视频**。开启后，你把视频发给它，它能“看懂”并告诉你视频内容。这是一个非常消耗资源的功能，并且需要正确配置FFmpeg。

::: tip
关于视频分析功能的详细配置（如抽帧模式、分析质量、FFmpeg路径等）和使用方法，请参考专门的 [视频识别功能配置指南](./video_recognition.md) 页面。
:::

### [web_search] - 网络搜索
-   `enable_web_search_tool`: **上网冲浪**。让机器人可以搜索网络来回答你的问题。
-   `enable_url_tool`: 是否启用URL解析工具，让机器人可以直接“阅读”链接内容。
-   `tavily_api_keys`, `exa_api_keys`: 需要填入第三方搜索服务的 API Key 才能使用。
-   `enabled_engines`: 启用的搜索引擎，其中 `"ddg"` 和 `"bing"` 都是免费易用的选项。
-   `search_strategy`: 搜索策略，如 `"single"` (单个), `"parallel"` (并行), `"fallback"` (备用)。

### [sleep_system] - 睡眠系统
-   `enable`: 开启后，机器人会模拟人的作息，在设定的时间“睡觉”。
-   `wakeup_threshold`, `private_message_increment`, `group_mention_increment`: 控制机器人被“吵醒”的机制。
-   `angry_prompt`: 被吵醒后生气时的人设。
-   `enable_insomnia_system`: **失眠系统**。开启后，机器人可能会因为“压力”等原因失眠。
-   `enable_flexible_sleep`: **弹性睡眠**。开启后，机器人不会到点就睡，会根据“睡眠压力”稍微推迟一会。
-   `enable_pre_sleep_notification`: **睡前晚安**。开启后，准备睡觉时会发一条消息。
-   其他均为睡眠和失眠系统的详细参数。

### [cross_context] - 跨上下文共享
-   `enable`: 开启后，可以让机器人在不同的群聊/私聊之间共享上下文。
-   `groups`: 定义共享组，在同一个组内的聊天会共享上下文。
-   `maizone_context_group`: 为QQ空间说说功能定义的专用共享组。

---

配置完成后，请**保存文件**并**重启 MoFox-Bot** 以使更改生效。祝您和您的 Bot 交流愉快！