import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getAddOrders({commit},params){  //
        return ajax.post(api.addOrder,params)
    },
    getAllcustomer({commit},params){    //所有客户信息数据绑定
        return ajax.post(api.allcustomer,params)
    },
    getContractprices({commit},params){ //合同造价数据绑定
        return ajax.post(api.contractprices,params)
    },
    getContactsbycid({commit},params){  //根据客户ID获取主要联系人及号码
        return ajax.post(api.contactsbycid,params)
    },
    getUpLoadFile({commit},params){
        return ajax.post(api.upLoadFile,params)
    },
    getDstatus({commit},params){    //接单状态数据绑定
        return ajax.post(api.dstatus,params)
    },
    getArea({commit},params){   //活动归属地数据绑定
        return ajax.post(api.area,params)
    },
    getEmployeebyarea({commit},params){ //根据活动归属地ID获取组织架构及人员
        return ajax.post(api.employeebyarea,params)
    }
}

export default {
    actions
}