<!-- 添加联系人 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span class="must">联系人</span></label>
                <input type="text" v-model="addData.co_name" placeholder="请输入主要联系人姓名">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">联系号码</span></label>
                <input type="text" v-model="addData.co_number" placeholder="请选择客户的电话号码">
            </li>
        </ul>
        <top-nav :title="navTitle" text="保存" @rightClick="submit"></top-nav>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"",
    data() {
       return {
           datails:null,
           type:null,
           navTitle:'添加联系人信息',
           addData:{}
       };
    },
    components: {},
    computed: {},
    created(){
        let {datails,type} = this.$route.query
        this.datails = datails
        this.type = type
        
        if(type == 'EDIT'){
            this.navTitle = '编辑联系人信息'
        }
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'getAddLinkman'
        ]),
        submit(){
            
            let {co_name,co_number} = this.addData
            if(co_name == undefined){
                this.ddSet.setToast({text:'请输入主要联系人姓名'})
                return
            }
            if(!co_number == undefined){
                this.ddSet.setToast({text:'请选择客户的电话号码'})
                return
            }
            let {c_id} = this.datails
            let params = {
                co_name,
                co_number,
                c_id,
                managerid:14
            }
            if(this.type == 'add'){
                this.getAddLinkman(params).then(res => {
                    if(!res.data.status){
                        this.ddSet.setToast({text:res.data.msg})
                    }else{
                        this.ddSet.setToast({text:"提交成功"})
                    }
                })
            }else{
                
            }
        }
    },
}
</script>

<style scoped lang='scss'>

</style>
