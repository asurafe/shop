// 引入页面
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Detail from "@/pages/Detail"
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
        path: '/',
        redirect: "/home"
    }
]