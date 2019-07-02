import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getPaytList({commit},params){   //付款通知列表
        return ajax.post(api.paymentList ,params)
    },
    getPayDetailList({commit},params){   //付款明细列表
        return ajax.post(api.paydetailList ,params)
    },
}

export default {
    actions
}