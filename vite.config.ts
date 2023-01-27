import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve as pathResolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve(__dirname, 'src')
      }
    ]
  }
})
