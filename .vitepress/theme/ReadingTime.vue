<template>
  <div v-if="readingTimeText" class="reading-time">
    {{ readingTimeText }}
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';
import { getReadingTime } from './utils.js';

const { page } = useData();
const readingTimeText = ref('');

import { nextTick } from 'vue';

const calculateReadingTime = () => {
  nextTick(() => {
    const content = document.querySelector('.vp-doc');
    if (content) {
      readingTimeText.value = getReadingTime(content.innerText);
    }
  });
};

watch(() => page.value.relativePath, calculateReadingTime, { immediate: true });
watch(() => page.value.relativePath, calculateReadingTime);
</script>

<style scoped>
.reading-time {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin-bottom: 1em;
}
</style>