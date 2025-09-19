<template>
  <div class="giscus-container">
    <div class="giscus"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useData } from 'vitepress';

const { isDark } = useData();

const giscusAttributes = {
  "src": "https://giscus.app/client.js",
  "data-repo": "MoFox-Studio/MoFox-Bot-Docs", // 替换为你的仓库
  "data-repo-id": "R_kgDOPmLudA", // 替换为你的仓库 ID
  "data-category": "Announcements", // 替换为你的分类
  "data-category-id": "DIC_kwDOPmLudM4Cvo_u", // 替换为你的分类 ID
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

onMounted(() => {
  const script = document.createElement('script');
  Object.entries(giscusAttributes).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.querySelector('.giscus').appendChild(script);
});

watch(isDark, (dark) => {
  const iframe = document.querySelector('.giscus-frame');
  if (iframe) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: dark ? 'noborder_dark' : 'noborder_light' } } },
      'https://giscus.app'
    );
  }
});
</script>

<style scoped>
.giscus-container {
  margin-top: 2rem;
}
</style>