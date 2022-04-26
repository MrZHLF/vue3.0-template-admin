/*
 * @Author: 小周
 * @Date: 2022-03-Th 05:04:17
 * @Last Modified by:   小周
 * @Last Modified time: 2022-03-Th 05:04:17
 * @ descript 配置
 */
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import router from './router'
import store from './store/index'

// 初始化
import initApp from './init'
import './permission'

const app = createApp(App)
initApp(app)

app
  .use(store)
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(router)
  .mount('#app')
