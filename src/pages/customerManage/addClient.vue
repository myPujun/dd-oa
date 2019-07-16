<!-- 添加客户 -->
<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c" @click="chosen('type')">
                <label class="title"><span class="must">类型</span></label>
                <input type="text" readonly :value="typeName" placeholder="请选择与客户类型（必填）">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">客户</span></label>
                <input type="text" v-model="addData.c_name" placeholder="请输入客户名称（必填）">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>税号</span></label>
                <input type="text" v-model="addData.c_num" placeholder="请输入统一社会信用代码（税号）">
            </li>
            <li class="flex flex_a_c" v-if="type == 'add'">
                <label class="title"><span class="must">主联系人</span></label>
                <input type="text" v-model="addData.co_name" placeholder="请输入主要联系人姓名">
            </li>
            <li class="flex flex_a_c" v-if="type == 'add'">
                <label class="title"><span class="must">联系号码</span></label>
                <input type="text" v-model="addData.co_number" placeholder="请输入客户的电话号码">
            </li>
            <li class="flex flex_a_c" @click="chosen('flag')">
                <label class="title"><span>审核</span></label>
                <input type="text" :value="flagName" readonly placeholder="请选择">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="chosen('enabled')">
                <label class="title"><span>启用</span></label>
                <input type="text" :value="enabledName" placeholder="请选择" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea v-model="addData.c_remarks" placeholder="请输入备注"></textarea>
            </li>
        </ul>
        <top-nav :title='type == "add" ? "添加客户信息":"编辑客户信息"' :text='"保存"' @rightClick="submit"></top-nav>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:"",
    data() {
        return {
            addData:{},
            typeList:[  //类型
                {
                    key:'普通客户',
                    value:'1'
                },
                {
                    key:'管理用客户',
                    value:'2'
                },
                {
                    key:'内部客户',
                    value:'3'
                },
            ],
            typeName:'',
            enabled:[   //启用
                {
                    key:'否',
                    value:false,
                },
                {
                    key:'是',
                    value:true
                }
            ],
            enabledName:'',
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
            type:'',
        };
    },
    components: {},
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo
        })
    },
    created(){
        let {type,c_id} = this.$route.query
        this.type = type
        if(type == 'EDIT'){
            let params = {
                c_id
            }
            this.getCustomerObtain(params).then(res => {
                this.addData = res.data
                this.typeName = this.typeList[this.addData.c_type-1].key
                this.flagName = this.flag[this.addData.c_flag].key
                this.enabledName = this.addData.c_isUse?'是':'否'
            })
        }
    },
    mounted() {
        
    },
    methods: {
        ...mapActions([
            'getAddClient',
            'getEditClient',
            'getCustomerObtain'
        ]),
        submit(item){ //提交
            if(!this.typeName){
                this.ddSet.setToast({text:'请选择客户类别'})
                return
            }
            if(!this.addData.c_name){
                this.ddSet.setToast({text:'请填写客户名称'})
                return
            }
            if(!this.addData.co_name && this.type == 'add'){
                this.ddSet.setToast({text:'主要联系人不能为空'})
                return
            }
            if(!this.addData.co_number && this.type == 'add'){
                this.ddSet.setToast({text:'主要联系号码不能为空'})
                return
            }
            this.addData.managerid = this.userInfo.id //测试ID
            this.ddSet.showLoad()
            if(this.type == 'add'){
                this.getAddClient(this.addData).then(res => {
                    this.ddSet.hideLoad()
                    if(res.data.status){
                        this.ddSet.setToast({text:'新增客户成功'}).then(res => {
                            this.$router.go(-1)
                        })
                    }else{
                        this.ddSet.setToast({text:res.data.msg})
                    }
                }).catch(err => {
                    this.ddSet.hideLoad()
                })
            }else{
                this.getEditClient(this.addData).then(res => {
                    this.ddSet.hideLoad()
                    if(res.data.status){
                        this.ddSet.setToast({text:'编辑客户成功'})
                    }else{
                        this.ddSet.setToast({text:res.data.msg})
                    }
                }).catch(err => {
                    this.ddSet.hideLoad()
                })
            }
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

