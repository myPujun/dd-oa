import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getUnBusinessPayList({commit},params){   //非业务支付申请分页数据列表
        return ajax.post(api.unBusinessPayList ,params)
    },
    getUnBusinessPayDetails({commit},params){   //查看非业务支付申请
        return ajax.post(api.unBusinessPayDetails ,params)
    },
    getUnBusinessPayAdd({commit},params){   //新增非业务支付申请
        return ajax.post(api.unBusinessPayAdd ,params)
    },
    getUnBusinessPayEdit({commit},params){   //修改业务支付申请
        return ajax.post(api.unBusinessPayEdit ,params)
    },
    getUnBusinessPayAudit({commit},params){   //审批业务支付申请
        return ajax.post(api.unBusinessPayAudit ,params)
    },
    getUnBusinessPayConfirmPay({commit},params){   //业务支付申请支付确认
        return ajax.post(api.unBusinessPayConfirmPay ,params)
    },
    getUnBusinessPayAuditObtain({commit},params){
        return ajax.post(api)
    }
}

export default {
    actions
}