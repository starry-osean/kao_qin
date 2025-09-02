import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})

//export const API_URL = 'http://your-backend-server.com/api';

//window.APP_CONFIG={
  //  API_BASE_URL:'http://localhost:8080'
//}
