import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import customerManage from './modules/customerManage'
import test from './modules/test'
import addOrders from './modules/addOrders'
import receipt from './modules/receipt'
<<<<<<< HEAD
import billManage from './modules/billManage'
=======
>>>>>>> fc4a467b5a983b0ed6a2268a0a55d2b12a25724d

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        customerManage,
        receipt,
        test,
<<<<<<< HEAD
        addOrders,
        billManage
=======
        addOrders
>>>>>>> fc4a467b5a983b0ed6a2268a0a55d2b12a25724d
    }
})