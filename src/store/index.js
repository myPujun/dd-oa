import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import customerManage from './modules/customerManage'
import test from './modules/test'
import addOrders from './modules/addOrders'
import receipt from './modules/receipt'
import pay from './modules/pay'
import billManage from './modules/billManage'
import unbusinessManage from './modules/unbusinessManage'
import notAudit from './modules/notAudit'
import expectPayAudit from './modules/expectPayAudit'
import performanceStat from './modules/performanceStat'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        customerManage,
        receipt,
        pay,
        test,
        addOrders,
        billManage,
        unbusinessManage,
        notAudit,
        expectPayAudit,
        performanceStat,
        message
    }
})