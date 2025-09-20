<template>
  <div class="reading-info">
    <span v-if="readingTimeText">⏱️ {{ readingTimeText }}</span>
    <span v-if="wordCountText" class="separator">|</span>
    <span v-if="wordCountText">✍️ {{ wordCountText }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';
import { getReadingTime } from './utils.js';

const { page } = useData();
const readingTimeText = ref('');
const wordCountText = ref('');

import { nextTick } from 'vue';

const calculateReadingTime = () => {
  nextTick(() => {
    const content = document.querySelector('.vp-doc');
    if (content) {
      const { readingTime, wordCount } = getReadingTime(content.innerText);
      readingTimeText.value = readingTime;
      wordCountText.value = wordCount;
    }
  });
};

watch(() => page.value.relativePath, calculateReadingTime, { immediate: true });
watch(() => page.value.relativePath, calculateReadingTime);
</script>

<style scoped>
.reading-info {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin-bottom: 1em;
}

.separator {
  margin: 0 0.5em;
}
</style>