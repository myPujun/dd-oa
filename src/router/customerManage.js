
// const customerManage = resolve => require(['../pages/customerManage/index'],resolve)
//客户管理首页
import customerManage from '../pages/customerManage/index'  
//添加客户
import addClient from '../pages/customerManage/addClient'
//客户详情
import clientDetails from '../pages/customerManage/clientDetails'

const routes = [
    {
        path:'/customerManage',
        component:customerManage,
    },
    {
        path:'/addClient',
        component:addClient,
    },
    {
        path:'/clientDetails',
        component:clientDetails,
    },
]

export default routes