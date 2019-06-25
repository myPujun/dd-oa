import {api} from '../api'
import ajax from '../ajax'
const state = {
    userInfo:{}
}
const mutations = {
    setUser: (state,res) =>{
        state.userInfo = res
    }
}
const actions = {
    getUser({commit},params){
        return ajax.post(api.user,params)
    }
}

export default {
    state,
    mutations,
    actions
}