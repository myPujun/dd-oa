import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home' //首页
import addLinkman from '@/pages/addLinkman' //添加联系人
import addOrders from '@/pages/addOrders' //新增订单

import customerManage from './customerManage'

let routes = [
    {
      path: '/',
      component: home
    }
]

routes = routes.concat(
    customerManage,
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

