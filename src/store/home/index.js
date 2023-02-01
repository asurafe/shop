import { getCategoryList, getBannerList, getFloorList } from "@/api"
// home模块状态管理
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
    commodityList: ["服装城", '美妆馆', '尚品汇超市', '全球购', '闪购', '团购', '有趣', '秒杀']
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    async categoryList({ commit }) {
        const res = await getCategoryList();
        if (res.code == 200) {
            commit('CATEGORYLIST', res.data)
        }
    },
    async getBannerList({ commit }) {
        const res = await getBannerList();
        if (res.code == 200) {
            commit('BANNERLIST', res.data)
        }
    },
    async getFloorList({ commit }) {
        const res = await getFloorList();
        if (res.code == 200) {
            commit('FLOORLIST', res.data)
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