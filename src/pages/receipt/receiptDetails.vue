<template>
    <div class="body_gery">
        <ul class="form_list form_list_noborder">
            <li class="flex flex_a_c" @click="changeClient">
                <label class="title"><span class="must">收款对象</span></label>
                <input type="text" :value="clientName" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">收款金额</span></label>
                <input type="text" placeholder="请输入收款金额">
            </li>
            <li class="flex flex_a_c flex_s_b" @click="date('start')">
                <label class="title"><span>预收日期</span></label>
                <input type="text" readonly placeholder="请选择预收日期">
                <div class="icon_right time"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span class="must">收款方式</span></label>
                <input type="text" placeholder="请输入收款方式">
            </li>
            <li class="li_auto flex">
                <label class="title"><span>收款内容</span></label>
                <textarea placeholder="请输入备注"></textarea>
            </li>
        </ul>
        <top-nav :title='"添加收款通知"' :text='"保存"' @rightClick="submit"></top-nav>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import choose from '../../components/choose.vue'
import * as dd from 'dingtalk-jsapi'
export default {
    name:"",
    data() {
        return {
            formData:{},
            clientList:[],
            clientName:'',
            showChoose:false,
            chooseList:[]
        };
    },
    components: {choose},
    computed: {},
    created(){
       
    },
    mounted() {
        
    },
    methods: {
        ...mapActions([
            'getAllcustomer'
        ]),
        submit(){   //提交

        },
        activeChoose(item){
            console.log(item)
        },
        changeClient(){ //选择客户
            this.getAllcustomer({c_id:14}).then(res => {
                let source = [],_this = this
                _this.clientList = res.data
                res.data.map((item,index) => {
                    let obj = {
                        key:item.name,
                        value:item.c_id,
                        type:item.type
                    }
                    source.push(obj)
                })
                _this.ddSet.setChosen({source}).then(res => {
                    _this.$set(_this,'clientName',res.key)
                    _this.$set(_this.formData,'c_id',res.value)
                    _this.getContactsbycid({c_id:res.value}).then(res => {
                        let {co_name,co_number} = res.data[0]
                        _this.$set(_this.formData,'co_name',co_name)
                        _this.$set(_this.formData,'co_number',co_number)
                    })
                })
            })
        },
        date(item){ //活动日期
            this.ddSet.setDatepicker().then(res => {
                if(item == 'start'){
                    this.$set(this.formData,'o_sdate',res.value)
                }else{
                    this.$set(this.formData,'o_edate',res.value)
                }
            })
        }
    },
}
</script>

<style scoped lang='scss'>
    
    .hint{
        padding: .3rem;
        font-size: .24rem;
        color: #fc0214;
        line-height: .4rem;
    }
    
</style>