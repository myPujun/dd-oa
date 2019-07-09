<!-- 编辑非业务支付申请 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c" @click="chosenPayType">
                <label class="title"><span>支付类别</span></label>
                <input type="text" readonly v-model="editData.uba_type">
            </li>
            <li class="flex li_auto" v-if="editData.uba_type>0 ">
                <label class="title"><span class="must">支付用途</span></label>
                <textarea v-model="editData.uba_function" placeholder="请输入支付用途内容"></textarea>
            </li>
            <li class="flex flex_a_c" @click="chosenPayFunction" v-else>
                <label class="title"><span class="must">支付用途</span></label>
                <input type="text" readonly v-model="editData.uba_function" placeholder="请选择支付用途">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex li_auto">
                <label class="title"><span>用途说明</span></label>
                <input type="text" v-model="editData.uba_instruction" placeholder="请输入用途说明内容">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收款银行</span></label>
                <input type="text" v-model="editData.uba_receiveBank" placeholder="请输入收款银行">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>账户名称</span></label>
                <input type="text" v-model="editData.uba_receiveBankName" placeholder="请输入账户名称">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收款账号</span></label>
                <input type="text" v-model="editData.uba_receiveBankNum" placeholder="请输入收款账号">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">金额</span></label>
                <input type="text" v-model="editData.uba_money" placeholder="请输入有效金额">
            </li>
            <li class="flex flex_a_c flex_s_b" @click="selectDate">
                <label class="title"><span class="must">预付日期</span></label>
                <input type="text" readonly :value="editData.uba_foreDate" placeholder="请选择日期"  >
                <div class="icon_right time"></div>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea v-model="editData.uba_remark" placeholder="请输入备注"></textarea>
            </li>
        </ul>
        <top-nav :title='type == "add" ? "添加非业务支付信息":"编辑非业务支付信息"' :text='"保存"' @rightClick="submit"></top-nav>
    </div>
</template>

<script>
import {
	mapActions,
	mapState
} from 'vuex'
import * as dd from 'dingtalk-jsapi'
import {formatDate} from '../../assets/js/date.js'

export default {
    name:"",
    data() {
        return {
            editData:{},
            then:0,
            type:'',
            paytype:0,
            payfunction:0,
            //oID:'',
        };
    },
    filters:{
        formatDate(time){
            let date = new Date(time)
            return formatDate(date,'yyyy-MM-dd')
        }
    },
    components: {},
    computed: { },
    created(){
       let {uba_id,type} = this.$route.query        
        this.type = type
        // this.paytype = paytype
        // this.payfunction = payfunction
        // this.editData.uba_oid = oID
        if(type == 'EDIT'){
            let params = {
                uba_id           
            }
            this.getUnBusinessPayDetails(params).then(res => {
                this.editData = res.data
                if(this.editData.uba_type == 0) {
                   if(this.editData.uba_function == "业务活动执行备用金借款") {
                        this.paytype = 0
                        this.payfunction = 0
                   } else{                       
                        this.paytype = 1
                        this.payfunction = 1
                   }
                }                
                //this.foreDate = formatDate(this.editData.uba_foreDate, 'yyyy-MM-dd')
            })
        }
    },
    mounted() {
        //this.editData.uba_foreDate = formatDate(this.editData.uba_foreDate, 'yyyy-MM-dd')
    },
    methods: {
        ...mapActions([
            'getUnBusinessNature',
            'getUnBusinessPayFunction',
            'getUnBusinessPayDetails',
            'getUnBusinessPayEdit'
        ]),
        submit(item){ //提交
            if(!this.editData.uba_function){
                this.ddSet.setToast({text:'支付用途不能为空'})
                return
            }
            if(!this.editData.uba_money){
                this.ddSet.setToast({text:'请填写金额'})
                return
            }
            if(!this.editData.uba_foreDate){
                this.ddSet.setToast({text:'预付日期不能为空'})
                return
            }
            this.editData.managerid = 24 //测试ID
            this.ddSet.showLoad()
            this.getUnBusinessPayEdit(this.editData).then(res => {
                this.ddSet.hideLoad()
                if(res.data.status){
                    this.ddSet.setToast({text:'编辑信息成功'}).then(res => {
                        this.$router.go(-1)
                    })
                }else{
                    this.ddSet.setToast({text:res.data.msg})
                }
            }).catch(err => {
                this.ddSet.hideLoad()
            })
        },
        selectDate(){ //活动日期
			let _this = this
			_this.ddSet.setDatepicker().then(res => {
                _this.$set(this.editData,'uba_foreDate',res.value)
            })
        },                    
        chosenPayType(){   //支付类别
            let _this = this
            this.getUnBusinessNature({type:this.paytype}).then(res => {
                //console.log(res)
                let source = []
                let selectedKey = _this.editData.uba_type
                res.data.map((item,index) => {
                    let obj = {
                        key:item.value,
                        value:item.key
                    }
                	source.push(obj)
                })
                _this.ddSet.setChosen({source,selectedKey}).then(res => {
                    _this.$set(_this.editData,'uba_type',res.value)
                    _this.$set(_this.editData,'uba_type_text',res.key)
                })
            })
        },                 
        chosenPayFunction(){   //支付用途
            let _this = this
            console.log(this.payfunction)
            this.getUnBusinessPayFunction({type:this.payfunction}).then(res => {
                //console.log(res)
                let source = []
                let selectedKey = _this.editData.uba_function
                res.data.map((item,index) => {
                    let obj = {
                        key:item.value,
                        value:item.key
                    }
                    source.push(obj)
                })
                _this.ddSet.setChosen({source,selectedKey}).then(res => {
                    _this.$set(_this.editData,'uba_function',res.value)
                    _this.$set(_this.editData,'uba_function_text',res.key)
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

