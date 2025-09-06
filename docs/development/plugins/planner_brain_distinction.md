# Planner "大脑"与"小脑"决策系统详解

为了实现更精细、更高效的决策，MMC的Planner系统被设计为一个由“大脑”和“小脑”组成的双核系统。本文档将详细解释这两个核心的区别，以及如何通过`planner_type`字段来控制一个Action应该由哪个核心来处理。

## 1. “大脑” (Big Brain) - 宏观决策核心

“大脑”是Planner系统的宏观决策单元。它不关心具体的Action执行细节，而是专注于更高层次的策略性决策。

-   **核心职责**:
    -   决定是否应该进行**聊天回复** (`reply`)。
    -   处理需要广泛上下文、进行复杂推理的宏观任务。
-   **特点**:
    -   **低频次**: “大脑”的决策周期相对较长。
    -   **高复杂度**: 它会调用更强大的LLM模型，并分析更大范围的上下文信息。
    -   **策略性**: 它的决策会影响到整个对话的走向和基调。

## 2. “小脑” (Small Brain) - 微观执行核心

“小脑”是Planner系统的微观执行单元。它负责处理具体的、情境化的Action，并做出快速反应。

-   **核心职责**:
    -   从一组给定的Action中，判断哪些应该在当前情境下被触发。
    -   处理需要快速响应、基于特定关键词或随机性的任务。
-   **特点**:
    -   **高频次**: “小脑”会以更高的频率被调用，以确保系统能够对各种事件做出及时反应。
    -   **低延迟**: 它使用更轻量级的LLM模型，并专注于较小的上下文窗口，以实现快速决策。
    -   **执行性**: 它的决策直接关系到具体的功能执行。

## 3. 如何通过 `planner_type` 控制决策单元

为了让开发者能够精确地控制一个Action应该由哪个决策单元处理，我们在`ActionInfo`数据类中引入了`planner_type`字段。

`planner_type`是一个枚举类型，包含以下三个选项：

-   `PlannerType.BIG_BRAIN`: 指定该Action只应由“大脑”处理。适用于需要宏观决策的Action。
-   `PlannerType.SMALL_BRAIN`: 指定该Action只应由“小脑”处理。适用于需要快速、具体决策的Action。
-   `PlannerType.ALL`: （默认值）指定该Action可以同时被“大脑”和“小脑”考虑。

### 使用示例

在定义一个Action时，你可以像下面这样设置`planner_type`：

```python
from src.plugin_system.base.component_types import ActionInfo, PlannerType

my_action_info = ActionInfo(
    name="my_fast_action",
    description="一个需要快速响应的动作",
    # ... 其他配置 ...
    planner_type=PlannerType.SMALL_BRAIN  # 指定由小脑处理
)

my_strategic_action_info = ActionInfo(
    name="my_strategic_action",
    description="一个需要深思熟虑的动作",
    # ... 其他配置 ...
    planner_type=PlannerType.BIG_BRAIN  # 指定由大脑处理
)
```

通过合理地配置`planner_type`，我们可以将不同类型的Action分配给最适合的决策单元，从而在保证系统响应速度的同时，也能处理复杂的宏观任务，最终实现一个更智能、更高效的AI助理。