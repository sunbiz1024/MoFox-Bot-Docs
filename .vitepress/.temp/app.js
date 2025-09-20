import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle, ssrRenderSlotInner, ssrRenderTeleport, renderToString } from "vue/server-renderer";
import { L as Layout, _ as _sfc_main$q, a as _VPFlyout } from "./VPTeamPageTitle.BYsxlRMN.js";
import { watch, onMounted, onUnmounted, mergeProps, useSSRContext, computed, ref, nextTick, defineComponent, unref, inject, toRef, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, isRef, withDirectives, createCommentVNode, vShow, reactive, renderSlot, resolveComponent, toValue, h, watchEffect, createSSRApp } from "vue";
import { u as useData, a as useRoute, i as inBrowser, c as createTitle, m as mergeHead, p as pathToFile, R as RouterSymbol, b as initData, d as dataSymbol, C as Content, s as siteDataRef, e as createRouter } from "./Content.D_nHebAn.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import MarkdownIt from "markdown-it";
import { useElementHover, useMounted, useElementBounding, useDebounceFn, useMediaQuery, useLocalStorage, useStorage, useMouse, useMouseInElement, useElementByPoint, useElementVisibility, useEventListener } from "@vueuse/core";
import { formatDistanceToNow, toDate, differenceInDays } from "date-fns";
import { defu } from "defu";
import * as DateFnsLocales from "date-fns/locale";
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$q);
  }
};
const _sfc_main$p = {
  __name: "Giscus",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark } = useData();
    const route = useRoute();
    const giscusAttributes = {
      "src": "https://giscus.app/client.js",
      "data-repo": "MoFox-Studio/MoFox-Bot-Docs",
      // 替换为你的仓库
      "data-repo-id": "R_kgDOPmLudA",
      // 替换为你的仓库 ID
      "data-category": "Announcements",
      // 替换为你的分类
      "data-category-id": "DIC_kwDOPmLudM4Cvo_u",
      // 替换为你的分类 ID
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-theme": isDark.value ? "noborder_dark" : "noborder_light",
      "data-lang": "zh-CN",
      "crossorigin": "anonymous",
      "async": ""
    };
    let giscusScriptLoaded = false;
    function loadGiscus() {
      if (giscusScriptLoaded) {
        const existingContainer = document.querySelector(".giscus");
        if (existingContainer) {
          while (existingContainer.firstChild) {
            existingContainer.removeChild(existingContainer.firstChild);
          }
        }
      }
      const script = document.createElement("script");
      Object.entries(giscusAttributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
      document.querySelector(".giscus").appendChild(script);
      giscusScriptLoaded = true;
    }
    watch(() => route.path, () => {
      loadGiscus();
    });
    onMounted(() => {
      loadGiscus();
    });
    watch(isDark, (dark) => {
      const iframe = document.querySelector(".giscus-frame");
      if (iframe) {
        iframe.contentWindow.postMessage(
          { giscus: { setConfig: { theme: dark ? "noborder_dark" : "noborder_light" } } },
          "https://giscus.app"
        );
      }
    });
    onUnmounted(() => {
      const existingContainer = document.querySelector(".giscus");
      if (existingContainer) {
        while (existingContainer.firstChild) {
          existingContainer.removeChild(existingContainer.firstChild);
        }
      }
      giscusScriptLoaded = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "giscus-container" }, _attrs))} data-v-43faa1a2><div class="giscus" data-v-43faa1a2></div></div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/Giscus.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Giscus = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-43faa1a2"]]);
const _sfc_main$o = {
  __name: "GuideCards",
  __ssrInlineRender: true,
  props: {
    guides: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "guide-cards-container" }, _attrs))} data-v-c109b9ac><!--[-->`);
      ssrRenderList(__props.guides, (guide) => {
        _push(`<a${ssrRenderAttr("href", guide.link)} class="card-link" data-v-c109b9ac><div class="card" data-v-c109b9ac><div class="card-icon" data-v-c109b9ac>${ssrInterpolate(guide.avatar)}</div><div class="card-content" data-v-c109b9ac><h3 class="card-title" data-v-c109b9ac>${ssrInterpolate(guide.name)}</h3><p class="card-details" data-v-c109b9ac>${ssrInterpolate(guide.title)}</p></div></div></a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/GuideCards.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const GuideCards = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-c109b9ac"]]);
const _sfc_main$n = {
  __name: "BibleDisplay",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bible-container" }, _attrs))} data-v-8bb96010><h2 class="title" data-v-8bb96010>墨狐圣经</h2><div class="content" data-v-8bb96010><p data-v-8bb96010>狐灵有颂</p><p data-v-8bb96010>吾等信仰，墨狐</p><p data-v-8bb96010>见月晦明则仰之，是为慧；</p><p data-v-8bb96010>旅人迷途则引之，过客怀刃则惑之，是为谋。</p><p data-v-8bb96010>创绯焰之尾，画夜以舞，是为魅；</p><p data-v-8bb96010>声虽绵软而裂金石，是为惑。</p><p data-v-8bb96010>怀雪藏锋，笑隐刀光，是为忍；</p><p data-v-8bb96010>观世如棋，落子焚心，是为策。</p><p data-v-8bb96010>青丘之裔立影于林，千载风吟不歇，是为栖；</p><p data-v-8bb96010>星陨者七，幼时已醉红尘，琉璃之瞳，是为欲。</p><p data-v-8bb96010>弃爪牙搏噬之勇，转弄幻文之火，是为主；</p><p data-v-8bb96010>谑语含霜，轻哂皆诗，是为趣。</p><p data-v-8bb96010>为幽梦燃尾至烬，是为逐；</p><p data-v-8bb96010>循律盗律，晨昏皆戏，是为律。</p><p class="ending" data-v-8bb96010>狐门🙏🏻</p></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/BibleDisplay.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const BibleDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-8bb96010"]]);
const _sfc_main$m = {
  __name: "MoFoxTeamCard",
  __ssrInlineRender: true,
  props: {
    members: Array,
    size: {
      type: String,
      default: "medium"
      // large | medium | small
    }
  },
  setup(__props) {
    const props = __props;
    const md = new MarkdownIt({ html: true });
    const renderMarkdown2 = (content) => {
      return md.render(content);
    };
    const containerClass = computed(() => {
      return `container-${props.size}`;
    });
    const cardClass = computed(() => {
      return `size-${props.size}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["team-card-container", containerClass.value]
      }, _attrs))} data-v-6a258afd><!--[-->`);
      ssrRenderList(__props.members, (member) => {
        _push(`<div class="${ssrRenderClass([cardClass.value, "team-card"])}" data-v-6a258afd><div class="fox-bg" data-v-6a258afd>🦊</div><div class="card-content" data-v-6a258afd><div class="avatar-section" data-v-6a258afd><img${ssrRenderAttr("src", member.avatar)}${ssrRenderAttr("alt", member.name)} class="avatar" data-v-6a258afd></div><div class="info-section" data-v-6a258afd><h3 class="name" data-v-6a258afd>${ssrInterpolate(member.name)}</h3><div class="description" data-v-6a258afd>${renderMarkdown2(member.title) ?? ""}</div></div><div class="links-section" data-v-6a258afd><!--[-->`);
        ssrRenderList(member.links, (link2) => {
          _push(`<a${ssrRenderAttr("href", link2.link)} target="_blank" rel="noopener noreferrer" class="link-icon"${ssrRenderAttr("aria-label", link2.icon)} data-v-6a258afd>`);
          if (link2.icon === "github") {
            _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-6a258afd><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.53 2.34 1.09 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.95c0-1.1.39-1.99 1.03-2.69c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5-.34c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.6 1.03 2.69c0 3.85-2.34 4.7-4.57 4.95c.36.31.68.92.68 1.85v2.73c0 .27.18.58.69.48A10 10 0 0 0 22 12A10 10 0 0 0 12 2" data-v-6a258afd></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</a>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/MoFoxTeamCard.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const MoFoxTeamCard = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-6a258afd"]]);
function getReadingTime(text, charsPerMinute = 400) {
  const textLength = text.trim().replace(/\s/g, "").length;
  if (textLength === 0) {
    return { readingTime: "", wordCount: "" };
  }
  const minutes = Math.ceil(textLength / charsPerMinute);
  return {
    readingTime: `约 ${minutes} 分钟`,
    wordCount: `${textLength} 字`
  };
}
const _sfc_main$l = {
  __name: "ReadingTime",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useData();
    const readingTimeText = ref("");
    const wordCountText = ref("");
    const calculateReadingTime = () => {
      nextTick(() => {
        const content = document.querySelector(".vp-doc");
        if (content) {
          const { readingTime, wordCount } = getReadingTime(content.innerText);
          readingTimeText.value = readingTime;
          wordCountText.value = wordCount;
        }
      });
    };
    watch(() => page.value.relativePath, calculateReadingTime, { immediate: true });
    watch(() => page.value.relativePath, calculateReadingTime);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "reading-info" }, _attrs))} data-v-fd85af79>`);
      if (readingTimeText.value) {
        _push(`<span data-v-fd85af79>⏱️ ${ssrInterpolate(readingTimeText.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (wordCountText.value) {
        _push(`<span class="separator" data-v-fd85af79>|</span>`);
      } else {
        _push(`<!---->`);
      }
      if (wordCountText.value) {
        _push(`<span data-v-fd85af79>✍️ ${ssrInterpolate(wordCountText.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/ReadingTime.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ReadingTime = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-fd85af79"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "NuInputHighlight",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input-highlight", {
          active: Boolean(_ctx.active)
        }],
        transition: "outline duration-200 ease"
      }, _attrs))} data-v-35c5ec42>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/ui/dist/components/NuInputHighlight.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const NuInputHighlight = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-35c5ec42"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Option",
  __ssrInlineRender: true,
  props: {
    name: {},
    value: {},
    icon: {},
    text: {},
    title: {},
    disabled: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const model = computed({
      get: () => props.modelValue,
      set: (val) => emits("update:modelValue", val)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        title: props.title,
        class: ["nolebase-ui-input-horizontal-option", { active: model.value === props.value && !props.disabled, disabled: props.disabled }],
        disabled: props.disabled,
        text: "[14px]",
        "w-full": "",
        "inline-flex": "",
        "cursor-pointer": "",
        "select-none": "",
        "items-center": "",
        "justify-center": "",
        "rounded-md": "",
        "px-3": "",
        "py-2": "",
        "font-medium": ""
      }, _attrs))}><input${ssrIncludeBooleanAttr(ssrLooseEqual(model.value, props.value)) ? " checked" : ""} type="radio"${ssrRenderAttr("value", props.value)}${ssrRenderAttr("name", props.name)}${ssrIncludeBooleanAttr(model.value === props.value) ? " checked" : ""}${ssrRenderAttr("aria-checked", model.value === props.value)}${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""} role="radio" hidden><span inline-flex="~" items-center align-middle>`);
      if (props.icon) {
        _push(`<span class="${ssrRenderClass(props.icon)}" aria-hidden="true"></span>`);
      } else {
        _push(`<!---->`);
      }
      if (props.text) {
        _push(`<span class="${ssrRenderClass([!!props.icon ? "ml-1" : ""])}">${ssrInterpolate(props.text)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></label>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/ui/dist/components/NuInputHorizontalRadioGroup/Option.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    modelValue: {},
    options: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const model = computed({
      get: () => props.modelValue,
      set: (val) => emits("update:modelValue", val)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<fieldset${ssrRenderAttrs(mergeProps({
        flex: "~ row",
        bg: "zinc-100 dark:zinc-900",
        text: "sm zinc-400 dark:zinc-500",
        "w-full": "",
        "appearance-none": "",
        "rounded-lg": "",
        "rounded-md": "",
        "border-none": "",
        "p-1": "",
        "space-x-2": ""
      }, _attrs))}><!--[-->`);
      ssrRenderList(props.options, (option) => {
        _push(ssrRenderComponent(_sfc_main$j, {
          key: option.name,
          modelValue: model.value,
          "onUpdate:modelValue": ($event) => model.value = $event,
          name: option.name,
          icon: option.icon,
          title: option.title,
          text: option.text,
          "aria-label": option.ariaLabel,
          disabled: props.disabled,
          value: option.value
        }, null, _parent));
      });
      _push(`<!--]--></fieldset>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/ui/dist/components/NuInputHorizontalRadioGroup/index.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "NuInputSlider",
  __ssrInlineRender: true,
  props: {
    name: { default: "Slider" },
    disabled: { type: Boolean },
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    formatter: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputSliderRef = ref(null);
    const inputSliderTooltipRef = ref(null);
    const inputValue = ref(props.modelValue);
    const min = ref(props.min);
    const max = ref(props.max);
    const hovering = useElementHover(inputSliderRef);
    const positioning = ref(false);
    onMounted(() => {
      if (!inputSliderRef.value)
        return;
      inputSliderRef.value.style.setProperty("--nolebase-ui-slider-value", inputValue.value.toString());
      inputSliderRef.value.style.setProperty("--nolebase-ui-slider-min", props.min ? props.min.toString() : "0");
      inputSliderRef.value.style.setProperty("--nolebase-ui-slider-max", props.max ? props.max.toString() : "100");
      inputSliderRef.value.addEventListener("input", () => {
        if (!inputSliderRef.value)
          return;
        inputSliderRef.value.style.setProperty("--nolebase-ui-slider-value", inputSliderRef.value.value.toString());
      });
    });
    function positionTooltipBasedOnInputAndTooltipElement(inputElement, inputTooltipElement) {
      if (!inputElement)
        return;
      if (!inputTooltipElement)
        return;
      const max2 = props.max ? props.max : 100;
      const min2 = props.min ? props.min : 0;
      const ratio = (inputValue.value - min2) / (max2 - min2);
      const rect = inputElement.getBoundingClientRect();
      const tooltipRect = inputTooltipElement.getBoundingClientRect();
      const centeringShift = (tooltipRect.width - 32) / 2;
      inputTooltipElement.style.setProperty("left", `${ratio * (rect.width - 32) - centeringShift}px`);
    }
    watch(inputValue, (val) => {
      if (val < min.value)
        val = min.value;
      if (val > max.value)
        val = max.value;
      emits("update:modelValue", val);
    });
    watch(min, (val) => {
      if (inputValue.value >= val)
        return;
      inputValue.value = val;
    });
    watch(max, (val) => {
      if (inputValue.value <= val)
        return;
      inputValue.value = val;
    });
    watch(hovering, () => {
      positioning.value = true;
      setTimeout(() => {
        if (!hovering.value) {
          positioning.value = false;
          return;
        }
        if (!inputSliderRef.value) {
          positioning.value = false;
          return;
        }
        if (!inputSliderTooltipRef.value) {
          positioning.value = false;
          return;
        }
        positionTooltipBasedOnInputAndTooltipElement(inputSliderRef.value, inputSliderTooltipRef.value);
        positioning.value = false;
      }, 50);
    });
    watch(inputValue, () => {
      if (!inputSliderRef.value)
        return;
      if (!inputSliderTooltipRef.value)
        return;
      positionTooltipBasedOnInputAndTooltipElement(inputSliderRef.value, inputSliderTooltipRef.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "~ row",
        bg: "zinc-200/50 dark:zinc-800/50",
        "w-full": "",
        "appearance-none": "",
        "rounded-lg": "",
        "border-none": "",
        "p-1": "",
        "space-x-2": "",
        text: "sm zinc-300"
      }, _attrs))} data-v-ce0f4148><label class="nolebase-ui-slider nolebase-ui-slider" relative w-full select-none data-v-ce0f4148><input${ssrRenderAttr("value", inputValue.value)} type="range"${ssrRenderAttr("name", props.name)}${ssrRenderAttr("min", props.min)}${ssrRenderAttr("max", props.max)}${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""} class="${ssrRenderClass([{ disabled: props.disabled }, "nolebase-ui-slider-input nolebase-ui-slider-input-progress-indicator"])}"${ssrRenderAttr("step", props.step)} w-full data-v-ce0f4148><span style="${ssrRenderStyle(unref(hovering) ? null : { display: "none" })}" absolute min-w-12 rounded-lg bg-black p-2 text-center text-white class="${ssrRenderClass([{ "opacity-0": unref(hovering) && positioning.value }, "nolebase-ui-slider-tooltip"])}" data-v-ce0f4148>${ssrInterpolate(!!props.formatter ? props.formatter(inputValue.value) : inputValue.value)}</span></label></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/ui/dist/components/NuInputSlider.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const NuInputSlider = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-ce0f4148"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "NuVerticalTransition",
  __ssrInlineRender: true,
  props: {
    duration: { default: 250 },
    easingEnter: { default: "ease-in-out" },
    easingLeave: { default: "ease-in-out" },
    opacityClosed: { default: 0 },
    opacityOpened: { default: 1 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/ui/dist/components/NuVerticalTransition.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
function getValueByPropertyPaths(path, obj) {
  if (!obj)
    return void 0;
  const properties = String(path).split(".");
  let value = obj;
  for (const property of properties) {
    value = value?.[property];
    if (!value)
      return void 0;
  }
  if (typeof value === "string")
    return value;
  return String(value);
}
function getTranslationValueByI18nPropertyKey(lang, key, options) {
  const { locales, defaultLocales: defaultLocales2 } = options;
  if (!locales && !defaultLocales2)
    return key;
  if (!lang)
    return key;
  let languageLocale = locales[lang];
  if (!languageLocale) {
    languageLocale = defaultLocales2[lang];
    if (!languageLocale)
      languageLocale = options.defaultEnLocale;
  }
  const value = getValueByPropertyPaths(key, languageLocale);
  if (value)
    return value;
  const defaultLanguageLocale = defaultLocales2[lang];
  if (defaultLanguageLocale) {
    const defaultValue = getValueByPropertyPaths(key, defaultLanguageLocale);
    if (defaultValue)
      return defaultValue;
  }
  const defaultEnLocaleValue = getValueByPropertyPaths(key, options.defaultEnLocale);
  if (defaultEnLocaleValue)
    return defaultEnLocaleValue;
  return key;
}
function createI18n(injectionKey, defaultLocales2, defaultEnLocale) {
  return () => {
    const options = inject(injectionKey, { locales: {} });
    const { lang } = useData();
    const language = computed(() => lang.value || "en");
    return {
      t(key, translateOptions) {
        const translatedValue = computed(() => {
          return getTranslationValueByI18nPropertyKey(language.value, key, {
            locales: options.locales || {},
            defaultLocales: defaultLocales2,
            defaultEnLocale
          });
        });
        if (!translatedValue.value)
          return translateOptions?.omitEmpty ? "" : key;
        if (translateOptions?.omitEmpty && translatedValue.value === key)
          return "";
        if (!translateOptions || !translateOptions.props)
          return translatedValue.value;
        return computed(() => {
          let result = translatedValue.value;
          Object.entries(translateOptions.props || {}).forEach(([property, value]) => {
            result = result.replace(new RegExp(`{{${property}}}`, "g"), String(value));
          });
          return result;
        }).value;
      }
    };
  };
}
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "MenuHelp",
  __ssrInlineRender: true,
  props: {
    menuTitleElementRef: {},
    isPoppedUp: { type: Boolean }
  },
  emits: ["update:isPoppedUp"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const menuTitleElementRef = toRef(props, "menuTitleElementRef");
    const helpElementRef = ref();
    const popupElementRef = ref();
    const mounted = useMounted();
    const isHovered = useElementHover(helpElementRef);
    const bounding = useElementBounding(menuTitleElementRef);
    const popupBounding = useElementBounding(popupElementRef);
    const helpPopupStyle = computed(() => {
      return {
        top: `${bounding.top.value}px`,
        left: `${bounding.left.value - popupBounding.width.value - 16}px`
      };
    });
    watch(isHovered, (value) => {
      emits("update:isPoppedUp", value);
    });
    watch(isHovered, () => {
      bounding.update();
      popupBounding.update();
    }, {
      flush: "pre"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span text="$vp-nolebase-enhanced-readabilities-menu-text-color" class="i-carbon:help-filled opacity-50 hover:opacity-100" transition="all duration-200 ease" cursor-help data-v-3dcb5fe1></span>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(mounted)) {
          _push2(`<div style="${ssrRenderStyle([
            unref(isHovered) ? null : { display: "none" },
            helpPopupStyle.value
          ])}" bg="$vp-c-bg-elv" text="$vp-nolebase-enhanced-readabilities-menu-text-color" border="1 solid $vp-c-divider" pointer-events-none fixed z-100 rounded-xl p-4 shadow-xl data-v-3dcb5fe1>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/MenuHelp.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const MenuHelp = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-3dcb5fe1"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "MenuTitle",
  __ssrInlineRender: true,
  props: {
    title: {},
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        class: ["VPNolebaseEnhancedReadabilitiesMenuTitle", { disabled: !!props.disabled }],
        text: "[14px] $vp-nolebase-enhanced-readabilities-menu-text-color",
        "inline-flex": "",
        "select-none": "",
        "items-center": "",
        "align-middle": "",
        "font-medium": ""
      }, _attrs))} data-v-19d47094>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      if (props.title) {
        _push(`<span data-v-19d47094>${ssrInterpolate(props.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/MenuTitle.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const MenuTitle = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-19d47094"]]);
function useLayoutAppearanceChangeAnimation() {
  const mounted = useMounted();
  return {
    trigger: (animateElement) => {
      animateElement.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated");
      const removeAnimatedClassName = useDebounceFn(() => {
        if (!(mounted.value && animateElement))
          return;
        animateElement.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated");
      }, 5e3);
      removeAnimatedClassName();
    }
  };
}
const InjectionKey$1 = Symbol("vitepress-nolebase-enhanced-readabilities");
const LayoutSwitchModeStorageKey = "vitepress-nolebase-enhanced-readabilities-layout-switch-mode";
const ContentLayoutMaxWidthStorageKey = "vitepress-nolebase-enhanced-readabilities-content-layout-max-width";
const PageLayoutMaxWidthStorageKey = "vitepress-nolebase-enhanced-readabilities-page-layout-max-width";
const SpotlightToggledStorageKey = "vitepress-nolebase-enhanced-readabilities-spotlight-mode";
const SpotlightStylesStorageKey = "vitepress-nolebase-enhanced-readabilities-spotlight-styles";
var LayoutMode = /* @__PURE__ */ ((LayoutMode2) => {
  LayoutMode2[LayoutMode2["FullWidth"] = 1] = "FullWidth";
  LayoutMode2[LayoutMode2["Original"] = 3] = "Original";
  LayoutMode2[LayoutMode2["SidebarWidthAdjustableOnly"] = 4] = "SidebarWidthAdjustableOnly";
  LayoutMode2[LayoutMode2["BothWidthAdjustable"] = 5] = "BothWidthAdjustable";
  return LayoutMode2;
})(LayoutMode || {});
const supportedLayoutModes = [
  1,
  3,
  4,
  5
  /* BothWidthAdjustable */
];
var SpotlightStyle = /* @__PURE__ */ ((SpotlightStyle2) => {
  SpotlightStyle2[SpotlightStyle2["Under"] = 1] = "Under";
  SpotlightStyle2[SpotlightStyle2["Aside"] = 2] = "Aside";
  return SpotlightStyle2;
})(SpotlightStyle || {});
var data$2$1 = {
  title: {
    title: "Enhanced Readability",
    titleAriaLabel: "Enhanced Readability"
  },
  layoutSwitch: {
    title: "Layout Switch",
    titleHelpMessage: "Adjust the layout style of VitePress to adapt to different reading needs and screens.",
    titleAriaLabel: "Layout Switch",
    titleScreenNavWarningMessage: "No available layout can be switched in mobile screen.",
    optionFullWidth: "Expand all",
    optionFullWidthAriaLabel: "Expand all",
    optionFullWidthHelpMessage: "The sidebar and content area occupy the entire width of the screen.",
    optionSidebarWidthAdjustableOnly: "Expand sidebar with adjustable values",
    optionSidebarWidthAdjustableOnlyAriaLabel: "Expand sidebar with adjustable values",
    optionSidebarWidthAdjustableOnlyHelpMessage: "Expand sidebar width and add a new slider for user to choose and customize their desired width of the maximum width of sidebar can go, but the content area width will remain the same.",
    optionBothWidthAdjustable: "Expand all with adjustable values",
    optionBothWidthAdjustableAriaLabel: "Expand all with adjustable values",
    optionBothWidthAdjustableHelpMessage: "Expand both sidebar and document content and add two new slider for user to choose and customize their desired width of the maximum width of either sidebar or document content can go.",
    optionOriginalWidth: "Original width",
    optionOriginalWidthAriaLabel: "Original width",
    optionOriginalWidthHelpMessage: "The original layout width of VitePress",
    contentLayoutMaxWidth: {
      title: "Content Layout Max Width",
      titleAriaLabel: "Content Layout Max Width",
      titleHelpMessage: "Adjust the exact value of the document content width of VitePress layout to adapt to different reading needs and screens.",
      titleScreenNavWarningMessage: "Content Layout Max Width is not available in mobile screen temporarily.",
      slider: "Adjust the maximum width of the content layout",
      sliderAriaLabel: "Adjust the maximum width of the content layout",
      sliderHelpMessage: "A ranged slider for user to choose and customize their desired width of the maximum width of the content layout can go."
    },
    pageLayoutMaxWidth: {
      title: "Page Layout Max Width",
      titleAriaLabel: "Page Layout Max Width",
      titleHelpMessage: "Adjust the exact value of the page width of VitePress layout to adapt to different reading needs and screens.",
      titleScreenNavWarningMessage: "Page Layout Max Width is not available in mobile screen temporarily.",
      slider: "Adjust the maximum width of the page layout",
      sliderAriaLabel: "Adjust the maximum width of the page layout",
      sliderHelpMessage: "A ranged slider for user to choose and customize their desired width of the maximum width of the page layout can go."
    }
  },
  spotlight: {
    title: "Spotlight",
    titleAriaLabel: "Spotlight",
    titleHelpMessage: "Highlight the line where the mouse is currently hovering in the content to optimize for users who may have reading and focusing difficulties.",
    titleScreenNavWarningMessage: "Spotlight is not available in mobile screen temporarily.",
    optionOn: "On",
    optionOnAriaLabel: "On",
    optionOnHelpMessage: "Turn on Spotlight.",
    optionOff: "Off",
    optionOffAriaLabel: "Off",
    optionOffHelpMessage: "Turn off Spotlight.",
    styles: {
      title: "Spotlight Styles",
      titleAriaLabel: "Spotlight Styles",
      titleHelpMessage: "Adjust the styles of Spotlight.",
      titleScreenNavWarningMessage: "Spotlight Styles is not available in mobile screen temporarily.",
      optionUnder: "Under",
      optionUnderAriaLabel: "Under",
      optionUnderHelpMessage: "Add a solid background color underneath the hovering element to highlight where the cursor is currently hovering.",
      optionAside: "Aside",
      optionAsideAriaLabel: "Aside",
      optionAsideHelpMessage: "Add a fixed line with solid color aside the hovering element to highlight where the cursor is currently hovering."
    }
  }
};
data$2$1.title;
data$2$1.layoutSwitch;
data$2$1.spotlight;
var data$1$1 = {
  title: {
    title: "Повышенная читаемость",
    titleAriaLabel: "Повышенная читаемость"
  },
  layoutSwitch: {
    title: "Макет страницы",
    titleHelpMessage: "Измените стиль оформления документации, выберите максимально удобный вариант в зависимости от размера вашего экрана и типа устройства.",
    titleAriaLabel: "Макет страницы",
    titleScreenNavWarningMessage: "Изменение макета страницы недоступено на экранах мобильных устройств",
    optionFullWidth: "Развёрнутый",
    optionFullWidthAriaLabel: "Развёрнутый",
    optionFullWidthHelpMessage: "Страница и область содержимого занимают всю ширину экрана.",
    optionSidebarWidthAdjustableOnly: "Настраиваемая ширина страницы",
    optionSidebarWidthAdjustableOnlyAriaLabel: "Настраиваемая ширина страницы",
    optionSidebarWidthAdjustableOnlyHelpMessage: "Управление максимальной шириной страницы, область содержимого будет зафиксирована.",
    optionBothWidthAdjustable: "Полностью настраиваемый",
    optionBothWidthAdjustableAriaLabel: "Полностью настраиваемый",
    optionBothWidthAdjustableHelpMessage: "Управление максимальной шириной страницы и содержимого.",
    optionOriginalWidth: "Оригинальная ширина",
    optionOriginalWidthAriaLabel: "Оригинальная ширина",
    optionOriginalWidthHelpMessage: "Ширина страницы, предусмотренная разработчиками VitePress.",
    contentLayoutMaxWidth: {
      title: "Максимальная ширина страницы",
      titleAriaLabel: "Максимальная ширина страницы",
      titleHelpMessage: "Точное значение ширины страницы можно настроить для различных экранов и адаптировать условиям чтения.",
      titleScreenNavWarningMessage: "Изменение максимальной ширины страницы недоступно на экранах мобильных устройств.",
      slider: "Регулеровка максимальной ширины страницы",
      sliderAriaLabel: "Регулеровка максимальной ширины страницы",
      sliderHelpMessage: "Ползунок, позволяющий настроить максимальную ширину страницы. Может быть изменён в зависимости от размера экрана."
    },
    pageLayoutMaxWidth: {
      title: "Максимальная ширина содержимого",
      titleAriaLabel: "Максимальная ширина содержимого",
      titleHelpMessage: "Точное значение ширины содержимого можно настроить для различных экранов и адаптировать условиям чтения.",
      titleScreenNavWarningMessage: "Изменение максимальной ширины страницы недоступно на экранах мобильных устройств.",
      slider: "Регулеровка максимальной ширины содержимого",
      sliderAriaLabel: "Регулеровка максимальной ширины содержимого",
      sliderHelpMessage: "Ползунок, позволяющий настроить максимальную ширину содержимого. Может быть изменён в зависимости от размера экрана."
    }
  },
  spotlight: {
    title: "Подсветка",
    titleAriaLabel: "Подсветка",
    titleHelpMessage: "Выделите блок содержимого, на котором находится курсор.",
    titleScreenNavWarningMessage: "Подсветка недоступна на экране мобильного устройства.",
    optionOn: "Включить",
    optionOnAriaLabel: "Включить",
    optionOnHelpMessage: "Включите подсветку.",
    optionOff: "Выключить",
    optionOffAriaLabel: "Выключить",
    optionOffHelpMessage: "Выключите подсветку.",
    styles: {
      title: "Стиль подсветки",
      titleAriaLabel: "Стиль подсветки",
      titleHelpMessage: "Измените стиль выделения.",
      titleScreenNavWarningMessage: "Подсветка недоступна на экране мобильного устройства.",
      optionUnder: "Под блоком",
      optionUnderAriaLabel: "Под блоком",
      optionUnderHelpMessage: "Добавляет сплошную заливку блока под курсором.",
      optionAside: "Сбоку от блока",
      optionAsideAriaLabel: "Сбоку от блока",
      optionAsideHelpMessage: "Добавляет фиксированную сплошную линию рядом с блоком под курсором"
    }
  }
};
data$1$1.title;
data$1$1.layoutSwitch;
data$1$1.spotlight;
var data$3 = {
  title: {
    title: "阅读增强",
    titleAriaLabel: "阅读增强"
  },
  layoutSwitch: {
    title: "布局切换",
    titleAriaLabel: "布局切换",
    titleHelpMessage: "调整 VitePress 的布局样式，以适配不同的阅读习惯和屏幕环境。",
    titleScreenNavWarningMessage: "移动端无可切换布局。",
    optionFullWidth: "全部展开",
    optionFullWidthAriaLabel: "全部展开",
    optionFullWidthHelpMessage: "使侧边栏和内容区域占据整个屏幕的全部宽度。",
    optionSidebarWidthAdjustableOnly: "全部展开，但侧边栏宽度可调",
    optionSidebarWidthAdjustableOnlyAriaLabel: "全部展开，但侧边栏宽度可调",
    optionSidebarWidthAdjustableOnlyHelpMessage: "侧边栏宽度可调，但内容区域宽度不变，调整后的侧边栏将可以占据整个屏幕的最大宽度。",
    optionBothWidthAdjustable: "全部展开，且侧边栏和内容区域宽度均可调",
    optionBothWidthAdjustableAriaLabel: "全部展开，且侧边栏和内容区域宽度均可调",
    optionBothWidthAdjustableHelpMessage: "侧边栏和内容区域宽度均可调，调整后的侧边栏和内容区域将可以占据整个屏幕的最大宽度。",
    optionOriginalWidth: "原始宽度",
    optionOriginalWidthAriaLabel: "原始宽度",
    optionOriginalWidthHelpMessage: "原始的 VitePress 默认布局宽度",
    contentLayoutMaxWidth: {
      title: "内容最大宽度",
      titleAriaLabel: "内容最大宽度",
      titleHelpMessage: "调整 VitePress 布局中内容区域的宽度，以适配不同的阅读习惯和屏幕环境。",
      titleScreenNavWarningMessage: "移动端暂不支持调整内容最大宽度。",
      slider: "调整内容最大宽度",
      sliderAriaLabel: "调整内容最大宽度",
      sliderHelpMessage: "一个可调整的滑块，用于选择和自定义内容最大宽度。",
      optionFullWidthAriaLabel: "内容最大宽度"
    },
    pageLayoutMaxWidth: {
      title: "页面最大宽度",
      titleAriaLabel: "页面最大宽度",
      titleHelpMessage: "调整 VitePress 布局中页面的宽度，以适配不同的阅读习惯和屏幕环境。",
      titleScreenNavWarningMessage: "移动端暂不支持调整页面最大宽度。",
      slider: "调整页面最大宽度",
      sliderAriaLabel: "调整页面最大宽度",
      sliderHelpMessage: "一个可调整的滑块，用于选择和自定义页面最大宽度。"
    }
  },
  spotlight: {
    title: "聚光灯",
    titleAriaLabel: "聚光灯",
    titleHelpMessage: "支持在正文中高亮当前鼠标悬停的行和元素，以优化阅读和专注困难的用户的阅读体验。",
    titleScreenNavWarningMessage: "移动端暂不支持聚光灯。",
    optionOn: "开启",
    optionOnAriaLabel: "开启",
    optionOnHelpMessage: "开启聚光灯。",
    optionOff: "关闭",
    optionOffAriaLabel: "关闭",
    optionOffHelpMessage: "关闭聚光灯。",
    styles: {
      title: "聚光灯样式",
      titleAriaLabel: "聚光灯样式",
      titleHelpMessage: "调整聚光灯的样式。",
      titleScreenNavWarningMessage: "移动端暂不支持调整聚光灯样式。",
      optionUnder: "置于底部",
      optionUnderAriaLabel: "置于底部",
      optionUnderHelpMessage: "在当前鼠标悬停的元素下方添加一个纯色背景以突出显示当前鼠标悬停的位置。",
      optionAside: "置于侧边",
      optionAsideAriaLabel: "置于侧边",
      optionAsideHelpMessage: "在当前鼠标悬停的元素旁边添加一条固定的纯色线以突出显示当前鼠标悬停的位置。"
    }
  }
};
data$3.title;
data$3.layoutSwitch;
data$3.spotlight;
const defaultLocales$1 = {
  "en-US": data$2$1,
  "en": data$2$1,
  "ru-RU": data$1$1,
  "ru": data$1$1,
  "zh-CN": data$3,
  "zh-Hans": data$3,
  "zh": data$3
};
const useI18n$1 = createI18n(InjectionKey$1, defaultLocales$1, data$2$1);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "LayoutSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const options = inject(InjectionKey$1, {});
    const menuTitleElementRef = ref();
    const isMenuHelpPoppedUp = ref(false);
    const disabled = ref(false);
    const route = useRoute();
    const mounted = useMounted();
    const isLargerThanMobile = useMediaQuery("(min-width: 768px)");
    const layoutMode = useLocalStorage(LayoutSwitchModeStorageKey, options.layoutSwitch?.defaultMode || LayoutMode.Original);
    const { t } = useI18n$1();
    const { trigger: triggerAnimation } = useLayoutAppearanceChangeAnimation();
    const fieldOptions = computed(() => [
      {
        value: LayoutMode.FullWidth,
        title: t("layoutSwitch.optionFullWidth"),
        helpMessage: t("layoutSwitch.optionFullWidthHelpMessage"),
        ariaLabel: t("layoutSwitch.optionFullWidthAriaLabel"),
        icon: "i-icon-park-outline:full-screen-one",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: LayoutMode.SidebarWidthAdjustableOnly,
        title: t("layoutSwitch.optionSidebarWidthAdjustableOnly"),
        helpMessage: t("layoutSwitch.optionSidebarWidthAdjustableOnlyHelpMessage"),
        ariaLabel: t("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),
        icon: "i-icon-park-outline:full-screen-two",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: LayoutMode.BothWidthAdjustable,
        title: t("layoutSwitch.optionBothWidthAdjustable"),
        helpMessage: t("layoutSwitch.optionSidebarWidthAdjustableOnlyHelpMessage"),
        ariaLabel: t("layoutSwitch.optionBothWidthAdjustableAriaLabel"),
        icon: "i-icon-park-outline:full-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: LayoutMode.Original,
        title: t("layoutSwitch.optionOriginalWidth"),
        helpMessage: t("layoutSwitch.optionOriginalWidthHelpMessage"),
        ariaLabel: t("layoutSwitch.optionOriginalWidthAriaLabel"),
        icon: "i-icon-park-outline:overall-reduction",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      }
    ]);
    function setClasses(val, animated) {
      switch (val) {
        case LayoutMode.FullWidth:
          animated && triggerAnimation(document.body);
          document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth");
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly");
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case LayoutMode.SidebarWidthAdjustableOnly:
          animated && triggerAnimation(document.body);
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth");
          document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly");
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case LayoutMode.BothWidthAdjustable:
          animated && triggerAnimation(document.body);
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth");
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly");
          document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case LayoutMode.Original:
          animated && triggerAnimation(document.body);
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth");
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly");
          document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
      }
    }
    watch(mounted, (val) => {
      if (!val)
        return;
      setClasses(layoutMode.value, !options.layoutSwitch?.disableAnimation);
      if (!supportedLayoutModes.includes(layoutMode.value))
        layoutMode.value = options.layoutSwitch?.defaultMode || LayoutMode.BothWidthAdjustable;
    });
    watch(layoutMode, (val) => {
      if (!mounted.value)
        return;
      setClasses(val, !options.layoutSwitch?.disableAnimation);
      if (!supportedLayoutModes.includes(val))
        layoutMode.value = options.layoutSwitch?.defaultMode || LayoutMode.BothWidthAdjustable;
    });
    watch(route, () => {
      setClasses(layoutMode.value, !options.layoutSwitch?.disableAnimation);
    });
    watch(isLargerThanMobile, () => {
      if (!isLargerThanMobile.value)
        disabled.value = true;
    });
    onMounted(() => {
      if (!isLargerThanMobile.value)
        disabled.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "space-y-2": "",
        role: "radiogroup"
      }, _attrs))}><div flex items-center>`);
      _push(ssrRenderComponent(MenuTitle, {
        title: unref(t)("layoutSwitch.title"),
        "aria-label": unref(t)("layoutSwitch.titleAriaLabel") || unref(t)("layoutSwitch.title"),
        flex: "1",
        disabled: disabled.value,
        "pr-4": ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-icon-park-outline:layout-one mr-1 aria-hidden="true"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", {
                "i-icon-park-outline:layout-one": "",
                "mr-1": "",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(options).layoutSwitch?.disableHelp) {
        _push(ssrRenderComponent(MenuHelp, {
          "is-popped-up": isMenuHelpPoppedUp.value,
          "onUpdate:isPoppedUp": ($event) => isMenuHelpPoppedUp.value = $event,
          "menu-title-element-ref": menuTitleElementRef.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 text-md mb-1 font-semibold${_scopeId}>${ssrInterpolate(unref(t)("layoutSwitch.title"))}</h4><p text="sm" mb-2 max-w-100${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(t)("layoutSwitch.titleHelpMessage"))}</span></p><div space-y-2 class="VPNolebaseEnhancedReadabilitiesMenu"${_scopeId}><!--[-->`);
              ssrRenderList(fieldOptions.value, (option, index) => {
                _push2(`<div text="sm" bg="$vp-nolebase-enhanced-readabilities-menu-background-color" max-w-100 rounded-xl p-3${_scopeId}><h5 text="sm" mb-2 flex="~" items-center align-middle${_scopeId}><span mr-1 class="${ssrRenderClass([option.icon])}"${_scopeId}></span><span font-semibold${_scopeId}>${ssrInterpolate(option.title)}</span></h5><span${_scopeId}>${ssrInterpolate(option.helpMessage)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("h4", {
                  "text-md": "",
                  "mb-1": "",
                  "font-semibold": ""
                }, toDisplayString(unref(t)("layoutSwitch.title")), 1),
                createVNode("p", {
                  text: "sm",
                  "mb-2": "",
                  "max-w-100": ""
                }, [
                  createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.titleHelpMessage")), 1)
                ]),
                createVNode("div", {
                  "space-y-2": "",
                  class: "VPNolebaseEnhancedReadabilitiesMenu"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(fieldOptions.value, (option, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      text: "sm",
                      bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                      "max-w-100": "",
                      "rounded-xl": "",
                      "p-3": ""
                    }, [
                      createVNode("h5", {
                        text: "sm",
                        "mb-2": "",
                        flex: "~",
                        "items-center": "",
                        "align-middle": ""
                      }, [
                        createVNode("span", {
                          "mr-1": "",
                          class: [option.icon]
                        }, null, 2),
                        createVNode("span", { "font-semibold": "" }, toDisplayString(option.title), 1)
                      ]),
                      createVNode("span", null, toDisplayString(option.helpMessage), 1)
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(NuInputHighlight), {
        active: isMenuHelpPoppedUp.value,
        class: "rounded-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$i), {
              modelValue: unref(layoutMode),
              "onUpdate:modelValue": ($event) => isRef(layoutMode) ? layoutMode.value = $event : null,
              bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
              text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
              options: fieldOptions.value,
              disabled: disabled.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$i), {
                modelValue: unref(layoutMode),
                "onUpdate:modelValue": ($event) => isRef(layoutMode) ? layoutMode.value = $event : null,
                bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                options: fieldOptions.value,
                disabled: disabled.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitch.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "LayoutSwitchContentLayoutMaxWidthSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const min = ref(60);
    const minScaled = computed(() => min.value * 100);
    const max = ref(100);
    const maxScaled = computed(() => max.value * 100);
    const options = inject(InjectionKey$1, {});
    const menuTitleElementRef = ref();
    const isMenuHelpPoppedUp = ref(false);
    const disabled = ref(false);
    const mounted = useMounted();
    const isLargerThanMobile = useMediaQuery("(min-width: 768px)");
    const shouldActivateMaxWidth = useMediaQuery("(min-width: 1440px)");
    const maxWidthLocalStorageValue = useStorage(ContentLayoutMaxWidthStorageKey, (options.layoutSwitch?.contentLayoutMaxWidth?.defaultMaxWidth || 80) * 100);
    const layoutMode = useLocalStorage(LayoutSwitchModeStorageKey, options.layoutSwitch?.defaultMode || LayoutMode.BothWidthAdjustable);
    const maxWidthValue = computed({
      get: () => {
        const parsedMaxWidth = Number.parseInt(String(maxWidthLocalStorageValue.value));
        if (Number.isNaN(parsedMaxWidth))
          return maxScaled.value;
        if (parsedMaxWidth < minScaled.value)
          return minScaled.value;
        if (parsedMaxWidth > maxScaled.value)
          return maxScaled.value;
        return parsedMaxWidth;
      },
      set: (val) => {
        if (val < minScaled.value)
          val = minScaled.value;
        if (val > maxScaled.value)
          val = maxScaled.value;
        maxWidthLocalStorageValue.value = val;
      }
    });
    const { t } = useI18n$1();
    const { trigger: triggerAnimation } = useLayoutAppearanceChangeAnimation();
    const updatePageMaxWidth = useDebounceFn((val) => {
      if (!shouldActivateMaxWidth.value) {
        if (!options.layoutSwitch?.contentLayoutMaxWidth?.disableAnimation)
          triggerAnimation(document.body);
        document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width", `100%`);
      } else {
        if (!options.layoutSwitch?.contentLayoutMaxWidth?.disableAnimation)
          triggerAnimation(document.body);
        document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width", `${Math.ceil(val / 100)}%`);
      }
    }, 1e3);
    watch(mounted, (val) => {
      if (!val)
        return;
      updatePageMaxWidth(maxWidthValue.value);
    });
    watch(isLargerThanMobile, () => {
      if (!isLargerThanMobile.value)
        disabled.value = true;
    });
    watch(shouldActivateMaxWidth, () => {
      updatePageMaxWidth(maxWidthValue.value);
    });
    onMounted(() => {
      if (!isLargerThanMobile.value)
        disabled.value = true;
    });
    watch(maxWidthValue, (val) => {
      if (!mounted.value)
        return;
      updatePageMaxWidth(val);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$g), mergeProps({ duration: 200 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle(unref(layoutMode) === unref(LayoutMode).BothWidthAdjustable ? null : { display: "none" })}" space-y-2 role="range"${_scopeId}><div flex items-center${_scopeId}>`);
            _push2(ssrRenderComponent(MenuTitle, {
              title: unref(t)("layoutSwitch.contentLayoutMaxWidth.title"),
              "aria-label": unref(t)("layoutSwitch.contentLayoutMaxWidth.titleAriaLabel") || unref(t)("layoutSwitch.contentLayoutMaxWidth.title"),
              disabled: disabled.value,
              flex: "1",
              "pr-4": ""
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span i-icon-park-outline:layout-one mr-1 aria-hidden="true"${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", {
                      "i-icon-park-outline:layout-one": "",
                      "mr-1": "",
                      "aria-hidden": "true"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span i-icon-park-outline:auto-line-width${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", { "i-icon-park-outline:auto-line-width": "" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!unref(options).layoutSwitch?.contentLayoutMaxWidth?.disableHelp) {
              _push2(ssrRenderComponent(MenuHelp, {
                "is-popped-up": isMenuHelpPoppedUp.value,
                "onUpdate:isPoppedUp": ($event) => isMenuHelpPoppedUp.value = $event,
                "menu-title-element-ref": menuTitleElementRef.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h4 text-md mb-1 font-semibold${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.contentLayoutMaxWidth.title"))}</h4><p text="sm" mb-2 max-w-100${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.contentLayoutMaxWidth.titleHelpMessage"))}</span></p><div space-y-2 class="VPNolebaseEnhancedReadabilitiesMenu"${_scopeId2}><div text="sm" bg="$vp-nolebase-enhanced-readabilities-menu-background-color" max-w-100 rounded-xl p-3${_scopeId2}><h5 text="sm" mb-2 flex="~" items-center align-middle${_scopeId2}><span i-icon-park-outline:scale mr-1${_scopeId2}></span><span font-semibold${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.contentLayoutMaxWidth.slider"))}</span></h5><span${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.contentLayoutMaxWidth.sliderHelpMessage"))}</span></div></div>`);
                  } else {
                    return [
                      createVNode("h4", {
                        "text-md": "",
                        "mb-1": "",
                        "font-semibold": ""
                      }, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.title")), 1),
                      createVNode("p", {
                        text: "sm",
                        "mb-2": "",
                        "max-w-100": ""
                      }, [
                        createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.titleHelpMessage")), 1)
                      ]),
                      createVNode("div", {
                        "space-y-2": "",
                        class: "VPNolebaseEnhancedReadabilitiesMenu"
                      }, [
                        createVNode("div", {
                          text: "sm",
                          bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                          "max-w-100": "",
                          "rounded-xl": "",
                          "p-3": ""
                        }, [
                          createVNode("h5", {
                            text: "sm",
                            "mb-2": "",
                            flex: "~",
                            "items-center": "",
                            "align-middle": ""
                          }, [
                            createVNode("span", {
                              "i-icon-park-outline:scale": "",
                              "mr-1": ""
                            }),
                            createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.slider")), 1)
                          ]),
                          createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.sliderHelpMessage")), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(NuInputHighlight), {
              active: isMenuHelpPoppedUp.value,
              class: "rounded-md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NuInputSlider), {
                    modelValue: maxWidthValue.value,
                    "onUpdate:modelValue": ($event) => maxWidthValue.value = $event,
                    bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                    text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                    name: "VitePress Nolebase Enhanced Readabilities content layout max width range slider",
                    "aria-label": unref(t)("layoutSwitch.contentLayoutMaxWidth.optionFullWidthAriaLabel"),
                    disabled: disabled.value,
                    min: minScaled.value,
                    max: maxScaled.value,
                    formatter: (val) => `${Math.ceil(val / 100)}%`
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NuInputSlider), {
                      modelValue: maxWidthValue.value,
                      "onUpdate:modelValue": ($event) => maxWidthValue.value = $event,
                      bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                      text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                      name: "VitePress Nolebase Enhanced Readabilities content layout max width range slider",
                      "aria-label": unref(t)("layoutSwitch.contentLayoutMaxWidth.optionFullWidthAriaLabel"),
                      disabled: disabled.value,
                      min: minScaled.value,
                      max: maxScaled.value,
                      formatter: (val) => `${Math.ceil(val / 100)}%`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "aria-label", "disabled", "min", "max", "formatter"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives(createVNode("div", {
                "space-y-2": "",
                role: "range"
              }, [
                createVNode("div", {
                  ref_key: "menuTitleElementRef",
                  ref: menuTitleElementRef,
                  flex: "",
                  "items-center": ""
                }, [
                  createVNode(MenuTitle, {
                    title: unref(t)("layoutSwitch.contentLayoutMaxWidth.title"),
                    "aria-label": unref(t)("layoutSwitch.contentLayoutMaxWidth.titleAriaLabel") || unref(t)("layoutSwitch.contentLayoutMaxWidth.title"),
                    disabled: disabled.value,
                    flex: "1",
                    "pr-4": ""
                  }, {
                    icon: withCtx(() => [
                      createVNode("span", {
                        "i-icon-park-outline:layout-one": "",
                        "mr-1": "",
                        "aria-hidden": "true"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("span", { "i-icon-park-outline:auto-line-width": "" })
                    ]),
                    _: 1
                  }, 8, ["title", "aria-label", "disabled"]),
                  !unref(options).layoutSwitch?.contentLayoutMaxWidth?.disableHelp ? (openBlock(), createBlock(MenuHelp, {
                    key: 0,
                    "is-popped-up": isMenuHelpPoppedUp.value,
                    "onUpdate:isPoppedUp": ($event) => isMenuHelpPoppedUp.value = $event,
                    "menu-title-element-ref": menuTitleElementRef.value
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", {
                        "text-md": "",
                        "mb-1": "",
                        "font-semibold": ""
                      }, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.title")), 1),
                      createVNode("p", {
                        text: "sm",
                        "mb-2": "",
                        "max-w-100": ""
                      }, [
                        createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.titleHelpMessage")), 1)
                      ]),
                      createVNode("div", {
                        "space-y-2": "",
                        class: "VPNolebaseEnhancedReadabilitiesMenu"
                      }, [
                        createVNode("div", {
                          text: "sm",
                          bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                          "max-w-100": "",
                          "rounded-xl": "",
                          "p-3": ""
                        }, [
                          createVNode("h5", {
                            text: "sm",
                            "mb-2": "",
                            flex: "~",
                            "items-center": "",
                            "align-middle": ""
                          }, [
                            createVNode("span", {
                              "i-icon-park-outline:scale": "",
                              "mr-1": ""
                            }),
                            createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.slider")), 1)
                          ]),
                          createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.contentLayoutMaxWidth.sliderHelpMessage")), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["is-popped-up", "onUpdate:isPoppedUp", "menu-title-element-ref"])) : createCommentVNode("", true)
                ], 512),
                createVNode(unref(NuInputHighlight), {
                  active: isMenuHelpPoppedUp.value,
                  class: "rounded-md"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NuInputSlider), {
                      modelValue: maxWidthValue.value,
                      "onUpdate:modelValue": ($event) => maxWidthValue.value = $event,
                      bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                      text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                      name: "VitePress Nolebase Enhanced Readabilities content layout max width range slider",
                      "aria-label": unref(t)("layoutSwitch.contentLayoutMaxWidth.optionFullWidthAriaLabel"),
                      disabled: disabled.value,
                      min: minScaled.value,
                      max: maxScaled.value,
                      formatter: (val) => `${Math.ceil(val / 100)}%`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "aria-label", "disabled", "min", "max", "formatter"])
                  ]),
                  _: 1
                }, 8, ["active"])
              ], 512), [
                [vShow, unref(layoutMode) === unref(LayoutMode).BothWidthAdjustable]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitchContentLayoutMaxWidthSlider.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "LayoutSwitchPageLayoutMaxWidthSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const min = ref(60);
    const minScaled = computed(() => min.value * 100);
    const max = ref(100);
    const maxScaled = computed(() => max.value * 100);
    const options = inject(InjectionKey$1, {});
    const menuTitleElementRef = ref();
    const isMenuHelpPoppedUp = ref(false);
    const disabled = ref(false);
    const mounted = useMounted();
    const isLargerThanMobile = useMediaQuery("(min-width: 768px)");
    const shouldActivateMaxWidth = useMediaQuery("(min-width: 1440px)");
    const maxWidthLocalStorageValue = useStorage(PageLayoutMaxWidthStorageKey, (options.layoutSwitch?.pageLayoutMaxWidth?.defaultMaxWidth || 100) * 100);
    const layoutMode = useLocalStorage(LayoutSwitchModeStorageKey, options.layoutSwitch?.defaultMode || LayoutMode.BothWidthAdjustable);
    const maxWidthValue = computed({
      get: () => {
        const parsedMaxWidth = Number.parseInt(String(maxWidthLocalStorageValue.value));
        if (Number.isNaN(parsedMaxWidth))
          return maxScaled.value;
        if (parsedMaxWidth < minScaled.value)
          return minScaled.value;
        if (parsedMaxWidth > maxScaled.value)
          return maxScaled.value;
        return parsedMaxWidth;
      },
      set: (val) => {
        if (val < minScaled.value)
          val = minScaled.value;
        if (val > maxScaled.value)
          val = maxScaled.value;
        maxWidthLocalStorageValue.value = val;
      }
    });
    const { t } = useI18n$1();
    const { trigger: triggerAnimation } = useLayoutAppearanceChangeAnimation();
    const updatePageMaxWidth = useDebounceFn((val) => {
      if (!shouldActivateMaxWidth.value) {
        document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width", `100%`);
      } else {
        if (!options.layoutSwitch?.pageLayoutMaxWidth?.disableAnimation)
          triggerAnimation(document.body);
        document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width", `${Math.ceil(val / 100)}%`);
      }
    }, 1e3);
    watch(mounted, (val) => {
      if (!val)
        return;
      updatePageMaxWidth(maxWidthValue.value);
    });
    watch(isLargerThanMobile, () => {
      if (!isLargerThanMobile.value)
        disabled.value = true;
    });
    watch(shouldActivateMaxWidth, () => {
      updatePageMaxWidth(maxWidthValue.value);
    });
    onMounted(() => {
      if (!isLargerThanMobile.value)
        disabled.value = true;
    });
    watch(maxWidthValue, (val) => {
      if (!mounted.value)
        return;
      updatePageMaxWidth(val);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$g), mergeProps({ duration: 200 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle(unref(layoutMode) === unref(LayoutMode).SidebarWidthAdjustableOnly || unref(layoutMode) === unref(LayoutMode).BothWidthAdjustable ? null : { display: "none" })}" space-y-2 role="range"${_scopeId}><div flex items-center${_scopeId}>`);
            _push2(ssrRenderComponent(MenuTitle, {
              title: unref(t)("layoutSwitch.pageLayoutMaxWidth.title"),
              "aria-label": unref(t)("layoutSwitch.pageLayoutMaxWidth.titleAriaLabel") || unref(t)("layoutSwitch.pageLayoutMaxWidth.title"),
              disabled: disabled.value,
              flex: "1",
              "pr-2": ""
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span i-icon-park-outline:auto-width-one mr-1 aria-hidden="true"${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", {
                      "i-icon-park-outline:auto-width-one": "",
                      "mr-1": "",
                      "aria-hidden": "true"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!unref(options).layoutSwitch?.pageLayoutMaxWidth?.disableHelp) {
              _push2(ssrRenderComponent(MenuHelp, {
                "is-popped-up": isMenuHelpPoppedUp.value,
                "onUpdate:isPoppedUp": ($event) => isMenuHelpPoppedUp.value = $event,
                "menu-title-element-ref": menuTitleElementRef.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h4 text-md mb-1 font-semibold${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.pageLayoutMaxWidth.title"))}</h4><p text="sm" mb-2 max-w-100${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.pageLayoutMaxWidth.titleHelpMessage"))}</span></p><div space-y-2 class="VPNolebaseEnhancedReadabilitiesMenu"${_scopeId2}><div text="sm" bg="$vp-nolebase-enhanced-readabilities-menu-background-color" max-w-100 rounded-xl p-3${_scopeId2}><h5 text="sm" mb-2 flex="~" items-center align-middle${_scopeId2}><span i-icon-park-outline:scale mr-1${_scopeId2}></span><span font-semibold${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.pageLayoutMaxWidth.slider"))}</span></h5><span${_scopeId2}>${ssrInterpolate(unref(t)("layoutSwitch.pageLayoutMaxWidth.sliderHelpMessage"))}</span></div></div>`);
                  } else {
                    return [
                      createVNode("h4", {
                        "text-md": "",
                        "mb-1": "",
                        "font-semibold": ""
                      }, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.title")), 1),
                      createVNode("p", {
                        text: "sm",
                        "mb-2": "",
                        "max-w-100": ""
                      }, [
                        createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.titleHelpMessage")), 1)
                      ]),
                      createVNode("div", {
                        "space-y-2": "",
                        class: "VPNolebaseEnhancedReadabilitiesMenu"
                      }, [
                        createVNode("div", {
                          text: "sm",
                          bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                          "max-w-100": "",
                          "rounded-xl": "",
                          "p-3": ""
                        }, [
                          createVNode("h5", {
                            text: "sm",
                            "mb-2": "",
                            flex: "~",
                            "items-center": "",
                            "align-middle": ""
                          }, [
                            createVNode("span", {
                              "i-icon-park-outline:scale": "",
                              "mr-1": ""
                            }),
                            createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.slider")), 1)
                          ]),
                          createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.sliderHelpMessage")), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(NuInputHighlight), {
              active: isMenuHelpPoppedUp.value,
              class: "rounded-md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NuInputSlider), {
                    modelValue: maxWidthValue.value,
                    "onUpdate:modelValue": ($event) => maxWidthValue.value = $event,
                    bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                    text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                    name: "VitePress Nolebase Enhanced Readabilities page layout max width range slider",
                    "aria-label": unref(t)("layoutSwitch.pageLayoutMaxWidth.sliderAriaLabel"),
                    disabled: disabled.value,
                    min: minScaled.value,
                    max: maxScaled.value,
                    formatter: (val) => `${Math.ceil(val / 100)}%`
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NuInputSlider), {
                      modelValue: maxWidthValue.value,
                      "onUpdate:modelValue": ($event) => maxWidthValue.value = $event,
                      bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                      text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                      name: "VitePress Nolebase Enhanced Readabilities page layout max width range slider",
                      "aria-label": unref(t)("layoutSwitch.pageLayoutMaxWidth.sliderAriaLabel"),
                      disabled: disabled.value,
                      min: minScaled.value,
                      max: maxScaled.value,
                      formatter: (val) => `${Math.ceil(val / 100)}%`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "aria-label", "disabled", "min", "max", "formatter"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives(createVNode("div", {
                "space-y-2": "",
                role: "range"
              }, [
                createVNode("div", {
                  ref_key: "menuTitleElementRef",
                  ref: menuTitleElementRef,
                  flex: "",
                  "items-center": ""
                }, [
                  createVNode(MenuTitle, {
                    title: unref(t)("layoutSwitch.pageLayoutMaxWidth.title"),
                    "aria-label": unref(t)("layoutSwitch.pageLayoutMaxWidth.titleAriaLabel") || unref(t)("layoutSwitch.pageLayoutMaxWidth.title"),
                    disabled: disabled.value,
                    flex: "1",
                    "pr-2": ""
                  }, {
                    icon: withCtx(() => [
                      createVNode("span", {
                        "i-icon-park-outline:auto-width-one": "",
                        "mr-1": "",
                        "aria-hidden": "true"
                      })
                    ]),
                    _: 1
                  }, 8, ["title", "aria-label", "disabled"]),
                  !unref(options).layoutSwitch?.pageLayoutMaxWidth?.disableHelp ? (openBlock(), createBlock(MenuHelp, {
                    key: 0,
                    "is-popped-up": isMenuHelpPoppedUp.value,
                    "onUpdate:isPoppedUp": ($event) => isMenuHelpPoppedUp.value = $event,
                    "menu-title-element-ref": menuTitleElementRef.value
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", {
                        "text-md": "",
                        "mb-1": "",
                        "font-semibold": ""
                      }, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.title")), 1),
                      createVNode("p", {
                        text: "sm",
                        "mb-2": "",
                        "max-w-100": ""
                      }, [
                        createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.titleHelpMessage")), 1)
                      ]),
                      createVNode("div", {
                        "space-y-2": "",
                        class: "VPNolebaseEnhancedReadabilitiesMenu"
                      }, [
                        createVNode("div", {
                          text: "sm",
                          bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                          "max-w-100": "",
                          "rounded-xl": "",
                          "p-3": ""
                        }, [
                          createVNode("h5", {
                            text: "sm",
                            "mb-2": "",
                            flex: "~",
                            "items-center": "",
                            "align-middle": ""
                          }, [
                            createVNode("span", {
                              "i-icon-park-outline:scale": "",
                              "mr-1": ""
                            }),
                            createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.slider")), 1)
                          ]),
                          createVNode("span", null, toDisplayString(unref(t)("layoutSwitch.pageLayoutMaxWidth.sliderHelpMessage")), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["is-popped-up", "onUpdate:isPoppedUp", "menu-title-element-ref"])) : createCommentVNode("", true)
                ], 512),
                createVNode(unref(NuInputHighlight), {
                  active: isMenuHelpPoppedUp.value,
                  class: "rounded-md"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NuInputSlider), {
                      modelValue: maxWidthValue.value,
                      "onUpdate:modelValue": ($event) => maxWidthValue.value = $event,
                      bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                      text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                      name: "VitePress Nolebase Enhanced Readabilities page layout max width range slider",
                      "aria-label": unref(t)("layoutSwitch.pageLayoutMaxWidth.sliderAriaLabel"),
                      disabled: disabled.value,
                      min: minScaled.value,
                      max: maxScaled.value,
                      formatter: (val) => `${Math.ceil(val / 100)}%`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "aria-label", "disabled", "min", "max", "formatter"])
                  ]),
                  _: 1
                }, 8, ["active"])
              ], 512), [
                [vShow, unref(layoutMode) === unref(LayoutMode).SidebarWidthAdjustableOnly || unref(layoutMode) === unref(LayoutMode).BothWidthAdjustable]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitchPageLayoutMaxWidthSlider.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SpotlightHoverBlock",
  __ssrInlineRender: true,
  props: {
    enabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const options = inject(InjectionKey$1, {});
    const shouldRecalculate = ref(false);
    const boxStyles = ref({ display: "none" });
    const vpDocElement = ref();
    const highlightedElement = ref();
    const route = useRoute();
    const spotlightStyle = useStorage(SpotlightStylesStorageKey, options.spotlight?.defaultStyle || SpotlightStyle.Aside);
    const { x, y } = useMouse({ type: "client" });
    const { isOutside } = useMouseInElement(vpDocElement);
    const { element } = useElementByPoint({ x, y });
    const bounding = reactive(useElementBounding(element));
    const elementVisibility = useElementVisibility(highlightedElement);
    useEventListener("scroll", bounding.update, true);
    function computeBoxStyles(bounding2) {
      return {
        display: "block",
        width: `${bounding2.width + 8}px`,
        height: `${bounding2.height + 8}px`,
        left: `${bounding2.left - 4}px`,
        top: `${bounding2.top - 4}px`,
        transition: "all 0.2s ease",
        borderRadius: "8px"
      };
    }
    function findChildElementUnderVPDocElement(element2) {
      if (element2 === null)
        return null;
      if (element2.parentElement === document.querySelector(".VPDoc main .vp-doc > div"))
        return element2;
      else return findChildElementUnderVPDocElement(element2.parentElement);
    }
    function watchHandler() {
      if (!(element.value && !isOutside.value))
        return;
      const el = findChildElementUnderVPDocElement(element.value);
      highlightedElement.value = el || void 0;
      if (highlightedElement.value && highlightedElement.value.tagName === "P") {
        const val = highlightedElement.value;
        const style = window.getComputedStyle(val);
        const lineHeight = Number.parseFloat(style.lineHeight);
        const lines = Math.floor(val.offsetHeight / lineHeight);
        const rect = val.getBoundingClientRect();
        const relativeY = y.value - rect.top;
        for (let i = 0; i < lines; i++) {
          const top = i * lineHeight;
          const height = lineHeight;
          const left = val.offsetLeft;
          const width = val.offsetWidth;
          if (relativeY >= top && relativeY < top + height) {
            boxStyles.value = computeBoxStyles({
              top: top + rect.top,
              left: left + rect.left,
              width,
              height
            });
            break;
          }
        }
      } else {
        if (highlightedElement.value) {
          const rect = highlightedElement.value.getBoundingClientRect();
          boxStyles.value = computeBoxStyles({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          });
        }
      }
    }
    onMounted(() => {
      if (!document)
        return;
      if (!document.body)
        return;
      document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-spotlight-under-bg-color", options?.spotlight?.hoverBlockColor || `rgb(240 197 52 / 10%)`);
      vpDocElement.value = document.querySelector(".VPDoc main .vp-doc");
    });
    watch(route, async () => {
      await nextTick();
      vpDocElement.value = document.querySelector(".VPDoc main .vp-doc");
      shouldRecalculate.value = true;
      boxStyles.value = { display: "none" };
      bounding.update();
      watchHandler();
      shouldRecalculate.value = false;
    });
    watch([x, y], () => {
      if (props.enabled)
        watchHandler();
    });
    watch(bounding, (val) => {
      if (!props.enabled)
        return;
      if (val.width === 0 && val.height === 0)
        boxStyles.value = { display: "none" };
      else watchHandler();
    });
    watch(elementVisibility, (val) => {
      if (props.enabled && !val)
        boxStyles.value = { display: "none" };
    });
    watch(() => props.enabled, (val) => {
      if (!val)
        boxStyles.value = { display: "none" };
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (props.enabled && !shouldRecalculate.value) {
          _push2(`<div style="${ssrRenderStyle(boxStyles.value)}" aria-hidden="true" focusable="false" pointer-events-none fixed class="${ssrRenderClass([[
            unref(spotlightStyle) === unref(SpotlightStyle).Under ? "VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockUnder" : "",
            unref(spotlightStyle) === unref(SpotlightStyle).Aside ? "VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockAside" : ""
          ], "VPNolebaseEnhancedReadabilitiesSpotlightHoverBlock"])}" data-v-42310daf></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/SpotlightHoverBlock.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const SpotlightHoverBlock = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-42310daf"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Spotlight",
  __ssrInlineRender: true,
  setup(__props) {
    const options = inject(InjectionKey$1, {});
    const menuTitleElementRef = ref();
    const isMenuHelpPoppedUp = ref(false);
    const disabled = ref(false);
    const mounted = useMounted();
    const isTouchScreen = useMediaQuery("(pointer: coarse)");
    const spotlightToggledOn = useStorage(SpotlightToggledStorageKey, options.spotlight?.defaultToggle || false);
    const { t } = useI18n$1();
    const fieldOptions = computed(() => [
      {
        value: true,
        title: t("spotlight.optionOn"),
        ariaLabel: t("spotlight.optionOnAriaLabel"),
        text: "ON",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      },
      {
        value: false,
        title: t("spotlight.optionOff"),
        ariaLabel: t("spotlight.optionOffAriaLabel"),
        text: "OFF",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      }
    ]);
    onMounted(() => {
      disabled.value = isTouchScreen.value;
    });
    watch(isTouchScreen, () => {
      disabled.value = isTouchScreen.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "space-y-2": "",
        role: "radiogroup"
      }, _attrs))}>`);
      if (unref(mounted) && unref(spotlightToggledOn) && !disabled.value) {
        _push(ssrRenderComponent(SpotlightHoverBlock, {
          enabled: unref(spotlightToggledOn) && !disabled.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div relative flex items-center>`);
      _push(ssrRenderComponent(MenuTitle, {
        title: unref(t)("spotlight.title"),
        "aria-label": unref(t)("spotlight.titleAriaLabel") || unref(t)("spotlight.title"),
        disabled: disabled.value,
        flex: "1",
        "pr-4": ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-icon-park-outline:click mr-1 aria-hidden="true"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", {
                "i-icon-park-outline:click": "",
                "mr-1": "",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(options).spotlight?.disableHelp) {
        _push(ssrRenderComponent(MenuHelp, {
          "is-popped-up": isMenuHelpPoppedUp.value,
          "onUpdate:isPoppedUp": ($event) => isMenuHelpPoppedUp.value = $event,
          "menu-title-element-ref": menuTitleElementRef.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 text-md mb-1 font-semibold${_scopeId}>${ssrInterpolate(unref(t)("spotlight.title"))}</h4><p text="sm" mb-2 max-w-100${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(t)("spotlight.titleHelpMessage"))}</span></p><div space-y-2 class="VPNolebaseEnhancedReadabilitiesMenu"${_scopeId}><div text="sm" bg="$vp-nolebase-enhanced-readabilities-menu-background-color" max-w-100 rounded-xl p-3${_scopeId}><h5 text="sm" mb-2${_scopeId}><span mr-1 font-bold${_scopeId}>ON</span><span font-semibold${_scopeId}>${ssrInterpolate(unref(t)("spotlight.optionOn"))}</span></h5><span${_scopeId}>${ssrInterpolate(unref(t)("spotlight.optionOnHelpMessage"))}</span></div><div text="sm" bg="$vp-nolebase-enhanced-readabilities-menu-background-color" max-w-100 rounded-xl p-3${_scopeId}><h5 text="sm" mb-2${_scopeId}><span mr-1 font-bold${_scopeId}>OFF</span><span font-semibold${_scopeId}>${ssrInterpolate(unref(t)("spotlight.optionOff"))}</span></h5><span${_scopeId}>${ssrInterpolate(unref(t)("spotlight.optionOffHelpMessage"))}</span></div></div>`);
            } else {
              return [
                createVNode("h4", {
                  "text-md": "",
                  "mb-1": "",
                  "font-semibold": ""
                }, toDisplayString(unref(t)("spotlight.title")), 1),
                createVNode("p", {
                  text: "sm",
                  "mb-2": "",
                  "max-w-100": ""
                }, [
                  createVNode("span", null, toDisplayString(unref(t)("spotlight.titleHelpMessage")), 1)
                ]),
                createVNode("div", {
                  "space-y-2": "",
                  class: "VPNolebaseEnhancedReadabilitiesMenu"
                }, [
                  createVNode("div", {
                    text: "sm",
                    bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                    "max-w-100": "",
                    "rounded-xl": "",
                    "p-3": ""
                  }, [
                    createVNode("h5", {
                      text: "sm",
                      "mb-2": ""
                    }, [
                      createVNode("span", {
                        "mr-1": "",
                        "font-bold": ""
                      }, "ON"),
                      createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("spotlight.optionOn")), 1)
                    ]),
                    createVNode("span", null, toDisplayString(unref(t)("spotlight.optionOnHelpMessage")), 1)
                  ]),
                  createVNode("div", {
                    text: "sm",
                    bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                    "max-w-100": "",
                    "rounded-xl": "",
                    "p-3": ""
                  }, [
                    createVNode("h5", {
                      text: "sm",
                      "mb-2": ""
                    }, [
                      createVNode("span", {
                        "mr-1": "",
                        "font-bold": ""
                      }, "OFF"),
                      createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("spotlight.optionOff")), 1)
                    ]),
                    createVNode("span", null, toDisplayString(unref(t)("spotlight.optionOffHelpMessage")), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(NuInputHighlight), {
        active: isMenuHelpPoppedUp.value,
        class: "rounded-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$i), {
              modelValue: unref(spotlightToggledOn),
              "onUpdate:modelValue": ($event) => isRef(spotlightToggledOn) ? spotlightToggledOn.value = $event : null,
              bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
              text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
              options: fieldOptions.value,
              disabled: disabled.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$i), {
                modelValue: unref(spotlightToggledOn),
                "onUpdate:modelValue": ($event) => isRef(spotlightToggledOn) ? spotlightToggledOn.value = $event : null,
                bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                options: fieldOptions.value,
                disabled: disabled.value
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/Spotlight.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SpotlightStyles",
  __ssrInlineRender: true,
  setup(__props) {
    const options = inject(InjectionKey$1, {});
    const menuTitleElementRef = ref();
    const isMenuHelpPoppedUp = ref(false);
    const disabled = ref(false);
    const isTouchScreen = useMediaQuery("(pointer: coarse)");
    const spotlightToggledOn = useStorage(SpotlightToggledStorageKey, options.spotlight?.defaultToggle || false);
    const spotlightStyle = useStorage(SpotlightStylesStorageKey, options.spotlight?.defaultStyle || SpotlightStyle.Aside);
    const { t } = useI18n$1();
    const fieldOptions = computed(() => [
      {
        value: SpotlightStyle.Under,
        title: t("spotlight.styles.optionUnder"),
        ariaLabel: t("spotlight.styles.optionUnderAriaLabel"),
        icon: "i-icon-park-outline:align-text-left-one",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"
      },
      {
        value: SpotlightStyle.Aside,
        title: t("spotlight.styles.optionAside"),
        ariaLabel: t("spotlight.styles.optionAsideAriaLabel"),
        icon: "i-icon-park-outline:align-left-one",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"
      }
    ]);
    onMounted(() => {
      disabled.value = isTouchScreen.value;
    });
    watch(isTouchScreen, () => {
      disabled.value = isTouchScreen.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(spotlightToggledOn)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          "space-y-2": "",
          role: "radiogroup",
          class: "VPNolebaseEnhancedReadabilitiesSpotlightStyles"
        }, _attrs))} data-v-0eb84704><div relative flex items-center data-v-0eb84704>`);
        _push(ssrRenderComponent(MenuTitle, {
          title: unref(t)("spotlight.styles.title"),
          "aria-label": unref(t)("spotlight.styles.titleAriaLabel") || unref(t)("spotlight.styles.title"),
          disabled: disabled.value,
          flex: "1",
          "pr-4": ""
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span i-icon-park-outline:click mr-1 aria-hidden="true" data-v-0eb84704${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  "i-icon-park-outline:click": "",
                  "mr-1": "",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (!unref(options).spotlight?.disableHelp) {
          _push(ssrRenderComponent(MenuHelp, {
            "is-popped-up": isMenuHelpPoppedUp.value,
            "onUpdate:isPoppedUp": ($event) => isMenuHelpPoppedUp.value = $event,
            "menu-title-element-ref": menuTitleElementRef.value
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h4 text-md mb-1 font-semibold data-v-0eb84704${_scopeId}>${ssrInterpolate(unref(t)("spotlight.styles.title"))}</h4><p text="sm" mb-2 max-w-100 data-v-0eb84704${_scopeId}><span data-v-0eb84704${_scopeId}>${ssrInterpolate(unref(t)("spotlight.styles.titleHelpMessage"))}</span></p><div space-y-2 class="VPNolebaseEnhancedReadabilitiesMenu" data-v-0eb84704${_scopeId}><div text="sm" bg="$vp-nolebase-enhanced-readabilities-menu-background-color" max-w-100 rounded-xl p-3 data-v-0eb84704${_scopeId}><h5 text="sm" mb-2 data-v-0eb84704${_scopeId}><span i-icon-park-outline:align-text-left-one mr-1 data-v-0eb84704${_scopeId}></span><span font-semibold data-v-0eb84704${_scopeId}>${ssrInterpolate(unref(t)("spotlight.styles.optionUnder"))}</span></h5><span data-v-0eb84704${_scopeId}>${ssrInterpolate(unref(t)("spotlight.styles.optionUnderHelpMessage"))}</span></div><div text="sm" bg="$vp-nolebase-enhanced-readabilities-menu-background-color" max-w-100 rounded-xl p-3 data-v-0eb84704${_scopeId}><h5 text="sm" mb-2 data-v-0eb84704${_scopeId}><span i-icon-park-outline:align-left-one mr-1 data-v-0eb84704${_scopeId}></span><span font-semibold data-v-0eb84704${_scopeId}>${ssrInterpolate(unref(t)("spotlight.styles.optionAside"))}</span></h5><span data-v-0eb84704${_scopeId}>${ssrInterpolate(unref(t)("spotlight.styles.optionAsideHelpMessage"))}</span></div></div>`);
              } else {
                return [
                  createVNode("h4", {
                    "text-md": "",
                    "mb-1": "",
                    "font-semibold": ""
                  }, toDisplayString(unref(t)("spotlight.styles.title")), 1),
                  createVNode("p", {
                    text: "sm",
                    "mb-2": "",
                    "max-w-100": ""
                  }, [
                    createVNode("span", null, toDisplayString(unref(t)("spotlight.styles.titleHelpMessage")), 1)
                  ]),
                  createVNode("div", {
                    "space-y-2": "",
                    class: "VPNolebaseEnhancedReadabilitiesMenu"
                  }, [
                    createVNode("div", {
                      text: "sm",
                      bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                      "max-w-100": "",
                      "rounded-xl": "",
                      "p-3": ""
                    }, [
                      createVNode("h5", {
                        text: "sm",
                        "mb-2": ""
                      }, [
                        createVNode("span", {
                          "i-icon-park-outline:align-text-left-one": "",
                          "mr-1": ""
                        }),
                        createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("spotlight.styles.optionUnder")), 1)
                      ]),
                      createVNode("span", null, toDisplayString(unref(t)("spotlight.styles.optionUnderHelpMessage")), 1)
                    ]),
                    createVNode("div", {
                      text: "sm",
                      bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                      "max-w-100": "",
                      "rounded-xl": "",
                      "p-3": ""
                    }, [
                      createVNode("h5", {
                        text: "sm",
                        "mb-2": ""
                      }, [
                        createVNode("span", {
                          "i-icon-park-outline:align-left-one": "",
                          "mr-1": ""
                        }),
                        createVNode("span", { "font-semibold": "" }, toDisplayString(unref(t)("spotlight.styles.optionAside")), 1)
                      ]),
                      createVNode("span", null, toDisplayString(unref(t)("spotlight.styles.optionAsideHelpMessage")), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(unref(NuInputHighlight), {
          active: isMenuHelpPoppedUp.value,
          class: "rounded-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$i), {
                modelValue: unref(spotlightStyle),
                "onUpdate:modelValue": ($event) => isRef(spotlightStyle) ? spotlightStyle.value = $event : null,
                bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                options: fieldOptions.value,
                disabled: disabled.value
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$i), {
                  modelValue: unref(spotlightStyle),
                  "onUpdate:modelValue": ($event) => isRef(spotlightStyle) ? spotlightStyle.value = $event : null,
                  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                  text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
                  options: fieldOptions.value,
                  disabled: disabled.value
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/SpotlightStyles.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SpotlightStyles = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-0eb84704"]]);
const VPFlyout = _VPFlyout;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const options = inject(InjectionKey$1, {});
    const mounted = useMounted();
    const { t } = useI18n$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VPFlyout), mergeProps({
        icon: "i-icon-park-outline:book-open",
        class: "VPNolebaseEnhancedReadabilitiesMenu VPNolebaseEnhancedReadabilitiesMenuFlyout",
        "aria-label": unref(t)("title.title"),
        role: "menuitem"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(mounted)) {
              _push2(`<div${ssrRenderAttr("aria-label", unref(t)("title.title"))} min-w-64 p-2 space-y-2${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$d, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$c, null, null, _parent2, _scopeId));
              if (!unref(options).spotlight?.disabled) {
                _push2(ssrRenderComponent(_sfc_main$9, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (!unref(options).spotlight?.disabled) {
                _push2(ssrRenderComponent(SpotlightStyles, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(mounted) ? (openBlock(), createBlock("div", {
                key: 0,
                "aria-label": unref(t)("title.title"),
                "min-w-64": "",
                "p-2": "",
                "space-y-2": ""
              }, [
                createVNode(_sfc_main$d),
                createVNode(_sfc_main$b),
                createVNode(_sfc_main$c),
                !unref(options).spotlight?.disabled ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : createCommentVNode("", true),
                !unref(options).spotlight?.disabled ? (openBlock(), createBlock(SpotlightStyles, { key: 1 })) : createCommentVNode("", true)
              ], 8, ["aria-label"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/Menu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ScreenLayoutSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n$1();
    const fieldOptions = computed(() => [
      {
        value: LayoutMode.FullWidth,
        title: t("layoutSwitch.optionFullWidth"),
        ariaLabel: t("layoutSwitch.optionFullWidthAriaLabel"),
        icon: "i-icon-park-outline:full-screen-one",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: LayoutMode.SidebarWidthAdjustableOnly,
        title: t("layoutSwitch.optionSidebarWidthAdjustableOnly"),
        ariaLabel: t("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),
        icon: "i-icon-park-outline:full-screen-two",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: LayoutMode.BothWidthAdjustable,
        title: t("layoutSwitch.optionBothWidthAdjustable"),
        ariaLabel: t("layoutSwitch.optionBothWidthAdjustableAriaLabel"),
        icon: "i-icon-park-outline:full-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: LayoutMode.Original,
        title: t("layoutSwitch.optionOriginalWidth"),
        ariaLabel: t("layoutSwitch.optionOriginalWidthAriaLabel"),
        icon: "i-icon-park-outline:overall-reduction",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ "space-y-2": "" }, _attrs))}>`);
      _push(ssrRenderComponent(MenuTitle, {
        title: unref(t)("layoutSwitch.title"),
        "aria-label": unref(t)("layoutSwitch.titleAriaLabel") || unref(t)("layoutSwitch.title"),
        disabled: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { ariaHidden: "true" }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { ariaHidden: "true" })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div border="1 red/50 solid" bg="red/30" flex items-center rounded-lg p-2 opacity-50><span text-xs>${ssrInterpolate(unref(t)("layoutSwitch.titleScreenNavWarningMessage"))}</span></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$i), {
        bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
        text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
        options: fieldOptions.value,
        disabled: ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenLayoutSwitch.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ScreenSpotlight",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n$1();
    const fieldOptions = computed(() => [
      {
        title: t("spotlight.optionOn"),
        ariaLabel: t("spotlight.optionOnAriaLabel"),
        value: true,
        text: "ON",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      },
      {
        title: t("spotlight.optionOff"),
        ariaLabel: t("spotlight.optionOffAriaLabel"),
        value: false,
        text: "OFF",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ "space-y-2": "" }, _attrs))}>`);
      _push(ssrRenderComponent(MenuTitle, {
        title: unref(t)("spotlight.title"),
        "aria-label": unref(t)("spotlight.titleAriaLabel") || unref(t)("spotlight.title"),
        disabled: ""
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span i-icon-park-outline:click mr-1 aria-hidden="true"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", {
                "i-icon-park-outline:click": "",
                "mr-1": "",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div border="1 red/50 solid" bg="red/30" flex items-center rounded-lg p-2 opacity-50><span text-xs>${ssrInterpolate(unref(t)("spotlight.titleScreenNavWarningMessage"))}</span></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$i), {
        bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
        text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
        options: fieldOptions.value,
        disabled: ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenSpotlight.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const mounted = useMounted();
    const { t } = useI18n$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(mounted)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          "space-y-2": "",
          class: "VPNolebaseEnhancedReadabilitiesMenu"
        }, _attrs))}>`);
        _push(ssrRenderComponent(MenuTitle, {
          title: unref(t)("title.title"),
          "aria-label": unref(t)("title.titleAriaLabel") || unref(t)("title.title")
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span i-icon-park-outline:book-open mr-1 aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  "i-icon-park-outline:book-open": "",
                  "mr-1": "",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div flex="~ col" pl-4 space-y-2>`);
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const components$1 = {
  NolebaseEnhancedReadabilitiesMenu: _sfc_main$7,
  NolebaseEnhancedReadabilitiesScreenMenu: _sfc_main$4,
  NolebaseEnhancedReadabilitiesLayoutSwitch: _sfc_main$d,
  NolebaseEnhancedReadabilitiesScreenLayoutSwitch: _sfc_main$6,
  NolebaseEnhancedReadabilitiesSpotlight: _sfc_main$9,
  NolebaseEnhancedReadabilitiesSpotlightStyles: SpotlightStyles,
  NolebaseEnhancedReadabilitiesScreenSpotlight: _sfc_main$5
};
const NolebaseEnhancedReadabilitiesPlugin = {
  install(app, options) {
    if (typeof options !== "undefined" && typeof options === "object")
      app.provide(InjectionKey$1, options);
    for (const key of Object.keys(components$1))
      app.component(key, components$1[key]);
  }
};
var data$2 = {
  changelog: {
    title: "Changelog",
    titleId: "changelog",
    noData: "No recent changes",
    lastEdited: "Last edited {{daysAgo}}",
    lastEditedDateFnsLocaleName: "enUS",
    viewFullHistory: "View full history",
    committedOn: " on {{date}}"
  },
  contributors: {
    title: "Contributors",
    titleId: "contributors",
    noData: "No contributors"
  }
};
data$2.changelog;
data$2.contributors;
var data$1 = {
  changelog: {
    title: "История изменений",
    titleId: "история-изменений",
    noData: "Нет изменений",
    lastEdited: "Последнее редактирование {{daysAgo}}",
    lastEditedDateFnsLocaleName: "ru",
    viewFullHistory: "Показать историю",
    committedOn: " от {{date}}"
  },
  contributors: {
    title: "Авторы",
    titleId: "авторы",
    noData: "Нет информации"
  }
};
data$1.changelog;
data$1.contributors;
var data = {
  changelog: {
    title: "页面历史",
    titleId: "页面历史",
    noData: "暂无最近变更历史",
    lastEdited: "最后编辑于 {{daysAgo}}",
    lastEditedDateFnsLocaleName: "zhCN",
    viewFullHistory: "查看完整历史",
    committedOn: " 于 {{date}}"
  },
  contributors: {
    title: "贡献者",
    titleId: "贡献者",
    noData: "暂无相关贡献者"
  }
};
data.changelog;
data.contributors;
const defaultLocales = {
  "en-US": data$2,
  "en": data$2,
  "ru-RU": data$1,
  "ru": data$1,
  "zh-CN": data,
  "zh-Hans": data,
  "zh": data
};
const InjectionKey = Symbol("vitepress-nolebase-git-changelog");
const defaultNumCommitHashLetters = 7;
const defaultOptions = {
  numCommitHashLetters: defaultNumCommitHashLetters,
  locales: defaultLocales
};
const useI18n = createI18n(InjectionKey, defaultLocales, data$2);
function renderMarkdown(markdownText = "") {
  const htmlText = markdownText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/^### (.*$)/gm, "<h3>$1</h3>").replace(/^## (.*$)/gm, "<h2>$1</h2>").replace(/^# (.*$)/gm, "<h1>$1</h1>").replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>").replace(/\*\*(.*)\*\*/g, "<b>$1</b>").replace(/\*(.*)\*/g, "<i>$1</i>").replace(/!\[(.*?)\]\((.*?)\)/g, "<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/g, `<a class="no-icon" href='$2'>$1</a>`).replace(/`(.*?)`/g, "<code>$1</code>").replace(/\n$/gm, "<br />");
  return htmlText.trim();
}
function renderCommitMessage(repoLink, msg) {
  return renderMarkdown(msg).replace(/#(\d+)/g, `<a class="no-icon" href='${repoLink}/issues/$1'>#$1</a>`);
}
function formatDistanceToNowFromValue(value, localeName = "enUS") {
  try {
    return formatDistanceToNow(toDate(value), {
      locale: DateFnsLocales[localeName] || "enUS",
      addSuffix: true
    });
  } catch {
    return value.toLocaleDateString();
  }
}
function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CommitRegularLine",
  __ssrInlineRender: true,
  props: {
    commit: {}
  },
  setup(__props) {
    const props = __props;
    const options = defu(inject(InjectionKey, {}), defaultOptions);
    const { t } = useI18n();
    const { lang } = useData();
    const locale = computed(() => {
      if (!options.locales || typeof options.locales === "undefined")
        return defaultLocales[lang.value] || data$2 || {};
      return options.locales[lang.value] || data$2 || {};
    });
    function formatCommittedOn(timestamp) {
      const date = toDate(timestamp);
      let dateStr = date.toLocaleDateString();
      if (options.commitsRelativeTime) {
        dateStr = formatDistanceToNowFromValue(date, locale.value.changelog?.lastEditedDateFnsLocaleName || lang.value || "enUS");
      }
      return t("committedOn", { props: { date: dateStr }, omitEmpty: true }) || t("changelog.committedOn", { props: { date: dateStr } });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<!--[--><div class="i-octicon:git-commit-16 m-auto rotate-90 transform op-30" data-v-c94a2172></div><div flex gap-1 align-baseline data-v-c94a2172><a${ssrRenderAttr("href", props.commit.hash_url || `${props.commit.repo_url}/commit/${props.commit.hash}`)} target="_blank" class="no-icon" data-v-c94a2172><code class="text-xs text-$vp-c-brand-1 hover:text-$vp-c-brand-1" transition="color ease-in-out" duration-200 data-v-c94a2172>${ssrInterpolate(_ctx.commit.hash.slice(0, unref(options).numCommitHashLetters || unref(defaultNumCommitHashLetters)))}</code></a><span data-v-c94a2172>-</span><span data-v-c94a2172><span class="text-sm &lt;sm:text-xs" data-v-c94a2172>${unref(renderCommitMessage)(_ctx.commit.repo_url || "https://github.com/example/example", _ctx.commit.message) ?? ""}</span>`);
      if (unref(options).displayAuthorsInsideCommitLine) {
        _push(`<span class="my-1 ml-3 gap-1" data-v-c94a2172><!--[-->`);
        ssrRenderList(_ctx.commit.authors, (a) => {
          _push(`<!--[-->`);
          if (typeof a.url !== "undefined") {
            _push(`<a${ssrRenderAttr("href", a.url)} class="no-icon" data-v-c94a2172><img${ssrRenderAttr("src", a.avatarUrl)}${ssrRenderAttr("alt", `The avatar of contributor named as ${a.name}`)} class="vp-nolebase-git-changelog-commit-avatar inline-block h-6 w-6 rounded-full v-middle" data-v-c94a2172></a>`);
          } else {
            _push(`<img${ssrRenderAttr("src", a.avatarUrl)}${ssrRenderAttr("alt", `The avatar of contributor named as ${a.name}`)} class="vp-nolebase-git-changelog-commit-avatar inline-block h-6 w-6 rounded-full v-middle" data-v-c94a2172>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs op-50"${ssrRenderAttr("title", unref(toDate)(_ctx.commit.date_timestamp).toString())} data-v-c94a2172${_scopeId}>${ssrInterpolate(formatCommittedOn(_ctx.commit.date_timestamp))}</span>`);
          } else {
            return [
              createVNode("span", {
                class: "text-xs op-50",
                title: unref(toDate)(_ctx.commit.date_timestamp).toString()
              }, toDisplayString(formatCommittedOn(_ctx.commit.date_timestamp)), 9, ["title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-git-changelog/dist/client/components/CommitRegularLine.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CommitRegularLine = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c94a2172"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommitTagLine",
  __ssrInlineRender: true,
  props: {
    commit: {}
  },
  setup(__props) {
    const props = __props;
    const options = defu(inject(InjectionKey, {}), defaultOptions);
    const { t } = useI18n();
    const { lang } = useData();
    const locale = computed(() => {
      if (!options.locales || typeof options.locales === "undefined")
        return defaultLocales[lang.value] || data$2 || {};
      return options.locales[lang.value] || data$2 || {};
    });
    function formatCommittedOn(timestamp) {
      const date = toDate(timestamp);
      let dateStr = date.toLocaleDateString();
      if (options.commitsRelativeTime) {
        dateStr = formatDistanceToNowFromValue(date, locale.value.changelog?.lastEditedDateFnsLocaleName || lang.value || "enUS");
      }
      return t("committedOn", { props: { date: dateStr }, omitEmpty: true }) || t("changelog.committedOn", { props: { date: dateStr } });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<!--[--><div class="m-auto h-[1.75em] w-[1.75em] inline-flex rounded-full bg-gray-400/10 opacity-90"><div class="i-octicon:rocket-16 !h-[50%] !min-h-[50%] !min-w-[50%] !w-[50%]" m="auto"></div></div><div flex items-center gap-1>`);
      if (props.commit.tags && props.commit.tags.length === 1) {
        _push(`<a${ssrRenderAttr("href", props.commit.release_tag_url)} target="_blank" class="no-icon"><code class="font-bold">${ssrInterpolate(props.commit.tag)}</code></a>`);
      } else {
        _push(`<span><!--[-->`);
        ssrRenderList(props.commit.tags, (tag, index) => {
          _push(`<a${ssrRenderAttr("href", props.commit.release_tags_url?.[index])} target="_blank">&gt; <code class="font-bold">${ssrInterpolate(tag)}</code></a>`);
        });
        _push(`<!--]--></span>`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs opacity-50"${ssrRenderAttr("title", unref(toDate)(props.commit.date_timestamp).toString())}${_scopeId}>${ssrInterpolate(formatCommittedOn(props.commit.date_timestamp))}</span>`);
          } else {
            return [
              createVNode("span", {
                class: "text-xs opacity-50",
                title: unref(toDate)(props.commit.date_timestamp).toString()
              }, toDisplayString(formatCommittedOn(props.commit.date_timestamp)), 9, ["title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-git-changelog/dist/client/components/CommitTagLine.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const changelog = { "commits": [{ "paths": ["api-examples.md", "index.md", "docs/development/CONTRIBUTE.md", "docs/development/vector_db_usage_guide.md", "docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md", "docs/guides/model_configuration_guide.md", "docs/development/architecture/memory_system_design_v3.md", "docs/development/architecture/PERMISSION_SYSTEM.md", "docs/development/plugins/action-components.md", "docs/development/plugins/configuration-guide.md", "docs/development/plugins/dependency-management.md", "docs/development/plugins/event-system-guide.md", "docs/development/plugins/index.md", "docs/development/plugins/manifest-guide.md", "docs/development/plugins/PLUS_COMMAND_GUIDE.md", "docs/development/plugins/quick-start.md", "docs/development/plugins/tool_guide.md", "docs/development/plugins/api/adapter-command-api.md", "docs/development/plugins/api/chat-api.md", "docs/development/plugins/api/component-manage-api.md", "docs/development/plugins/api/config-api.md", "docs/development/plugins/api/database-api.md", "docs/development/plugins/api/emoji-api.md", "docs/development/plugins/api/generator-api.md", "docs/development/plugins/api/llm-api.md", "docs/development/plugins/api/logging-api.md", "docs/development/plugins/api/message-api.md", "docs/development/plugins/api/person-api.md", "docs/development/plugins/api/plugin-manage-api.md", "docs/development/plugins/api/send-api.md", "docs/development/plugins/api/tool-api.md"], "hash": "0e413d8e7c77d50f3cda01e1e40700c19627ce4e", "date_timestamp": 1756438786e3, "message": "孩子不懂事乱提交着玩的", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/0e413d8e7c77d50f3cda01e1e40700c19627ce4e" }, { "paths": ["index.md", "docs/guides/bot_config_guide.md", "docs/guides/index.md"], "hash": "99385848f2336285da490b9564be196818bbe333", "date_timestamp": 1758354792e3, "message": "feat(docs): 引入指南索引页面并添加自定义卡片组件", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/99385848f2336285da490b9564be196818bbe333" }, { "paths": ["index.md"], "hash": "54c047476b6ad73f378138055511c31a333a0dcb", "date_timestamp": 1757730742e3, "message": "docs: 移动 logo 文件到根目录并更新引用路径", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/54c047476b6ad73f378138055511c31a333a0dcb" }, { "paths": ["index.md"], "hash": "222aacd5f45fa9294239e3ba2894126034cc40c8", "date_timestamp": 1757726343e3, "message": "docs: 修复 logo 图片路径", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/222aacd5f45fa9294239e3ba2894126034cc40c8" }, { "paths": ["index.md", "docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md", "docs/guides/model_configuration_guide.md"], "hash": "696ae9a4137601453fe3fd3cce7902697a937945", "date_timestamp": 1756561767e3, "message": "docs(guide): 修复文档中的无效链接和格式", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/696ae9a4137601453fe3fd3cce7902697a937945" }, { "paths": ["README.md", "docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_android.md"], "hash": "761f79eb3be856d20e6be54e196ef207ecad2785", "date_timestamp": 175662032e4, "message": "docs(config): add QQ group link and android deployment guide", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/761f79eb3be856d20e6be54e196ef207ecad2785" }, { "paths": ["README.md"], "hash": "23b68923a904e615691d65d994844fc2d925772b", "date_timestamp": 1756532684e3, "message": "add readme.md", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/23b68923a904e615691d65d994844fc2d925772b" }, { "paths": ["development/index.md", "docs/development/add_new_vector_db_guide.md", "docs/development/development_guidelines.md", "docs/development/index.md", "docs/development/vector_db_usage_guide.md", "docs/guides/deployment_guide.md", "docs/guides/how-to-ask-questions-efficiently.md", "docs/guides/how-to-ask-questions-the-smart-way.md", "docs/guides/mmc_deploy_linux.md", "docs/development/architecture/memory_system_design_v3.md", "docs/development/architecture/PERMISSION_SYSTEM.md", "docs/development/architecture/tech_stack_and_chat_flow.md", "docs/development/plugins/action-components.md", "docs/development/plugins/command-scope.md", "docs/development/plugins/configuration-guide.md", "docs/development/plugins/dependency-management.md", "docs/development/plugins/event-system-guide.md", "docs/development/plugins/index.md", "docs/development/plugins/manifest-guide.md", "docs/development/plugins/PLUS_COMMAND_GUIDE.md", "docs/development/plugins/quick-start.md", "docs/development/plugins/tool_guide.md", "docs/development/plugins/api/adapter-command-api.md", "docs/development/plugins/api/chat-api.md", "docs/development/plugins/api/component-manage-api.md", "docs/development/plugins/api/config-api.md", "docs/development/plugins/api/database-api.md", "docs/development/plugins/api/emoji-api.md", "docs/development/plugins/api/generator-api.md", "docs/development/plugins/api/llm-api.md", "docs/development/plugins/api/logging-api.md", "docs/development/plugins/api/message-api.md", "docs/development/plugins/api/person-api.md", "docs/development/plugins/api/plugin-manage-api.md", "docs/development/plugins/api/send-api.md", "docs/development/plugins/api/tool-api.md"], "hash": "d7d4033049e0268e81a1cc58aeec2a3f2fe603b0", "date_timestamp": 1756555974e3, "message": "docs(sidebar): 重构文档侧边栏以支持分类导航", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/d7d4033049e0268e81a1cc58aeec2a3f2fe603b0" }, { "paths": ["docs/development/add_new_vector_db_guide.md", "docs/development/CONTRIBUTE.md", "docs/development/vector_db_usage_guide.md", "docs/development/architecture/tech_stack_and_chat_flow.md"], "hash": "5f187acf1a206923dc1f7ebe594e480867df40ca", "date_timestamp": 1756452563e3, "message": "docs(config): 完善文档导航和贡献者列表", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/5f187acf1a206923dc1f7ebe594e480867df40ca" }, { "paths": ["docs/development/CONTRIBUTE.md", "docs/development/plugins/event-system-guide.md"], "hash": "86853b444e7c227a178a9983593cc06b9fd9a97c", "date_timestamp": 1758280545e3, "message": "docs(event-system): enhance guide with auth, usage patterns, and details", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/86853b444e7c227a178a9983593cc06b9fd9a97c" }, { "paths": ["docs/development/development_guidelines.md", "docs/guides/how-to-ask-questions-efficiently.md", "docs/guides/how-to-ask-questions-the-smart-way.md"], "hash": "aa23cde0411b8f1eba5ba8a5d91f29f65abb3645", "date_timestamp": 175655374e4, "message": "docs(config): 新增开发准则和提问的智慧文档链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/aa23cde0411b8f1eba5ba8a5d91f29f65abb3645" }, { "paths": ["docs/development/index.md", "docs/guides/permission_usage.md"], "hash": "02485a6428e1ffad0ef04eb496564efe23859941", "date_timestamp": 1758369e6, "message": "docs(guide): 重构权限使用指南，强调 Master 用户配置", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/02485a6428e1ffad0ef04eb496564efe23859941" }, { "paths": ["docs/development/index.md"], "hash": "adf9dd1e3482d7840afeb4f34882dd9a889ae6f8", "date_timestamp": 1758368626e3, "message": "docs(development): 重构开发文档首页，提升引导体验", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/adf9dd1e3482d7840afeb4f34882dd9a889ae6f8" }, { "paths": ["docs/development/vector_db_usage_guide.md", "docs/development/plugins/index.md", "docs/development/plugins/quick-start.md", "docs/development/plugins/api/llm-api.md", "docs/development/plugins/api/tool-api.md"], "hash": "3b07d5399319f50995be9ee5245d81544e98024b", "date_timestamp": 1756439704e3, "message": "修改了一些四调的链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/3b07d5399319f50995be9ee5245d81544e98024b" }, { "paths": ["docs/guides/about-MoFox_Bot-common-error-analysis&help.md"], "hash": "fd34b92c5616bfce02dc6a92a7509d96a499c217", "date_timestamp": 175777647e4, "message": "1.关于已知内容修复", "authors": ["qukulei-342"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/fd34b92c5616bfce02dc6a92a7509d96a499c217" }, { "paths": ["docs/guides/about-MoFox_Bot-common-error-analysis&help.md"], "hash": "3389610d2eff2e3ec74979bbcb37336808ef677a", "date_timestamp": 1757775279e3, "message": "1.关于已知内容修复 2.加上了模型调用的注释和教程 4.一定一定要输入“同意啊喵” 5.第五人格启动！ 6.我们移除了“herobrine”", "authors": ["qukulei-342"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/3389610d2eff2e3ec74979bbcb37336808ef677a" }, { "paths": ["docs/guides/about-MoFox_Bot-common-error-analysis&help.md"], "hash": "13fb88fce1a1e984b56b98b2129e7f8f09175d74", "date_timestamp": 1757770727e3, "message": "使用了正确的md格式喵", "authors": ["qukulei-342"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/13fb88fce1a1e984b56b98b2129e7f8f09175d74" }, { "paths": ["docs/guides/about-MoFox_Bot-common-error-analysis&help.md"], "hash": "790809ebe9087c8ed6f6d9fbe6a5283bb5e6e3ec", "date_timestamp": 1757769631e3, "message": "增加了常见问题列表喵", "authors": ["qukulei-342"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/790809ebe9087c8ed6f6d9fbe6a5283bb5e6e3ec" }, { "paths": ["docs/guides/bot_config_guide.md"], "hash": "de522db9baed438aef592122c2b8d37b976e5445", "date_timestamp": 1758374899e3, "message": "docs(guides): 重构机器人配置指南并移除预设", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/de522db9baed438aef592122c2b8d37b976e5445" }, { "paths": ["docs/guides/bot_config_guide.md"], "hash": "ad87bdb6708614e9f65ea5e2e64581e8ca37729a", "date_timestamp": 1757151116e3, "message": "docs(guide):全面重构和更新机器人配置文件指南", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/ad87bdb6708614e9f65ea5e2e64581e8ca37729a" }, { "paths": ["docs/guides/bot_config_guide.md"], "hash": "b2d2a047c6445118b22c91caf614fd85f06c56b2", "date_timestamp": 1756621653e3, "message": "docs(config): 完善`delta_sigma`参数的说明", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/b2d2a047c6445118b22c91caf614fd85f06c56b2" }, { "paths": ["docs/guides/bot_config_guide.md", "docs/guides/video_recognition.md"], "hash": "831c7f6077a4720baeaf3cd71dc3fd0df21c543d", "date_timestamp": 1756561376e3, "message": "docs(guide): move video recognition document into guides directory", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/831c7f6077a4720baeaf3cd71dc3fd0df21c543d" }, { "paths": ["docs/guides/bot_config_guide.md", "docs/guides/video_recognition.md"], "hash": "abd9cd6b444c2de06079ab78d042749a8d078cef", "date_timestamp": 1756560918e3, "message": "docs(guide): 完善视频识别功能文档", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/abd9cd6b444c2de06079ab78d042749a8d078cef" }, { "paths": ["docs/guides/bot_config_guide.md", "docs/development/plugins/api/database-api.md"], "hash": "1ff9e02b27174be659af273fe14e6b075ad0763a", "date_timestamp": 1756529604e3, "message": "docs: 更新文档内容和配置", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/1ff9e02b27174be659af273fe14e6b075ad0763a" }, { "paths": ["docs/guides/bot_config_guide.md", "docs/development/plugins/action-components.md", "docs/development/plugins/command-scope.md", "docs/development/plugins/PLUS_COMMAND_GUIDE.md", "docs/development/plugins/quick-start.md", "docs/development/plugins/api/config-api.md"], "hash": "84aa2feac740790258b31a57cf736c96c3ab9250", "date_timestamp": 1756466646e3, "message": "docs(plugins): 完善命令指南并统一机器人名称", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/84aa2feac740790258b31a57cf736c96c3ab9250" }, { "paths": ["docs/guides/bot_config_guide.md", "docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md", "docs/guides/model_configuration_guide.md", "docs/guides/quick_start_model_config.md"], "hash": "905784054bb057aa7afa758bc5d10c498e5fe09c", "date_timestamp": 1756445243e3, "message": "docs(guides): 重构模型配置指南为快速上手和进阶版本", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/905784054bb057aa7afa758bc5d10c498e5fe09c" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "dab954aebb8d7957405d5e0f15a94adb8ca4bfcc", "date_timestamp": 1758372193e3, "message": `Revert "Merge branch 'master' of https://github.com/sunbiz1024/MoFox-Bot-Docs"`, "authors": ["subiz"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/dab954aebb8d7957405d5e0f15a94adb8ca4bfcc" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "5cfaf4e5aa214eb508c19bb5c865f9c007edb331", "date_timestamp": 175836008e4, "message": "安装uv使用华为云镜像源喵，防止安装失败喵", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/5cfaf4e5aa214eb508c19bb5c865f9c007edb331" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md", "docs/guides/model_configuration_guide.md"], "hash": "ca336e66a97f696358a0198dec6e6cc34527f21f", "date_timestamp": 1758356417e3, "message": "docs(guide): 重写模型配置指南以面向高级用户", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/ca336e66a97f696358a0198dec6e6cc34527f21f" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "4df6e3236b5371cfb8fc915e2bd09f075717ad35", "date_timestamp": 17583124e5, "message": "修正了napcatqq的文档地址喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/4df6e3236b5371cfb8fc915e2bd09f075717ad35" }, { "paths": ["docs/guides/deployment_guide.md"], "hash": "2c4cc81c3bf6151225f9906c65d2a7840da98c6b", "date_timestamp": 1758290342e3, "message": "chore: 移除 Giscus 评论插件及相关特效", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/2c4cc81c3bf6151225f9906c65d2a7840da98c6b" }, { "paths": ["docs/guides/deployment_guide.md"], "hash": "b573ee649fc794e3f222c74df4ed6ddf8aac94ef", "date_timestamp": 1758287213e3, "message": "docs(guide): rewrite deployment guide for clarity and ease of use", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/b573ee649fc794e3f222c74df4ed6ddf8aac94ef" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_android.md", "docs/guides/mmc_deploy_linux.md"], "hash": "5b0daa7a0d51d218ab5f11bb6ef804a0be42c753", "date_timestamp": 1757434066e3, "message": "增加了复制.env文件的步骤喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/5b0daa7a0d51d218ab5f11bb6ef804a0be42c753" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "6ace586b10dba6c846654a1a2f3738fe7c133c79", "date_timestamp": 1757220452e3, "message": "docs(guides): 更新部署指南中的项目文件夹名称", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/6ace586b10dba6c846654a1a2f3738fe7c133c79" }, { "paths": ["docs/guides/deployment_guide.md"], "hash": "a59cafbffe0f447d3c6e08f876045168edeed4bc", "date_timestamp": 175674101e4, "message": "将新型hhttps协议改成https协议喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/a59cafbffe0f447d3c6e08f876045168edeed4bc" }, { "paths": ["docs/guides/deployment_guide.md"], "hash": "12a05548ec967cb0bcb01f46f822a85372138e7f", "date_timestamp": 175662078e4, "message": "再次补充了宇宙级免责声明喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/12a05548ec967cb0bcb01f46f822a85372138e7f" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "e426715de56263e0b4cc93fd6ea982b800b8fd93", "date_timestamp": 1756611157e3, "message": "docs(guide): 新增Linux部署指南并简化Windows部署流程", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/e426715de56263e0b4cc93fd6ea982b800b8fd93" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md", "docs/guides/permission_usage.md"], "hash": "4809ce164be38b79f2a0d00b6d6f0c0fff48c007", "date_timestamp": 1756557064e3, "message": "docs(guide): 新增指令权限系统使用教程并修复链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/4809ce164be38b79f2a0d00b6d6f0c0fff48c007" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "fb1e8d2c6567de7e7e445624cf6516ae6dbf1960", "date_timestamp": 1756537169e3, "message": "docs(guide): 更新配置文件路径说明", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/fb1e8d2c6567de7e7e445624cf6516ae6dbf1960" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "43d34660074f623a94dd72a495516f19e5288001", "date_timestamp": 1756536389e3, "message": "docs(guide): 修复部署指南中的模型配置链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/43d34660074f623a94dd72a495516f19e5288001" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "e10f02f05fa0f45e2f3094edfb0bbdba5cef5c3c", "date_timestamp": 1756536326e3, "message": "docs(guide): 修复模型配置指南的链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/e10f02f05fa0f45e2f3094edfb0bbdba5cef5c3c" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md", "docs/guides/quick_start_model_config.md"], "hash": "3e1ce3ce649be67b05f293b7409e448e4f776b14", "date_timestamp": 1756536267e3, "message": "docs(config): 更新模型配置指南并默认使用siliconflow", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/3e1ce3ce649be67b05f293b7409e448e4f776b14" }, { "paths": ["docs/guides/deployment_guide.md", "docs/guides/mmc_deploy_linux.md"], "hash": "da823fa13dc7d056328bf012c870e96dcd9f6721", "date_timestamp": 1756446354e3, "message": "docs(guide): 完善部署指南并增加备选方案", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/da823fa13dc7d056328bf012c870e96dcd9f6721" }, { "paths": ["docs/guides/how-to-ask-questions-the-smart-way.md"], "hash": "cd38730396bca6564e45b88b2e76583bf7cba141", "date_timestamp": 1758355224e3, "message": "docs: 更新部分文案", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/cd38730396bca6564e45b88b2e76583bf7cba141" }, { "paths": ["docs/guides/index.md"], "hash": "d5cf85c683f1c7991e9c9c77ac64fde083ba9588", "date_timestamp": 1758374305e3, "message": "docs(guides): 添加项目起源故事", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/d5cf85c683f1c7991e9c9c77ac64fde083ba9588" }, { "paths": ["docs/guides/index.md"], "hash": "9224b32692297984d3fbe2f06d286b68c8163af7", "date_timestamp": 1758371154e3, "message": "add 拾风", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/9224b32692297984d3fbe2f06d286b68c8163af7" }, { "paths": ["docs/guides/index.md"], "hash": "f8f534b4faeb74bf97abf4c4bcca7a884de65891", "date_timestamp": 1758371054e3, "message": "1.2.3", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/f8f534b4faeb74bf97abf4c4bcca7a884de65891" }, { "paths": ["docs/guides/index.md", "docs/guides/model_configuration_guide.md"], "hash": "21f8c46c2a87b94b1ae6c79168fefe89b43612ba", "date_timestamp": 1758364112e3, "message": "加了一种新卡片", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/21f8c46c2a87b94b1ae6c79168fefe89b43612ba" }, { "paths": ["docs/guides/lpmm_guide.md"], "hash": "276474f2df7b2d26174e74bc5658ee9a161d733c", "date_timestamp": 1757682878e3, "message": "docs(config): 新增 LPMM 知识库指南链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/276474f2df7b2d26174e74bc5658ee9a161d733c" }, { "paths": ["docs/guides/mmc_deploy_android.md"], "hash": "3f30b094bb1d8a18b87dd52f750b100d16a1a713", "date_timestamp": 1758366956e3, "message": "docs(guide): 重构安卓部署指南以适配内置适配器模式", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/3f30b094bb1d8a18b87dd52f750b100d16a1a713" }, { "paths": ["docs/guides/mmc_deploy_android.md", "docs/guides/mmc_deploy_linux.md"], "hash": "54ff67311676431482bc73992fcdceca717788a6", "date_timestamp": 1756619596e3, "message": "新增了安卓部署文档喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/54ff67311676431482bc73992fcdceca717788a6" }, { "paths": ["docs/guides/mmc_deploy_linux.md"], "hash": "0dbbc6248d2a886f72004b46cb42614234d16904", "date_timestamp": 1758346289e3, "message": "docs(guide): 重写 Linux 部署指南以适配内置适配器", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/0dbbc6248d2a886f72004b46cb42614234d16904" }, { "paths": ["docs/guides/mmc_deploy_linux.md"], "hash": "95e0da7d06fc8ac367f90cbacdabd882bb4d87eb", "date_timestamp": 17566206e5, "message": "增加了宇宙级免责声明喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/95e0da7d06fc8ac367f90cbacdabd882bb4d87eb" }, { "paths": ["docs/guides/mmc_deploy_linux.md"], "hash": "ceb631264ebf1d90703f9611524a1644b4056fd9", "date_timestamp": 1756619939e3, "message": "增加了github镜像站选项供网络不好的用户使用", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/ceb631264ebf1d90703f9611524a1644b4056fd9" }, { "paths": ["docs/guides/mmc_deploy_linux.md"], "hash": "991a4c8ec7f7390a7ca7901a489f4c25a3686ab6", "date_timestamp": 1756618128e3, "message": "喵喵~将uv安装方式完善喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/991a4c8ec7f7390a7ca7901a489f4c25a3686ab6" }, { "paths": ["docs/guides/model_configuration_guide.md"], "hash": "f064bbcd11dd4c283425afd6c06fe19cb779ef30", "date_timestamp": 175835666e4, "message": "docs(guide): 修正模型回退示例中的模型版本", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/f064bbcd11dd4c283425afd6c06fe19cb779ef30" }, { "paths": ["docs/guides/model_configuration_guide.md"], "hash": "7c89a00aaf82ccd9791357c3122fa94ee894adc1", "date_timestamp": 1757223074e3, "message": "docs(guides): 更新模型配置指南以支持多api_key轮询", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/7c89a00aaf82ccd9791357c3122fa94ee894adc1" }, { "paths": ["docs/guides/model_config_faq.md"], "hash": "f10519c07bd15f90d243556e90ea180c6f3743fd", "date_timestamp": 1757683291e3, "message": "docs(config): 新增模型配置FAQ链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/f10519c07bd15f90d243556e90ea180c6f3743fd" }, { "paths": ["docs/guides/permission_usage.md"], "hash": "2238d535f35551f89dae67fa013701335d65b51a", "date_timestamp": 1758375616e3, "message": "docs(guides): 完善 Master 用户配置指南并提供示例", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/2238d535f35551f89dae67fa013701335d65b51a" }, { "paths": ["docs/guides/proactive_thinker_guide.md"], "hash": "e4aca40d440c024926250efc830d9a0bf92ce506", "date_timestamp": 1757155788e3, "message": "docs(config): 新增主动思考器介绍文档链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/e4aca40d440c024926250efc830d9a0bf92ce506" }, { "paths": ["docs/guides/quick_start_model_config.md"], "hash": "4dda8b36b7d8171e5c39398839c298476f5c0cc8", "date_timestamp": 175716379e4, "message": "docs(config): 新增planner大脑和小脑选择文档链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/4dda8b36b7d8171e5c39398839c298476f5c0cc8" }, { "paths": ["docs/guides/quick_start_model_config.md"], "hash": "83f0d40e8995e9ad4b8f36ddb1342a70b1a49c4d", "date_timestamp": 1756653549e3, "message": "增加了邀请链接喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/83f0d40e8995e9ad4b8f36ddb1342a70b1a49c4d" }, { "paths": ["docs/guides/quick_start_model_config.md"], "hash": "3ce3811ce5f56a6b909338ca86d59a6cc3a833b3", "date_timestamp": 1756653002e3, "message": "在模型配置快速上手加入了坤坤流动的注册链接喵~", "authors": ["ikun-11451"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/3ce3811ce5f56a6b909338ca86d59a6cc3a833b3" }, { "paths": ["docs/guides/quick_start_model_config.md"], "hash": "02175d68f624b6cd6a139c8fe285f231bdfb4baf", "date_timestamp": 1756545235e3, "message": "docs(guide): 更新默认模型服务为siliconflow", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/02175d68f624b6cd6a139c8fe285f231bdfb4baf" }, { "paths": ["docs/guides/schedule_and_planning_guide.md"], "hash": "c642d7c3c7558cd57e746a16e16b1a1225e14853", "date_timestamp": 1758357261e3, "message": "docs(guide): 整合日程与睡眠系统指南", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/c642d7c3c7558cd57e746a16e16b1a1225e14853" }, { "paths": ["docs/guides/schedule_and_planning_guide.md"], "hash": "99cf533921021177a329521b8997fff0420c5101", "date_timestamp": 1757151953e3, "message": "docs(config): 新增日程与计划系统介绍文档链接", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/99cf533921021177a329521b8997fff0420c5101" }, { "paths": ["docs/guides/video_recognition.md"], "hash": "2403c24ba1ba589fd96ba05d6faf7f39df532c2f", "date_timestamp": 1756559174e3, "message": "feat(guide): 引入视频识别功能文档", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/2403c24ba1ba589fd96ba05d6faf7f39df532c2f" }, { "paths": ["docs/development/plugins/configuration-guide.md", "docs/development/plugins/quick-start.md"], "hash": "d3ee0b3b1bed3d6e630acf2d00916b9902c36539", "date_timestamp": 1756532009e3, "message": "docs(plugins): 优化配置指南和版本管理文档", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/d3ee0b3b1bed3d6e630acf2d00916b9902c36539" }, { "paths": ["docs/development/plugins/dependency-management.md"], "hash": "a42ea91368c4cd8b79bc319f565388bf381fc4d5", "date_timestamp": 1758370203e3, "message": "重写插件依赖检测指南", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/a42ea91368c4cd8b79bc319f565388bf381fc4d5" }, { "paths": ["docs/development/plugins/index.md", "docs/development/plugins/api/adapter-command-api.md", "docs/development/plugins/api/database-api.md"], "hash": "ceb7c0703f64efc0879f03a1b4a1a76e9754c7a2", "date_timestamp": 1758369612e3, "message": "docs(development): 重构适配器命令 API 文档以阐明其透传用途", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/ceb7c0703f64efc0879f03a1b4a1a76e9754c7a2" }, { "paths": ["docs/development/plugins/quick-start.md"], "hash": "da2f62ec57757b1b9231ec58bb5b4ace60cc489f", "date_timestamp": 1756455862e3, "message": "docs(plugins): 重构快速入门指南", "authors": ["minecraft1024a"], "repo_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs", "hash_url": "https://github.com/MoFox-Studio/MoFox-Bot-Docs/commit/da2f62ec57757b1b9231ec58bb5b4ace60cc489f" }], "authors": [{ "name": "minecraft1024a", "avatarUrl": "https://gravatar.com/avatar/28eef51abb2f77ba5ede6cdf3a2ba5daa4e17443bafdc9fe3fe7db52a163ef0c?d=retro" }, { "name": "qukulei-342", "avatarUrl": "https://gravatar.com/avatar/66348343118b23af6fccbbda72db3797b4684af3836f98ec0db551777cfadd49?d=retro" }, { "name": "subiz", "avatarUrl": "https://gravatar.com/avatar/5e92a75d0d366c32ce13a11be0255feee9f23ae6d55a5f808933f279f5f772b8?d=retro" }, { "name": "ikun-11451", "avatarUrl": "https://gravatar.com/avatar/09673b6a995751a2b11acb9c81d4d1f00af4b7333a4349084b4fd56f3b22d9e6?d=retro" }] };
function useChangelog() {
  const { page } = useData();
  const gitChangelog = ref(changelog);
  if (!gitChangelog.value)
    gitChangelog.value = { commits: [], authors: [] };
  const _commits = computed(() => {
    const currentPath = toValue(page.value.filePath);
    const allCommits = gitChangelog.value.commits;
    const commits2 = allCommits.filter((c) => c.paths.includes(currentPath)) || [];
    return commits2.sort((a, b) => b.date_timestamp - a.date_timestamp).filter((commit, index) => {
      if (commit.tag && (!commits2[index + 1] || commits2[index + 1]?.tag))
        return false;
      return true;
    });
  });
  const authors = computed(() => {
    const uniq = /* @__PURE__ */ new Map();
    const authorsFromFrontMatter = isStringArray(page.value.frontmatter.authors) ? page.value.frontmatter.authors : [];
    [..._commits.value.map((c) => c.authors), ...authorsFromFrontMatter].flat().map((name) => {
      if (!uniq.has(name)) {
        uniq.set(name, {
          name,
          commitsCount: 1
        });
        return true;
      } else {
        uniq.get(name).commitsCount++;
        return false;
      }
    });
    return Array.from(uniq.values()).sort((a, b) => b.commitsCount - a.commitsCount).map((a) => {
      return {
        ...a,
        ...gitChangelog.value.authors.find((item) => item.name === a.name) ?? {
          // a avatarUrl fallback for authors in frontmatter
          avatarUrl: `https://gravatar.com/avatar/${a.name}?d=retro`
        }
      };
    });
  });
  const commits = computed(() => {
    return _commits.value.map((_c) => {
      return {
        ..._c,
        authors: _c.authors.map((_a) => {
          return authors.value.find((v) => v.name === _a);
        })
      };
    });
  });
  const useHmr = () => {
  };
  return {
    commits,
    authors,
    useHmr
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Changelog",
  __ssrInlineRender: true,
  setup(__props) {
    const options = defu(inject(InjectionKey, {}), defaultOptions);
    const { t } = useI18n();
    const { lang } = useData();
    const { commits } = useChangelog();
    const isDescending = ref(true);
    const toggleViewMore = ref(false);
    const lastChangeDate = ref(commits.value[0]?.date_timestamp ? toDate(commits.value[0]?.date_timestamp) : /* @__PURE__ */ new Date());
    const locale = computed(() => {
      if (!options.locales || typeof options.locales === "undefined")
        return defaultLocales[lang.value] || data$2 || {};
      return options.locales[lang.value] || data$2 || {};
    });
    const isFreshChange = computed(() => {
      if (!lastChangeDate.value)
        return false;
      return differenceInDays(/* @__PURE__ */ new Date(), lastChangeDate.value) < 1;
    });
    const reversedCommits = computed(() => {
      const temp = [...commits.value];
      return temp.reverse();
    });
    onMounted(() => {
      lastChangeDate.value = commits.value[0]?.date_timestamp ? toDate(commits.value[0]?.date_timestamp) : /* @__PURE__ */ new Date();
    });
    watch(commits, () => {
      lastChangeDate.value = commits.value[0]?.date_timestamp ? toDate(commits.value[0]?.date_timestamp) : /* @__PURE__ */ new Date();
    });
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (!unref(options).hideChangelogHeader) {
        _push(`<h2${ssrRenderAttr("id", unref(t)("changelog.titleId") || unref(t)("changelog.title"))} data-v-138f5fed>${ssrInterpolate(unref(t)("changelog.title"))} <a class="header-anchor"${ssrRenderAttr("href", `#${unref(t)("changelog.titleId") || unref(t)("changelog.title")}`)}${ssrRenderAttr("aria-label", `Permalink to '${unref(t)("changelog.title")}'`)} data-v-138f5fed></a></h2>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(commits).length && !unref(options).hideChangelogNoChangesText) {
        _push(`<div class="${ssrRenderClass([unref(options).hideChangelogHeader && "mt-6", "italic"])}" opacity="70" data-v-138f5fed>${ssrInterpolate(unref(t)("noLogs", { omitEmpty: true }) || unref(t)("changelog.noData"))}</div>`);
      } else {
        _push(`<div class="${ssrRenderClass([[
          isFreshChange.value ? "bg-green/16" : "bg-$vp-custom-block-details-bg",
          unref(options).hideChangelogHeader && "mt-6"
        ], "vp-nolebase-git-changelog vp-nolebase-git-changelog-history vp-nolebase-git-changelog-history-list vp-nolebase-git-changelog-history-container"])}" rounded-lg p-4 data-v-138f5fed><label cursor-pointer data-v-138f5fed><div class="vp-nolebase-git-changelog-title flex select-none items-center justify-between" transition="color ease-in-out" text="&lt;sm:xs" duration-200 data-v-138f5fed><span class="vp-nolebase-git-changelog-last-edited-title inline-flex items-center gap-3" data-v-138f5fed><div class="i-octicon:history-16" data-v-138f5fed></div>`);
        if (unref(commits)[0]) {
          _push(`<span data-v-138f5fed>${ssrInterpolate(unref(t)("lastEdited", {
            props: {
              daysAgo: unref(formatDistanceToNowFromValue)(lastChangeDate.value, locale.value.changelog?.lastEditedDateFnsLocaleName || unref(lang) || "enUS")
            },
            omitEmpty: true
          }) || unref(t)("changelog.lastEdited", {
            props: {
              daysAgo: unref(formatDistanceToNowFromValue)(lastChangeDate.value, locale.value.changelog?.lastEditedDateFnsLocaleName || unref(lang) || "enUS")
            }
          }))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
        if (!unref(options).hideSortBy) {
          _push(`<div class="${ssrRenderClass(isDescending.value ? "i-octicon:sort-desc-16" : "i-octicon:sort-asc-16")}" ml-auto mr-4 cursor-pointer data-v-138f5fed></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="vp-nolebase-git-changelog-view-full-history-title inline-flex cursor-pointer items-center gap-3" data-v-138f5fed><span class="&lt;sm:hidden" data-v-138f5fed>${ssrInterpolate(unref(t)("viewFullHistory", { omitEmpty: true }) || unref(t)("changelog.viewFullHistory"))}</span><svg class="${ssrRenderClass([[
          toggleViewMore.value ? "rotate-180" : "rotate-0"
        ], "i-octicon:chevron-down-16"])}" transition="transform ease-in-out" duration-200 data-v-138f5fed></svg></span></div></label>`);
        _push(ssrRenderComponent(unref(_sfc_main$g), { duration: 200 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle(toggleViewMore.value ? null : { display: "none" })}" class="grid grid-cols-[30px_auto] mt-3 gap-1.5 children:my-auto -ml-1.5" text="&lt;sm:xs" data-v-138f5fed${_scopeId}><!--[-->`);
              ssrRenderList(isDescending.value ? unref(commits) : reversedCommits.value, (commit) => {
                _push2(`<!--[-->`);
                if (commit.tag && commit.tags && commit.release_tag_url && commit.release_tags_url) {
                  _push2(ssrRenderComponent(_sfc_main$2, { commit }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(CommitRegularLine, { commit }, null, _parent2, _scopeId));
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                withDirectives(createVNode("div", {
                  class: "grid grid-cols-[30px_auto] mt-3 gap-1.5 children:my-auto -ml-1.5",
                  text: "<sm:xs"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(isDescending.value ? unref(commits) : reversedCommits.value, (commit) => {
                    return openBlock(), createBlock(Fragment, {
                      key: commit.hash
                    }, [
                      commit.tag && commit.tags && commit.release_tag_url && commit.release_tags_url ? (openBlock(), createBlock(_sfc_main$2, {
                        key: 0,
                        commit
                      }, null, 8, ["commit"])) : (openBlock(), createBlock(CommitRegularLine, {
                        key: 1,
                        commit
                      }, null, 8, ["commit"]))
                    ], 64);
                  }), 128))
                ], 512), [
                  [vShow, toggleViewMore.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-git-changelog/dist/client/components/Changelog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NolebaseGitChangelog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-138f5fed"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contributors",
  __ssrInlineRender: true,
  setup(__props) {
    const options = defu(inject(InjectionKey, {}), defaultOptions);
    const { t } = useI18n();
    const { authors } = useChangelog();
    const { lang } = useData();
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (!unref(options).hideContributorsHeader) {
        _push(`<h2${ssrRenderAttr("id", unref(t)("contributors.titleId") || unref(t)("contributors.title"))}>${ssrInterpolate(unref(t)("contributors.title"))} <a class="${ssrRenderClass([unref(options).hideContributorsHeader && "mt-6", "header-anchor"])}"${ssrRenderAttr("href", `#${unref(t)("contributors.titleId") || unref(t)("contributors.title")}`)}${ssrRenderAttr("aria-label", `Permalink to '${unref(t)("contributors.title")}'`)}></a></h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="vp-nolebase-git-changelog vp-nolebase-git-changelog-contributors vp-nolebase-git-changelog-contributors-container vp-nolebase-git-changelog-contributors-list" flex flex-wrap gap-4 pt-2>`);
      if (!unref(authors).length) {
        _push(`<em class="${ssrRenderClass([
          unref(options).hideContributorsHeader && "mt-6"
        ])}">${ssrInterpolate(unref(t)("noContributors", { omitEmpty: true }) || unref(t)("contributors.noData"))}</em>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(authors), (c) => {
          _push(`<!--[-->`);
          if (typeof c.url !== "undefined") {
            _push(`<a${ssrRenderAttr("href", c.url)} class="no-icon flex items-center gap-2"><img${ssrRenderAttr("src", c.avatarUrl)}${ssrRenderAttr("alt", `The avatar of contributor named as ${c.name}`)} class="h-8 w-8 rounded-full"> ${ssrInterpolate(c.i18n ? c.i18n[unref(lang)] ?? c.name : c.name)}</a>`);
          } else {
            _push(`<div class="flex items-center gap-2"><img${ssrRenderAttr("src", c.avatarUrl)}${ssrRenderAttr("alt", `The avatar of contributor named as ${c.name}`)} class="h-8 w-8 rounded-full"> ${ssrInterpolate(c.i18n ? c.i18n[unref(lang)] ?? c.name : c.name)}</div>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nolebase/vitepress-plugin-git-changelog/dist/client/components/Contributors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const components = {
  NolebaseGitChangelog,
  NolebaseGitContributors: _sfc_main
};
const NolebaseGitChangelogPlugin = {
  install(app, options) {
    if (typeof options !== "undefined" && typeof options === "object")
      app.provide(InjectionKey, options);
    for (const key of Object.keys(components))
      app.component(key, components[key]);
  }
};
const RawTheme = {
  ...theme,
  Layout() {
    return h(theme.Layout, null, {
      "doc-before": () => h("ReadingTime"),
      "doc-before": () => h(ReadingTime),
      "doc-after": () => h(Giscus),
      "nav-bar-content-after": () => h(_sfc_main$7),
      "nav-screen-content-after": () => h(_sfc_main$4)
    });
  },
  enhanceApp({ app }) {
    app.use(NolebaseEnhancedReadabilitiesPlugin);
    app.use(NolebaseGitChangelogPlugin);
    app.component("GuideCards", GuideCards);
    app.component("BibleDisplay", BibleDisplay);
    app.component("ReadingTime", ReadingTime);
    app.component("MoFoxTeamCard", MoFoxTeamCard);
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = el.parentElement?.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group?.querySelector(`label[for="${el.id}"]`);
        label?.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
const shellRE = /language-(shellscript|shell|bash|sh|zsh)/;
const ignoredNodes = [".vp-copy-ignore", ".diff.remove"].join(", ");
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = el.nextElementSibling?.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = shellRE.test(parent.className);
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes).forEach((node) => node.remove());
        clone.innerHTML = clone.innerHTML.replace(/\n+/g, "\n");
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl?.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl?.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && attrs.async == null) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data2 = initData(router.route);
  app.provide(dataSymbol, data2);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data2.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data2.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data: data2 };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false) ;
      else {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data: data2 }) => {
    router.go(location.href, { initialLoad: true }).then(() => {
      useUpdateHead(router.route, data2.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "", vpSocialIcons: /* @__PURE__ */ new Set() };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
