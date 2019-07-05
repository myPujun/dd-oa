<!-- 未收款订单管理首页 -->
<template>
    <div>
        <tab-list :tabList="topTablist" @on-tab="changeTab"></tab-list>
        <label-search :show="showLabel" @on-label="changeActive"></label-search>
        <div class="menu_list flex flex_s_a">
            <div class="menu_top">搜索</div>
            <div class="menu_top" @click="showLabel = true">筛选</div>
        </div>
        <div class="customer_list">
            <h2 class="amount">共2条</h2>
            <ul class="list">
                <router-link tag="li" to="./page/shoppingCart/lookOrder">
                    <div class="company flex flex_a_c flex_s_b">
                        <section class="flex flex_a_c">
                            <img class="icon" src="../../assets/img/audit.png" alt="">
                            <h2 class="name">海南快思图商务会展有限公司</h2>
                            <input class="green" type="button" value="未锁单">
                        </section>
                        <section class="operation_icon flex">
                            <span @click.prevent.stop="edit"></span>
                            <span></span>
                        </section>
                    </div>
                    <div class="message flex flex_a_c flex_s_b">
                        <div class="message_list flex">
                            <span>20190528001</span>
                            <span>陈登晓-GZ001</span>
                            <span>50万以下</span>
                            <span>2019-05-28/2019-05-31</span>
                        </div>
                    </div>
                </router-link>
                <li>
                    <div class="company flex flex_a_c flex_s_b">
                        <section class="flex flex_a_c">
                            <img class="icon" src="../../assets/img/audit_no.png" alt="">
                            <h2 class="name">海南快思图商务会展有限公司</h2>
                            <input type="button" value="已锁单">
                        </section>
                    </div>
                    <div class="message flex flex_a_c flex_s_b">
                        <div class="message_list flex">
                            <span>9146020008253534XM</span>
                            <span>柳春飞</span>
                            <span>0898-88338175</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="company flex flex_a_c flex_s_b">
                        <section class="flex flex_a_c">
                            <img class="icon" src="../../assets/img/audit_yes.png" alt="">
                            <h2 class="name">海南快思图商务会展有限公司</h2>
                            <input type="button" value="已锁单">
                        </section>
                    </div>
                    <div class="message flex flex_a_c flex_s_b">
                        <div class="message_list flex">
                            <span>9146020008253534XM</span>
                            <span>柳春飞</span>
                            <span>0898-88338175</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <top-nav title="未收款订单"></top-nav>
    </div>
</template>

<script>
import tabList from '../../components/tab.vue'
import labelSearch from '../../components/labelSearch.vue'
export default {
    name:"",
    data() {
       return {
           topTablist:['我的顶单','全公司的'],
           showLabel:false
       };
    },
    components: {
        tabList,
        labelSearch
    },
    computed: {},
    created(){        
    },
    mounted() {
    },
    methods: {        
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
</style>