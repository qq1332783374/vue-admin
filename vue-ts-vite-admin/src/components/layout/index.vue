<template>
  <el-container class="layout">
    <el-aside :width="`${65 + sideWidth}px`">
      <side-menu />
    </el-aside>
    <el-container>
      <el-header height="85px">
        <top-header />
      </el-header>
      <el-main>
        <main-content />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import MainContent from './components/main-content/index.vue'
import SideMenu from './components/side-menu/index.vue'
import TopHeader from './components/top-header/index.vue'

import {computed, defineComponent} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'layout',
  components: {
    MainContent,
    SideMenu,
    TopHeader
  },
  setup () {
    const store = useStore()
    const isCollapse = computed(() => store.state.Common.isCollapse)
    const sideWidth = computed(() => {
      return isCollapse.value ? 0 : 140
    })

    return {
      sideWidth
    }
  }
})
</script>

<style lang="scss">
  .layout {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: auto;
    background: #f7f7f7;

    .el-aside {
      width: 205px;
      transition: width .3s;
    }

    .el-main {
      padding: 0 5px;
      margin-top: 10px;
    }
  }
</style>
