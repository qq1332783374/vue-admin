<template>
  <el-container class="layout">
    <el-aside
      :width="`${65 + sideWidth}px`"
      :class="[
        UA === 'mobile' && !isCollapse ? 'layout__mobile-side-bar' : UA === 'mobile' ? 'layout__side-bar-hide-mobile' : 'layout__side-bar-hide-pc',
      ]"
    >
      <side-menu />
    </el-aside>
    <div
      class="layout__overlay"
      v-show="UA === 'mobile' && !isCollapse"
      @click="handlerClickOverlay"
    />
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

import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

const { body } = document
const WIDTH = 992

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
    const UA = computed(() => store.state.Common.UA)

    const $_isMobile = () => {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    }

    const $_resizeHandler = () => {
      if (!document.hidden) {
        const isMobile = $_isMobile()
        store.commit('SET_UA', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.commit('SET_COLLAPSE', true)
        }
      }
    }

    // 监听窗口变化
    onMounted(() => {
      window.addEventListener('resize', $_resizeHandler)
    })

    const handlerClickOverlay = () => {
      store.commit('SET_COLLAPSE', true)
    }

    return {
      handlerClickOverlay,
      isCollapse,
      sideWidth,
      UA
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

    &__side-bar-hide-mobile {
      margin-left: -65px;
    }

    &__side-bar-hide-pc {
      margin-left: 0;
    }

    &__mobile-side-bar {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 4;
    }

    &__overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 3;
    }

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
