import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MoFox_Bot 开发文档","description":"","frontmatter":{},"headers":[],"relativePath":"development/index.md","filePath":"development/index.md","lastUpdated":1756555974000}');
const _sfc_main = { name: "development/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NolebaseGitContributors = resolveComponent("NolebaseGitContributors");
  const _component_NolebaseGitChangelog = resolveComponent("NolebaseGitChangelog");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mofox-bot-开发文档" tabindex="-1">MoFox_Bot 开发文档 <a class="header-anchor" href="#mofox-bot-开发文档" aria-label="Permalink to “MoFox_Bot 开发文档”">​</a></h1><p>欢迎你，开发者！</p><p>本区域旨在为你提供参与 MoFox_Bot 开发所需的所有信息，无论你是想修复一个 bug、贡献一个新功能，还是开发一个全新的插件。</p><h2 id="从哪里开始" tabindex="-1">从哪里开始？ <a class="header-anchor" href="#从哪里开始" aria-label="Permalink to “从哪里开始？”">​</a></h2><p>我们建议您从以下几个方面开始了解 MoFox_Bot 的开发：</p><ul><li><p><strong><a href="./architecture/PERMISSION_SYSTEM.html">架构</a></strong>：了解 MoFox_Bot 的核心设计理念、权限系统以及技术栈和聊天流程。这有助于您从宏观上理解项目是如何运作的。</p></li><li><p><strong><a href="./CONTRIBUTE.html">贡献指南</a></strong>：如果您希望为项目贡献代码，请务必阅读贡献指南。这里包含了开发准则、代码风格要求以及提交 Pull Request 的流程。</p></li><li><p><strong><a href="./../plugins/">插件开发</a></strong>：MoFox_Bot 的核心功能之一就是其强大的插件系统。在这里，您可以学习到如何从零开始创建一个插件，以及如何使用我们提供的丰富 API。</p></li><li><p><strong><a href="./integrations/Bing.html">集成</a></strong>：了解如何将 MoFox_Bot 与其他第三方服务进行集成。</p></li></ul><p>我们非常欢迎新的开发者加入，并期待您的贡献！</p>`);
  _push(ssrRenderComponent(_component_NolebaseGitContributors, null, null, _parent));
  _push(ssrRenderComponent(_component_NolebaseGitChangelog, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("development/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
