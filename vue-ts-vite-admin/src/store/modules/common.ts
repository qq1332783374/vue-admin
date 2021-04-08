/***/
import { moduleRoutes } from '@router/modules/layout/index'
import { RouteRecordRaw } from 'vue-router'
import { getLocalStorage, setLocalStorage } from '@utils'
import {
  ACTIVE_ROUTE_NAME,
  ACTIVE_TAB_LIST,
  IS_SIDE_BAR_COLLAPSE,
  ROUTES_LIST
} from '@constant'

interface tabItem {
  name: string,
  path: string,
  title: string
}

interface State {
  routes: Array<RouteRecordRaw>,
  activeTabList: Array<tabItem>,
  activeRouteName: string,
  isCollapse: boolean
}

const common: Object = {
  namespace: true,
  state: {
    activeRouteName: getLocalStorage(ACTIVE_ROUTE_NAME) || 'home',
    routes: getLocalStorage(ROUTES_LIST) || moduleRoutes,
    activeTabList: getLocalStorage(ACTIVE_TAB_LIST) ||  [{ name: 'home', path: 'home', title: '首页' }],
    isCollapse: getLocalStorage(IS_SIDE_BAR_COLLAPSE) || false
  },
  mutations: {
    SET_TAB_ITEM (state: State, item: tabItem) {
      state.activeTabList.push(item)

      setLocalStorage(ACTIVE_TAB_LIST, state.activeTabList)
    },
    DEL_TAB_ITEM (state: State, tabName: string) {

      if (tabName !== 'home') {
        state.activeTabList = state.activeTabList.filter((item: tabItem) => item.name !== tabName)
      }

      setLocalStorage(ACTIVE_TAB_LIST, state.activeTabList)

    },
    SET_ACTIVE_ROUTE_NAME (state: State, active: string) {
      state.activeRouteName = active

      setLocalStorage(ACTIVE_ROUTE_NAME, active)
    },
    SET_COLLAPSE (state: State, collapse: boolean) {
      console.log('collapse', collapse)
      state.isCollapse = collapse

      setLocalStorage(IS_SIDE_BAR_COLLAPSE, collapse)
    }
  }
}

export default common
