<template>
  <div class="top-header-tab">
    <el-tabs
      class="top-header-tabs"
      v-model="activeRouteName"
      @tab-click="handleClick"
      @tab-remove="handlerClickRemove"
      closable
      type="card"
    >
      <el-tab-pane
        v-for="item in tabList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        class="top-header-tab-pane"
      />
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'top-header-tab',
  setup () {
    const router = useRouter()
    const store = useStore()
    const tabList = computed(() => store.state.LayoutRoute.activeTabList)
    const activeRouteName = computed({
      get () {
        return store.state.LayoutRoute.activeRouteName
      },
      set (val: string) {
        store.commit('SET_ACTIVE_ROUTE_NAME', val)
      }
    })

    const handleClick = (tab, event) => {
      console.log('handleClick', tab.paneName);
      console.log('event', event);
      router.push({
        name: tab.paneName
      })

      activeRouteName.value = tab.paneName
    }

    const handlerClickRemove = (tabName: string) => {
      store.commit('DEL_TAB_ITEM', tabName)

      const currentItem = tabList.value[tabList.value.length - 1]

      activeRouteName.value = currentItem.name

      router.push({
        name: currentItem.name
      })
    }

    return {
      tabList,
      activeRouteName,
      handleClick,
      handlerClickRemove
    }
  }
})
</script>

<style lang="scss">
  .top-header-tab {

    .el-tabs--card>.el-tabs__header .el-tabs__nav,
    .el-tabs--card>.el-tabs__header .el-tabs__item,
    .el-tabs--card>.el-tabs__header {
      border: none;
    }

    .el-tabs__header {
      margin: 0;
      padding: 5px 0;
    }

    .el-tabs__item {
      background-color: #fff;
      font-size: 12px;
      border-radius: 4px;
      margin: 0 5px;
      border: none;
      height: 30px;
      line-height: 30px;
    }

    .el-tabs__nav-next, .el-tabs__nav-prev {
      line-height: 30px;
      font-size: 12px;
      background: #fff;
      margin: 0 5px;
      border-radius: 4px;
    }
  }
</style>
