import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/MoFox-Bot-Docs/",
  title: "MoFox_Bot",
  description: "🚀 基于 MaiCore 的增强版智能体，提供更完善的功能和更好的使用体验",
  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌟</text></svg>' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/docs/deployment_guide' },
      { text: '架构', items: [
          { text: '权限系统', link: '/docs/architecture/PERMISSION_SYSTEM' },
          { text: '技术栈与聊天流分析', link: '/docs/architecture/tech_stack_and_chat_flow' }
        ]
      },
      { text: '开发', link: '/docs/plugins/quick-start' },
      { text: '集成(其实是大饼类)', link: '/docs/integrations/Bing' },
      {
        text: '相关链接',
        items: [
          { text: 'MoFox-Studio', link: 'https://github.com/MoFox-Studio' },
          { text: 'MoFox_Bot', link: 'https://github.com/MoFox-Studio/MoFox_Bot' },
          { text: 'MoFox_Docs', link: 'https://github.com/MoFox-Studio/MoFox-Bot-Docs' }
        ]
      }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: 'Windows部署指南', link: '/docs/deployment_guide' },
          { text: '模型配置快速上手', link: '/docs/guides/quick_start_model_config' },
          { text: 'Bot配置文件指南', link: '/docs/guides/bot_config_guide' },
          { text: '模型配置指南(进阶)', link: '/docs/guides/model_configuration_guide' },
        ]
      },
      {
        text: '架构',
        items: [
          { text: '权限系统', link: '/docs/architecture/PERMISSION_SYSTEM' },
          { text: '技术栈与聊天流分析', link: '/docs/architecture/tech_stack_and_chat_flow' }
        ]
      },
      {
        text: '贡献指南和开发帮助',
        items: [
          { text: '贡献指南', link: '/docs/development/CONTRIBUTE' },
          { text: '向量数据库使用指南', link: '/docs/guides/vector_db_usage_guide' },
          { text: '添加新的向量数据库', link: '/docs/guides/add_new_vector_db_guide' }
        ]
      },
      {
        text: '插件',
        items: [
          { text: '插件概述', link: '/docs/plugins/index' },
          { text: '快速开始', link: '/docs/plugins/quick-start' },
          { text: '插件清单指南', link: '/docs/plugins/manifest-guide' },
          { text: '依赖管理', link: '/docs/plugins/dependency-management' },
          { text: '事件系统', link: '/docs/plugins/event-system-guide' },
          { text: '配置指南', link: '/docs/plugins/configuration-guide' },
          { text: '工具指南', link: '/docs/plugins/tool_guide' },
          { text: '命令指南', link: '/docs/plugins/PLUS_COMMAND_GUIDE' },
          { text: '可用范围控制', link: '/docs/plugins/command-scope' },
          {
            text: '插件 API',
            items: [
              { text: 'Adapter Command API', link: '/docs/plugins/api/adapter-command-api' },
              { text: 'Chat API', link: '/docs/plugins/api/chat-api' },
              { text: 'Component Manage API', link: '/docs/plugins/api/component-manage-api' },
              { text: 'Config API', link: '/docs/plugins/api/config-api' },
              { text: 'Database API', link: '/docs/plugins/api/database-api' },
              { text: 'Emoji API', link: '/docs/plugins/api/emoji-api' },
              { text: 'Generator API', link: '/docs/plugins/api/generator-api' },
              { text: 'LLM API', link: '/docs/plugins/api/llm-api' },
              { text: 'Logging API', link: '/docs/plugins/api/logging-api' },
              { text: 'Message API', link: '/docs/plugins/api/message-api' },
              { text: 'Person API', link: '/docs/plugins/api/person-api' },
              { text: 'Plugin Manage API', link: '/docs/plugins/api/plugin-manage-api' },
              { text: 'Send API', link: '/docs/plugins/api/send-api' },
              { text: 'Tool API', link: '/docs/plugins/api/tool-api' }
            ]
          }
        ]
      },
      {
        text: '集成(其实是大饼类)',
        items: [
          { text: 'Bing', link: '/docs/integrations/Bing' },
          { text: '内存系统设计', link: '/docs/architecture/memory_system_design_v3' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MoFox-Studio/MoFox_Bot' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2025 MoFox Studio'
    }
  }
})
