<!-- 查看非业务支付申请详细信息 -->
<template>
    <div class="body_gery" v-if="isDatails">
        <ul class="form_list">
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>支付类别</span></label>
                 {{datails.uba_type}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>支付用途</span></label>
                {{datails.uba_function}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>用途说明</span></label>
                {{datails.uba_instruction}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收款银行</span></label>
                {{datails.uba_receiveBank}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收款账户</span></label>
                {{datails.uba_receiveBankName}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收款账号</span></label>
                {{datails.uba_receiveBankNum}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>金额</span></label>
                {{datails.uba_money}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>预付日期</span></label>
                {{datails.uba_foreDate}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>备注</span></label>
                {{datails.uba_remark}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>附件</span></label>                
            </li>
        </ul>        
        <div class="hint">
            文件类型：gif,jpg,jpeg,png,bmp
        </div>
        <ul class="looK_button_list c_flex">
            <router-link tag="li" :to="{path:'/unBusinessPayAudit',query: {id:datails.uba_id}}" style="background-color:#3395fa;">审批</router-link>
            <router-link tag="li" :to="{path:'/unBusinessPayConfirmPay',query: {id:datails.uba_id}}" style="background-color:#47a21f;">确认支付</router-link>
        </ul>
        <top-nav title="非业务支付详细信息"></top-nav>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:"",
    data() {
       return {
           clientId:null,
           isIocn:[],
           datails:{},
           isDatails:false
       };
    },
    components: {},
    computed: {},
    created(){
        let {id} = this.$route.query
        this.clientId = id
        this.ddSet.showLoad()
        this.getUnBusinessPayDetails({uba_id:id}).then(res => {
            this.ddSet.hideLoad()
            this.datails = res.data
            this.isDatails = true
        }).catch(err => {
            this.ddSet.hideLoad()
        })
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'getUnBusinessPayDetails'
        ])
    },
}
</script>

<style scoped lang='scss'>
    .hint{
        padding: .3rem;
        font-size: .24rem;
        color: #fc0214;
        line-height: .4rem;
    }
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

