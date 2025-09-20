import { useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./VPTeamPageTitle.BYsxlRMN.js";
import "./plugin-vue_export-helper.1tPrXgE0.js";
import "./Content.D_nHebAn.js";
import "@vueuse/core";
const members = [
  {
    avatar: "https://avatars.githubusercontent.com/u/140055845?v=4",
    name: "一闪",
    title: "1.项目发起人之一<br/>2.核心开发者<br/>3.超级黑奴()",
    links: [
      { icon: "github", link: "https://github.com/minecraft1024a" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/189647097?v=4",
    name: "阿范",
    title: "1.项目发起人之一<br/>2.核心开发者<br/>3.音游领域大神",
    links: [
      { icon: "github", link: "https://github.com/Furina-1013-create" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/68868379?v=4",
    name: "言柒",
    title: "1.项目发起人之一<br/>2.核心（打杂）开发者<br/>3.神秘插件适配大师",
    links: [
      { icon: "github", link: "https://github.com/tt-P607" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/214268555?v=4",
    name: "ikun",
    title: "1.项目初期开发人之一<br/>2.文档单推人<br/>3.神秘猫娘",
    links: [
      { icon: "github", link: "https://github.com/ikun-11451" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/212194964?v=4",
    name: "雅诺狐",
    title: '1.项目发起人之一<br/>2.核心开发者<br/>3.技术"猛"新',
    links: [
      { icon: "github", link: "https://github.com/foxcyber907" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/221029311?v=4",
    name: "拾风",
    title: "1.项目重构负责人<br/>2.核心开发者<br/>3.插件化大师",
    links: [
      { icon: "github", link: "https://github.com/Windpicker-owo" }
    ]
  }
];
const org = [
  {
    avatar: "https://avatars.githubusercontent.com/u/225730003",
    name: "MoFox-Studio",
    title: "官方组织",
    links: [
      { icon: "github", link: "https://github.com/MoFox-Studio" }
    ]
  }
];
const __pageData = JSON.parse('{"title":"部署指南","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guides/index.md","filePath":"docs/guides/index.md","lastUpdated":1758374305000}');
const __default__ = { name: "docs/guides/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const myGuides = [
      {
        avatar: "🪟",
        // 卡片左侧的图标，可以是 Emoji 或者字符
        name: "Windows 部署指南",
        // 卡片的标题
        title: "为 Windows 用户准备的图形化界面部署教程...",
        // 卡片的详细描述
        link: "./deployment_guide"
        // 点击卡片后跳转的链接
      },
      {
        avatar: "🐧",
        name: "Linux 部署指南",
        title: "为 Linux 用户准备的命令行部署教程...",
        link: "./mmc_deploy_linux"
      },
      {
        avatar: "🤖",
        name: "Android 部署指南",
        title: "为 Android 用户准备的部署教程...",
        link: "./mmc_deploy_android"
      }
      // ... 你可以根据需要添加任意多个卡片对象
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BibleDisplay = resolveComponent("BibleDisplay");
      const _component_GuideCards = resolveComponent("GuideCards");
      const _component_MoFoxTeamCard = resolveComponent("MoFoxTeamCard");
      const _component_NolebaseGitContributors = resolveComponent("NolebaseGitContributors");
      const _component_NolebaseGitChangelog = resolveComponent("NolebaseGitChangelog");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BibleDisplay, null, null, _parent));
      _push(`<h1 id="部署指南" tabindex="-1">部署指南 <a class="header-anchor" href="#部署指南" aria-label="Permalink to “部署指南”">​</a></h1><p>欢迎来到 MoFox_Bot 部署指南。在这里，我们为您提供了在不同操作系统上部署 MoFox_Bot 的详细步骤。请根据您的操作系统选择对应的指南开始您的冒险。</p><h2 id="选择您的部署平台" tabindex="-1">选择您的部署平台 <a class="header-anchor" href="#选择您的部署平台" aria-label="Permalink to “选择您的部署平台”">​</a></h2>`);
      _push(ssrRenderComponent(_component_GuideCards, { guides: myGuides }, null, _parent));
      _push(`<h2 id="团队成员" tabindex="-1">团队成员 <a class="header-anchor" href="#团队成员" aria-label="Permalink to “团队成员”">​</a></h2><details><summary>👇 戳一戳，看看开发者们不为人知的故事？</summary><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><h3 id="项目源起" tabindex="-1">项目源起 <a class="header-anchor" href="#项目源起" aria-label="Permalink to “项目源起”">​</a></h3><p>话说天下大势，分久必合，合久必分。自“麦麦”开天辟地以来，AI Bot 之界风起云涌。其时，有三股豪强，皆为“麦麦”之魔改，各领风骚，雄踞一方，三家互为犄角，亦有竞争，然皆以服务用户为本，倒也相安无事，天下暂得太平。</p><p>然时移世易，AI 技术日新月异，江湖风波再起。三家主事者，皆为远见卓识之士，深知单打独斗，终难成大业；若固步自封，必为时代所弃。遂于某良辰吉日，齐聚一堂，共商大计。席间，众人抚今追昔，感慨万千，皆以为“合则两利，分则两伤”。</p><p>一言既出，四座皆惊，继而纷纷颔首。众人一拍即合，决意将三家之力合于一处，取各家之长，补己之短，共创一全新之 Bot，名曰『MoFox_Bot』。此举意在整合资源，革新技术，以期能更好地服务于广大用户，逐鹿于 AI 之巅。</p><p>此乃项目之源起，非为正史，仅作一说。特记于此，以飨同好，以昭后人。</p></div><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><h3 id="绝密档案-·-代号-mofox" tabindex="-1">绝密档案 · 代号 MoFox <a class="header-anchor" href="#绝密档案-·-代号-mofox" aria-label="Permalink to “绝密档案 · 代号 MoFox”">​</a></h3><p>“再改一版，就一版。”一闪的眼圈，比代码的黑夜模式还要深邃。他的对面，阿范把一杯冰美式喝出了烈酒的决绝，“为了这破玩意儿，我连音游都戒了，你懂我的痛吗？”</p><p>角落里，言柒幽幽地叹了口气，默默地合并了第 108 次冲突，感觉自己像个给旷世怨侣劝架的居委会大妈。</p><p>他们本是三条永不相交的平行线，却因为一个共同的“爹”——“麦麦”，被命运的红线（或者说网线）紧紧捆绑。他们曾为了一个 API 的命名吵到天昏地暗，也曾因为一个 bug 的归属互相甩锅。</p><p>“要不……合并吧？”不知是谁，在那个代码比人命还长的深夜，提出了这个魔鬼般的建议。</p><p>空气瞬间凝固。合并？这意味着什么？意味着无尽的兼容性噩梦，意味着要把对方那“一坨”代码和自己这“一坨”代码揉成更大的一坨。</p><p>但，当他们看到用户群里那一声声“大佬牛逼”时，那该死的虚荣心，那该死的成就感，终究是战胜了理智。</p><p>据说，在最终合并的前夜，三方势力依旧在为“项目到底叫什么”而争执不休，此时，一个名为雅诺狐的神秘身影出现在会议室，他只说了一句话：“不如就叫 MoFox 吧，既有 Mofox 的 M，也有 Fox 的 Fox。”全场死寂，三位大佬竟无言以对。</p><p>于是，『MoFox_Bot』诞生了。它的每一行代码，都可能是一个历史遗留问题；它的每一次更新，都伴随着开发者们“爱”的争吵。这，就是它的故事。</p></div></details><p>我们是 MoFox Studio，一个由充满激情和创造力的开发者组成的团队。我们致力于探索 AI 的无限可能性，并将其融入实用、有趣的产品中。MoFox_Bot 是我们精心打造的作品，希望能为您带来前所未有的智能体验。</p><h3 id="核心贡献者" tabindex="-1">核心贡献者 <a class="header-anchor" href="#核心贡献者" aria-label="Permalink to “核心贡献者”">​</a></h3>`);
      _push(ssrRenderComponent(_component_MoFoxTeamCard, {
        members,
        size: "medium"
      }, null, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_MoFoxTeamCard, {
        members: org,
        size: "large"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NolebaseGitContributors, null, null, _parent));
      _push(ssrRenderComponent(_component_NolebaseGitChangelog, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/guides/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
