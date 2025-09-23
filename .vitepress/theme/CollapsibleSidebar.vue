<template>
  <button @click="toggleSidebar" class="sidebar-toggle-button" :class="{ 'is-collapsed': isSidebarCollapsed }">
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isSidebarCollapsed = ref(false)

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  document.body.classList.toggle('sidebar-collapsed', isSidebarCollapsed.value)
}

onMounted(() => {
  // Check localStorage for saved state
  const storedState = localStorage.getItem('sidebar-collapsed')
  if (storedState === 'true') {
    toggleSidebar()
  }
})
</script>

<style scoped>
.sidebar-toggle-button {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 100;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.sidebar-toggle-button .arrow {
  transition: transform 0.3s ease-in-out;
  fill: currentColor;
}

.sidebar-toggle-button.is-collapsed .arrow {
  transform: rotate(180deg);
}

.sidebar-toggle-button:hover {
  background-color: var(--vp-c-bg-mute);
}
</style>