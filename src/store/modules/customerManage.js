import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getCustomerList({commit},params){   //客户列表
        return ajax.post(api.customerLlist,params)
    },
    getCustomerDetails({commit},params){    //客户详情
        return ajax.post(api.customerDetails,params)
    },
    getAddClient({commit},params){  //新增客户
        return ajax.post(api.addClient,params)
    },
    getEditClient({commit},params){
        return ajax.post(api.editClient,params)
    },
    getAddLinkman({commit},params){ //添加联系人
        return ajax.post(api.addLinkman,params)
    }
}

export default {
    actions
}