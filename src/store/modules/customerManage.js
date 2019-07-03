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
        return ajax.post(api.customerAdd,params)
    },
    getCustomerObtain({commit},params){ //获取客户信息
        return ajax.post(api.customerObtain,params)
    },
    getEditClient({commit},params){     //编辑客户
        return ajax.post(api.customerEdit,params)
    },
    getAddLinkman({commit},params){ //添加次要联系人
        return ajax.post(api.contactAdd,params)
    },
    getContactEdit({commit},params){
        return ajax.post(api.contactEdit,params)
    }
}

export default {
    actions
}