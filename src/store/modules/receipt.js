import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getReceiptList({commit},params){   //收款通知列表
        return ajax.post(api.receiptList ,params)
    },
    getReceiptDetails({commit},params){   //收款通知明细
        return ajax.post(api.payDetails ,params)
    },
    getMethod({commit},params){   //收款方式
        return ajax.post(api.payMethod ,params)
    }
}

export default {
    actions
}