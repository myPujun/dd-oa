import {api} from '../api'
import ajax from '../ajax'

const actions = {
    getAddOrders({commit},params){  //
        return ajax.post(api.addOrder,params)
    },
    getAllcustomer({commit},params){    //所有客户信息数据绑定
        return ajax.post(api.allcustomer,params)
    },
    getContractprices({commit},params){ //合同造价数据绑定
        return ajax.post(api.contractPrices,params)
    },
    getContactsbycid({commit},params){  //根据客户ID获取主要联系人及号码
        return ajax.post(api.contactsbycid,params)
    },
    getUpLoadFile({commit},params){
        return ajax.post(api.upLoadFile,params)
    },
    getFstatus({commit},params){    //订单状态数据绑定
        return ajax.post(api.fStatus,params)
    },
    getDstatus({commit},params){    //接单状态数据绑定
        return ajax.post(api.dStatus,params)
    },
    getPushstatus({commit},params){    //订单推送状态数据绑定
        return ajax.post(api.pushStatus,params)
    },
    getArea({commit},params){   //活动归属地数据绑定
        return ajax.post(api.area,params)
    },
    getEmployeebyarea({commit},params){ //根据活动归属地ID获取组织架构及人员
        return ajax.post(api.employeebyarea,params)
    },
	getLockStatus({commit},params){ //锁单状态数据绑定
	    return ajax.post(api.lockStatus,params)
	},
	/**
	 * 提交订单
	 */
	submitOrder({commit},params){
		return ajax.post(api.orderEdit,params)
	},
	/**
	 * 获取订单列表
	 */
	getOrderList({commit},params){
		return ajax.post(api.orderList,params)
	},
	/**
	 * 选择客户时使用
	 */
	changeSelectClient ({commit},clientArray) {
		commit("change_select_client_array", clientArray)
	},
}

const mutations = {
  change_select_client_array (state, clientArray) {
    state.selectClientArray = clientArray;
  }
};

const state = {
	selectClientArray : []
}

export default {
    actions,
	state,
	mutations
}