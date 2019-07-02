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
<<<<<<< HEAD
//收款通知
import receipt from './receipt'
//发票通知
import billManage from './billManage'
=======
//已收款
import receipt from './receipt'
>>>>>>> fc4a467b5a983b0ed6a2268a0a55d2b12a25724d

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
<<<<<<< HEAD
    billManage,
=======
>>>>>>> fc4a467b5a983b0ed6a2268a0a55d2b12a25724d
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

