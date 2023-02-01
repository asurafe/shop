import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store"
// 引入mock插件
import '@/mock/mockServer.js'
// 引入swiper样式
import 'swiper/css/swiper.css'

// 注册三级联动全局组件
import TypeNav from "@/components/TypeNav"

Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
