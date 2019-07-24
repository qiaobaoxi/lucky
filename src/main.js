import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import Axios from 'axios';
import VueI18n from 'vue-i18n'
import { Carousel, CarouselItem,Pagination } from 'element-ui';
import messages from "./i18.js"
import VueRouter from 'vue-router'
import routes from "./routes"
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueI18n)
// Vue.use(ElementUI);
Vue.use(VueAxios,Axios);
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


const i18n = new VueI18n({
  locale: 'en', // 设置地区
  messages, // 设置地区信息
})

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
