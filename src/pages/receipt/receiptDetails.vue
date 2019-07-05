<!-- 添加客户 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c flex_s_b" @click="changeClient">
                <label class="title"><span class="must">收款对象</span></label>
                <input type="text" :value="clientName" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">收款金额</span></label>
                <input type="text" v-model="addData.rp_money" placeholder="请输入收款金额">
            </li>
            <li class="flex flex_a_c flex_s_b" @click="selectDate">
                <label class="title"><span class="must">预收日期</span></label>
                <input type="text" :value="foredate" readonly placeholder="请选择预收日期">
                <div class="icon_right time"></div>
            </li>
			<li class="flex flex_a_c flex_s_b" @click="getMethodList">
			    <label class="title"><span class="must">收款方式</span></label>
			    <input type="text" readonly :value="addData.rp_method_text">
			    <div class="icon_right arrows_right"></div>
			</li>
            <li class="li_auto flex">
                <label class="title"><span>收款内容</span></label>
                <textarea v-model="addData.rp_content" placeholder="请输入收款内容"></textarea>
            </li>
        </ul>
        <top-nav :title='type == "add" ? "添加收款通知":"编辑收款通知"' :text='"保存"' @rightClick="submit"></top-nav>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:"",
    data() {
        return {
            addData:{},
            clientList:[],
            clientName:'请选择收款对象',
            clientId:0,            
            type:'',
            foredate:''
        };
    },
    components: {},
    computed: {...mapState(['addOrders'])},
    created(){
        let {type,rp_id} = this.$route.query
        this.type = type
        if(type == 'EDIT'){
            let params = {
                rp_id
            }
            this.getReceiptDetails(params).then(res => {
                this.addData = res.data
                this.clientName=this.addData.c_name
                this.clientId=this.addData.c_id
                this.foredate = this.addData.rp_foredate
            })
        }
    },
    mounted() {
        this.clientCallBack(this.addOrders.selectClientArray)
    },
    methods: {
        ...mapActions([
            'getAllCustomer',
            'getCustomerAdd',
            'getCustomerEdit',
            'getReceiptDetails',
            'getMethod',
            'methodData'
        ]),
        submit(item){ //提交
            if(!this.typeName){
                this.ddSet.setToast({text:'请选择客户类别'})
                return
            }
            if(!this.addData.c_name){
                this.ddSet.setToast({text:'请填写客户名称'})
                return
            }
            if(!this.addData.co_name && this.type == 'add'){
                this.ddSet.setToast({text:'主要联系人不能为空'})
                return
            }
            if(!this.addData.co_number && this.type == 'add'){
                this.ddSet.setToast({text:'主要联系号码不能为空'})
                return
            }
            this.addData.managerid = 14 //测试ID
            this.ddSet.showLoad()
            if(this.type == 'add'){
                this.getCustomerAdd(this.addData).then(res => {
                    this.ddSet.hideLoad()
                    if(res.data.status){
                        this.ddSet.setToast({text:'新增客户成功'})
                        this.$router.go(-1)
                    }else{
                        this.ddSet.setToast({text:res.data.msg})
                    }
                }).catch(err => {
                    this.ddSet.hideLoad()
                })
            }else{
                this.getCustomerEdit(this.addData).then(res => {
                    this.ddSet.hideLoad()
                    if(res.data.status){
                        this.ddSet.setToast({text:'编辑客户成功'})
                    }else{
                        this.ddSet.setToast({text:res.data.msg})
                    }
                }).catch(err => {
                    this.ddSet.hideLoad()
                })
            }
        },
        chosen(item){
            let selectedKey,source
            if(item == 'type'){
                source = this.typeList
                selectedKey = this.typeName
            }else if(item == 'enabled'){
                source = this.enabled
                selectedKey = this.enabledName
            }else{
                source = this.flag
                selectedKey = this.flagName
            }
            this.ddSet.setChosen({source,selectedKey}).then(res => {
                if(item == 'type'){
                    this.$set(this,'typeName',res.key)
                    this.$set(this.addData,'c_type',res.value)
                }else if(item == 'enabled'){
                    this.$set(this,'enabledName',res.key)
                    this.$set(this.addData,'c_isUse',res.value)
                }else{
                    this.$set(this,'flagName',res.key)
                    this.$set(this.addData,'c_flag',res.value)
                }
            })
        },
        changeClient(){ //选择客户
			let _this = this;
			// _this.clientName = '123123'
			// return;
			this.$router.push({ path: '/addOrders/customerSelect', query: { selected_id: _this.clientId }})
        },
		clientCallBack:function(_selectData){
			console.log(_selectData)
			if(_selectData.length){
				this.clientName = _selectData[0].name;
				this.clientId = _selectData[0].id;
			}
			else{
				this.clientName = '请选择';
				this.clientId = 0;
			}
		},
        selectDate(){ //活动日期
			let _this = this
			dd.biz.calendar.datepicker({
				onSuccess : function(result) {
					//onSuccess将在点击确定之后回调
					/*{
						start: 1514908800000,
						end: 1514995200000,
						timezone:8
					}
					*/
				   _this.foredate =result.value
				   _this.$set(_this.addData,'rp_foredate',_this.foredate)
				},
				onFail : function(err) {}
			})
        },
        getMethodList(){//收款方式
            let _this = this
            this.getMethod({managerid:14}).then(res => {
                    console.log(res)
                let source = []
                res.data.map((item,index) => {
                    let obj = {
                        key:item.value,
                        value:item.key
                    }
                	source.push(obj)
                })
                console.log(source)
                _this.ddSet.setChosen({source}).then(res => {
                console.log(res)
                    _this.$set(_this.addData,'rp_method',res.value)
                    _this.$set(_this.addData,'rp_method_text',res.key)
                })
            })
        }
    },
    beforeDestroy(){
        
    }
}
</script>

<style scoped lang="scss">
        
</style>

