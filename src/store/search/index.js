import { getSearchList } from '@/api/index'
// search模块状态管理
const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        const res = await getSearchList(params)
        console.log(res.data)
        if (res.code == 200) {
            commit('GETSEARCHLIST', res.data)
        }
    }
}
const getters = {
    attrsList(state){
        return state.searchList.attrsList || []
    },
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}