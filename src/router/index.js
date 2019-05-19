import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index' //首页
import client from '@/pages/client'  //客户管理
import addClient from '@/pages/addClient'   //添加客户
import addLinkman from '@/pages/addLinkman' //添加联系人
import addOrders from '@/pages/addOrders' //新增订单
import clientDetails from '@/pages/clientDetails' //客户详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/client',
      name: 'client',
      component: client
    },
    {
      path: '/addClient',
      name: 'addClient',
      component: addClient
    },
    {
      path: '/addLinkman',
      name: 'addLinkman',
      component: addLinkman
    },
    {
      path: '/addOrders',
      name: 'addOrders',
      component: addOrders
    },
    {
      path: '/clientDetails',
      name: 'clientDetails',
      component: clientDetails
    },
  ]
})
