<!-- 查看业务支付审核 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>订单号</span></label>
                <input type="text" placeholder="219231">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>付款对象</span></label>
                <input type="text">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>付款内容</span></label>
                <input type="text">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>付款金额</span></label>
                <input type="text">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>预付日期</span></label>
                <input type="text">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>申请人</span></label>
                <input type="text">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>区域</span></label>
                <input type="text">
            </li>
        </ul>
        <div class="upImgBtn c_flex">
            <label class="title flex flex_a_c"><span>图片</span></label>
            <div class="uploadImg">
                <input type="file" name="" id="">
            </div>
        </div>
        <div class="form_btn">
            <button>审批</button>
        </div>
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
        this.ddSet.setTitleRight({title:'添加非业务支付申请',text:'保存'}).then(res => {
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
