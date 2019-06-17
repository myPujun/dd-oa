<!-- 新增收款通知 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span>订单号</span></label>
                <h3 class="hint_1">2019051603</h3>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">收款对象</span></label>
                <input type="text" placeholder="业务活动执行备用金借款">
                <div class="icon_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收款金额</span></label>
                <input type="text" placeholder="请输入有效金额">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">预收日期</span></label>
                <input type="text" placeholder="请选择预收日期">
                <div class="icon_right time"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">收款方式</span></label>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>收款内容</span></label>
                <input type="text" placeholder="请输入收款内容">
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
        this.ddSet.setTitleRight({title:'新增收款通知',text:'保存'}).then(res => {
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
