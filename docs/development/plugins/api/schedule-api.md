# 日程表API

日程表API模块专门负责日程和月度计划信息的查询与管理，帮助插件与MoFox-Bot的日程系统进行交互。

## 导入方式

```python
from src.plugin_system import schedule_api
# 或者
from src.plugin_system.apis import schedule_api
```

## 主要功能

所有对外接口均为异步函数，请在插件的异步环境中使用 `await` 进行调用。

### 1. 获取今日日程

```python
async def get_today_schedule() -> Optional[List[Dict[str, Any]]]:
```

**Returns**:
- `Optional[List[Dict[str, Any]]]`：今天的日程列表。每个日程是一个字典，包含活动的详细信息。如果日程未生成或未启用，则返回 `None`。

### 2. 获取当前活动

```python
async def get_current_activity() -> Optional[str]:
```

**Returns**:
- `Optional[str]`：当前正在进行的活动名称。如果没有正在进行的活动，则返回 `None`。

### 3. 重新生成日程

```python
async def regenerate_schedule() -> bool:
```

**Details**:
- 触发后台任务，为今天重新生成一份日程安排。这在需要根据最新情况（例如，新的月度计划）更新日程时非常有用。

**Returns**:
- `bool`：如果成功触发了重新生成任务，则返回 `True`，否则返回 `False`。

### 4. 获取月度计划

```python
async def get_monthly_plans(target_month: Optional[str] = None) -> List[MonthlyPlan]:
```

**Args**:
- `target_month` (Optional[str])：目标月份，格式为 `"YYYY-MM"`。如果省略，则默认为当前月份。

**Returns**:
- `List[MonthlyPlan]`：指定月份的有效月度计划列表。`MonthlyPlan` 是一个数据库模型对象，包含了计划的详细信息。

### 5. 确保月度计划存在

```python
async def ensure_monthly_plans(target_month: Optional[str] = None) -> bool:
```

**Details**:
- 检查指定月份是否存在月度计划。如果不存在，会自动触发生成过程。

**Args**:
- `target_month` (Optional[str])：目标月份，格式为 `"YYYY-MM"`。如果省略，则默认为当前月份。

**Returns**:
- `bool`：如果计划已存在或成功生成，则返回 `True`，否则返回 `False`。

### 6. 归档月度计划

```python
async def archive_monthly_plans(target_month: Optional[str] = None) -> bool:
```

**Details**:
- 将指定月份的所有有效月度计划标记为“已归档”，使它们不再参与未来日程的生成。

**Args**:
- `target_month` (Optional[str])：目标月份，格式为 `"YYYY-MM"`。如果省略，则默认为当前月份。

**Returns**:
- `bool`：如果归档操作成功，则返回 `True`，否则返回 `False`。

## 注意事项

1.  **异步调用**: 本API中的所有函数都是 `async` 函数，必须在异步上下文中使用 `await` 关键字进行调用。
2.  **异常处理**: 尽管API内部已经进行了一定的错误处理，但在调用时，最好还是将它们包裹在 `try...except` 块中，以应对可能发生的意外情况。
3.  **数据模型**: `get_monthly_plans` 返回的是 `MonthlyPlan` 对象列表，你可以直接访问其属性来获取计划的详细信息，例如 `.plan_text`。
