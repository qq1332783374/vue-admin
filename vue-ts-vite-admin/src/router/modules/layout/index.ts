/**
 * 以布局组件为基础的路由，需要 token 作为路由守卫判断条件
 * */
import {RouteRecordRaw} from 'vue-router'
import {viewPageRouteImport} from '@utils'
import Layout from '@components/layout/index.vue'

// 动态读取modules 模块菜单
const moduleFile = import.meta.globEager('./*/*.ts')

export const moduleRoutes: Array<RouteRecordRaw> = []

Object.keys(moduleFile).forEach(async (routeKey) => {
  const routeItem = moduleFile[routeKey].default

  moduleRoutes.push(...routeItem)
})

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
          title: '首页',
          icon: 'home'
        }
      }
    ]
  },
  ...moduleRoutes
]

export default layoutRoutes
