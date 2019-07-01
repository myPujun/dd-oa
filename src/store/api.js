const baseUrl = '/api'
const api = {
    get dingtalk_userid_validate(){  //验证是否已绑定钉钉userid用户
        return baseUrl+'/dingtalk_login.ashx?action=dingtalk_userid_validate'
    },
    get username_validate(){  //验证用户名是否可用
        return baseUrl+'/dingtalk_login.ashx?action=username_validate'
    },
    get manager_oauth_bind(){  //用户绑定钉钉userid并授权免登
        return baseUrl+'/dingtalk_login.ashx?action=manager_oauth_bind'
    },
    get customerLlist(){    //查看客户分页列表
        return baseUrl+'/dingtalk_ajax.ashx?action=customer_list'
    },
    get customerDetails(){
        return baseUrl+'/dingtalk_ajax.ashx?action=customer_show'
    },
    get initFStatus(){
        return baseUrl+'/dingtalk_ajax.ashx?action=init_fstatus'
    }
}
export {
    api
}