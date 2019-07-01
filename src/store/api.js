let baseUrl =  process.env.NODE_ENV === 'production' ? '' : '/api'
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
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_list'
    },
    get customerDetails(){  //查看客户详细信息
        return baseUrl+'/dingtalk_ajax.ashx?action=customer_show'
    },
    get initFStatus(){  //订单状态数据绑定
        return baseUrl+'/dingtalk_ajax.ashx?action=init_fstatus'
    },
    get addClient(){    //新增客户信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_add'
    },
    get addOrder(){ //新增订单信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=order_edit'
    },
    get allcustomer(){  //所有客户信息数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_allcustomer'
    },
    get contractprices(){   //合同造价数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_contractprice'
    },
    get contactsbycid(){    //根据客户ID获取主要联系人及号码
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_contactsbycid'
    },
    get upLoadFile(){
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=UpLoadFile'
    },
    get dstatus(){  //接单状态数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_dstatus'
    },
    get area(){ //活动归属地数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_area'
    },
    get employeebyarea(){   //根据活动归属地ID获取组织架构及人员
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_employeebyarea'
    },
    get receiptlist(){   //收款通知列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=receipt_list'
    }

}
export {
    api
}