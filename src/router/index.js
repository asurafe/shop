import Vue from "vue";
import VueRouter from "vue-router"
// 引入页面
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
// 使用插件
Vue.use(VueRouter)

const routes = [
    { path: '/home', component: Home, meta: { isFooterShow: true } },
    { path: '/login', component: Login, meta: { isFooterShow: false } },
    { name: 'search', path: '/search', component: Search, meta: { isFooterShow: true } },
    { path: '/register', component: Register, meta: { isFooterShow: false } },
    { path: '/', redirect: "/home" }
]

// 重写push方法
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
// 导出路由
export default new VueRouter({
    routes
})