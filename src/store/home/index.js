import { getCategoryList } from "@/api"
// home模块状态管理
const state = {
    categoryList: [],
    commodityList: ["服装城",'美妆馆','尚品汇超市','全球购','闪购','团购','有趣','秒杀']
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    async categoryList({ commit }) {
        const res = await getCategoryList();
        if (res.code == 200) {
            commit('CATEGORYLIST', res.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}