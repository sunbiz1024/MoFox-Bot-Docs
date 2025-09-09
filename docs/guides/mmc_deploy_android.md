# 📱 MoFox_Bot Android 部署指南

欢迎使用 MoFox_Bot！本指南将引导您完成在 Android (Termux) 环境下部署 MoFox_Bot 的全部过程。

本教程基于在 Termux 中运行 Ubuntu 虚拟环境的方式，以获得更完整的 Linux 支持。

::: warning
开始之前，强烈建议您先阅读 [MoFox_Bot Linux 部署指南](./mmc_deploy_linux.md)，这将帮助您了解部署的核心流程和通用配置。
:::

## 1. 系统要求

- **Android 版本**: >= 7.0
- **存储空间**: 至少 2GB 可用空间
- **应用**: ZeroTermux (推荐)
- **Python**: 版本 >= 3.10
- **uv**: 推荐的 Python 包管理器 (版本 >= 0.1.0)

## 2. 部署步骤

### 第一步：安装 Termux 和 Ubuntu 环境

**1. 安装 ZeroTermux:**

前往 [ZeroTermux Github Releases](https://github.com/hanxinhao000/ZeroTermux/releases/tag/release) 下载并安装最新的 `ZeroTermux` 安装包。

> **注意**: 使用其他版本的 Termux 可能会导致部分步骤不适用。

安装后，打开 ZeroTermux，按照提示完成初始化设置。建议在侧边栏菜单中选择“切换源”，并选择一个国内的镜像源（如清华源）以提高下载速度。

**2. 安装 proot 和 Ubuntu:**

在 ZeroTermux 中，逐行执行以下命令来安装 `proot` 和 Ubuntu 环境。

```bash
pkg install proot-distro      # 安装 proot
proot-distro install ubuntu   # 安装 Ubuntu
```

**3. 登录 Ubuntu 并安装基础软件:**

```bash
proot-distro login ubuntu     # 登录到 Ubuntu 环境
```

成功登录后，您将处于 Ubuntu 的 shell 环境中。接下来，安装部署所需的软件包：

```bash
apt update
apt install sudo git curl python3-pip python3-dev python3.12-venv build-essential screen
```

> 在后续步骤中，如果出现 `(Y/I/N/O/D/Z)[default=?]` 或 `[Y/N]` 的提示，直接按回车键选择默认选项即可。

### 第二步：获取必要的文件

创建一个用于存放 MoFox_Bot 的文件夹，并使用 `git` 克隆主程序和 Napcat 适配器。

```shell
mkdir MoFox_Bot_Deployment
cd MoFox_Bot_Deployment
git clone https://github.com/MoFox-Studio/MoFox_Bot.git
git clone https://github.com/MoFox-Studio/Napcat-Adapter.git
# 网络问题拉取不下来使用这个git clone https://github.akams.cn/https://github.com/MoFox-Studio/MoFox_Bot.git
# 网络问题拉取不下来使用这个git clone https://github.akams.cn/https://github.com/MoFox-Studio/Napcat-Adapter.git
```

### 第三步：环境配置与依赖安装

我们强烈推荐使用 `uv` 来管理 Python 环境和依赖。

**1. 安装 uv:**

```shell
pip3 install uv --break-system-packages -i https://mirrors.huaweicloud.com/repository/pypi/simple/
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

**2. 创建虚拟环境并安装依赖:**

在 `MoFox_Bot_Deployment` 根目录下创建虚拟环境，并安装 `MoFox_Bot` 和 `Napcat-Adapter` 的依赖。

- **使用 uv (推荐):**

  ```shell
  uv venv
  # 激活虚拟环境
  source .venv/bin/activate
  # 安装依赖
  uv pip install -r MoFox_Bot/requirements.txt -i https://mirrors.aliyun.com/pypi/simple --upgrade
  uv pip install -r Napcat-Adapter/requirements.txt -i https://mirrors.aliyun.com/pypi/simple --upgrade
  ```

- **备选方案：使用原生 venv 和 pip:**

  ```shell
  python3 -m venv .venv
  # 激活虚拟环境
  source .venv/bin/activate
  # 安装依赖
  pip install -r MoFox_Bot/requirements.txt -i https://mirrors.aliyun.com/pypi/simple --upgrade
  pip install -r Napcat-Adapter/requirements.txt -i https://mirrors.aliyun.com/pypi/simple --upgrade
  ```

### 第四步：配置 MoFox_Bot 和 Adapter

此步骤与 [Linux 部署指南](./mmc_deploy_linux.md#第四步-配置-mofox_bot-和-adapter) 中的配置过程 **完全相同**。请参考该指南完成以下配置：

1.  **MoFox_Bot 配置**:
    -   复制并重命名 `bot_config_template.toml` 为 `bot_config.toml`。
    -   填写机器人 QQ 号和管理员 QQ 号。
    -   参照 [模型配置快速上手](quick_start_model_config.md) 创建 `model_config.toml` 文件。
    -   **环境变量文件**：在 `MoFox_Bot` 文件夹中，将 `template/template.env` 复制到项目根目录并改名为 `.env`。

2.  **Napcat-Adapter 配置**:
    -   复制并重命名 `template_config.toml` 为 `config.toml`。
    -   配置 `[napcat_server]` 和 `[maibot_server]` 的端口。
    -   复制并重命名 `features_template.toml` 为 `features.toml`，并配置白名单。

3.  **配置 Napcat 客户端**:
    -   在您的 Napcat 客户端中，添加一个反向 WebSocket 连接，URL 指向 `ws://127.0.0.1:端口号`，端口号需与 `Napcat-Adapter` 的 `config.toml` 中配置的 `[napcat_server]` 端口一致。

### 第五步：运行

在 Android (Termux) 环境下，由于没有图形化桌面，我们需要使用 `screen` 工具来确保程序在后台持续运行。

**1. 启动 Napcat:**

请确保您的 Napcat 客户端已根据其官方文档正确部署并正在运行。

**2. 启动 MoFox_Bot (后台运行):**

```shell
# 确保您已激活虚拟环境 (source .venv/bin/activate)
# 创建并进入一个名为 "mofox" 的 screen 会话
screen -S mofox

# 进入 MoFox_Bot 目录并启动
cd MoFox_Bot
uv run python bot.py
```

启动后，程序将在 `screen` 会话中运行。您可以按下 `Ctrl + A` 然后按 `D` 键，将此会话分离到后台。

**3. 启动 Napcat-Adapter (后台运行):**

```shell
# 确保您已激活虚拟环境 (source .venv/bin/activate)
# 创建并进入一个名为 "adapter" 的 screen 会话
screen -S adapter

# 进入 Napcat-Adapter 目录并启动
cd ../Napcat-Adapter  # 如果您还在 MoFox_Bot 目录
uv run python main.py
```

同样，按下 `Ctrl + A` 然后按 `D` 键，将此会话分离到后台。

**如何管理后台会话:**

-   `screen -ls`: 列出所有正在运行的 `screen` 会话。
-   `screen -r mofox`: 重新连接到名为 `mofox` 的会话，查看程序输出。
-   `screen -r adapter`: 重新连接到名为 `adapter` 的会话。

至此，MoFox_Bot 已成功在您的 Android 设备上部署并运行。

## 3. 故障排除

- **依赖安装失败**:
  - 尝试更换 PyPI 镜像源。
  - 检查网络连接。
  - 确保 `build-essential` 等编译工具已安装。

- **无法连接到 Napcat**:
  - 检查 Napcat 是否正常运行。
  - 确认 `Napcat-Adapter` 的 `config.toml` 中 `[napcat_server]` 的 `port` 是否与 Napcat 设置的端口一致。
  - 检查 Termux 是否有网络访问权限。

如果遇到其他问题，请首先查看 `MoFox_Bot/logs/` 目录下的日志文件以获取详细的错误信息。

## 4. 命令速查表

### Screen 会话管理

| 命令 | 作用 |
|---|---|
| `screen -S session_name` | 创建一个名为 `session_name` 的新会话 |
| `screen -ls` | 列出所有正在运行的会话 |
| `screen -r session_name` | 重新连接到指定的会话 |
| `Ctrl + A` + `D` | 从当前会话中分离 (Detached) |

### uv 相关命令

| 命令 | 作用 |
|---|---|
| `uv venv` | 在当前目录创建 Python 虚拟环境 |
| `uv pip install -r requirements.txt` | 从文件安装依赖 |
| `uv run python bot.py` | 在虚拟环境中运行 Python 脚本 |
