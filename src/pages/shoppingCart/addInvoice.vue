<!-- 新增发票申请 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span>订单号</span></label>
                <h3 class="hint_1">2019051603</h3>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">客户</span></label>
                <input type="text" placeholder="客户">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">购买方名称</span></label>
                <input type="text" placeholder="请输入购买方名称">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">纳税人识别号</span></label>
                <input type="text" placeholder="请输入纳税人识别号">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">购买方地址</span></label>
                <input type="text" placeholder="请输入购买方地址">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">购买方开户行</span></label>
                <input type="text" placeholder="请输入购买方开户行">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">购买方账号</span></label>
                <input type="text" placeholder="请输入购买方账号">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">应税劳务、服务名称</span></label>
                <input type="text" placeholder="请输入应税劳务、服务名称">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">开票金额</span></label>
                <input type="text" placeholder="请输入开票金额">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>送票方式</span></label>
                <input type="text" placeholder="请选择送票方式">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>开票区域</span></label>
                <input type="text" placeholder="请选择开票区域">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收票人名称</span></label>
                <input type="text" placeholder="请输入收票人名称">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收票人电话</span></label>
                <input type="text" placeholder="请输入收票人电话">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收票人地址</span></label>
                <input type="text" placeholder="请输入收票人地址">
            </li>
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea placeholder="请输入备注"></textarea>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"",
    data() {
       return {

       };
    },
    components: {},
    computed: {},
    created(){
        this.ddSet.setTitleRight({title:'新增发票申请',text:'保存'}).then(res => {
            if(res){

            }
        })
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style scoped lang='scss'>

</style>
