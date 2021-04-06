/**
 * 通过 vite2 提供的 Glob 导入 功能实现自动导入 modules 目录下的 *.ts 文件
 *
 * 官网：https://cn.vitejs.dev/guide/features.html#glob-%E5%AF%BC%E5%85%A5
 * */
import {RouteRecordRaw} from 'vue-router'
const routeListFiles = import.meta.globEager('./*/*.ts')

const routeList: Array<RouteRecordRaw> = []

Object.keys(routeListFiles).forEach(async (routeKey) => {
  const routeItem = routeListFiles[routeKey].default

  routeList.push(...routeItem)
})

export default routeList
