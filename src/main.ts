import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import i18n from '@/i18n'

import '@/styles/index.scss' // global css

// 导入 svgIcon
import installIcons from '@/icons/index'

const app = createApp(App)

installIcons(app)

app.use(store).use(router).use(ElementPlus).use(i18n).mount('#app')
