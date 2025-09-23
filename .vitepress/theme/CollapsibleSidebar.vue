<template>
  <button @click="toggleSidebar" class="sidebar-toggle-button">
    {{ isSidebarCollapsed ? '»' : '«' }}
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
  left: 20px; /* Adjust as needed */
  bottom: 20px; /* Adjust as needed */
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
  transition: all 0.2s ease-in-out;
}

.sidebar-toggle-button:hover {
  background-color: var(--vp-c-bg-mute);
}
</style>