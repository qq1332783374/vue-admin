<template>
  <div class="side-bar">
    <el-menu
      mode="vertical"
      :default-active="activeRouteName"
      class="scroll-bar width-100-pre height-100-pre overflow-y-auto"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item
        index="home"
        @click="handlerClickHome"
      >
        <i class="el-icon-s-home"></i>
        <template #title>首页</template>
      </el-menu-item>
      <side-bar-item
        v-for="item in menuList"
        :key="item.name"
        :menu="item"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import SideBarItem from './side-bar-item.vue'

export default defineComponent({
  name: 'side-bar',
  components: {
    SideBarItem
  },
  setup () {
    const router = useRouter()
    const store = useStore()

    const menuList = store.state.LayoutRoute.routes
    const activeRouteName = computed(() => store.state.LayoutRoute.activeRouteName)
    const isCollapse = ref(false)

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    const handlerClickHome = () => {
      store.commit('SET_ACTIVE_ROUTE_NAME', 'home')

      router.push({name: 'home'})
    }

    return {
      menuList,
      isCollapse,
      activeRouteName,
      handleOpen,
      handleClose,
      handlerClickHome
    }
  }
})
</script>

<style scoped lang="scss">
  .side-bar {
    height: calc(100% - 50px);
  }
</style>
