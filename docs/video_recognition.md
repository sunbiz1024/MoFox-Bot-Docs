# 视频识别功能

本文档将介绍如何启用和配置视频识别功能。

## 功能概述

视频识别功能允许机器人分析用户发送的视频（也可以分析B站视频哦），并以文本形式描述视频内容，从而实现机器人看视频的功能。该功能支持多种分析模式和帧提取方法，以在不同场景下实现最佳的性能和效果。

## 快速启动

要启用视频识别功能，请按照以下步骤操作：

1.  **启用视频分析**：
    在 `config/bot_config.toml` 文件中，找到 `[video_analysis]` 部分，并将 `enable` 设置为 `true`。

    ```toml
    [video_analysis]
    enable = true
    ```

2.  **配置FFmpeg**：
    确保 `ffmpeg_path` 指向正确的 FFmpeg 可执行文件路径。

    ```toml
    ffmpeg_path = "path/to/your/ffmpeg.exe"
    ```

3.  **选择模型**：
    在 `config/model_config.toml` 文件中，为 `utils_video` 任务配置一个或多个视觉语言模型（VLM）。

    ```toml
    [model_task_config.utils_video]
    model_list = ["qwen2.5-vl-72b"]
    ```

4.  **重启机器人**：
    保存配置文件并重启机器人以使更改生效。

完成以上步骤后，机器人将能够自动分析用户发送的视频。

## 编译 Rust 模块（可选）

视频识别功能依赖于一个名为 `rust_video` 的 Rust 模块来高效地提取视频帧。通常情况下，如果您是一件包用户，您不需要手动编译此模块。但是，如果您是手动部署用户或者对代码进行了更改或需要从源码构建，请按照以下步骤操作：

1.  **安装 Rust 环境**:
    如果您尚未安装 Rust，请访问 [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install) 并按照说明进行安装。

2.  **安装 Maturin**:
    Maturin 是一个用于构建和发布 Rust-Python 包的工具。通过 pip 安装：
    ```bash
    pip install maturin
    ```

3.  **编译和安装**:
    进入 `mmc/rust_video` 目录，然后运行以下命令：
    ```bash
    maturin develop
    ```
    此命令将在您的 Python 环境中编译并安装 `rust_video` 模块。

## 详细配置

### `bot_config.toml`

`[video_analysis]` 部分包含以下配置选项：

*   `enable`: (布尔值) 是否启用视频分析功能。
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

### Rust 模块相关配置

*   `rust_keyframe_threshold`: (浮点数) 关键帧检测阈值，值越大关键帧越少。
*   `rust_use_simd`: (布尔值) 启用SIMD优化（推荐）。
*   `rust_block_size`: (整数) 处理块大小，较大值可能提高高分辨率视频性能。
*   `rust_threads`: (整数) 线程数，0表示自动检测。
*   `ffmpeg_path`: (字符串) FFmpeg可执行文件路径。

### 提示词配置

*   `batch_analysis_prompt`: (字符串) 批量分析时使用的提示词。您可以在此自定义提示词，以满足不同的人设和场景需求。

## 故障排查

*   **视频分析失败**：
    *   检查 `ffmpeg_path` 是否配置正确。
    *   检查 `model_config.toml` 中是否为 `utils_video` 配置了有效的模型。
    *   查看日志文件 `logs/app_*.log.jsonl` 以获取详细的错误信息。
*   **Rust 模块加载失败**：
    *   如果 `rust_video` 模块加载失败，视频识别功能将自动禁用。请确保已按照项目文档正确编译和安装 Rust 模块。