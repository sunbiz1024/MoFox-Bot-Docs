# 📄 麦麦知识库（新版LPMM）使用说明

## 简介

麦麦知识库（LPMM）是一个强大的本地知识管理系统，它允许 MoFox 学习和利用本地知识库进行问答和推理。新版 LPMM 对底层架构进行了重构，与旧版不兼容，提供了更高效的知识处理能力。

## 注意事项

在开始使用 LPMM 之前，请仔细阅读以下注意事项，以避免不必要的麻烦和开销。

*   **文本分段**：知识提取前，请确保您的文本分段良好，没有奇怪的字符。良好的分段是保证提取质量的关键。
*   **模型选择与费用**：知识提取需要消耗大量计算资源。建议使用 32B 到 72B 之间的大模型进行提取，以平衡效果和成本。
*   **请求速度**：知识导入会产生大量请求，请注意您所选用模型的速率限制。
*   **系统资源**：知识导入过程会消耗大量 CPU 和内存资源，建议在配置较好的机器上运行。
*   **版本兼容性**：新版 LPMM 与旧版不兼容。如需迁移旧版数据，请重新导入。

## 安装

### Windows

对于 Windows x86_64 用户，请直接使用 pip 安装：

```bash
pip install quick_algo
```

### Linux

1.  **安装 GCC/G++ 编译器**

    *   **Debian/Ubuntu**:
        ```bash
        sudo apt update
        sudo apt install build-essential
        ```
    *   **Red Hat/Fedora/CentOS**:
        ```bash
        sudo dnf check-update
        sudo dnf install gcc gcc-c++
        ```

2.  **验证安装**

    ```bash
    gcc --version
    g++ --version
    ```

3.  **安装 `quick_algo`**

    ```bash
    source ./venv/bin/activate  # 激活您的虚拟环境
    pip install quick-algo
    ```

### macOS

请参考 [MAICORE官方的手动编译文档](https://docs.mai-mai.org/manual/usage/compile_and_install.html) 中的 macOS 部分。

### Docker

Docker 镜像已预编译 LPMM，可直接使用。

## 配置

1.  将 `template/lpmm_config_template.toml` 复制到 `config/lpmm_config.toml`。
2.  根据文件中的注释，配置 `provider` 和您要使用的模型。

## 使用方法

### 1. 文本准备

*   **格式**：知识库源文件必须为 `.txt` 格式。
*   **分段**：按照同一主题将内容组织成段落，段落之间用空行隔开。

    ```
    精神状态良好：形容自己精神状态良好的反讽，实际精神状态非常不稳定。

    躺平：是一个网络热梗。指无论对方做出什么反应，内心都毫无波澜，对此不会有任何反应或者反抗，表示顺从心理，也表示不再热血沸tering的状态。
    ```

### 2. 知识导入

1.  **创建数据目录**：在 `data` 目录下创建 `lpmm_raw_data` 文件夹。
2.  **放入源文件**：将您的 `.txt` 文件放入 `data/lpmm_raw_data`。
3.  **激活部署MOFOX的虚拟环境**：
    ```bash
    # Windows
    .\venv\Scripts\activate
    # Linux/macOS
    source ./venv/bin/activate
    ```
4.  **提取信息**：运行 `info_extraction.py` 脚本进行文本分割和实体提取。
    ```bash
    python ./scripts/info_extraction.py
    ```
    提取完成后，会在 `data/openie` 目录下生成一个 `月-日-时-分-openie.json` 文件。
5.  **导入知识图谱**：运行 `import_openie.py` 脚本将提取的信息导入知识图谱。
    ```bash
    python ./scripts/import_openie.py
    ```
    导入成功后，您会在 `data` 目录下看到 `rag` 和 `embedding` 两个文件夹。

## 进阶

### GPU 加速

*   **适用条件**：Linux 系统，NVIDIA RTX 20 系及以上显卡。
*   **安装**：
    ```bash
    # 卸载 CPU 版本
    pip uninstall faiss-cpu
    # 安装 CUDA 11 版本
    pip install faiss-gpu-cu11
    # 安装 CUDA 12 版本
    pip install faiss-gpu-cu12
    ```
*   **Conda 用户**：请参考 [faiss 官方文档](https://github.com/facebookresearch/faiss/blob/main/INSTALL.md)。

### Docker 用户

1.  **拉取配置**：
    ```bash
    wget https://github.com/MaiM-with-u/MaiBot/raw/refs/heads/main/template/lpmm_config_template.toml -O docker-config/mmc/lpmm_config.toml
    ```
2.  **配置 `provider`**。
3.  **创建数据目录**：
    ```bash
    mkdir -p data/MaiMBot/lpmm_raw_data
    ```4.  **放入源文件**。
5.  **运行导入脚本**：
    ```bash
    docker run -it -v ./data/MaiMBot:/MaiMBot/data -v ./docker-config/mmc:/MaiMBot/config -v ./docker-config/mmc/.env:/MaiMBot/.env --network maim-bot_maim_bot --entrypoint bash sengokucola/maibot:latest "scripts/run_lpmm.sh"
    ```
    **注意**：请将 `--network maim-bot_maim_bot` 替换为您的 core 所在的 Docker 网络名称。