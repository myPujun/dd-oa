const baseUrl = '/api'
const api = {
    get getUser(){  //验证是否已绑定钉钉userid用户
        return baseUrl+'/dingtalk_login.ashx?action=dingtalk_userid_validate'
    }
}
export {
    api
}