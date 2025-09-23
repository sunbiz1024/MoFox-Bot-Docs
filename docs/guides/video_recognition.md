# 视频识别功能 (由 Ink-Fox 强力驱动)

## 功能概述

我们的视频识别功能现在已经独立为一个高性能的 Rust & Python 混合项目 [Ink-Fox](https://github.com/MoFox-Studio/inkfox) 啦. 这样不仅性能更强, 安装和更新也更方便了呢.

该功能允许机器人分析用户发送的视频（也可以分析B站视频哦），并以文本形式描述视频内容，从而实现机器人看视频的功能。

## 安装与配置

### 步骤一: 安装 Ink-Fox

> [!TIP]
> 如果您是一键包用户, `Ink-Fox` 已经为您预装好了, 无需进行任何操作, 请直接跳至 **步骤三**。

> [!WARNING]
> Ink-Fox 需要 Python 3.11 或更高版本。

对于手动部署的用户, 我们推荐使用 `pip` 进行自动安装。

```bash
pip install inkfox
```

#### 手动编译 (适合开发者)

如果你想自己动手编译, 或者想为 `Ink-Fox` 贡献代码, 可以按照下面的步骤来:

1.  **克隆仓库**:
    ```bash
    git clone https://github.com/MoFox-Studio/inkfox.git
    cd inkfox
    ```
2.  **安装 Rust 环境**:
    如果您尚未安装 Rust, 请访问 [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install) 并按照说明进行安装。

3.  **安装 Maturin**:
    Maturin 是一个用于构建和发布 Rust-Python 包的工具。通过 pip 安装：
    ```bash
    pip install maturin
    ```

4.  **编译和安装**:
    ```bash
    maturin develop
    ```
    此命令将在您的 Python 环境中编译并安装 `inkfox` 模块。

### 步骤二: 配置 FFmpeg

> [!TIP]
> 一键包用户也无需关心此项, 我们已经为您配置妥当。

`Ink-Fox` 依然需要 FFmpeg 来作为视频处理的基石。

*   **下载 FFmpeg**:
    *   **Windows**: 访问 [https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/) 并下载最新的 `essentials` 版本。
    *   **macOS**: 使用 Homebrew 安装：`brew install ffmpeg`
    *   **Linux**: 使用您的包管理器安装，例如在 Ubuntu 上：`sudo apt update && sudo apt install ffmpeg`

*   **配置路径**:
    解压下载的文件，并将 `bin` 目录下的 `ffmpeg.exe` (Windows) 或 `ffmpeg` (macOS/Linux) 的完整路径配置到 `config/bot_config.toml` 文件中。

    ```toml
    ffmpeg_path = "E:\\delveoper\\mmc010\\ffmpeg\\bin\\ffmpeg.exe" # 示例路径
    ```

### 步骤三: 启用功能并选择模型

1.  **启用视频分析**：
    在 `config/bot_config.toml` 文件中，找到 `[video_analysis]` 部分，并将 `enable` 设置为 `true`。

    ```toml
    [video_analysis]
    enable = true
    ```

2.  **选择模型**：
    在 `config/model_config.toml` 文件中，为 `utils_video` 任务配置一个或多个视觉语言模型（VLM）。

    ```toml
    [model_task_config.utils_video]
    model_list = ["qwen2.5-vl-72b"]
    ```

3.  **重启机器人**：
    保存配置文件并重启机器人以使更改生效。

## 参数详解

`config/bot_config.toml` 的 `[video_analysis]` 部分包含丰富的配置选项，您可以根据需求进行调整：

*   `analysis_mode`: (字符串) 分析模式。
    *   `"batch_frames"`: 批量分析，速度快，推荐。
    *   `"frame_by_frame"`: 逐帧分析，速度慢但更详细。
    *   `"auto"`: 自动选择模式。
*   `frame_extraction_mode`: (字符串) 抽帧模式。
    *   `"keyframe"`: 智能关键帧提取，推荐。
    *   `"fixed_number"`: 固定总帧数。
    *   `"time_interval"`: 按时间间隔抽帧。
*   `frame_interval_seconds`: (浮点数) 按时间间隔抽帧的秒数（仅在 `frame_extraction_mode` 为 `"time_interval"` 时生效）。
*   `max_frames`: (整数) 最大分析帧数。
*   `frame_quality`: (整数) 帧图像JPEG质量 (1-100)。
*   `max_image_size`: (整数) 单帧最大图像尺寸(像素)。
*   `enable_frame_timing`: (布尔值) 是否在分析中包含帧的时间信息。

### Ink-Fox 核心配置

*   `rust_keyframe_threshold`: (浮点数) 关键帧检测阈值，值越大关键帧越少。
*   `rust_use_simd`: (布尔值) 启用SIMD优化（推荐）。
*   `rust_block_size`: (整数) 处理块大小，较大值可能提高高分辨率视频性能。
*   `rust_threads`: (整数) 线程数，0表示自动检测。

## 故障排查

*   **视频分析失败**：
    *   检查 `ffmpeg_path` 是否配置正确。
    *   检查 `model_config.toml` 中是否为 `utils_video` 配置了有效的模型。
    *   查看日志文件 `logs/app_*.log.jsonl` 以获取详细的错误信息。
*   **模块加载失败**：
    *   如果 `inkfox` 模块加载失败，请尝试使用 `pip install inkfox --upgrade` 命令更新或重新安装。
    *   对于手动编译的用户，请确保已按照本文档正确编译和安装模块。