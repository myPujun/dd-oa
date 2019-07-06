<!-- 审批业务支付申请 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c">
                <label class="title"><span>审批类型</span></label>
                <input type="text" readonly placeholder="请选择审批类型（必填）">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span class="must">审批状态</span></label>
                <input type="text" readonly placeholder="请选择审批状态（必填）">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea placeholder="请输入备注"></textarea>
            </li>
        </ul>
        <top-nav :title="审批业务支付申请" :text='"保存"' @rightClick="submit"></top-nav>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"",
    data() {
        return {
            addData:{},
            typeList:[  //类型
                {
                    key:'部门审批',
                    value:'1'
                },
                {
                    key:'财务审批',
                    value:'2'
                },
                {
                    key:'总经理审批',
                    value:'3'
                },
            ],
            typeName:'',
            flag:[  //审核
                {
                    key:'待审',
                    value:'0'
                },
                {
                    key:'未通过',
                    value:'1'
                },
                {
                    key:'通过',
                    value:'2'
                },
            ],
            flagName:"",
            then:0,
        };
    },
    components: {},
    computed: {},
    created(){
        let {c_id} = this.$route.query
        let params = {
            c_id
        }
        // 初始化数据
        this.getCustomerObtain(params).then(res => {
            this.addData = res.data
            this.typeName = this.typeList[this.addData.c_type].key
            this.flagName = this.flag[this.addData.c_flag].key
            this.enabledName = this.addData.c_isUse?'是':'否'
        })
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'getUnBusinessPayDetails',
            'getUnBusinessPayAudit'
        ]),
        submit(item){ //提交
            if(!this.typeName){
                this.ddSet.setToast({text:'请选择审批类型'})
                return
            }
            if(!this.flagName){
                this.ddSet.setToast({text:'请选择审批状态'})
                return
            }
            this.addData.managerid = 14 //测试ID
            this.ddSet.showLoad()
            this.getUnBusinessPayAudit(this.addData).then(res => {
                this.ddSet.hideLoad()
                if(res.data.status){
                    this.ddSet.setToast({text:'审批业务支付信息成功'})
                    this.$router.go(-1)
                }else{
                    this.ddSet.setToast({text:res.data.msg})
                }
            }).catch(err => {
                this.ddSet.hideLoad()
            })           
        },
        chosen(item){
            let selectedKey,source
            if(item == 'type'){
                source = this.typeList
                selectedKey = this.typeName
            }else if(item == 'enabled'){
                source = this.enabled
                selectedKey = this.enabledName
            }else{
                source = this.flag
                selectedKey = this.flagName
            }
            this.ddSet.setChosen({source,selectedKey}).then(res => {
                if(item == 'type'){
                    this.$set(this,'typeName',res.key)
                    this.$set(this.addData,'c_type',res.value)
                }else if(item == 'enabled'){
                    this.$set(this,'enabledName',res.key)
                    this.$set(this.addData,'c_isUse',res.value)
                }else{
                    this.$set(this,'flagName',res.key)
                    this.$set(this.addData,'c_flag',res.value)
                }
            })
        },
    },
    beforeDestroy(){
        
    }
}
</script>

<style scoped lang="scss">
        
</style>

