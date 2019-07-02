import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getReceiptList({commit},params){   //收款通知列表
<<<<<<< HEAD
        return ajax.post(api.receiptlist,params)
=======
        return ajax.post(api.receiptList ,params)
    },
    getReceiptDetails({commit},params){   //收款通知明细
        return ajax.post(api.payDetails ,params)
>>>>>>> fc4a467b5a983b0ed6a2268a0a55d2b12a25724d
    },
}

export default {
    actions
}