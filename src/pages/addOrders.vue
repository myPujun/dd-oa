<!-- 新增订单 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span class="must">订单号</span></label>
                <h3 class="hint_1">系统自动生成</h3>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">客户</span></label>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>活动内容</span></label>
                <input type="text" placeholder="请输入活动内容">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>活动地点</span></label>
                <input type="text" placeholder="请输入活动地点">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系人</span></label>
                <input type="text" placeholder="请输入联系人">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系号码</span></label>
                <input type="text" placeholder="请输入联系号码">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>合同造价</span></label>
                <input type="text" placeholder="请输入合同造价">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>活动级别</span></label>
                <h3 class="hint_2">重大活动(系统根据输入金额自动识别)</h3>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>合同内容</span></label>
                <input type="text" placeholder="请输入合同内容">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>归属地</span></label>
                <div class="icon_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>业务员</span></label>
                <div class="icon_right add"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>活动日期</span></label>
                <input type="text" placeholder="请输入联系人">
                <div class="icon_right time"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>报账人员</span></label>
                <div class="icon_right add"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>策划人员</span></label>
                <div class="icon_right add"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>执行人员</span></label>
                <div class="icon_right add"></div>
            </li>
            
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>订单状态</span></label>
                <div class="icon_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>接单状态</span></label>
                <div class="icon_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>锁单状态</span></label>
                <div class="icon_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>推送上级审核</span></label>
                <div class="icon_right"></div>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea placeholder="请输入备注"></textarea>
            </li>
        </ul>
        <ul class="form_list">
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>附件</span></label>
                <div class="icon_right accessory"></div>
            </li>
        </ul>
        <div class="hint">允许格式包括.jpg,.png,.rar,.txt,.zip,.doc,.ppt,.xls,.pdf,.docx,.xlsx</div>
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

<style scoped lang='scss'>
    .hint{
        padding: .3rem;
        font-size: .2rem;
        color: #c0c0c2;
    }
    
</style>
