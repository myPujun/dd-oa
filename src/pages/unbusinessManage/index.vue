<!-- 非业务支付申请 -->
<template>
    <div>
		<!--  -->
        <tab-list :tabList="topTablist" @on-tab="changeTab"></tab-list>
		<div class="search_box flex flex_a_c flex_j_c">
		   <input type="text" v-model="searchData.orderid" @input="changeSearch" placeholder="搜索订单号">
		</div>
        <div class="customer_list">
            <h2 class="amount">共{{recordTotal}}条</h2>
            <ul class="list">
                <li v-for="(item,index) in showUnBusinessPayList" :key="index" @click="goPage('unbusinessDetails',item.uba_id)">
				    <div class="company flex flex_a_c flex_s_b">
                        <section class="flex flex_a_c">
                            <img class="icon" v-show="0 == item.uba_flag1" src="../../assets/img/audit.png" alt="">
                            <img class="icon" v-show="1 == item.uba_flag1" src="../../assets/img/audit_no.png" alt="">
                            <img class="icon" v-show="2 == item.uba_flag1" src="../../assets/img/audit_yes.png" alt="">
                            <h2 class="name">{{item.uba_function}}</h2>
                            <div v-show="false == item.uba_isConfirm" class="lock-status">未支付</div>
                            <div v-show="true == item.uba_isConfirm" class="lock-status green">已支付</div>
                        </section>
				        <section class="operation_icon flex">
				            <span @click.stop="goPage('unbusinessEdit',item.uba_id)"></span>
				            <span></span>
				        </section>
				    </div>
				    <div class="message flex flex_a_c flex_s_b">
				        <div class="message_list flex">
				            <span>{{item.uba_oid}}</span>
				            <span>{{item.uba_type}}</span>
				        </div>
				    </div>
				</li>
            </ul>
            <top-nav title="非业务支付申请"></top-nav>
			<div class="loadmore" @click="loadNextPage" v-show="pageTotal > searchData.pageIndex">
				点击加载更多
			</div>
        </div>
    </div>
</template>

<script>
import tabList from '../../components/tab.vue'
import {
	mapActions,
	mapState
} from 'vuex'
import * as dd from 'dingtalk-jsapi'

export default {
    name:"",
    data() {
       return {
           topTablist:['待审核','已审核','已支付'],  
		   showUnBusinessPayList:[],
		   pageTotal:9,
		   recordTotal:9,
		   searchData:{
			   pageIndex:0,
			   pageSize:10,
			   keywords:'',
			   uba_flag:0,
			   uba_isConfirm:'',
			   managerid:14     // TODO: 测试用，后面注意修改
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
		this.newUnbusinessManage()
    },
    methods: {
		...mapActions([
			'getUnBusinessPayList'
		]),		
        changeTab(index){
            if(index == 0){
                this.searchData.uba_flag = 0
                this.searchData.uba_isConfirm=''
				this.newUnbusinessManage()
            }
            else if(index==1){
                this.searchData.uba_flag = 1
                this.searchData.uba_isConfirm=''
				this.newUnbusinessManage()
            }
            else if(index==2){
                this.searchData.uba_flag = ''
                this.searchData.uba_isConfirm=1
				this.newUnbusinessManage()
			}
        },
        changeActive(actives){
			let _this = this
			actives.map((item) => {
				_this.searchData[item.key] = item.value;
			})
			this.newUnbusinessManage()
        },
		loadNextPage(){
			this.UnBusinessPayList()
		},
		changeSearch(){
		    this.newUnbusinessManage()
		},
		UnBusinessPayList(){
			let _this = this
			_this.searchData.pageIndex++
			this.getUnBusinessPayList(this.searchData).then(function(res){
				console.log(res.data)
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
		newUnbusinessManage(){
			let _this = this
			_this.searchData.pageIndex = 0;
			_this.UnBusinessPayList()
		},			
        goPage(item,params){
            if(item == 'unBusinessPayDetails'){
                this.$router.push({path:`/${item}`,query:{uba_id:params}})
            }
            if(item == 'unBusinessPayEdit'){
                this.$router.push({path:`/${item}`,query:{uba_id:params,type:'EDIT'}})
            }
        },
		// 处理 时间
		getListDate(_date){
			if(!_date){
				return '';
			}
			let tmp = _date.split('T');
			return tmp[0]
		}
    },
}
</script>

<style scoped lang="scss">
@import '../../assets/css/var.scss';
    .tab_list{
        border-bottom: 1px solid $border_bottom_color;
        li{
            height: .75rem;
            line-height: .75rem;
            color:$fontSizeColor;
            font-size: $size_30;
        }
        .active{
            color:$blue_1;
            font-weight: bold;
            border-bottom: 2px solid $blue_1;
        }
    }
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
    .customer_list{
        .amount{
            height: .65rem;
            line-height: .65rem;
            padding: 0 .3rem;
            font-size: $size_28;
            color: $gery_1;
            font-weight: normal;
            background-color: $gery_3;
        }
        .list{
            position: absolute;
            top: 2.3rem;
            bottom: 0;
            left: 0;
            right: 0;
            overflow-y: auto;
            .company{
                padding: 0 .3rem;
                height: .65rem;
                .icon{
                    width:$size_30;
                    height: $size_30;
                    background-color: $gery_3;
                    margin-right: $size_20;
                }
                .name{
                    color: $blue_1;
                    font-size: $size_24;
                }
                input{
                    width: .86rem;
                    height: .36rem;
                    line-height: .36rem;
                    margin-left: .1rem;
                    font-size: $size_20;
                    color: #FFF;
                    border-radius: .04rem;
                    background-color: $gery_2;
                }
                .blue{
                    background-color: $blue_1;
                }
                .operation_icon{
                    span{
                        width: $size_30;
                        height: $size_30;
                        margin-left: .3rem;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    span:nth-child(1){
                        background-image: url('../../assets/img/redact_1.png');
                    }
                    span:nth-child(2){
                        background-image: url('../../assets/img/delete.png');
                        background-size: .25rem .3rem;
                    }
                }
            }
            .message{
                padding: 0 .3rem;
                height: .65rem;
                background-color: $gery_3;
                .icon{
                    width: $size_30;
                    height: $size_30;
                    background-color: $blue_1;
                }
                .message_list{
                    display: flex;
                    span{
                        height: .36rem;
                        font-size: $size_20;
                        min-width: 1.22rem;
                        border-radius: 2px;
                        text-align: center;
                        line-height: .36rem;
                        margin-right: .2rem;
                    }
                    span:nth-child(1){
                        background-color: $blue_1;
                        color: #FFF;
                        padding: 0 .2rem;
                    }
                    span:nth-child(2){
                        background-color: #fff4e9;
                        color: #e1bc94;
                    }
                    span:nth-child(3){
                        background-color: #e3f6f0;
                        color: #72a795;
                        width: 1.8rem;
                    }
                }
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

