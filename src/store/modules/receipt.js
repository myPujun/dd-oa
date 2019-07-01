import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getReceiptList({commit},params){   //收款通知列表
        return ajax.post(api.receiptlist,params)
    },
}

export default {
    actions
}