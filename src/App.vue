<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SidebarComponent.vue'
</script>

<template>
  <div>
    <SideBar />
    <div class="p-4 sm:ml-64">
      <RouterView />
    </div>
  </div>
</template>