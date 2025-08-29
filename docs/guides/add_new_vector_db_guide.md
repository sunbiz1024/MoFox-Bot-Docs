# 如何添加新的向量数据库

本文档将指导您如何通过继承 `VectorDBBase` 抽象基类，为本项目添加新的向量数据库实现。

## 简介

`VectorDBBase` 定义了一个统一的接口，所有向量数据库的实现都必须遵循这个接口。通过这种方式，我们可以在不修改核心代码的情况下，轻松地切换不同的向量数据库。

## 先决条件

在开始之前，请确保您已经：

1.  安装了您想要集成的向量数据库的 Python 客户端库。
2.  熟悉该向量数据库的基本操作，例如初始化客户端、创建集合、添加和查询数据等。

## 分步指南

### 步骤 1：创建实现文件

在 `mmc/src/common/vector_db/` 目录下创建一个新的 Python 文件，用于存放您的实现。例如，`my_vectordb_impl.py`。

### 步骤 2：继承 VectorDBBase

在您的新文件中，导入 `VectorDBBase` 和您要使用的向量数据库的客户端库。然后，创建一个继承自 `VectorDBBase` 的新类。

```python
# mmc/src/common/vector_db/my_vectordb_impl.py

from typing import Any, Dict, List, Optional
from .base import VectorDBBase
# 导入您自己的向量数据库客户端
# import my_vectordb_client

class MyVectorDBImpl(VectorDBBase):
    # 在这里实现所有抽象方法
    pass
```

### 步骤 3：实现抽象方法

您需要实现 `VectorDBBase` 中定义的所有抽象方法。下面是每个方法的说明和实现模板。

#### `__init__`

初始化向量数据库客户端。您可以考虑使用单例模式，以确保全局只有一个客户端实例，这有助于提高性能和避免资源竞争。

```python
def __init__(self, path: str, **kwargs: Any):
    """
    初始化您的向量数据库客户端。
    """
    # 您的初始化逻辑
    # self.client = my_vectordb_client.connect(path=path, **kwargs)
    pass
```

#### `get_or_create_collection`

获取或创建一个集合。

```python
def get_or_create_collection(self, name: str, **kwargs: Any) -> Any:
    """
    获取或创建一个集合。
    """
    # 您的实现逻辑
    # return self.client.get_or_create_collection(name, **kwargs)
    pass
```

#### `add`

向指定集合中添加数据。

```python
def add(
    self,
    collection_name: str,
    embeddings: List[List[float]],
    documents: Optional[List[str]] = None,
    metadatas: Optional[List[Dict[str, Any]]] = None,
    ids: Optional[List[str]] = None,
) -> None:
    """
    向指定集合中添加数据。
    """
    # 您的实现逻辑
    pass
```

#### `query`

在指定集合中查询相似向量。

```python
def query(
    self,
    collection_name: str,
    query_embeddings: List[List[float]],
    n_results: int = 1,
    where: Optional[Dict[str, Any]] = None,
    **kwargs: Any,
) -> Dict[str, List[Any]]:
    """
    在指定集合中查询相似向量。
    """
    # 您的实现逻辑
    pass
```

#### `delete`

从指定集合中删除数据。

```python
def delete(
    self,
    collection_name: str,
    ids: Optional[List[str]] = None,
    where: Optional[Dict[str, Any]] = None,
) -> None:
    """
    从指定集合中删除数据。
    """
    # 您的实现逻辑
    pass
```

#### `get`

根据条件从集合中获取数据。

```python
def get(
    self,
    collection_name: str,
    ids: Optional[List[str]] = None,
    where: Optional[Dict[str, Any]] = None,
    limit: Optional[int] = None,
    offset: Optional[int] = None,
    where_document: Optional[Dict[str, Any]] = None,
    include: Optional[List[str]] = None,
) -> Dict[str, Any]:
    """
    根据条件从集合中获取数据。
    """
    # 您的实现逻辑
    pass
```

#### `count`

获取指定集合中的条目总数。

```python
def count(self, collection_name: str) -> int:
    """
    获取指定集合中的条目总数。
    """
    # 您的实现逻辑
    pass
```

#### `delete_collection`

删除一个集合。

```python
def delete_collection(self, name: str) -> None:
    """
    删除一个集合。
    """
    # 您的实现逻辑
    pass
```

### 步骤 4：配置应用程序

最后，您需要修改 `mmc/src/common/vector_db/__init__.py` 文件中的 `get_vector_db_service` 函数，使其返回您的新实现。

1.  导入您的新实现类：

    ```python
    # mmc/src/common/vector_db/__init__.py
    from .my_vectordb_impl import MyVectorDBImpl
    ```

2.  修改 `get_vector_db_service` 函数：

    ```python
    # mmc/src/common/vector_db/__init__.py

    def get_vector_db_service() -> VectorDBBase:
        """
        工厂函数，初始化并返回向量数据库服务实例。
        """
        # TODO: 从全局配置中读取数据库类型和路径
        db_path = "data/my_vectordb" # 修改为您自己的数据库路径
        
        # 返回您的实现实例
        return MyVectorDBImpl(path=db_path)
    ```

## 示例

下面是一个完整的骨架代码示例：

```python
# mmc/src/common/vector_db/my_vectordb_impl.py

import threading
from typing import Any, Dict, List, Optional

# 假设这是您的向量数据库客户端库
# import my_vectordb_client 

from .base import VectorDBBase
from src.common.logger import get_logger

logger = get_logger("my_vectordb_impl")

class MyVectorDBImpl(VectorDBBase):
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            with cls._lock:
                if not cls._instance:
                    cls._instance = super(MyVectorDBImpl, cls).__new__(cls)
        return cls._instance

    def __init__(self, path: str, **kwargs: Any):
        if not hasattr(self, '_initialized'):
            with self._lock:
                if not hasattr(self, '_initialized'):
                    try:
                        # self.client = my_vectordb_client.connect(path=path, **kwargs)
                        self._initialized = True
                        logger.info(f"MyVectorDB 客户端已初始化，数据库路径: {path}")
                    except Exception as e:
                        logger.error(f"MyVectorDB 初始化失败: {e}")
                        self.client = None
                        self._initialized = False

    def get_or_create_collection(self, name: str, **kwargs: Any) -> Any:
        # 实现
        pass

    def add(self, collection_name: str, embeddings: List[List[float]], documents: Optional[List[str]] = None, metadatas: Optional[List[Dict[str, Any]]] = None, ids: Optional[List[str]] = None) -> None:
        # 实现
        pass

    def query(self, collection_name: str, query_embeddings: List[List[float]], n_results: int = 1, where: Optional[Dict[str, Any]] = None, **kwargs: Any) -> Dict[str, List[Any]]:
        # 实现
        pass

    def delete(self, collection_name: str, ids: Optional[List[str]] = None, where: Optional[Dict[str, Any]] = None) -> None:
        # 实现
        pass

    def get(self, collection_name: str, ids: Optional[List[str]] = None, where: Optional[Dict[str, Any]] = None, limit: Optional[int] = None, offset: Optional[int] = None, where_document: Optional[Dict[str, Any]] = None, include: Optional[List[str]] = None) -> Dict[str, Any]:
        # 实现
        pass


    def count(self, collection_name: str) -> int:
        # 实现
        pass
        
    def delete_collection(self, name: str) -> None:
        # 实现
        pass
```

完成以上步骤后，您的新向量数据库实现就可以在项目 R 中使用了。