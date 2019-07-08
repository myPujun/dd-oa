import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getPaytList({commit},params){   //预付款列表
        return ajax.post(api.paymentList ,params)
    },
    getPayDetailList({commit},params){   //付款明细列表
        return ajax.post(api.paydetailList ,params)
    },
    getPayDetailEdit({commit},params){   //付款明细详情
        return ajax.post(api.paydetailDetails ,params)
    },
}

export default {
    actions
}