import { getRegisterCode, register } from '@/api/index'

const state = {
    code: ""
};

const mutations = {
    GETREGISTERCODE(state, code) {
        state.code = code
    }
};

const actions = {
    async getRegisterCode({ commit }, phone = "") {
        const res = await getRegisterCode(phone)
        if (res.code == 200) {
            commit('GETREGISTERCODE', res.data)
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async register({ commit }, user) {
        const res = await register(user)
        console.log(res)
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    }
};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}