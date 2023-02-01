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
        if (res.code == 200) {
            commit('GETSEARCHLIST', res.data)
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