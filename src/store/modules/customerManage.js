import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getCustomerList({commit},params){   //客户列表
        return ajax.post(api.customerList,params)
    },
    getCustomerDetails({commit},params){    //客户详情
        return ajax.post(api.customerDetails,params)
    },
    getAddClient({commit},params){  //新增客户
        return ajax.post(api.addClient,params)
    },
}

export default {
    actions
}