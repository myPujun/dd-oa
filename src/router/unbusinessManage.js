//非业务支付申请管理首页
import unbusinessManage from '../pages/unbusinessManage/index'
//非业务支付申请详情
import unbusinessDetails from '../pages/unbusinessManage/unbusinessDetails'
//新增非业务支付申请
import UnBusinessPayAdd from '../pages/unbusinessManage/UnBusinessPayAdd'
//修改业务支付申请
import unBusinessPayEdit from '../pages/unbusinessManage/unBusinessPayEdit'
//审批业务支付申请
import unBusinessPayAudit from '../pages/unbusinessManage/unBusinessPayAudit'
//业务支付申请支付确认
import unBusinessPayConfirmPay from '../pages/unbusinessManage/unBusinessPayConfirmPay'

const routes = [
    {
        path:'/unbusinessManage',
        component:unbusinessManage,
    },
    {
        path:'/unbusinessDetails',
        component:unbusinessDetails,
    },
    {
        path:'/UnBusinessPayAdd',
        component:UnBusinessPayAdd,
    },
    {
        path:'/unBusinessPayEdit',
        component:unBusinessPayEdit,
    },
    {
        path:'/unBusinessPayAudit',
        component:unBusinessPayAudit,
    },
    {
        path:'/unBusinessPayConfirmPay',
        component:unBusinessPayConfirmPay,
    }
]

export default routes