<!-- 查看发票通知详细信息 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span>订单号</span></label>
                 {{datails.inv_oid}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>客户</span></label>
                {{datails.c_name}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>购买方名称</span></label>
                {{datails.inv_purchaserName}}
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>纳税人识别号</span></label>
                {{datails.inv_purchaserNum}}
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>地址</span></label>
                {{datails.inv_purchaserAddress}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>电话</span></label>
                {{datails.inv_purchaserPhone}}
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>开户行</span></label>
                {{datails.inv_purchaserBank}}
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>银行账号</span></label>
                {{datails.inv_purchaserBankNum}}
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>应税劳务、服务名称</span></label>
                {{datails.inv_serviceType}} - {{datails.inv_serviceName}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>开票金额</span></label>
                {{datails.inv_money}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>送票方式</span></label>
                {{datails.inv_sentWay}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>开票区域</span></label>
                {{datails.inv_darea}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收票人名称</span></label>
                {{datails.inv_receiveName}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收票人电话</span></label>
                {{datails.inv_receivePhone}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收票人地址</span></label>
                {{datails.inv_receiveAddress}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>备注</span></label>
                {{datails.inv_remark}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:"",
    data() {
       return {

       };
    },
    components: {},
    computed: {},
    created(){
        this.ddSet.setTitleRight({title:'发票通知详细信息'}).then(res => {
            if(res){
                
            }
        })
        let {id} = this.$route.query
        this.clientId = id
        this.getBillDetails({inv_id:id}).then(res => {
            this.datails = res.data
        })
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'getBillDetails'
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

