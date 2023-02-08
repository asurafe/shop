import Vue from "vue";
import Vuex from "vuex"
import search from "./search";
import home from "./home";
import detail from "./detail"
import shopcart from "./shopcart";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart
    }
})