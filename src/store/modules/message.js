import {api} from '../api'
import ajax from '../ajax'

const actions = {    
    getMessageList({commit},params){   //消息列表
        return ajax.post(api.selfmessage ,params)
    },
    getMessageDetails({commit},params){   //消息详情
        return ajax.post(api.selfmessageDetail ,params)
    },
    deteleMessage({commit},params){   //删除消息
        return ajax.post(api.selfmessageDel ,params)
    },
    readMessage({commit},params){   //阅读消息
        return ajax.post(api.selfmessageRead ,params)
    }
}

export default {
    actions
}