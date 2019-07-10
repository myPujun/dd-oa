<!-- 业绩统计 -->
<template>
    <div class="body_top">
        <tab-list tabClass="fixed" :tabList="topTablist" @on-tab="changeTab"></tab-list>
        <label-search :list="labelData" :show="showLabel" @on-label="changeActive"></label-search>
		<div class="search_box flex flex_a_c flex_j_c" v-show="showSearchBox">
		   <input type="text" placeholder="搜索订单号">
		</div>
        <div class="menu_list flex flex_s_a">
            <div class="menu_top" @click="showSearchBoxChange">搜索</div>
            <div class="menu_top" @click="showLabel = true">筛选</div>
        </div>
        <div class="customer_list">
            <h2 class="amount">共{{list.length}}条</h2>
            <ul class="list">
                <li v-for="(item,index) in list" :key="index">
                    <div class="top flex">
                        <span class="name">{{item.op_number+`(${item.op_name})`}}</span>
                        <span class="address">{{item.op_area}}</span>
                        <span>数量：{{item.oCount}}</span>
                    </div>
                    <div class="bottom flex flex_s_a">
                        <span>订单利润：{{item.oProfit}}</span>
                        <span>订单税费：{{item.oCust}}</span>
                        <span>业绩利润：{{item.bProfit}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import tabList from '../../components/tab.vue'
import labelSearch from '../../components/labelSearch.vue'
export default {
    name:"",
    data() {
        return {
            list:[],
            tabIndex:0,
            topTablist:['下单','策划接单','设计接单'],
            labelData:[
                {
                    title:'合同造价',
                    class:'greenTitle',
                    s_key:'o_contractprice',
                    list:[]
                },
                {
                    title:'锁单状态',
                        class:'blueTitle',
                        s_key:'o_lockstatus',
                    list:[]
                },
                {
                    title:'订单状态',
                        class:'',
                        s_key:'o_status',
                    list:[]
                },
            ],
            showLabel:false,
            showSearchBox:false,
        };
    },
    components: {
        tabList,
        labelSearch
    },
    computed: {
        ...mapState({
            userId:state => state.user.userInfo.id
        })
    },
    mounted() {
        this.achievementStatisticList()
    },
    methods: {
        ...mapActions([
            'getAchievementStatistic'
        ]),
        changeTab(index){
            this.tabIndex = index
            this.achievementStatisticList()
        },
        changeActive(actives){
			
        },
        showSearchBoxChange(){
			this.showSearchBox = !this.showSearchBox;
        },
        achievementStatisticList(){
            let managerid = this.userId
            let params = {
                type:this.tabIndex,
                sMonth:'',
                eMonth:'',
                status:'',
                isRemove:false,
                isCust:true,
                pageIndex:1,
                pageSize:10, 
                managerid
            }
            this.getAchievementStatistic(params).then(res => {
                this.list = res.data.list
            })
        }
    },
}
</script>

<style scoped lang='scss'>
@import '../../assets/css/var.scss';
    .customer_list{
        .list{
            li{
                padding: $size_28;
                border-bottom: 1px solid $border_bottom_color;
            }
            span{
                font-size: .28rem;
                color: $fontSizeColor;
            }
            .top{
                span{
                    margin-right: .3rem;
                }
            }
            .bottom{
                margin-top: .3rem;
                span{
                    flex: 1;
                    color: $gery_1;
                }
            }
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
</style>
