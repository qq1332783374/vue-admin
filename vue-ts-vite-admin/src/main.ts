import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import ElementPlus from './components/element-plus'
import 'normalize.css/normalize.css' // 样式重置
import '@assets/styles/index.scss'

const app = createApp(App)

app
  .use(Router)
  .use(Store)
  .use(ElementPlus)

app.mount('#app')
