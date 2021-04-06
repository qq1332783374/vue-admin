<template>
  <div class="main-content">
    <router-view :key="$route.path" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'main-content'
})
</script>

<style scoped>
</style>
