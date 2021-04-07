import {RouteRecordRaw} from 'vue-router'
import {viewPageRouteImport} from '@utils'
import Layout from '@components/layout/index.vue'

const systemRoutes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'system',
    component: Layout,
    meta: {
      title: '系统设置',
      icon: 'el-icon-s-tools'
    },
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: viewPageRouteImport('system/menu'),
        meta: {
          title: '菜单设置',
          icon: 'el-icon-s-operation'
        }
      }
    ]
  }
]

export default systemRoutes
