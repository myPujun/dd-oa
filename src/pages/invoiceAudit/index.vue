<!-- 发票审核列表首页 -->
<template>
    <div>
        <tab-list :tabList="topTabList" @on-tab="changeTab"></tab-list>
		<div class="search_box flex flex_a_c flex_j_c">
		   <input type="text" v-model="searchData.keywords" @input="changeSearch" placeholder="模糊搜索订单号或购方名称">
		</div>
        <div class="customer_list">
            <h2 class="amount">共{{recordTotal}}条</h2>
            <ul class="list">
                <router-link tag="li" :to="{path:'/invoiceDetails',query: {id:item.inv_id}}" v-for="(item,index) in showUnBusinessPayList" :key="index">
				    <div class="company flex flex_a_c flex_s_b">
                        <section class="flex flex_a_c">
                            <img class="icon" v-show="0 == item.inv_flag1" src="../../assets/img/audit.png" alt="">
                            <img class="icon" v-show="1 == item.inv_flag1" src="../../assets/img/audit_no.png" alt="">
                            <img class="icon" v-show="2 == item.inv_flag1" src="../../assets/img/audit_yes.png" alt="">
                            <img class="icon" v-show="0 == item.inv_flag2" src="../../assets/img/audit.png" alt="">
                            <img class="icon" v-show="1 == item.inv_flag2" src="../../assets/img/audit_no.png" alt="">
                            <img class="icon" v-show="2 == item.inv_flag2" src="../../assets/img/audit_yes.png" alt="">
                            <img class="icon" v-show="0 == item.inv_flag3" src="../../assets/img/audit.png" alt="">
                            <img class="icon" v-show="1 == item.inv_flag3" src="../../assets/img/audit_no.png" alt="">
                            <img class="icon" v-show="2 == item.inv_flag3" src="../../assets/img/audit_yes.png" alt="">
                            <h2 class="name">{{item.c_name}}</h2>
                            <div v-show="false == item.inv_isConfirm" class="lock-status">未开票</div>
                            <div v-show="true == item.inv_isConfirm" class="lock-status green">已开票</div>
                        </section>
				        <!--<section class="operation_icon flex">
				            <span @click.prevent.stop="edit(item.inv_id)"></span> 
							<span></span>
				        </section>-->
				    </div>
				    <div class="message flex flex_a_c flex_s_b">
				        <div class="message_list flex">
				            <span>{{item.inv_oid}}</span>
				            <span>{{item.inv_overMoney}}</span>
				        </div>
				    </div>
				</router-link>
            </ul>
			<div class="loadmore" @click="loadNextPage" v-show="pageTotal > searchData.pageIndex">
				点击加载更多
			</div>
        </div>
        <top-nav title="发票审核"></top-nav>
    </div>
</template>

<script>
import tabList from '../../components/tab.vue'
import {mapActions} from 'vuex'
import * as dd from 'dingtalk-jsapi'
import audit from '../../assets/img/audit.png'
import audit_no from '../../assets/img/audit_no.png'
import audit_yes from '../../assets/img/audit_yes.png'
export default {
    name:"",
    data() {
       return {
            topTabList:['待审批','已审批'], 
		    showUnBusinessPayList:[],
		    pageTotal:9,
		    recordTotal:9,
		    searchData:{
                pageIndex:0,
                pageSize:10,
                keywords:'',
                inv_flag:0,
                managerid:24     // TODO: 测试用，后面注意修改
            }
       };
    },
    components: {
        tabList
    },
    computed: {},
    created(){
    },
    mounted() {
		this.newInvoiceList()
    },
    methods: {
		...mapActions([
			'getInvoiceList'
		]),	
        changeTab(index){
            this.searchData.inv_flag = index
            this.newInvoiceList()
        },
		loadNextPage(){
			this.getInvoiceList()
		},
		changeSearch(){
		    this.newInvoiceList()
		},
		InvoiceList(){
			let _this = this
			_this.searchData.pageIndex++
			this.getInvoiceList(this.searchData).then(function(res){
				//console.log(res.data)
				if(res.data.msg){
					_this.ddSet.setToast({text:res.data.msg})
					return
				}
				if(_this.searchData.pageIndex < 2){
					_this.showUnBusinessPayList = res.data.list;
					_this.recordTotal = res.data.pageTotal
					_this.pageTotal = Math.ceil(_this.recordTotal / _this.searchData.pageSize)
					console.log(_this.pageTotal)
				}
				else{
					_this.showUnBusinessPayList = _this.showUnBusinessPayList.concat(res.data.list);
				}
			})
		},
		newInvoiceList(){
			let _this = this
			_this.searchData.pageIndex = 0;
			_this.InvoiceList()
		}
    },
}
</script>

<style scoped lang="scss">
@import '../../assets/css/var.scss';
    .search_box{
        height: .88rem;
        input{
            width: 7rem;
            height: .6rem;
            text-indent: .5rem;
            background-color: #ededed;
            border-radius: 4px;
            font-size: $size_28;
            background-image: url('../../assets/img/search.png');
            background-repeat: no-repeat;
            background-size: .3rem;
            background-position:.1rem;
        }
    }
    .menu_list{
        padding: .22rem 0;
        .menu_top{
            flex: 1;
            font-size: .28rem;
            text-align: center;
            line-height: .35rem;
            color: $fontSizeColor;
            &:first-child{
                border-right: 1px solid #efefef;
            }
        }
        
    }
	.loadmore{text-align:center;padding:25px;font-size:.3rem;color:#888;background-color: #ededed}
	.lock-status{
		width: .86rem;
		height: .36rem;
		line-height: .36rem;
		margin-left: .1rem;
		font-size: 0.2rem;
		color: #FFF;
		border-radius: .04rem;
		background-color: #a6a6a6;
		text-align: center;
	}
	.lock-status.green{background-color:#55be17;}
</style>