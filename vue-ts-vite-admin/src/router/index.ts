import { createRouter, createWebHashHistory } from 'vue-router'
import ModuleRoutes from './modules'

export default createRouter({
  history: createWebHashHistory(),
  routes: [...ModuleRoutes]
})
