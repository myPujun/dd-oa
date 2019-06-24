import {api} from '../api'
import ajax from '../ajax'
const state = {
    userInfo:{}
}
const mutations = {
    
}
const actions = {
    getUser({commit},params){
        return ajax.post(api.getUser,params)
    }
}

export default {
    state,
    mutations,
    actions
}