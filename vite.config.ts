import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    // 프로덕션 빌드 시 React 앱 + 모든 Vanilla 구현물을 함께 번들링
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Level 1
        'v-01': resolve(__dirname, 'vanilla/01-checkbox/index.html'),
        'v-02': resolve(__dirname, 'vanilla/02-accordion/index.html'),
        'v-03': resolve(__dirname, 'vanilla/03-modal/index.html'),
        'v-04': resolve(__dirname, 'vanilla/04-tab/index.html'),
        'v-05': resolve(__dirname, 'vanilla/05-toast/index.html'),
        // Level 2
        'v-06': resolve(__dirname, 'vanilla/06-carousel/index.html'),
        'v-07': resolve(__dirname, 'vanilla/07-infinite-scroll/index.html'),
        'v-08': resolve(__dirname, 'vanilla/08-drag-drop/index.html'),
        'v-09': resolve(__dirname, 'vanilla/09-form-validation/index.html'),
        'v-10': resolve(__dirname, 'vanilla/10-autocomplete/index.html'),
        // Level 3
        'v-11': resolve(__dirname, 'vanilla/11-virtual-scroll/index.html'),
        'v-12': resolve(__dirname, 'vanilla/12-lazy-image/index.html'),
        'v-13': resolve(__dirname, 'vanilla/13-date-picker/index.html'),
        'v-14': resolve(__dirname, 'vanilla/14-sortable-table/index.html'),
        'v-15': resolve(__dirname, 'vanilla/15-progress-stepper/index.html'),
      },
    },
  },
})
