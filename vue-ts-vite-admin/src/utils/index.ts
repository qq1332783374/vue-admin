/**
 * 路由懒加载方法，由于 vite 导入文件的时候需要不全文件的后缀
 * 所以就封装了一个方法动态加载 views目录下的 *.vue 文件
 *
 * 用例：
 *
 * 目标文件路径：src/views/test/menu.vue
 *
 * import {routerComponentImport} from '@utils'
 *
 * {
 *   path: '/test',
 *   name: 'test',
 *   component: routerComponentImport('/test/index')
 * }
 *
 * @param filePath 组件 views目录 下的路径
 */
export function viewPageRouteImport (filePath: string) {
  return () => import(`../views/${filePath}.vue`)
}
