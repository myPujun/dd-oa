//业务审核首页
import businessReview from '../pages/businessReview/index'
//修改订单
import businessOrder from '../pages/businessReview/businessRedact'

const routes = [
    {
        path:'/businessReview',
        component:businessReview,
    },
    {
        path:'/businessOrder',
        component:businessOrder,
    },
]

export default routes  