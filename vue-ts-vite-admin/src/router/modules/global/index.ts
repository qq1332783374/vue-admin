/**
 * 不基于 layout 组件的全局路由
 * */
import {RouteRecordRaw} from 'vue-router'
import {viewPageRouteImport} from '@utils'

const globalRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: viewPageRouteImport('/common/login/index')
  }
]

export default globalRoutes
