<!-- 添加客户 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c flex_s_b" >
                <label class="title"><span>付款对象</span></label>
                <input type="text" :value="clientName" readonly>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>付款金额</span></label>
                <input type="text" v-model="addData.rpmoney">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>预付日期</span></label>
                <input type="text" v-model="addData.rpforedate" readonly >
            </li>
			<li class="flex flex_a_c flex_s_b">
			    <label class="title"><span>付款方式</span></label>
			    <input type="text" readonly v-model="addData.rp_method_text">
			</li>
            <li class="li_auto flex">
                <label class="title"><span>付款内容</span></label>
                <textarea v-model="addData.rpcontent"></textarea>
            </li>
        </ul>
        <ul class="looK_button_list c_flex">
            <router-link tag="li" :to="{path:'/checkDetail',query: {rp_id:addData.rp_id,type:'check'}}" style="background-color:#3395fa;">审批</router-link>
        </ul>
        <top-nav :title='"审批预付款"'></top-nav>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:"",
    data() {
        return {
            addData:{},
            clientName:'',  
            type:'',
            rpid:0
        };
    },
    components: {},
    computed: {...mapState(['addOrders'])},
    created(){
        let {type,rp_id} = this.$route.query
        this.type = type
        this.rpid=rp_id
        if(type == 'check'){
            let params = {
                rp_id,
                type,
                managerid:29
            }
            this.getReceiptDetails(params).then(res => {
                console.log(res.data)
                this.addData = res.data
                this.clientName=this.addData.c_name
                this.clientId=this.addData.c_id
                this.addData.rpmoney=this.addData.rp_money
                this.addData.rpforedate = this.addData.rp_foredate
                this.addData.rpmethod=this.addData.rp_method
                this.addData.rp_method_text= this.addData.pm_name
                this.addData.rpcontent = this.addData.rp_content
            })
        }
    },
    mounted() {
       
    },
    methods: {
        ...mapActions([
            'getReceiptDetails'
        ])
    },
    beforeDestroy(){
        
    }
}
</script>

<style scoped lang="scss">
    .looK_button_list{
        li{
            outline: none;
            background: none;
            border: none;
            width: 6.9rem;
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            color: #FFF;
            font-size: .36rem;
            margin: 0 auto;
            border-radius: 4px;
            margin-bottom: .2rem;
        }
    }
</style>

