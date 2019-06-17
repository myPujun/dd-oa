<!-- 标签搜索 -->
<template>
    <div class="labelSearch" v-show="show">
        <ul class="label_list">
            <li v-for="(item,index) in labelList" :key="index">
                <h2 class="title" :class="{'blueTitle':index == 1,'greenTitle':index == 0}">{{item.title}}</h2>
                <div class="list flex flex_wrap" >
                    <span v-for="label in item.list" @click="activeLabel(label)">{{label}}</span>
                </div>
            </li>
        </ul>
        <div class="label_btn flex">
            <button class="reset">重置</button>
            <button class="confirm" @click="chageConfirm">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"",
    data() {
        return {
            labelList:[
                {
                    title:'合同造价',
                    list:['不限','普通活动','重大活动','特大活动']
                },
                {
                    title:'锁单状态',
                    list:['不限','未锁单','已锁单']
                },
                {
                    title:'订单状态',
                    list:['不限','待定','取消','确认']
                },
                {
                    title:'接单状态',
                    list:['不限','待定','处理中','已完成','未安排人员']
                },
            ]
        };
    },
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    components: {},
    computed: {},
    mounted() {

    },
    methods: {
        activeLabel(){
            
        },
        chageConfirm(){
            this.$emit('on-label',true)
        }
    },
}
</script>

<style scoped lang='scss'>
    .labelSearch{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom: .8rem;
    }
    .label_list{
        background-color: #FFF;
        padding: 0 .22rem;
        li{
            .title{
                position: relative;
                font-size: .32rem;
                color: #000;
                line-height: .9rem;
                padding-left: .3rem;
            }
            .title::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .18rem;
                height: .18rem;
                border-radius: 50%;
                background-color:#f3b362;
            }
            .blueTitle::before{
                background-color: #65a7e1;
            }
            .greenTitle::before{
                background-color: #5dbd97;
            }
            .list{
                span{
                    width: 1.7rem;
                    height: .78rem;
                    line-height: .78rem;
                    font-size: .24rem;
                    color: #848486;
                    text-align: center;
                    background-color: #f4f4f4;
                    border-radius: 4px;
                    margin-right: .98rem;
                    margin-bottom: .3rem;
                }
                .blueSpan{
                    color: #6da5e2;
                    background-color: #eaf3fc;
                }
                .greenSpan{
                    color: #6aba9e;
                    background-color: #e5f6f0;
                }
                .orangeSpan{
                    color: #e8b96b;
                    background-color: #fcf5eb;
                }
                span:nth-child(3){
                    margin-right: 0;
                }
            }
        }
    }
    .label_btn{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        button{
            flex: 1;
            border: none;
            background: none;
            outline: none;
            height: .8rem;
        }
        .reset{
            background-color: #f6f6f6;
            color: #5193f3;
        }
        .confirm{
            background-color: #5193f3;
            color:#FFF;
        }
    }
</style>
