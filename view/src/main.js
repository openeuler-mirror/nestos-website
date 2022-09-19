import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lang/index';
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/main.scss';
import './icon_font/iconfont.js';
import './icon_font/iconfont.css';
import '@/utils/rem'

createApp(App).use(router).use(ElementPlus).use(i18n).mount('#app')
createApp(App).config.globalProperties.AOS = AOS;