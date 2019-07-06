import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home' //首页
 
//测试管理
import test from './test'

//客户管理
import customerManage from './customerManage'
//新增订单
import addOrders from './addOrders'
//订单查询
import shoppingCart from './shoppingCart'
//业务审核
import businessReview from './businessReview'
//特大业务
import bigbusiness from './bigbusiness'
//非业务支付申请
import nonBusinessApply from './nonBusinessApply'
//业务支付审核列表
import notAudit from './notAudit'
//收款通知
import receipt from './receipt'
//付款明细
import pay from './pay'
//发票通知
import billManage from './billManage'
//未收款订单
import unpaidManage from './unpaidManage'
//多付款订单
import overpayManage from './overpayManage'
//审核未通过订单
import unauditManage from './unauditManage'
//非业务支付申请
import unbusinessManage from './unbusinessManage'

let routes = [
    {
      path: '/',
      component: home
    }
]

routes = routes.concat(
    test,
    customerManage,
    addOrders,
    shoppingCart,
    businessReview,
    bigbusiness,
    nonBusinessApply,
    notAudit,
    receipt,
    pay,
    billManage,
    unpaidManage,
    overpayManage,
    unauditManage,
    unbusinessManage,
    [{
      path: '*',
      redirect: '/'
    }]
)

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

export default router

