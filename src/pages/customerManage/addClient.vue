<!-- 添加客户 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c">
                <label class="title"><span class="must">类型</span></label>
                <input type="text" placeholder="请选择与客户类型（必填）">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">客户</span></label>
                <input type="text" placeholder="请输入客户名称（必填）">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>客户简称</span></label>
                <input type="text" placeholder="请输入客户简称">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>税号</span></label>
                <input type="text" placeholder="请输入统一社会信用代码（税号）">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">主联系人</span></label>
                <input type="text" placeholder="请输入主要联系人姓名">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">联系号码</span></label>
                <input type="text" placeholder="请选择客户的电话号码">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>审核</span></label>
                <input type="text" placeholder="请输入联系人">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea placeholder="请输入备注"></textarea>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>启用</span></label>
                <div class="icon_right"></div>
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

