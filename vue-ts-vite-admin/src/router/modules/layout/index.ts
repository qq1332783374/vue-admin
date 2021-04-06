/**
 * 以布局组件为基础的路由，需要 token 作为路由守卫判断条件
 * */
import {RouteRecordRaw} from 'vue-router'
import {viewPageRouteImport} from '@utils'
import Layout from '@components/layout/index.vue'
import System from './modules/system'

console.log('System', System)

const layoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: viewPageRouteImport('home/index'),
        meta: {
          title: '主页',
          icon: 'home'
        }
      },
      ...System
    ]
  }
]

export default layoutRoutes
