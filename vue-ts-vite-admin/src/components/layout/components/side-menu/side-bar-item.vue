<template>
  <div class="side-bar-item">
    <el-submenu
      v-if="menu.children && menu.children.length !== 0"
      :index="menu.path"
      popper-append-to-body
    >

      <template #title>
        <i :class="menu.meta.icon"></i>
        <span>{{ menu.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in menu.children"
        :key="child.name"
        :menu="child"
      />
    </el-submenu>
    <el-menu-item
      v-else
      :index="menu.path"
      @click="handlerGoTo(menu)"
    >
      <i :class="menu.meta.icon"></i>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'side-bar-item',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const handlerGoTo = (item) => {

      const isHasTab = store.state.Common.activeTabList.filter(tItem => tItem.name === item.name)
      console.log('handlerGoTo', isHasTab)
      if (!isHasTab.length) {
        store.commit('SET_TAB_ITEM', {
          name: item.name,
          path: item.path,
          title: item.meta.title
        })
      }

      store.commit('SET_ACTIVE_ROUTE_NAME', item.name)

      router.push({
        name: item.name
      })

    }

    return {
      handlerGoTo
    }
  }
})
</script>

<style scoped>

</style>
