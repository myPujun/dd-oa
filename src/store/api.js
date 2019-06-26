let baseUrl =  process.env.NODE_ENV === 'production' ? '' : '/api'
const api = {
    get user(){  //验证是否已绑定钉钉userid用户
        return baseUrl+'/tools/dingtalk_login.ashx?action=dingtalk_userid_validate'
    },
    get customerLlist(){    //查看客户分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_list'
    },
    get customerDetails(){
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_show'
    }
}
export {
    api
}