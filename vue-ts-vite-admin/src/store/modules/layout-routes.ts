/***/
import { moduleRoutes } from '@router/modules/layout/index'
import { RouteRecordRaw } from 'vue-router'

interface tabItem {
  name: string,
  path: string,
  title: string
}

interface State {
  routes: Array<RouteRecordRaw>,
  activeTabList: Array<tabItem>,
  activeRouteName: string
}

console.log('moduleRoutes', moduleRoutes)

const layoutRoutes: Object = {
  namespace: true,
  state: {
    activeRouteName: 'home',
    routes: moduleRoutes,
    activeTabList: [
      { name: 'home', path: 'home', title: '首页' }
    ]
  },
  mutations: {
    SET_TAB_ITEM (state: State, item: tabItem) {
      state.activeTabList.push(item)
    },
    DEL_TAB_ITEM (state: State, tabName: string) {

      if (tabName !== 'home') {
        state.activeTabList = state.activeTabList.filter((item: tabItem) => item.name !== tabName)
      }
    },
    SET_ACTIVE_ROUTE_NAME (state: State, active: string) {
      state.activeRouteName = active
    }
  }
}

export default layoutRoutes
