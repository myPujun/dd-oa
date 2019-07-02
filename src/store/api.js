let baseUrl =  process.env.NODE_ENV === 'production' ? '' : '/api'
const api = {
    
    ///钉钉授权绑定 start--------------------------------------------------------
    get dingtalkUseridValidate(){  //验证是否已绑定钉钉userid用户
        return baseUrl+'/tools/dingtalk_login.ashx?action=dingtalk_userid_validate'
    },
    get userNameValidate(){  //验证用户名是否可绑定
        return baseUrl+'/tools/dingtalk_login.ashx?action=username_validate'
    },
    get managerOauthBind(){  //用户绑定钉钉userid并授权免登
        return baseUrl+'/tools/dingtalk_login.ashx?action=dingtalk_userid_validate'
    },
    ///钉钉授权绑定 end--------------------------------------------------------


    ///数据初始化 start--------------------------------------------------------
    get contractPrices(){   //合同造价数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_contractprice'
    },
    get fStatus(){   //订单状态数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_fstatus'
    },
    get dStatus(){   //接单状态数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_dstatus'
    },
    get checkStatus(){   //审批状态数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_checkstatus'
    },
    get lockStatus(){   //锁单状态数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_lockstatus'
    },
    get invoiceConfirmStatus(){   //开票状态数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_invoiceconfirmstatus'
    },
    get pushStatus(){   //推送上级审批数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_pushstatus'
    },
    get area(){ //活动归属地数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_area'
    },
    get allCustomer(){  //所有客户信息数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_allcustomer'
    },
    get contactsByCid(){    //根据客户ID获取主要联系人及号码
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_contactsbycid'
    },
    get employeebyarea(){   //根据活动归属地ID获取组织架构及人员
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_employeebyarea'
    },
    get unBusinessNature(){   //非业务支付申请支付类别
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_unbusinessnature'
    },
    get unBusinessPayFunction(){   //非业务支付员工往来支付用途
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_unbusinesspayfunction'
    },
    get nature(){   //业务性质数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_nature'
    },
    get natureDetail(){   //业务明细数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_naturedetail'
    },
    get payMethod(){   //支付方式数据绑定
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=init_paymethod'
    },
    ///数据初始化 end--------------------------------------------------------


    ///客户管理模块 start--------------------------------------------------------
    get customerList(){    //查看客户分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_list'
    },
    get customerDetails(){  //查看客户详细信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_show'
    },
    get customerAdd(){  //新增客户详情
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_add'
    },
    get customerEdit(){ //编辑客户详情
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=customer_edit'
    },
    get contactAdd(){   //新增次要联系人
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=contact_add'
    },
    get contactEdit(){   //编辑主、次要联系人
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=contact_edit'
    },
    ///客户管理模块 end--------------------------------------------------------


    ///订单管理模块 start--------------------------------------------------------
    get orderList(){ //订单分页数据列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=order_list'
    },
    get orderEdit(){ //新增和修改订单信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=order_edit'
    },
    get orderDetails(){ //查看订单详细信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=order_show'
    },


    get unBusinessPayList(){ //非业务支付申请分页数据列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=unbusinesspay_list'
    },
    get unBusinessPayDetails(){ //查看非业务支付申请
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=unbusinesspay_show'
    },
    get unBusinessPayAdd(){ //新增非业务支付申请
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=unbusinesspay_add'
    },  
    get unBusinessPayEdit(){ //修改业务支付申请
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=unbusinesspay_edit'
    },  
    get unBusinessPayAudit(){ //审批业务支付申请
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=unbusinesspay_audit'
    },  
    get unBusinessPayConfirmPay(){ //业务支付申请支付确认
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=unbusinesspay_confirm_pay'
    },


    get financeAdd(){ //新增收款通知\付款通知
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=finance_add'
    },
    get financeAudit(){ //审批业务信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=finance_audit'
    },
    

    get invoiceList(){ //发票申请分页数据列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=invoice_list'
    },
    get invoiceDetails(){ //查看发票申请
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=invoice_show'
    },
    get invoiceAdd(){ //新增发票申请
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=invoice_add'
    },
    get invoiceAudit(){ //审批发票申请
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=invoice_audit'
    },
    get invoiceConfirm(){ //确认发票申请是否已开票
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=invoice_confirm'
    },


    get payList(){ //预付款审核分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=pay_list'
    },
    get payDetails(){ //查看预付款信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=pay_show'
    },
    get payAudit(){ //审批预付款信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=pay_audit'
    },
    get payConfirm(){ //预付款确认支付
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=pay_confirm'
    },
    ///订单管理模块 end--------------------------------------------------------


    ///通知管理模块 start--------------------------------------------------------
    get receiptList(){ //收款通知分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=receipt_list'
    },
    get paymentList(){ //付款通知分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=payment_list'
    },
    get paydetailList(){ //付款明细分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=paydetail_list'
    },
    get paydetailDetails(){ //查看付款明细详细信息
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=paydetail_show'
    },
    get billList(){ //开票通知分页列表
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=bill_list'
    },
    ///通知管理模块 end--------------------------------------------------------

    ///公共方法管理模块 start--------------------------------------------------------    
    get upLoadFile(){
        return baseUrl+'/tools/dingtalk_ajax.ashx?action=UpLoadFile'
    }
    ///公共方法管理模块 end-------------------------------------------------------- 
}
export {
    api
}