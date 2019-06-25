import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getCustomerList({commit},params){
        return ajax.post(api.customerLlist,params)
    },
    getCustomerDetails({commit},params){
        return ajax.post(api.customerDetails,params)
    }
}

export default {
    actions
}