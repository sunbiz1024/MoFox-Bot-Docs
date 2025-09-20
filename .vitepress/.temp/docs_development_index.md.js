import { useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"MoFox_Bot 开发之旅：从这里启程","description":"","frontmatter":{},"headers":[],"relativePath":"docs/development/index.md","filePath":"docs/development/index.md","lastUpdated":1758369000000}');
const __default__ = { name: "docs/development/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const devGuides = [
      {
        avatar: "🔧",
        name: "环境搭建",
        title: "配置本地开发环境，让 MoFox_Bot 顺利运行起来。",
        link: "../guides/index"
      },
      {
        avatar: "🏗️",
        name: "架构总览",
        title: "宏观地了解 MoFox_Bot 的核心设计理念、技术选型等。",
        link: "./architecture/PERMISSION_SYSTEM"
      },
      {
        avatar: "🤝",
        name: "贡献指南",
        title: "代码风格、行为准则以及 Pull Request 流程。",
        link: "./CONTRIBUTE"
      },
      {
        avatar: "🧩",
        name: "插件开发",
        title: "学习如何从零开始，创造属于你自己的强大插件。",
        link: "./plugins"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuideCards = resolveComponent("GuideCards");
      const _component_NolebaseGitContributors = resolveComponent("NolebaseGitContributors");
      const _component_NolebaseGitChangelog = resolveComponent("NolebaseGitChangelog");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mofox-bot-开发之旅-从这里启程" tabindex="-1">MoFox_Bot 开发之旅：从这里启程 <a class="header-anchor" href="#mofox-bot-开发之旅-从这里启程" aria-label="Permalink to “MoFox_Bot 开发之旅：从这里启程”">​</a></h1><p>你好，未来的代码魔术师！</p><p>欢迎来到 MoFox_Bot 的核心开发区域。我们非常激动，你愿意投入宝贵的时间和精力，与我们一同构筑这个充满无限可能的世界。无论你是身经百战的资深开发者，还是初出茅庐的编程新星，这里都有你施展才华的舞台。</p><p>本篇文档将作为你的向导，带你一步步深入 MoFox_Bot 的内部，理解它的脉络，掌握它的力量，最终创造出属于你自己的“魔法”。</p><h2 id="快速导航" tabindex="-1">快速导航 <a class="header-anchor" href="#快速导航" aria-label="Permalink to “快速导航”">​</a></h2>`);
      _push(ssrRenderComponent(_component_GuideCards, { guides: devGuides }, null, _parent));
      _push(`<h2 id="加入我们-成为社群的一员" tabindex="-1">加入我们：成为社群的一员 <a class="header-anchor" href="#加入我们-成为社群的一员" aria-label="Permalink to “加入我们：成为社群的一员”">​</a></h2><p>一个人的力量是有限的，但一群人的智慧是无穷的。</p><p>我们热切地期盼你的加入，你的每一个想法、每一次尝试，都可能为 MoFox_Bot 带来新的活力。遇到问题时，不要犹豫，社群就是你最坚实的后盾。</p><p>再次感谢你的到来，期待看到你在这个世界里创造出的独一无二的奇迹！</p>`);
      _push(ssrRenderComponent(_component_NolebaseGitContributors, null, null, _parent));
      _push(ssrRenderComponent(_component_NolebaseGitChangelog, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/development/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
