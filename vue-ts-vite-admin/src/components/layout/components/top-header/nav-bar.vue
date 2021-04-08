<template>
  <div class="top-header-nav-bar">
    <div class="top-header-nav-bar__left display-flex align-items-center">
      <div class="top-header-nav-bar__collapse">
        <i
          class="el-icon-s-fold"
          @click="handlerSwitchSideBar"
        />
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          :to="{ path: '/' }"
          @click="handlerClickBreadcrumbItem('home')"
        >
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item
          v-show="currentRoute !== '首页'"
        >
          {{ currentRoute }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-header-nav-bar__right display-flex align-items-center">
      <ul
        class="top-header-nav-bar__tools display-flex"
        v-if="UA !== 'mobile'"
      >
        <li class="top-header-nav-bar__tools-item">
          <i class="el-icon-s-tools"></i>
        </li>
        <li class="top-header-nav-bar__tools-item">
          <i class="el-icon-edit"></i>
        </li>
      </ul>
      <div class="top-header-nav-bar__user display-flex align-items-center">
        <span class="top-header-nav-bar__user-name">用户名</span>
        <el-avatar
          size="medium"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'top-header-nav-bar',
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const activeRouteName = computed(() => store.state.Common.activeRouteName)
    const isCollapse = computed(() => store.state.Common.isCollapse)
    const UA = computed(() => store.state.Common.UA)

    const currentRoute = computed(() => {
      const currentItem = route.matched.filter(item => item.name === activeRouteName.value)

      console.log('currentItem', currentItem)

      return currentItem[0] && currentItem[0].meta.title || '首页'
    })

    /**
     * 面包屑导航栏切换
     * @param to
     */
    const handlerClickBreadcrumbItem = (to: string) => {
      console.log('to', to)
      if (to) {
        router.push({
          name: to
        })
      }

      store.commit('SET_ACTIVE_ROUTE_NAME', 'home')
    }

    /**
     * 控制侧边导航条收起
     */
    const handlerSwitchSideBar = () => {
      if (UA.value === 'mobile') {
        store.commit('SET_COLLAPSE', false)

        return
      }
      store.commit('SET_COLLAPSE', !isCollapse.value)
    }

    return {
      UA,
      activeRouteName,
      currentRoute,
      handlerClickBreadcrumbItem,
      handlerSwitchSideBar,
    }
  }
})
</script>

<style scoped lang="scss">
  .top-header-nav-bar {
    &__collapse {
      font-size: 24px;
      margin-right: 20px;
      color: #666;
      cursor: pointer;
    }

    &__user {
      color: #666;

      &-name {
        margin-right: 10px;
      }
    }

    &__tools {
      margin-right: 20px;
      list-style: none;

      &-item {
        color: #666666;
        margin-right: 10px;
      }
    }
  }
</style>
