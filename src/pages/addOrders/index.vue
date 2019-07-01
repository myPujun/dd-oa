<!-- 新增订单 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span>订单号</span></label>
                <h3 class="hint_1">系统自动生成</h3>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>下单人</span></label>
                <input type="text" placeholder="请输入下单人">
            </li>
            <li class="flex flex_a_c flex_s_b" @click="changeClient">
                <label class="title"><span class="must">客户</span></label>
                <input type="text" :value="clientName" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系人</span></label>
                <input type="text" readonly :value="formData.co_name" placeholder="请输入联系人">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系号码</span></label>
                <input type="text"  readonly :value="formData.co_number" placeholder="请输入联系号码">
            </li>
            <li class="flex flex_a_c flex_s_b" @click="changeCost">
                <label class="title"><span>合同造价</span></label>
                <input type="text" :value="formData.o_contractprice" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>活动名称</span></label>
                <input type="text" v-model="formData.o_content" placeholder="请输入活动名称">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>活动地点</span></label>
                <input type="text" v-model="formData.o_address" placeholder="请输入活动地点">
            </li>
            <li class="flex flex_a_c flex_s_b" @click="date('start')">
                <label class="title"><span>活动日期</span></label>
                <input type="text" :value="formData.o_sdate" readonly placeholder="请选择活动起始日期">
                <div class="icon_right time"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="date('over')">
                <label class="title"><span>活动日期</span></label>
                <input type="text" :value="formData.o_edate" readonly placeholder="请选择活动结束日期">
                <div class="icon_right time"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="cahgeArea">
                <label class="title"><span>活动归属地</span></label>
                <input type="text" :value="formData.o_place" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="staff">
                <label class="title"><span>报账人员</span></label>
                <input type="text" readonly>
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
                <input type="text" readonly :value="formData.o_status">
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>推送上级审核</span></label>
                <div class="icon_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="changeDstatus">
                <label class="title"><span>接单状态</span></label>
                <input type="text" readonly placeholder="待定">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>锁单状态</span></label>
                <input type="text" placeholder="未锁">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>上级审批</span></label>
                <input type="text" placeholder="待审批">
            </li>
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea v-model="formData.o_remarks" placeholder="请输入备注"></textarea>
            </li>
        </ul>
        <ul class="form_list">
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>一类活动文件</span></label>
                <div class="icon_right accessory">
                    <input type="file" @change="upFile">
                </div>
            </li>
        </ul>
        <ul class="form_list">
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>二类活动文件</span></label>
                <div class="icon_right accessory"></div>
            </li>
        </ul>
        <div class="hint">
            部分人员可查看，文件大小限制：51200KB</br> 
            文件类型：gif,jpg,jpeg,png,bmp,rar,zip,doc,xls,txt,docx,xlsx
        </div>
        <choose :show.sync="showChoose" :list="chooseList" @on-affirm="activeChoose"></choose>
        <top-nav title="新增订单" text="保存" @rightClick="submit"></top-nav>
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
            'getAllcustomer',
            'getContractprices',
            'getContactsbycid',
            'getUpLoadFile',
            'getDstatus',
            'getArea',
            'getEmployeebyarea'
        ]),
        submit(){   //提交

        },
        activeChoose(item){
            console.log(item)
        },
        staff(){
            let _this = this
            _this.getEmployeebyarea({arealist:'BJ'}).then(res => {
                res.data.map((item,index) => {
                    if(!item.name){
                        _this.$set(item,'name',item.de_name)
                    }
                    this.chooseList.push(item)
                })
                _this.showChoose = true
            })
        },
        cahgeArea(){    //归属地
            let _this = this
            _this.getArea().then(res => {
                let source = []
                Object.keys(res.data).map((item,index) => {
                    let obj = {
                        key:res.data[item],
                        value:item
                    }
                    source.push(obj)
                })
                _this.ddSet.setChosen({source,selectedKey:_this.formData.o_place || ''}).then(res => {
                    _this.$set(_this.formData,'o_place',res.key)
                })
            })
        },
        upFile(e){
            let file = e.target.files[0]
            let params = {
                DelFilePath:'',
                name:'测试',
                byteFile:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAEsASwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDcooorgPYCmnrS0UAgooopDCiiigAooooAQdaWikoFYdSE8c0gNNZuMA//AFqYWGnnmiiikWgooooGFKOaSgcfjQIdRRRQAUUUUAFFFNbgfWgQ3rz60UUVJaCiiigAooooAKKKKACkFLRQA4HIpaYDg06mImoooqjMQ0Uh/nS0gQUUUlAxaKaWUdTTfMHbmgLMkpD71CXPY4+lIevPNMfKSmQe9MMh7ACm0UFKIZJ700nkEcU6mt0HsaBpIcr564zT6hpyvjg0rA0SUUAjGRRQIKKKKAFHP4UtNHX606gkKKKKBhTX9KWmNndSYIKKKKRQUUUUAFFFFABRRRQAUUUUAFAYiiigCYNnpSnpxUf6UzzTkjpj9asz5SamlwO9REnOTk0UFco8yZ6D86buPc/lSUUDsgooooGFFFFABRRRQAUjdPpS0Hnj1FADKKKKRQKcdP8A9dSKwPt9ajo/TFAmiaimK/Y0/rz1oJClHNJSjrQIWiiigQh96ZTn+7TaTGgooopFBRRRQAUUUUAFFFIaAFophcetNMntigdmSUm8DuPzqIknqc0lMfKTu2cgdqjPU07tTe5q2JIcretOqOlU44NILD6KKKBBRRRQAUUUUAFFFFABRRRQAw/yNFDDn60UupSCiiigApVbHFJRQFkSggj/ADxS1CDjp2p6tnrwaCLEo6UUg96WgkY/WkoJ5NFJlBRRSE8c8fjSGLSU0uBTDIaY7EpOPamlxURJPWloGojjITTCSeppaKCrIKKKKACmF8HFKxwOOtMoGWqZ3NOpvc1bM0LRRRSGCnHB6fyp9MoVvXn+lAmh9FHuKKBBRRRQAUUUUAFFFFADW65pKVugPpSUhhRRRQMKKKKACiiigByvjrz/AEqTdlc1DTGc5wCRQJx7EpOOTxSGQemah75Jz+NLSsNIeGdzhASfYZprAg4YEH361uaGkf2YsMFyeap+LJY7a3t5eBI0m36jBP8AhW3svducn1m1TlsZ1LUUL+YgYd6lrHY7U7hRRRQAUUUUAFIfelpjnsKBjWOTRRRQVYs00AkkKpOP0px4Bq9ojf6YVPRlrWK5nY5qk+SPMjPIIPII+tLU/iqb7Nc2vpIGH5Y/xqrG25AfWiceVk0qvtI3H0g54GevYdaKsacu6+iHv/Sp"
            }
            this.getUpLoadFile(params).then(res => {

            })
            // console.log(Object.values(e.target.files))
            // Object.values(e.target.files).map((item,index) => {
            //     console.log(item.name)
            // })
            
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
        changeDstatus(){    //接单状态
            this.getDstatus().then(res => {
                let source
                Object.values(res.data).map((item,index) => {
                    let obj = {
                        key:item,
                        type:index
                    }
                })
                _this.ddSet.setChosen({source}).then(res => {
                    _this.$set(_this.formData,'o_status',res.type)
                })
            })
        },
        changeCost(){   //合同造价
            let _this = this
            this.getContractprices({ddkey:'dingzreafyvgzklylomj'}).then(res => {
                let source = res.data
                _this.ddSet.setChosen({source}).then(res => {
                    _this.$set(_this.formData,'o_contractprice',res.key)
                })
            })
            // this.ddSet.setChosen({source:this.cost}).then(res => {
            //     this.$set(this.formData,'o_contractprice',res.key)
            // })
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
