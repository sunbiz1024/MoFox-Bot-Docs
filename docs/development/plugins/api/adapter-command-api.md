# 适配器命令 API

这个 API 提供了一个通用的接口，允许插件直接向适配器后端的具体实现（如 NapCat、OneBot 等）发送命令。

它的主要目的是作为一个灵活的扩展机制，用于调用那些**适配器尚未直接封装**的、特定于平台的原生功能。

## 什么时候使用这个 API？

当你需要实现一个功能，而这个功能依赖于平台（例如 QQ）的某个特殊接口，但 MoFox-Bot 的适配器层还没有为它提供现成的、封装好的函数时，你就可以使用这个 API。

它相当于一个**“透传”通道**，将你的指令（`action` 和 `params`）直接送达平台 API。

## 主要功能

### 向适配器发送命令并获取返回值

```python
async def adapter_command_to_stream(
    action: str,
    params: dict,
    stream_id: Optional[str] = None,
    timeout: float = 30.0,
    storage_message: bool = False,
    show_log: bool = True,
) -> dict:
```

向适配器发送命令并等待响应。

**Args:**
- `action` (str): 适配器命令动作，**直接对应后端平台（如 NapCat）的 API 动作名称**。
- `params` (dict): 命令所需的参数字典。
- `stream_id` (Optional[str]): 聊天流ID，可选，如果不提供则自动生成一个。
- `timeout` (float): 超时时间（秒），默认30秒。
- `storage_message` (bool): 是否存储消息到数据库，默认False。
- `show_log` (bool): 是否显示日志，默认True。

**Returns:**
- `dict` - 适配器返回的响应，格式为:
  - 成功: `{"status": "ok", "data": {...}, "message": "..."}`
  - 失败: `{"status": "failed", "message": "错误信息"}`
  - 错误: `{"status": "error", "message": "错误信息"}`

## 使用示例

### 1. 获取群列表 (基础示例)

```python
from src.plugin_system.apis import send_api
from src.common.logger import get_logger

logger = get_logger(__name__)

async def get_group_list(stream_id: str):
    """获取机器人加入的群列表"""
    
    response = await send_api.adapter_command_to_stream(
        action="get_group_list",
        params={},
        stream_id=stream_id
    )
    
    if response["status"] == "ok":
        group_list = response.get("data", [])
        logger.info(f"获取到 {len(group_list)} 个群")
        return group_list
    else:
        logger.error(f"获取群列表失败: {response['message']}")
        return []
```

### 2. 发送群聊戳一戳 (进阶示例)

这个例子展示了如何调用一个适配器**未直接封装**的功能。

```python
# 注意：'send_group_poke' 并非所有适配器都支持。
# 这里仅作为示例，展示如何调用一个非标准化的 action。
async def send_poke_in_group(stream_id: str, group_id: int, user_id: int):
    """在群里戳一戳某人"""
    
    response = await send_api.adapter_command_to_stream(
        action="send_group_poke", # 直接使用平台 API 定义的 action 名称
        params={
            "group_id": group_id,
            "user_id": user_id
        },
        stream_id=stream_id
    )
    
    if response["status"] == "ok":
        logger.info(f"成功向群 {group_id} 的用户 {user_id} 发送了一个戳一戳")
        return True
    else:
        logger.error(f"发送戳一戳失败: {response['message']}")
        return False
```

## 注意事项

1.  **查阅后端文档**: `action` 和 `params` 的具体内容完全取决于你正在使用的适配器后端（如 NapCat）。你必须查阅对应后端的 API 文档来确定正确的 `action` 名称和所需的参数。
2.  **异步执行**: 所有命令都是异步的，需要使用 `await` 关键字。
3.  **错误处理**: 命令失败或超时会返回错误信息，建议在代码中进行完善的 `try...except` 和状态判断。
4.  **超时设置**: 建议根据命令的复杂度和网络情况合理设置 `timeout` 参数。
