/***/
import routeList from '@router/modules/layout/index'

console.log('routeList', routeList)

const layoutRoutes: Object = {
  namespace: true,
  state: {
    routes: routeList[0].children
  },
  actions: {},
  mutations: {}
}

export default layoutRoutes
