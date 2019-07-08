<!-- 添加客户 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="li_auto flex">
                <label class="title"><span>订单号</span></label>
                {{addData.rpdoid}}
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>付款对象</span></label>
                <input type="text" :value="clientName" readonly>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>付款金额</span></label>
                <input type="text" v-model="addData.rpdmoney">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>预付日期</span></label>
                <input type="text" v-model="addData.rpdforedate" readonly>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>收款内容</span></label>
                <textarea v-model="addData.rpdcontent"></textarea>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>文件</span></label>
                <textarea v-model="addData.rpcontent" ></textarea>
            </li>
            <li class="flex flex_a_c flex_s_b">
			    <label class="title"><span>审批类型</span></label>
			    <input type="text" readonly :value="addData.type_text">
			</li>
            <li class="flex flex_a_c flex_s_b" @click="changeFlag">
                <label class="title"><span>审批状态</span></label>
                <input type="text" readonly :value="addData.status_text">
			    <div class="icon_right arrows_right"></div>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>审批备注</span></label>
                <textarea v-model="addData.rpdremark"></textarea>
            </li>
        </ul>
        <top-nav :title='"审批付款明细"' :text='"保存"' @rightClick="submit" ></top-nav>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:"",
    data() {
        return {
            addData:{},
            clientName:'',  
            type:'',
            rpdid:0,
            typeList:[  //审批类型
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
            flagList:[  //审批状态
                {
                    key:'待审批',
                    value:'0'
                },
                {
                    key:'审批未通过',
                    value:'1'
                },
                {
                    key:'审批成功',
                    value:'2'
                },
            ]
        };
    },
    components: {},
    computed: {},
    created(){
        let {type,rpd_id} = this.$route.query
        this.type = type
        this.rpdid=rpd_id
        if(type == 'Check'){
            let params = {
                rpd_id:rpd_id,
                type:'check',
                managerid:29
            }
            this.getPayDetailEdit(params).then(res => {
                console.log(res.data)
                this.addData = res.data
                this.clientName=this.addData.c_name
                this.addData.rpdoid = this.addData.rpd_oid
                this.addData.rpdmoney=this.addData.rpd_money
                this.addData.rpdforedate = this.addData.rpd_foredate
                this.addData.rpdcontent = this.addData.rpd_content
                this.addData.rpdremark = this.addData.remark                
                this.addData.type_text = this.typeList[this.addData.type-1].key
                this.addData.status_text = this.flagList[this.addData.flag].key

                this.addData.rpdid=this.addData.rpd_id
                this.addData.status = this.addData.flag
            })
        }
    },
    mounted() {
    },
    methods: {
        ...mapActions([
            'getPayDetailEdit',
            'payDetailAudit'
        ]),
        submit(item){ //提交
            if(!this.addData.flag){
                this.ddSet.setToast({text:'请选择审批状态'})
                return
            }
            this.addData.managerid = 29 //测试ID
            this.ddSet.showLoad()
            if(this.type == 'Check'){
                console.log(this.addData)
                this.payDetailAudit(this.addData).then(res => {
                    this.ddSet.hideLoad()
                    if(res.data.status){
                        this.ddSet.setToast({text:'审核成功'}).then(res => {
                            this.$router.go(-1)
                        })
                    }else{
                        this.ddSet.setToast({text:res.data.msg})
                    }
                }).catch(err => {
                    this.ddSet.hideLoad()
                })
            }
        },
        changeFlag(){
            let _this = this
                let source =_this.flagList,selectedKey = _this.addData.status          
                _this.ddSet.setChosen({source,selectedKey}).then(res => {
                    _this.$set(_this.addData,'status',res.value)
                    _this.$set(_this.addData,'status_text',res.key)
                    console.log(_this.addData.status_text)
                })
        }
    },
    beforeDestroy(){
        
    }
}
</script>

<style scoped lang="scss">
        
</style>

