import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import Axios from 'axios';
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import messages from "./i18.js"
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI);
Vue.use(VueAxios,Axios);

const i18n = new VueI18n({
  locale: 'en', // 设置地区
  messages, // 设置地区信息
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
