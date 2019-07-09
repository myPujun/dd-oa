<!-- 编辑非业务支付申请 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c">
                <label class="title"><span>支付类别</span></label>
                <!-- <h3 class="hint_1">{{editData.uba_type}}</h3> -->
                <input type="text" readonly v-model="editData.uba_type" placeholder="请选择支付类别">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">支付用途</span></label>
                <input type="text" v-model="editData.uba_function" placeholder="请选择支付用途">
                <div class="icon_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
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
        let {type,uba_id} = this.$route.query
        this.type = type
        if(type == 'EDIT'){
            let params = {
                uba_id           
            }
            this.getUnBusinessPayDetails(params).then(res => {
                this.editData = res.data
                //this.foreDate = formatDate(this.editData.uba_foreDate, 'yyyy-MM-dd')
            })
        }
    },
    mounted() {
        //this.editData.uba_foreDate = formatDate(this.editData.uba_foreDate, 'yyyy-MM-dd')
    },
    methods: {
        ...mapActions([
            'getUnBusinessPayDetails',
            'getUnBusinessPayEdit'
        ]),
        submit(item){ //提交
            console.log(this.editData.uba_type)
            // if(!this.editData.uba_type){
            //     this.ddSet.setToast({text:'支付类别不能为空'})
            //     return
            // }
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
        }
    },
    beforeDestroy(){
        
    }
}
</script>

<style scoped lang="scss">
        
</style>

