<!-- 确认支付业务支付申请 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c" @click="chosen('type')">
                <label class="title"><span>支付状态</span></label>
                <input type="text" readonly :value="typeName" placeholder="请选择审批类型（必填）">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" v-if="typeName == '已支付'">
                <label class="title"><span class="must">实付日期</span></label>
                <input type="text" v-model="addData.uba_foreDate" placeholder="请选择日期"  @click="selectDate">
                <div class="icon_right time"></div>
            </li>
            <li class="flex flex_a_c" @click="chosen('flag')">
                <label class="title"><span>付款方式</span></label>
                <input type="text" readonly :value="flagName" placeholder="请选择审批状态（必填）">
                <div class="icon_right arrows_right"></div>
            </li>
        </ul>
        <top-nav title="确认支付业务支付申请" :text='"保存"' @rightClick="submit"></top-nav>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"",
    data() {
        return {
            addData:{},
            typeName:'',
            statusList:[  //类型
                {
                    key:'待支付',
                    value:'false'
                },
                {
                    key:'已支付',
                    value:'true'
                },
            ],
            statusName:'',
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
        this.getUnBusinessPayAuditObtain(params).then(res => {
            this.addData = res.data
            this.typeName = this.typeList[this.addData.ctype].key
            this.flagName = this.flag[this.addData.cstatus].key
        })
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'methodData',
            'getUnBusinessPayAuditObtain',
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
                    this.ddSet.setToast({text:'审批非业务支付信息成功'})
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
            }else if(item == 'flag'){
                source = this.flag
                selectedKey = this.flagName
            }
            this.ddSet.setChosen({source,selectedKey}).then(res => {
                if(item == 'type'){
                    this.$set(this,'typeName',res.key)
                    this.$set(this.addData,'ctype',res.value)
                }else if(item == 'flag'){
                    this.$set(this,'flagName',res.key)
                    this.$set(this.addData,'cstatus',res.value)
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