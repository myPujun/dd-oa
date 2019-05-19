<!-- 管理客户 -->
<template>
    <div>
        <ul class="tab_list flex flex_s_a">
            <li :class="{'active':tabIndex == index}" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)">{{item}}</li>
        </ul>
        <div class="search_box flex flex_a_c flex_j_c">
           <input type="text" placeholder="搜索联系人姓名或公司名称">
        </div>
        <div class="customer_list">
            <h2 class="amount">共2人</h2>
            <ul class="list">
                <li>
                    <div class="company flex flex_a_c flex_s_b">
                        <section class="flex flex_a_c">
                            <img class="icon" src="../assets/img/audit.png" alt="">
                            <h2 class="name">海南快思图商务会展有限公司</h2>
                            <input type="button" value="禁用">
                        </section>
                        <section class="operation_icon flex">
                            <span></span>
                            <span></span>
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
                            <img class="icon" src="../assets/img/audit_no.png" alt="">
                            <h2 class="name">海南快思图商务会展有限公司</h2>
                            <input class="blue" type="button" value="启用">
                        </section>
                        <section class="operation_icon flex">
                            <span></span>
                            <span></span>
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
                            <img class="icon" src="../assets/img/audit_yes.png" alt="">
                            <h2 class="name">海南快思图商务会展有限公司</h2>
                            <input class="blue" type="button" value="启用">
                        </section>
                        <section class="operation_icon flex">
                            <span></span>
                            <span></span>
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
    </div>
</template>

<script>
export default {
    name:"",
    data() {
       return {
           tabList:['普通客户','内部客户','管理用客户'],
           tabIndex:0,
       };
    },
    components: {},
    computed: {},
    mounted() {

    },
    methods: {
        changeTab(index){
            this.tabIndex = index
        }
    },
}
</script>

<style scoped lang="scss">
@import '../assets/css/var.scss';
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
            background-image: url('../assets/img/search.png');
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
                        background-image: url('../assets/img/redact_1.png');
                    }
                    span:nth-child(2){
                        background-image: url('../assets/img/delete.png');
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
                    span{
                        height: .36rem;
                        font-size: $size_20;
                        min-width: 1.22rem;
                        border-radius: 2px;
                        text-align: center;
                        line-height: .36rem;
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
</style>
