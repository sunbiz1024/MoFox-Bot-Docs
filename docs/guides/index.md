<BibleDisplay />

# 部署指南

欢迎来到 MoFox_Bot 部署指南。在这里，我们为您提供了在不同操作系统上部署 MoFox_Bot 的详细步骤。请根据您的操作系统选择对应的指南开始您的冒险。

## 选择您的部署平台

<script setup>
// 在这里定义一个数组，用来存放卡片的数据
const myGuides = [
  {
    avatar: '🪟', // 卡片左侧的图标，可以是 Emoji 或者字符
    name: 'Windows 部署指南', // 卡片的标题
    title: '为 Windows 用户准备的图形化界面部署教程...', // 卡片的详细描述
    link: './deployment_guide' // 点击卡片后跳转的链接
  },
  {
    avatar: '🐧',
    name: 'Linux 部署指南',
    title: '为 Linux 用户准备的命令行部署教程...',
    link: './mmc_deploy_linux'
  },
  {
    avatar: '🤖',
    name: 'Android 部署指南',
    title: '为 Android 用户准备的图形化界面部署教程...',
    link: './mmc_deploy_android'
  },
  // ... 你可以根据需要添加任意多个卡片对象
]
</script>

<!-- 像这样调用组件，并把你的数据通过 :guides 属性传给它 -->
<GuideCards :guides="myGuides" />

## 团队成员

<details>
<summary>👇 戳一戳，看看开发者们不为人知的故事？</summary>

::: warning

### 项目源起

话说天下大势，分久必合，合久必分。自“麦麦”开天辟地以来，AI Bot 之界风起云涌。其时，有三股豪强，皆为“麦麦”之魔改，各领风骚，雄踞一方，三家互为犄角，亦有竞争，然皆以服务用户为本，倒也相安无事，天下暂得太平。

然时移世易，AI 技术日新月异，江湖风波再起。三家主事者，皆为远见卓识之士，深知单打独斗，终难成大业；若固步自封，必为时代所弃。遂于某良辰吉日，齐聚一堂，共商大计。席间，众人抚今追昔，感慨万千，皆以为“合则两利，分则两伤”。

一言既出，四座皆惊，继而纷纷颔首。众人一拍即合，决意将三家之力合于一处，取各家之长，补己之短，共创一全新之 Bot，名曰『MoFox_Bot』。此举意在整合资源，革新技术，以期能更好地服务于广大用户，逐鹿于 AI 之巅。

此乃项目之源起，非为正史，仅作一说。特记于此，以飨同好，以昭后人。

:::

</details>

我们是 MoFox Studio，一个由充满激情和创造力的开发者组成的团队。我们致力于探索 AI 的无限可能性，并将其融入实用、有趣的产品中。MoFox_Bot 是我们精心打造的作品，希望能为您带来前所未有的智能体验。

### 核心贡献者

<script>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/140055845?v=4',
    name: 'yishan/一闪',
    title: '项目发起人之一 / 核心开发者 / 超级黑奴()',
    links: [
      { icon: 'github', link: 'https://github.com/minecraft1024a' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/189647097?v=4',
    name: '阿范',
    title: '项目发起人之一 / 核心开发者 / 音游领域大神(据说他屁股肉丝Rks离理论只差0.09（）)',
    links: [
      { icon: 'github', link: 'https://github.com/Furina-1013-create' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/68868379?v=4',
    name: '言柒',
    title: '项目发起人之一 / 核心（虽然实际是在打杂）开发者 / 神秘插件适配大师',
    links: [
      { icon: 'github', link: 'https://github.com/tt-P607' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/214268555?v=4',
    name: 'ikun',
    title: '项目初期开发人之一 / 文档单推人 / 神秘猫娘',
    links: [
      { icon: 'github', link: 'https://github.com/ikun-11451' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/212194964?v=4',
    name: '雅诺狐',
    title: '项目发起人之一 / 核心开发者 / 技术"猛"新',
    links: [
      { icon: 'github', link: 'https://github.com/foxcyber907' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/225730003',
    name: 'MoFox-Studio',
    title: '官方组织',
    links: [
      { icon: 'github', link: 'https://github.com/MoFox-Studio' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />
