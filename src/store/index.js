import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import customerManage from './modules/customerManage'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        customerManage,
        test
    }
})