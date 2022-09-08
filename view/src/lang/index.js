// language文件夹下的index.js
// zh, en, id 分别为三种语言文件 以后多语言可通过localStorage设置
import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';
// import id from './id';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh-CN',//localStorage.getItem('language') || 'id-ID',
  messages: {
    'zh-CN': zh,
    'en-US': en,
    // 'id-ID': id
  }
});

export default i18n;

