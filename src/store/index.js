import Vue from "vue";
import Vuex from "vuex"
import search from "./search";
import home from "./home";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
    }
})