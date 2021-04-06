<template>
  <div class="top-header">
    <top-header-nav-bar />
    <top-header-tab />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopHeaderNavBar from './nav-bar.vue'
import TopHeaderTab from './tab.vue'

export default defineComponent({
  name: 'top-header',
  components: {
    TopHeaderNavBar,
    TopHeaderTab
  }
})
</script>

<style scoped lang="scss">
  .top-header {
    margin: 0 -20px;

    &-nav-bar {
      height: 50px;
      padding: 0 20px;
      overflow: hidden;
      position: relative;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
