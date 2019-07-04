<!-- 新增订单 -->
<template>
    <div class="body_gery">
        <ul class="form_list">
            <li class="flex flex_a_c">
                <label class="title"><span>订单号</span></label>
                <h3 class="hint_1">系统自动生成</h3>
            </li>
			<!-- 
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>下单人</span></label>
                <input type="text" :value="loginName" readonly>
            </li>
			 -->
            <li class="flex flex_a_c flex_s_b" @click="changeClient">
                <label class="title"><span class="must">客户</span></label>
                <input type="text" :value="clientName" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系人</span></label>
                <input type="text" readonly :value="formData.co_name" placeholder="请选择客户">
            </li>
            <li class="flex flex_a_c">
                <label class="title"><span>联系号码</span></label>
                <input type="text"  readonly :value="formData.co_number" placeholder="请选择客户">
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
            <li class="flex flex_a_c flex_s_b" @click="selectRangeDate">
                <label class="title"><span>活动日期</span></label>
                <input type="text" :value="date_range" readonly placeholder="请选择活动日期">
                <div class="icon_right time"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="cahgeArea">
                <label class="title"><span>活动归属地</span></label>
                <input type="text" :value="placeText" readonly>
                <div class="icon_right arrows_right"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="staff(1,'employee1')">
                <label class="title"><span>报账人员</span></label>
                <input type="text" :value="employee1Text" readonly>
                <div class="icon_right add"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="staff(2,'employee2')">
                <label class="title"><span>策划人员</span></label>
				<input type="text" :value="employee2Text" readonly>
                <div class="icon_right add"></div>
            </li>
            <li class="flex flex_a_c flex_s_b" @click="staff(2,'employee3')">
                <label class="title"><span>执行人员</span></label>
				<input type="text" :value="employee3Text" readonly>
                <div class="icon_right add"></div>
            </li>
			<li class="flex flex_a_c flex_s_b" @click="staff(2,'employee4')">
			    <label class="title"><span>设计人员</span></label>
				<input type="text" :value="employee4Text" readonly>
			    <div class="icon_right add"></div>
			</li>
			<li class="flex flex_a_c flex_s_b" @click="changeFstatus">
			    <label class="title"><span>订单状态</span></label>
			    <input type="text" readonly :value="formData.o_status_text">
			    <div class="icon_right arrows_right"></div>
			</li>
			<li class="flex flex_a_c flex_s_b" @click="changePushstatus">
			    <label class="title"><span>推送上级审核</span></label>
				<input type="text" readonly :value="formData.o_isPush_text">
			    <div class="icon_right arrows_right"></div>
			</li>
			<!--
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>锁单状态</span></label>
                <input type="text" placeholder="未锁">
            </li>
            <li class="flex flex_a_c flex_s_b">
                <label class="title"><span>上级审批</span></label>
                <input type="text" placeholder="待审批">
            </li>
			-->
            <li class="li_auto flex">
                <label class="title"><span>备注</span></label>
                <textarea v-model="formData.o_remarks" placeholder="请输入备注"></textarea>
            </li>
        </ul>
		<!-- 
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
		 -->
        <choose :show.sync="showChoose" :type="chooseType" :list="chooseList" @on-affirm="activeChoose"></choose>
        <top-nav title="新增订单" text="保存" @rightClick="submit"></top-nav>
		<button @click="submit">保存</button>
    </div>
</template>

<script>
import {
	mapActions,
	mapState
} from 'vuex'
import choose from '../../components/choose.vue'
import * as dd from 'dingtalk-jsapi'
import dayjs from 'dayjs'

export default {
    name:"",
    data() {
        return {
            formData:{},
            clientList:[],
            clientName:'请选择',
			clientId:0,
            loginName:'登录人姓名',
            placeText:'',
            showChoose:false,
            date_range:'',
            chooseType:1,
            chooseEl:'',
            employee1Text:'',
            employee2Text:'',
            employee3Text:'',
            employee4Text:'',
			employeeChoose:{
				'employee1':[],
				'employee2':[],
				'employee3':[],
				'employee4':[],
			},
            chooseList:[]
        };
    },
    components: {choose},
    computed: {...mapState(['addOrders'])},
    created(){
       
    },
    mounted() {
		this.clientCallBack(this.addOrders.selectClientArray)
    },
    methods: {
        ...mapActions([
            'getAllcustomer',
            'getContractprices',
            'getContactsbycid',
            'getUpLoadFile',
            'getPushstatus',
            'getFstatus',
            'getDstatus',
            'getArea',
            'getEmployeebyarea',
			'submitOrder'
        ]),
        submit(){   //提交
			let _this = this
			// 判断必填
			
			
			this.formData.c_id = this.clientId;
			this.formData.managerid = 14;
			console.log(this.formData)
			alert(JSON.stringify(this.formData))
			_this.submitOrder(this.formData).then(function(res){
				alert(JSON.stringify(res))
				console.log(res)
			})
        },
		claerEmployee(){ // 清空人员
			let _this = this
			let employees = ['1','2','3','4'];
			employees.map(function(item,index){
				_this.$set(_this,'employee' + item + 'Text','')
				_this.$set(_this.formData,'employee' + item,'')
			});
		},
        activeChoose(items){
			let _this = this
			console.log(items)
			if(items.length < 1){
				dd.device.notification.toast({
					text: '请正确选择', //提示信息
					onSuccess : function(result) {
						/*{}*/
					},
					onFail : function(err) {}
				})
				return;
			}
            if('place' == _this.chooseEl){
				let tmpTexts = [];
				let tmpPlaces = [];
				items.map(function(item,index){
					tmpTexts.push(item.name)
					tmpPlaces.push(item.key)
				})
				_this.placeText = tmpTexts.join(',');
				_this.$set(_this.formData,'o_place',tmpPlaces.join(','))
				// 区域改变，清空人员
				_this.claerEmployee();
			}
			if('employee1' == _this.chooseEl || 
			'employee2' == _this.chooseEl || 'employee3' == _this.chooseEl || 'employee4' == _this.chooseEl){
				let tmpTexts = [];
				let tmpEmployees = [];
				let tmpGonghaos = [];
				items.map(function(item,index){
					tmpTexts.push(item.de_name)
					tmpEmployees.push(item['de_name'] + '|'+item['de_subname']+'|'+item['de_area'])
					tmpGonghaos.push(item['de_subname'])
				})
				_this.$set(_this.employeeChoose,_this.chooseEl,tmpGonghaos)
				
				_this.$set(_this,_this.chooseEl + 'Text',tmpTexts.join(','))
				_this.$set(_this.formData,_this.chooseEl,tmpEmployees.join(','))
			}
        },
        staff(_type,_el){ // 报账人员
            let _this = this
			let tmpPlaces = []
			if(_this.formData.o_place){
				tmpPlaces = _this.formData.o_place.split(',')
			}
			
			if(tmpPlaces.length < 1){
				dd.device.notification.toast({
					text: '请先选择活动归属地', //提示信息
					onSuccess : function(result) {
						/*{}*/
					},
					onFail : function(err) {}
				})
				return
			}
			
            _this.getEmployeebyarea({arealist:_this.formData.o_place}).then(res => {
				_this.chooseType = _type;
				_this.chooseEl = _el;
				let gonghaos = _this.employeeChoose[_el];
				let source = []
                res.data.map((item,index) => {
					if(4 == item.de_type){
						if(!item.name){
						    _this.$set(item,'name',item.de_name)
						}
						if(gonghaos.includes(item.de_subname)){
							_this.$set(item,'isChecked',true)
						}
						source.push(item)
					}
                })
				_this.chooseList = source;
                _this.showChoose = true
            })
        },
        cahgeArea(){    //归属地
            let _this = this
            _this.getArea().then(res => {
				_this.chooseType = 2;
				_this.chooseEl = 'place';
                let source = []
				let tmpPlaces = []
				if(_this.formData.o_place){
					tmpPlaces = _this.formData.o_place.split(',')
				}
                res.data.map((item,index) => {
                    source.push({
						isChecked:tmpPlaces.includes(item.key),
						key:item.key,
						value:item.value,
						name:item.value,
					})
                })
				_this.chooseList = source;
				_this.showChoose = true
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
			let _this = this;
			// _this.clientName = '123123'
			// return;
			this.$router.push({ path: '/addOrders/customerSelect', query: { selected_id: _this.clientId }})
        },
		clientCallBack:function(_selectData){
			console.log(_selectData)
			if(_selectData.length){
				this.clientName = _selectData[0].name;
				this.clientId = _selectData[0].id;
				this.$set(this.formData,'co_name',_selectData[0].co_name)
				this.$set(this.formData,'co_number',_selectData[0].co_number)
				this.$set(this.formData,'co_id',_selectData[0].co_id)
			}
			else{
				this.clientName = '请选择';
				this.clientId = 0;
				this.$set(this.formData,'co_name','')
				this.$set(this.formData,'co_number','')
				this.$set(this.formData,'co_id',0)
			}
		},
		changePushstatus(){
            let _this = this
            this.getPushstatus({ddkey:'dingzreafyvgzklylomj'}).then(res => {
                let source = []
                res.data.map((item,index) => {
                    let obj = {
                        key:item.value,
                        value:item.key
                    }
                	source.push(obj)
                })
                _this.ddSet.setChosen({source}).then(res => {
                    _this.$set(_this.formData,'o_isPush',res.value)
                    _this.$set(_this.formData,'o_isPush_text',res.key)
                })
            })
        },
        changeFstatus(){
            let _this = this
            this.getFstatus({ddkey:'dingzreafyvgzklylomj'}).then(res => {
                let source = []
                res.data.map((item,index) => {
                    let obj = {
                        key:item.value,
                        value:item.key
                    }
                	source.push(obj)
                })
                _this.ddSet.setChosen({source}).then(res => {
                    _this.$set(_this.formData,'o_status',res.value)
                    _this.$set(_this.formData,'o_status_text',res.key)
                })
            })
        },
        changeDstatus(){    //接单状态
			let _this = this;
            this.getDstatus().then(res => {
                let source = []
                res.data.map((item,index) => {
                    let obj = {
                        key:item.value,
                        value:item.key
                    }
					source.push(obj)
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
        },
      selectRangeDate(){ //活动日期
			let _this = this
			dd.biz.calendar.chooseInterval({
				defaultStart:dayjs().valueOf(),
				defaultEnd:dayjs().add(1, 'month').valueOf(),
				onSuccess : function(result) {
					//onSuccess将在点击确定之后回调
					/*{
						start: 1514908800000,
						end: 1514995200000,
						timezone:8
					}
					*/
				   var sdate = dayjs(result.start).format('YYYY-MM-DD');
				   var edate = dayjs(result.end).format('YYYY-MM-DD');
				   _this.date_range = sdate + '至' + edate;
				   _this.$set(_this.formData,'o_sdate',sdate)
				   _this.$set(_this.formData,'o_edate',edate)
				},
				onFail : function(err) {}
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
