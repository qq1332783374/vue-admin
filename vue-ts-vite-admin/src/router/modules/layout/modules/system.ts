import {RouteRecordRaw} from 'vue-router'
import {viewPageRouteImport} from '@utils'

const systemRoutes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    redirect: { name: 'system' },
    component: viewPageRouteImport('system/index'),
    meta: {
      title: '系统设置',
      icon: 'setting'
    },
    children: [
      {
        path: 'index',
        name: 'system',
        component: viewPageRouteImport('system/index'),
        meta: {
          title: '系统设置',
          icon: 'setting'
        }
      }
    ]
  }
]

export default systemRoutes
