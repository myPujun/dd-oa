//业务支付审核列表
import expectPayAudit from '../pages/expectPayAudit/index'
//查看业务支付审核
import expectPayAuditDetails from '../pages/expectPayAudit/details'

const routes = [
    {
        path:'/expectPayAudit',
        component:expectPayAudit,
    },
    {
        path:'/expectPayAuditDetails',
        component:expectPayAuditDetails,
    },
]

export default routes  