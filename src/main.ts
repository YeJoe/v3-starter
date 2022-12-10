import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { router } from '@/router'
//引入pinia
import pinia from '@/pinia'// 导入 Pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 导入 Pinia 插件
pinia.use(piniaPluginPersistedstate) // 激活 Pinia 插件

const app = createApp(App)

app.use(router)
app.use(pinia)// 启用 Pinia ，这一次是包含了插件的 Pinia 实例

app.mount('#app')
