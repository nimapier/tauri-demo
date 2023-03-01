import { createApp } from 'vue'
import App from './App.vue'
import { invoke } from '@tauri-apps/api'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 调用命令
// 在应用窗口中右键，打开开发者工具
// 你会看到控制台上输出了 "Hello, World!"！
invoke('greet', { name: 'World' })
  // `invoke` 返回的是一个 Promise
  .then((response) => console.log(response))
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
