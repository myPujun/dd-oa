<template>
    <div class="">
        <div class="index_top">
            <div class="banner">
                
            </div>
            <div class="inform_list">
                <div class="icon"></div>
                <ul class="list">
                    <li v-for="(item,index) in prizeList" :key="index" v-show="activeIndex == index">
                        {{item.name}}
                    </li>
                </ul>
                <span class="more">更多</span>
            </div>
        </div>
        <div class="index_nav_list">
            <div class="nav" v-for="(nav,navIndex) in navList" :key="navIndex">
                <h2 class="title">{{nav.title}}</h2>
                <ul class="list flex flex_wrap">
                    <router-link v-for="(item,index) in nav.list" :key="index" tag="li" :to="'/'+item.link" 
                    class="c_flex flex_a_c flex_j_c">
                        <div class="icon">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <p class="name">{{item.name}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import menu from '../assets/js/indexMenu'
import axios from 'axios'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data() {
        return {
            prizeList:[
                { name: '城轨采购网',src:'http://www.railunique.com'},
                { name: '天津地铁电子采购平台',src:'http://www.railunique.com' },
                { name: '南昌地铁',src:'http://www.railunique.com' },
                { name: '南昌地铁',src:'http://www.railunique.com' },
                { name: '兰州地铁招标信息',src:'http://www.railunique.com' },
                { name: '西安公共资源交易中心',src:'http://www.railunique.com' }
            ],
            activeIndex:0,
            navList:[],
        };
    },
    components: {},
    computed: {
        ...mapMutations([
            'setUser'
        ])
    },
    mounted() {
        // let param = new URLSearchParams()
        // param.append('oauth_userid','pujun')
        this.getUser({oauth_userid:'pujun'}).then(res => {
            this.$store.commit('setUser',res)
        })

        //获取菜单列表
        this.navList = menu
        setInterval(() => {
            if(this.activeIndex < this.prizeList.length-1) {
                this.activeIndex += 1;
            } else {
                this.activeIndex = 0;
            }
        }, 5000);
    },
    methods: {
        ...mapActions([
            'getUser'
        ])
    },
}
</script>
<style scoped lang="scss">
@import '../assets/css/var.scss';
    .index_nav_list{
        padding: .2rem 0;
        .title{
            font-size: .3rem;
            color: #0d1015;
            padding: .2rem .3rem;
        }
        li{
            width: 25%;
            margin-top: .2rem;
            .icon{
                width: 1rem;
                height: 1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                font-size: .24rem;
                line-height: .6rem;
                color: $fontSizeColor;
            }
        }
    }
    .index_top{
        margin-top: .27rem;
    }
    .index_top .banner{
        width: 6.92rem;
        height: 2.75rem;
        background-color: #f1f1f1;
        border-radius: .08rem;
        margin: 0 auto;
    }
    .inform_list{
        display: flex;
        margin:0 .3rem;
        padding: .3rem 0;
        border-bottom: 1px solid #f1f1f1;
    }
    .inform_list .more{
        font-size: .28rem;
        color: #5193f3;
        line-height: .4rem;
    }
    .inform_list .icon{
        height: .4rem;
        width: .4rem;
        margin-right: .2rem;
        background-image: url('../assets/img/horn.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .inform_list .list{
        flex: 1;
        height: .4rem;
        color: #787b80;
        font-size: .28rem;
        overflow: hidden;
    }
    .inform_list .list li{
        line-height: .4rem;
    }
</style>
