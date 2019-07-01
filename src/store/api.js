let baseUrl =  process.env.NODE_ENV === 'production' ? '' : '/api'
const api = {
    get user(){  //验证是否已绑定钉钉userid用户
        return baseUrl+'/tools/dingtalk_login.ashx?action=dingtalk_userid_validate'
    },
    get customerLlist(){    //查看客户分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_list'
    },
    get customerDetails(){  //客户详情
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_show'
    },
    get addClient(){
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_add'
    },
    get addOrder(){ //新增订单
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=order_edit'
    },
    get allcustomer(){  //所有客户信息数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_allcustomer'
    },
    get contractprices(){   //合同造价
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