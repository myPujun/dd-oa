import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import customerManage from './modules/customerManage'
import test from './modules/test'
import addOrders from './modules/addOrders'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        customerManage,
        test,
        addOrders
    }
})