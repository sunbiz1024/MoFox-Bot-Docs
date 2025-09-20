import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Logging API","description":"","frontmatter":{},"headers":[],"relativePath":"docs/development/plugins/api/logging-api.md","filePath":"docs/development/plugins/api/logging-api.md","lastUpdated":1756555974000}');
const _sfc_main = { name: "docs/development/plugins/api/logging-api.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NolebaseGitContributors = resolveComponent("NolebaseGitContributors");
  const _component_NolebaseGitChangelog = resolveComponent("NolebaseGitChangelog");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="logging-api" tabindex="-1">Logging API <a class="header-anchor" href="#logging-api" aria-label="Permalink to “Logging API”">​</a></h1><p>Logging API模块提供了获取本体logger的功能，允许插件记录日志信息。</p><h2 id="导入方式" tabindex="-1">导入方式 <a class="header-anchor" href="#导入方式" aria-label="Permalink to “导入方式”">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> src.plugin_system.apis </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> get_logger</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># 或者</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> src.plugin_system </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> get_logger</span></span></code></pre></div><h2 id="主要功能" tabindex="-1">主要功能 <a class="header-anchor" href="#主要功能" aria-label="Permalink to “主要功能”">​</a></h2><h3 id="_1-获取本体logger" tabindex="-1">1. 获取本体logger <a class="header-anchor" href="#_1-获取本体logger" aria-label="Permalink to “1. 获取本体logger”">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">def</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> get_logger</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(name: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">str</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) -&gt; structlog.stdlib.BoundLogger:</span></span></code></pre></div><p>获取本体logger实例。</p><p><strong>Args:</strong></p><ul><li><code>name</code> (str): 日志记录器的名称。</li></ul><p><strong>Returns:</strong></p><ul><li>一个logger实例，有以下方法: <ul><li><code>debug</code></li><li><code>info</code></li><li><code>warning</code></li><li><code>error</code></li><li><code>critical</code></li></ul></li></ul>`);
  _push(ssrRenderComponent(_component_NolebaseGitContributors, null, null, _parent));
  _push(ssrRenderComponent(_component_NolebaseGitChangelog, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/development/plugins/api/logging-api.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loggingApi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  loggingApi as default
};
