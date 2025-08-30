# 模型配置指南 (新手友好版)

欢迎！这份指南将用最简单的方式，带你一步步搞定 MoFox-Bot 的“大脑”——也就是 `model_config.toml` 文件。即使你对代码一窍不通，跟着这篇教程也能轻松完成配置！

## 零、一个简单的比喻

让我们把配置模型想象成去一家餐厅点餐，这样就很容易理解了：

1.  **API 服务商 (API Providers)**：这就是**“餐厅”**。比如“DeepSeek餐厅”、“Google餐厅”或者你自己开的“本地模型餐厅”。
2.  **模型 (Models)**：这就是餐厅菜单上的**“菜品”**。每家餐厅都有自己的招牌菜，比如 DeepSeek 餐厅的 `deepseek-chat`。
3.  **模型任务 (Model Tasks)**：这就是你**“点餐的目的”**。比如，“我要点一份 `deepseek-chat` 用来**聊天**”，“再点一份 `qwen-vl-max` 用来**看懂图片**”。

我们的配置过程，就是先告诉 Bot 有哪些“餐厅”可以去，然后从菜单上“点”几道菜并给它们取好我们自己叫的“小名”，最后再告诉 Bot 在执行不同任务（聊天、思考、记忆）时，分别该用哪道“菜”。

---

## 第一步：配置你的“餐厅” (API Providers)

这是最关键的一步！你需要告诉 Bot 从哪里获取 AI 模型的能力。这通常需要两样东西：`api_key` (你的身份凭证) 和 `base_url` (餐厅的地址)。

请打开你的 `model_config.toml` 文件，找到 `[[api_providers]]` 部分。下面我们提供了几个常用服务商的配置模板，**你只需要选择你拥有的服务商，复制对应的代码块，然后填入你自己的 `api_key` 即可！**

---

### 常用服务商配置模板

#### 1. 如果你使用 DeepSeek

> DeepSeek 是一个优秀且经济的选择，官方网站：[https://www.deepseek.com/](https://www.deepseek.com/)

```toml
# --- DeepSeek 配置 ---
[[api_providers]]
name = "DeepSeek"                       # 餐厅名字 (我们自己取，方便后面用)
base_url = "https://api.deepseek.cn/v1" # 餐厅地址 (官方固定的)
api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxx"   # 你的API Key (从DeepSeek官网获取，替换这串文字)
client_type = "openai"                  # 客户端类型 (照抄即可)
```

#### 2. 如果你使用 SiliconFlow

> SiliconFlow 聚合了多种模型，非常方便，官方网站：[https://www.siliconflow.cn/](https://www.siliconflow.cn/)

```toml
# --- SiliconFlow 配置 ---
[[api_providers]]
name = "SiliconFlow"
base_url = "https://api.siliconflow.cn/v1"
api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxx" # 你的API Key (从SiliconFlow官网获取)
client_type = "openai"
```

#### 3. 如果你使用 Google Gemini

> 注意：Gemini 的配置稍有不同。

```toml
# --- Google Gemini 配置 ---
[[api_providers]]
name = "Google"
base_url = "https://generativelanguage.googleapis.com/v1beta"
api_key = "xxxxxxxxxxxxxxxxxxxxxxxx" # 你的API Key (从Google AI Studio获取)
client_type = "aiohttp_gemini"  # 注意：Gemini需要使用这个特殊的客户端类型
```

#### 4. 如果你在本地运行模型 (例如使用 Ollama)

> 如果你在自己的电脑上通过 Ollama 等工具运行本地大模型。

```toml
# --- 本地 Ollama 配置 ---
[[api_providers]]
name = "LocalOllama"
base_url = "http://127.0.0.1:11434/v1" # 你的本地Ollama地址 (默认是这个)
api_key = "ollama" # 对于Ollama，API Key随便填，比如 "ollama"
client_type = "openai"
```

**小提示**：你可以同时配置多家“餐厅”！只需将它们的配置代码块依次粘贴到文件中即可。


## 第二步：从“菜单”上“点菜” (Models)

现在我们已经有了“餐厅”，接下来就要点菜了。点菜的过程就是告诉 Bot，这家餐厅的哪道菜（`model_identifier`），我们想给它取个什么“小名”（`name`），方便我们后面使唤它。

请找到 `[[models]]` 部分。

### 点菜示例

假设我们已经在第一步配置好了名为 `"SiliconFlow"` 的餐厅，现在想用它菜单上的 `deepseek-ai/deepseek-v2-chat` 这道菜。

```toml
# --- 点一道菜的示例 ---
[[models]]
model_identifier = "deepseek-ai/deepseek-v2-chat"  # 菜品的官方全名 (从SiliconFlow官网的模型列表里抄)
name = "deepseek-v2-for-chat"               # 我们给它取的小名 (方便自己记忆)
api_provider = "SiliconFlow"          # 这道菜来自哪个餐厅 (必须和第一步里的 name 完全一样)
```

你可以用同样的方式，从你配置好的所有“餐厅”里，点很多道不同的“菜”，并给它们取不同的小名。


## 第三步：分配“菜品”给不同的“用途” (Model Tasks)

这是最后一步！我们需要告诉 Bot，在执行各种具体任务时，应该用我们刚刚点的哪道“菜”。

请找到 `[model_task_config]` 部分。这里有很多任务，比如 `utils` (通用工具), `replyer_1` (主要聊天), `planner` (思考决策) 等等。

你只需要在每个任务的 `model_list` 里，填上你在第二步中给模型取的**“小名”**。

### 通用分配方案 (推荐新手使用)

如果你不想一个个研究，可以直接使用下面这个高性价比的分配方案。这个方案假设你已经在第二步中，为你最主要的聊天模型取了**“deepseek-v2-for-chat”**这个小名，并为另一个备用的小模型（如果有的话）取了**“mini-model”**的小名。

```toml
# --- 任务分配示例 (直接复制并根据你的“小名”修改) ---
# 下方是默认的任务分配方案，你可以直接将 `model_list` 中的模型"小名"
# 替换为你自己在第二步中定义好的“小名”。

### utils - 工具模型
# 用于表情包模块、取名模块、关系模块等核心功能：
[model_task_config.utils]
model_list = ["siliconflow-deepseek-v3"]
temperature = 0.2
max_tokens = 800

### utils_small - 小型工具模型
# 用于高频率调用的场景，建议使用速度快的小模型：
[model_task_config.utils_small]
model_list = ["qwen3-8b"]
temperature = 0.7
max_tokens = 800

### replyer_1 - 主要回复模型
# 首要回复模型，也用于表达器和表达方式学习：
[model_task_config.replyer_1]
model_list = ["siliconflow-deepseek-v3"]
temperature = 0.2
max_tokens = 800

### replyer_2 - 次要回复模型
[model_task_config.replyer_2]
model_list = ["siliconflow-deepseek-v3"]
temperature = 0.7
max_tokens = 800

### planner - 决策模型
# 负责决定MoFox_Bot该做什么：
[model_task_config.planner]
model_list = ["siliconflow-deepseek-v3"]
temperature = 0.3
max_tokens = 800

### emotion - 情绪模型
# 负责MoFox_Bot的情绪变化：
[model_task_config.emotion]
model_list = ["siliconflow-deepseek-v3"]
temperature = 0.3
max_tokens = 800

### memory - 记忆模型
[model_task_config.memory]
model_list = ["qwen3-30b"]
temperature = 0.7
max_tokens = 800

### vlm - 视觉语言模型
# 用于图像识别：
[model_task_config.vlm]
model_list = ["qwen2.5-vl-72b"]
max_tokens = 800

### voice - 语音识别模型
[model_task_config.voice]
model_list = ["sensevoice-small"]

### embedding - 嵌入模型
[model_task_config.embedding]
model_list = ["bge-m3"]

### tool_use - 工具调用模型
# 需要使用支持工具调用的模型：
[model_task_config.tool_use]
model_list = ["qwen3-14b"]
temperature = 0.7
max_tokens = 800

### lpmm_entity_extract - 实体提取模型
[model_task_config.lpmm_entity_extract]
model_list = ["siliconflow-deepseek-v3"]
temperature = 0.2
max_tokens = 800

### lpmm_rdf_build - RDF构建模型
[model_task_config.lpmm_rdf_build]
model_list = ["siliconflow-deepseek-v3"]
temperature = 0.2
max_tokens = 800

### lpmm_qa - 问答模型
[model_task_config.lpmm_qa]
model_list = ["deepseek-r1-distill-qwen-32b"]
temperature = 0.7
max_tokens = 800

### schedule_generator - 日程生成模型
[model_task_config.schedule_generator]
model_list = ["deepseek-v3"]
temperature = 0.5
max_tokens = 1024

### monthly_plan_generator - 月度计划生成模型
[model_task_config.monthly_plan_generator]
model_list = ["deepseek-v3"]
temperature = 0.7
max_tokens = 1024

### emoji_vlm - 表情包VLM模型
[model_task_config.emoji_vlm]
model_list = ["qwen-vl-max"]
max_tokens = 800

### anti_injection - 反注入模型
[model_task_config.anti_injection]
model_list = ["deepseek-v3"]
temperature = 0.1
max_tokens = 512

### utils_video - 视频分析模型
[model_task_config.utils_video]
model_list = ["qwen-vl-max"]
max_tokens = 800
```

**核心思想**：对于新手来说，最简单的方法就是把你最强大、最主要的聊天模型（你给它取的小名）填到**所有**你想要启用的任务的 `model_list` 中。

---

## 常见问题解答 (FAQ)

**Q: `api_key` 是什么？从哪里获取？**
A: `api_key` 就像是你的会员卡号，用来证明你有权使用这家“餐厅”的服务。你需要去对应的服务商官方网站（比如 DeepSeek, SiliconFlow）注册账号，然后在个人中心的“API密钥”或类似页面找到它。它通常是一长串以 `sk-` 开头的字符。

**Q: 我怎么知道 `model_identifier` (菜品官方名) 是什么？**
A: 这也需要去服务商的官方网站查找。它们通常会有一个“模型列表”或“API文档”页面，上面会列出所有支持的模型以及它们的官方名称/ID。

**Q: 我可以只用一个模型完成所有任务吗？**
A: **完全可以！** 对于新手来说，这是最推荐的方式。把你最好的模型的小名填到所有任务的 `model_list` 里，机器人就能正常工作了。

**Q: 那些 `temperature`, `max_tokens` 是什么意思？**
A: 这些是做菜时的“火候”和“份量”。
-   `temperature` (温度)：越高，模型回答越有创造性、越随机；越低，回答越稳定、越精确。通常保持默认值即可。
-   `max_tokens` (最大份量)：限制一次回答最长能说多少话。也可以暂时不管，使用默认值。


## 进阶调优 (新手可跳过)

当你熟悉了基本配置后，可以尝试以下进阶玩法：
-   **`extra_params`**：为特定模型添加一些“特殊调料”。比如某些模型支持关闭“思考”功能以加快速度。这需要你阅读对应服务商的 API 文档来了解具体有哪些参数可以配置。
-   **`force_stream_mode`**：强制使用“流式输出”（打字机效果）。某些模型必须开启这个才能正常工作。
-   **成本优化**：为不同的任务选择不同成本和性能的模型。比如，让便宜快速的小模型处理高频的简单任务，让昂贵强大的大模型处理核心的聊天和思考任务。


恭喜你！到这里，你的模型配置就完成了。保存好 `model_config.toml` 文件，然后重启你的 MoFox-Bot，它现在就拥有了强大的“大脑”！
