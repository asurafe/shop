import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
// 注册三级联动全局组件
import TypeNav from "@/pages/Home/TypeNav"

import {getCategoryList} from "@/api"
getCategoryList()
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
