import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

/**
 * 动态加载文件路径
 * @param dir
 */
const pathResolve = (dir: string) => resolve(__dirname, '.', dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@service': pathResolve('src/service'),
      '@utils': pathResolve('src/utils'),
      '@views': pathResolve('src/views'),
      '@router': pathResolve('src/router'),
    }
  }
})
