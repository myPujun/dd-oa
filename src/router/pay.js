//付款通知列表
import payDetailList from '../pages/pay/index'  
//付款明细列表
import payList from '../pages/pay/payDetail'  

const routes = [
    {
        path:'/pay',
        component:payDetailList,
    },
    {
        path:'/payDetail',
        component:payList,
    }
]

export default routes