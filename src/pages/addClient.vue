<!-- 添加客户 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span class="must">类型</span></label>
                <input type="text" placeholder="请选择与客户类型（必填）">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">客户</span></label>
                <input type="text" placeholder="请输入客户名称（必填）">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>税号</span></label>
                <input type="text" placeholder="请输入统一社会信用代码（税号）">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系人</span></label>
                <input type="text" placeholder="请输入主要联系人姓名">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系号码</span></label>
                <input type="text" placeholder="请选择客户的电话号码">
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
    mounted() {

    },
    methods: {

    },
}
</script>

<style scoped lang="scss">
        
</style>

