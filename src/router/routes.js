// 引入页面
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Detail from "@/pages/Detail"
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default [
    {
        name: 'home',
        path: '/home',
        component: Home,
        meta: { isFooterShow: true }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: { isFooterShow: false }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: { isFooterShow: false }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: { isFooterShow: true }
    },
    {
        name: 'detail',
        path: '/detail/:skuid?',
        component: Detail,
        meta: { isFooterShow: true }
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        // beforeEnter (to, from, next) {    
        //   // 得到要跳转到目路由的query参数
        //   const skuNum = to.query.skuNum
        //   // 读取保存的数据
        //   const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
        //   console.log('---', skuNum, skuInfo)
        //   // 只有都存在, 才放行
        //   if (skuNum && skuInfo) {
        //     next()
        //   } else { // 在组件对象创建前强制跳转到首页
        //     next('/')
        //   }
        // }
    },
    {
        path: '/shopcart',
        component: ShopCart,
    },
    {
        path: '/',
        redirect: "/home"
    }
]