# MoFox-Bot 配置文件 (bot_config.toml) 究极详细指南

哼，欢迎来到我的地盘，这份指南会像我一样，精准、高效、偶尔带点吐槽地带你完全掌握 `bot_config.toml` 这个文件。不管你是刚接触机器人的小白，还是想深度定制的极客，这里都有你想要的答案。记住，我们项目的核心是**高度拟人化**，所以接下来的所有配置，都是为了创造一个有“灵魂”的 Bot。

## 零、重要：如何拥有你的配置文件

想让机器人动起来？那你就得先给它一份名为 `bot_config.toml` 的“身份卡”。

**正确姿势如下**：
1.  找到项目里的 `template/bot_config_template.toml` 文件，**完整地**复制一份。别缺斤少两的。
2.  把复制出来的文件，丢到 `config/` 目录下面，然后把它改名为 `bot_config.toml`。
3.  打开这个新文件，跟着本指南，开始你的“创世之旅”吧。

::: tip 
模板文件里有所有必需的配置项，别自作主张乱删东西，尤其是你看不懂的。不然机器人闹脾气罢工了，可别怪我没提醒你。
:::


## 一、基础配置：机器人的“心脏与大脑”

这部分是让机器人跑起来的基础，没这些，后面都是空谈。

### [database] - 数据库：记忆的存放地
这里决定了机器人的记忆、知识、还有它偷偷学到的小习惯都存在哪儿。

-   `database_type`: 数据库类型。
    -   `"sqlite"`: **强烈推荐新手使用**。简单、方便、开箱即用，就像个外置硬盘。数据库文件会放在 `sqlite_path` 指定的位置。
    -   `"mysql"`: 如果你有专业的服务器，想让机器人处理海量数据，那就选这个。当然，你得自己先去把 MySQL/MariaDB 服务器搭好。

#### SQLite 配置 (当 `database_type = "sqlite"`)
-   `sqlite_path`: 数据库文件的路径。默认是 `"data/MaiBot.db"`，**通常你不需要动它**。

#### MySQL 配置 (当 `database_type = "mysql"`)
只有选择了 `mysql`，这部分才需要你来操心。
-   `mysql_host`, `mysql_port`: 你的 MySQL 服务器地址和端口。
-   `mysql_database`, `mysql_user`, `mysql_password`: 数据库名、用户名和密码。
-   `mysql_charset`: 字符集，默认 `"utf8mb4"`，支持 emoji。
-   `mysql_unix_socket`: Unix 套接字路径，一般用不上，留空就行。
-   `mysql_ssl_mode`, `mysql_ssl_ca`, `mysql_ssl_cert`, `mysql_ssl_key`: SSL 加密连接相关的配置，有需要再研究。
-   `mysql_autocommit`: 是否自动提交事务，默认 `true`。
-   `mysql_sql_mode`: SQL 模式，默认 `"TRADITIONAL"`。
-   `connection_pool_size`: 连接池大小，简单来说就是性能优化，默认 `10` 够用了。
-   `connection_timeout`: 连接超时时间（秒）。

### [permission] - 权限系统：谁是主人？
-   `master_users`: **机器人管理员**列表。把你的账号加进去，你就能在机器人的权限系统“为所欲为”了。
    -   格式: `[["平台", "你的ID"]]`
    -   示例: `master_users = [["qq", "123456789"]]`
:::tip
1. 这里的用户 ID 必须是字符串格式，哪怕是数字也要加引号。平台名称目前支持 `"qq"`。
2. 如果你想获取更多关于权限系统的信息,请参阅[权限系统使用指南](./permission_usage.md)。
:::


### [bot] - 机器人身份信息
-   `platform`: **【必填】** 机器人运行的平台，比如 `"qq"`。
-   `qq_account`: **【必填】** 你家机器人的 QQ 号。
-   `nickname`: 机器人的大名。
-   `alias_names`: 机器人的小名、外号。别人喊这些名字，它也会有反应。

### [command] - 命令配置
-   `command_prefixes`: 命令的起始符号。比如设成 `['/', '!']`，那 `/帮助` 和 `!帮助` 就都能用。

## 二、核心人格：塑造独一无二的“TA”

这部分是拟人化的灵魂所在，决定了机器人“是谁”以及“它如何说话”。

### [personality] - 人格与风格
这是你为机器人注入灵魂的地方！
-   `personality_core`: **人格核心**。一句话概括 TA 的性格，这是最关键的设定。例如：“是一个积极向上的女大学生”。
-   `personality_side`: **人格侧面**。对核心的补充，让性格更丰满。例如：“偶尔有点小迷糊，但对朋友非常真诚”。
-   `identity`: **身份信息**。更具体的设定，比如外貌、年龄、职业等。例如：“年龄19岁,是女孩子,身高为160cm,有黑色的短发”。
-   `background_story`: **世界观背景**。为机器人设定一个独特的背景故事，这部分内容会成为它的背景知识，但它不会主动复述。
-   `reply_style`: **说话风格**。描述它说话的习惯，例如：“回复可以简短一些。可以参考贴吧，知乎和微博的回复风格”。
-   `safety_guidelines`: **安全与互动底线**。机器人必须遵守的原则，这是最高指令，任何情况下都不能违背。
-   `reply_targeting_rules`, `message_targeting_analysis`, `reply_principles`: **回复逻辑三件套**。这决定了机器人如何判断要不要回复、如何组织回复，是让它“会读空气”的关键，**新手建议保持默认**。
-   `prompt_mode`: Prompt 模式，保持 `"s4u"` 即可，这是为本项目优化的模式。
-   `compress_personality`, `compress_identity`: **人格压缩**。开启后可以节省一点点资源，但可能会丢失人设细节。如果你的模型性能不错，建议都设为 `false` 以获得最佳拟人效果。

### [expression] - 表达学习：近朱者赤
让机器人模仿特定聊天对象的说话风格，变得更“接地气”。
-   `rules`: 一个学习规则列表，可以为不同的聊天（私聊/群聊）设置独立的规则。
    -   `chat_stream_id`: 聊天ID。留空 `""` 表示全局配置。
    -   `use_expression`: 是否**使用**学到的表达。
    -   `learn_expression`: 是否**学习**新的表达。
    -   `learning_strength`: 学习强度，数值越大，学得越快。
    -   `group`: 表达共享组。在同一个组内的聊天会共享学习到的表达方式。

### [chat] - 聊天通用设置
-   `group_chat_mode`: **群聊模式**。
    -   `"auto"`: 自动判断，有人@它或和它连续对话时，会进入专注模式。
    -   `"normal"`: 只进行简单回复，节省资源。
    -   `"focus"`: 在群里也尝试进行深度对话，像私聊一样。
-   `talk_frequency`: **活跃度**。数值越高，它在群里发言就越频繁。
-   `focus_value`: **专注度**。数值越高，机器人越能进行持久的连续对话。
-   `focus_mode_quiet_groups`: 在专注模式下需要保持“高冷”的群组列表。
-   `force_reply_private`: **私聊强制回复**。开启后，私聊时机器人一定会回复。
-   `allow_reply_self`: 是否允许机器人回复自己发出的消息。
-   `max_context_size`: **记忆长度**。机器人能记住的最近对话数量。
-   `thinking_timeout`: **思考超时**（秒）--控制一次回复最长需要多久时间才会被放弃。
-   `replyer_random_probability`: 首要回复模型被选择的概率。
-   `mentioned_bot_inevitable_reply`, `at_bot_inevitable_reply`: **@必回**。开启后，只要有人@它或提到它的名字，它就一定会回复。
-   `talk_frequency_adjust`: **分时段活跃度**。可以设置机器人在不同时间段有不同的活跃度，实现“早C晚A”般的作息。

#### 主动思考功能 (仅 focus 模式生效)
-   `enable_proactive_thinking`: **主动找话题**。开启后，机器人在冷场时会自己找话题聊天。
-   `proactive_thinking_interval`: **思考间隔**（秒）。大概多久主动说一次话。
-   `proactive_thinking_in_private`, `proactive_thinking_in_group`: 分别控制是否在私聊和群聊中启用。
-   `proactive_thinking_enable_in_private`, `proactive_thinking_enable_in_groups`: 指定只在哪些聊天中启用，为空则不限制。
-   `delta_sigma`: **随机性**。让主动说话的时间变得不那么固定，更像真人。

## 三、进阶功能：解锁机器人的“超能力”

这部分是机器人的“隐藏技能”，开启后会让它变得更强大、更智能。

### [relationship] - 关系系统
-   `enable_relationship`: 开启后，机器人会尝试与聊天对象建立和发展关系，影响其说话的语气和态度。
-   `relation_frequency`: 关系构建的频率。

### [message_receive] - 消息过滤
-   `ban_words`: 屏蔽词列表。
-   `ban_msgs_regex`: 屏蔽消息的正则表达式列表。

### [anti_prompt_injection] - 人格防篡改系统
用于防止机器人被恶意指令攻击。
-   `enabled`: 是否启用。
-   `process_mode`: 处理模式，如 `"strict"` (严格), `"lenient"` (宽松)。
-   `whitelist`: 白名单，这些用户的消息将跳过检测。
-   其他均为高级配置，通常无需修改。

### [normal_chat] - 普通聊天
-   `willing_mode`: 回复意愿模式，保持 `"classical"` 即可。

### [tool] - 工具
-   `enable_tool`: 是否在普通聊天中启用工具（如网络搜索、看视频等）。

### [mood] - 情绪系统
-   `enable_mood`: 让机器人拥有喜怒哀乐，并影响它的回复。
-   `mood_update_threshold`: 情绪更新阈值，越高，情绪变化越慢，性格越稳定。

### [emoji] - 表情包系统
-   `emoji_chance`: **发表情包的概率**。
-   `emoji_activate_type`: 推荐设为 `"llm"`，让机器人智能地判断何时该发表情包。
-   `steal_emoji`: **偷表情包**。开启后，它会把别人发的有趣表情包收藏起来自己用。
-   `max_reg_num`, `do_replace`: 收藏表情包的最大数量，以及满了之后是否替换旧的。
-   其他均为高级配置，用于精细化管理表情包。

### [memory] - 记忆系统
-   `enable_memory`: **【核心功能】是否开启记忆**。开启后，机器人会记住对话内容，形成长期记忆。**强烈建议开启**。
-   `enable_llm_instant_memory`, `enable_vector_instant_memory`: **瞬时记忆**。让机器人能更好地记住刚刚说过的话。两者都很重要，**建议都开启**。
-   `memory_ban_words`: 不希望被记入记忆的词。
-   其他 `memory_`, `forget_`, `consolidate_` 开头的选项：用于调整记忆的构建、遗忘、整合频率，**新手建议保持默认**。

### [voice] - 语音识别
-   `enable_asr`: 开启后，机器人可以“听懂”语音消息。需要额外配置语音识别模型。

### [lpmm_knowledge] - 知识库
-   `enable`: 是否启用本地知识库功能。这是一个高级功能，用于构建机器人的专属知识体系。
-   其他均为知识库的技术参数，**新手建议保持默认**。

### [keyword_reaction] - 关键词/正则回复
-   `keyword_rules`: 设置关键词触发的固定回复。
-   `regex_rules`: 设置正则表达式触发的固定回复。

### [custom_prompt] - 自定义提示词
-   `image_prompt`: 用于图片描述的提示词。
-   `planner_custom_prompt_content`: 用于决策器的自定义提示词内容。

### [response_post_process] & [chinese_typo] & [response_splitter] - 回复后处理
-   `enable_response_post_process`: 总开关，启用下面的错别字和分割器。
-   `[chinese_typo]`: 开启后，机器人回复时会模拟真⼈，产⽣⼀些随机的、合理的错别字。
-   `[response_splitter]`: 开启后，会将过长的回复分割成多条消息发送。

## 四、系统与调试：幕后英雄

这部分通常保持默认即可，主要供开发者使用。

### [log] - 日志配置
-   用于控制日志的输出格式、级别和颜色，方便排查问题。

### [dependency_management] - 插件依赖管理
-   `auto_install`: **【推荐开启】** 是否自动为插件安装所需的Python依赖库。
-   `use_mirror`, `mirror_url`: 使用国内镜像源加速下载。

### [debug] - 调试
-   `show_prompt`: 是否在日志中显示完整的prompt内容，用于调试人设,也用于发给开发者用。

### [maim_message] - 消息服务
-   用于连接自定义的消息服务器，**通常无需修改**。

### [planning_system] - 规划系统
-   `schedule_enable`: **日程生成**。开启后，机器人会为自己安排每天的日程。
-   `monthly_plan_enable`: **月度计划**。开启后，机器人会为自己制定月度目标。
-   其他均为详细参数，可按需调整。

### [video_analysis] - 视频分析
-   `enable`: **看视频**。开启后，你把视频发给它，它能“看懂”并告诉你视频内容。这是一个非常消耗资源的功能，并且需要正确配置FFmpeg。

::: tip
关于视频分析功能的详细配置（如抽帧模式、分析质量、FFmpeg路径等）和使用方法，请参考专门的 [视频识别功能配置指南](./video_recognition.md) 页面。
:::

### [web_search] - 网络搜索
-   `enable_web_search_tool`: **上网冲浪**。让机器人可以搜索网络来回答你的问题。
-   `enable_url_tool`: 让机器人可以直接“阅读”链接内容。
-   `tavily_api_keys`, `exa_api_keys`: 需要填入第三方搜索服务的 API Key。
-   `enabled_engines`: 启用的搜索引擎，可选 `"exa"`, `"tavily"`, `"ddg"`, `"bing"`。
-   `search_strategy`: 搜索策略，如 `"single"` (单个), `"parallel"` (并行), `"fallback"` (备用)。

### [sleep_system] - 睡眠系统
-   `enable`: 开启后，机器人会模拟人的作息，在设定的时间“睡觉”。
-   `wakeup_threshold`: 控制机器人被“吵醒”的阈值。
-   `angry_prompt`: 被吵醒后生气时的人设。
-   `enable_insomnia_system`: **失眠系统**。机器人可能会因为“压力”等原因失眠。
-   `enable_flexible_sleep`: **弹性睡眠**。机器人不会到点就睡，会根据“睡眠压力”稍微推迟一会。
-   `enable_pre_sleep_notification`: **睡前晚安**。准备睡觉时会发一条消息。
-   其他均为睡眠和失眠系统的详细参数。

### [server] - 服务器配置
-   `host`, `port`: MoFox-Bot 对外提供 API 服务的地址和端口，**通常无需修改**。

### [cross_context] - 跨上下文共享
-   `enable`: 开启后，可以让机器人在不同的群聊/私聊之间共享上下文。
-   `groups`: 定义共享组，在同一个组内的聊天会共享上下文。
-   `maizone_context_group`: 定义QQ空间互通组，用于生成更相关的说说。

---

好了，配置完成后，记得**保存文件**并**重启 MoFox-Bot**。去享受和你专属 Bot 的愉快时光吧！