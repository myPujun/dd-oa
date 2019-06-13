import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home' //首页
 
//客户管理
import customerManage from './customerManage'
//新增订单
import addOrders from './addOrders'

let routes = [
    {
      path: '/',
      component: home
    }
]

routes = routes.concat(
    customerManage,
    addOrders,
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

