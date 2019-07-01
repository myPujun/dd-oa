<!-- 添加联系人 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span class="must">联系人</span></label>
                <input type="text" placeholder="请输入主要联系人姓名">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">联系号码</span></label>
                <input type="text" placeholder="请选择客户的电话号码">
            </li>
        </ul>
        <top-nav title="添加联系人信息" text="保存" @rightClick="submit"></top-nav>
    </div>
</template>

<script>
export default {
    name:"",
    data() {
       return {
           fleg:null,
       };
    },
    components: {},
    computed: {},
    created(){
        let {flag} = this.$route.query

    },
    mounted() {

    },
    methods: {
        submit(){
            if(this.fleg){

            }
        }
    },
}
</script>

<style scoped lang='scss'>

</style>
