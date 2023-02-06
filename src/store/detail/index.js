import { getDetail } from "@/api";

const state = {
    goodDetail:{}
}
const mutations = {
    GETGOODSDETAIL(state,goodDetail){
        state.goodDetail = goodDetail
    }
}
const actions = {
    async getGoodsDetail({ commit }, data) {
        const res = await getDetail(data)
        if (res.code == 200) {
            commit('GETGOODSDETAIL', res.data)
        }
    }
}
const getters = {
    categoryView(state){
        return state.goodDetail.categoryView || {}
    },
    skuInfo(state){
        return state.goodDetail.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodDetail.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}