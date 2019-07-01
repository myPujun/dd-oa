import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import customerManage from './modules/customerManage'
import addOrders from './modules/addOrders'
import receipt from './modules/receipt'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        customerManage,
        addOrders,
        receipt
    }
})