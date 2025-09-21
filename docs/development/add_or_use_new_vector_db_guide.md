# 统一向量数据库服务开发指南

本文档旨在为 MoFox-Bot 项目的开发者提供关于**统一向量数据库服务**的全面指导，内容涵盖服务的使用方法和扩展新数据库实现的具体步骤。

## 1. 核心设计理念

为了保证代码的整洁性、可维护性和未来的可扩展性，我们的向量数据库服务遵循以下核心设计理念：

1.  **统一入口**: 所有对向量数据库的操作都应通过全局单例 `vector_db_service` 进行。这确保了调用的规范性和一致性。
2.  **抽象接口**: 服务遵循在 `VectorDBBase` 中定义的抽象接口。这意味着，我们可以轻松替换底层向量数据库（如 ChromaDB, Milvus, FAISS），而无需修改任何业务逻辑代码。
3.  **单例模式**: 整个应用程序共享一个数据库客户端实例。这不仅避免了不必要的资源浪费，也简化了连接管理。
4.  **数据隔离**:
    *   **集合 (Collection) 层面**: 使用不同的 `collection` 名称来隔离不同业务模块（如语义缓存、瞬时记忆）的数据。
    *   **数据 (Document) 层面**: 在 `collection` 内部，使用 `metadata` 字段（例如 `chat_id`）来进一步隔离不同用户或会话的数据。

---

## 2. 如何使用 `vector_db_service`

本节将指导您如何在代码中使用全局的向量数据库服务。

### 2.1. 导入服务

在任何需要使用向量数据库的文件中，只需导入全局服务实例：

```python
from src.common.vector_db import vector_db_service
```

### 2.2. 主要操作

`vector_db_service` 对象提供了所有你需要的方法，这些方法都继承自 `VectorDBBase`。

#### a. 获取或创建集合 (Collection)

在操作数据之前，你需要先指定一个集合。如果该集合不存在，服务将自动为您创建。

```python
# 为语义缓存创建一个集合
vector_db_service.get_or_create_collection(name="semantic_cache")

# 为瞬时记忆创建一个集合，并传入特定于实现的参数
vector_db_service.get_or_create_collection(
    name="instant_memory",
    metadata={"hnsw:space": "cosine"}  # 例如，为 ChromaDB 指定余弦相似度
)
```

#### b. 添加数据

使用 `add` 方法向指定集合中添加向量、文档和元数据。

```python
collection_name = "instant_memory"
chat_id = "user_123"
message_id = "msg_abc"
embedding_vector = [0.1, 0.2, 0.3, ...]  # 你的 embedding 向量
content = "你好，这是一个测试消息"

vector_db_service.add(
    collection_name=collection_name,
    embeddings=[embedding_vector],
    documents=[content],
    metadatas=[{
        "chat_id": chat_id,
        "timestamp": 1678886400.0,
        "sender": "user"
    }],
    ids=[message_id]
)
```

#### c. 查询数据

使用 `query` 方法来查找与查询向量最相似的数据。您可以使用 `where` 子句来精确过滤元数据。

```python
query_vector = [0.11, 0.22, 0.33, ...]  # 用于查询的向量
collection_name = "instant_memory"
chat_id_to_query = "user_123"

results = vector_db_service.query(
    collection_name=collection_name,
    query_embeddings=[query_vector],
    n_results=5,  # 返回最相似的5个结果
    where={"chat_id": chat_id_to_query}  # **重要**: 使用 where 来隔离不同聊天的数据
)

# results 的结构示例:
# {
#     'ids': [['msg_abc']],
#     'distances': [[0.0123]],
#     'metadatas': [[{'chat_id': 'user_123', ...}]],
#     'embeddings': None, # 默认不返回，可配置
#     'documents': [['你好，这是一个测试消息']]
# }
print(results)
```

#### d. 删除数据

您可以根据 `id` 或 `where` 条件来删除集合中的数据。

```python
# 根据 ID 删除
vector_db_service.delete(
    collection_name="instant_memory",
    ids=["msg_abc"]
)

# 根据 where 条件删除 (例如，删除某个用户的所有记忆)
vector_db_service.delete(
    collection_name="instant_memory",
    where={"chat_id": "user_123"}
)
```

#### e. 获取集合数量

使用 `count` 方法获取一个集合中的条目总数。

```python
count = vector_db_service.count(collection_name="semantic_cache")
print(f"语义缓存集合中有 {count} 条数据。")
```

---

## 3. 如何添加新的向量数据库实现

本节将指导您如何通过继承 `VectorDBBase` 抽象基类，为项目添加新的向量数据库支持。

### 步骤 1：创建实现文件

在 `mmc/src/common/vector_db/` 目录下创建一个新的 Python 文件，例如 `my_vectordb_impl.py`。

### 步骤 2：继承 `VectorDBBase` 并实现接口

在您的新文件中，创建并导出一个继承自 `VectorDBBase` 的新类。您需要实现基类中定义的所有抽象方法。

*   **`__init__(self, path: str, **kwargs: Any)`**: 初始化数据库客户端。推荐在此实现单例模式，以确保全局只有一个客户端实例。
*   **`get_or_create_collection(self, name: str, **kwargs: Any) -> Any`**: 获取或创建集合。
*   **`add(...)`**: 添加数据。
*   **`query(...)`**: 查询数据。
*   **`delete(...)`**: 删除数据。
*   **`get(...)`**: 根据条件获取数据。
*   **`count(self, collection_name: str) -> int`**: 获取集合中的条目总数。
*   **`delete_collection(self, name: str) -> None`**: 删除一个集合。

您可以参考现有的 [`ChromaDBImpl`](./chromadb_impl.py) 作为实现范例。

**代码骨架示例:**

```python
# mmc/src/common/vector_db/my_vectordb_impl.py

import threading
from typing import Any, Dict, List, Optional
from .base import VectorDBBase
from src.common.logger import get_logger

# 假设这是您的向量数据库客户端库
# import my_vectordb_client 

logger = get_logger(__name__)

class MyVectorDBImpl(VectorDBBase):
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            with cls._lock:
                if not cls._instance:
                    cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, path: str, **kwargs: Any):
        if not hasattr(self, '_initialized'):
            with self._lock:
                if not hasattr(self, '_initialized'):
                    logger.info(f"正在初始化 MyVectorDB，数据库路径: {path}")
                    # self.client = my_vectordb_client.connect(path=path, **kwargs)
                    self._initialized = True

    # ... 在这里实现所有来自 VectorDBBase 的抽象方法 ...
```

### 步骤 3：配置应用程序以使用新实现

最后，修改 `mmc/src/common/vector_db/__init__.py` 文件中的 `get_vector_db_service` 工厂函数，使其能够根据配置返回您的新数据库实例。

1.  **导入您的新实现类**：

    ```python
    # mmc/src/common/vector_db/__init__.py
    from .my_vectordb_impl import MyVectorDBImpl
    ```

2.  **修改 `get_vector_db_service` 函数**：

    在函数中添加逻辑，以便可以切换到您的实现。未来这里会通过全局配置来动态选择。

    ```python
    # mmc/src/common/vector_db/__init__.py

    def get_vector_db_service() -> VectorDBBase:
        """
        工厂函数，初始化并返回向量数据库服务实例。
        """
        # TODO: 从全局配置中读取数据库类型和路径
        db_type = "MyVectorDB"  # 假设从配置中读取
        db_path = "data/my_vectordb"

        if db_type == "MyVectorDB":
            return MyVectorDBImpl(path=db_path)
        else:
            # 默认返回 ChromaDB
            return ChromaDBImpl(path="data/chroma_db")
    ```

完成以上步骤后，您的新向量数据库实现就可以在项目中使用了。

---

## 4. 代码结构参考

-   **抽象基类**: `mmc/src/common/vector_db/base.py`
-   **ChromaDB 实现 (范例)**: `mmc/src/common/vector_db/chromadb_impl.py`
-   **服务入口与工厂函数**: `mmc/src/common/vector_db/__init__.py`