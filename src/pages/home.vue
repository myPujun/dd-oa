<template>
    <div class="">
        <div class="index_top">
            <div class="banner">
                
            </div>
            <div class="inform_list">
                <div class="icon"></div>
                <ul class="list">
                    <li v-for="(item,index) in prizeList" :key="index" v-show="activeIndex == index">
                        {{item.me_title}}
                    </li>
                </ul>
                <router-link class="more" tag="span" :to="{path:'/messageList'}">更多</router-link>
            </div>
        </div>
        <div class="index_nav_list">
            <div class="nav" v-for="(nav,navIndex) in navList" :key="navIndex">
                <h2 class="title">{{nav.title}}</h2>
                <ul class="list flex flex_wrap">
                    <router-link v-if="showModules(item.code?item.code:'')" v-for="(item,index) in nav.list" :key="index" tag="li" :to="'/'+item.link" 
                    class="c_flex flex_a_c flex_j_c">
                        <div class="icon">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <p class="name">{{item.name}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
        <top-nav title="快思图商务会展"></top-nav>
    </div>
</template>

<script>
import menu from '../assets/js/indexMenu'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data() {
        return {
            prizeList:[ 
                //{ name: '城轨采购网',src:'http://www.railunique.com'}
            ],
            activeIndex:0,
            navList:[],
            powers:[]
        };
    },
    components: {},
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo,
            corpid:state => state.user.corpid,
            powerList:state => state.user.userInfo.RolePemissionList
        })
    },
    created(){
        this.powers = this.powerList.map(item => item.urp_code)
        this.getMessage(this.userInfo.id)
    },
    mounted() {
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
        showModules(arr){
            if(!arr){
                return true
            }
            for (let i in arr) {
                for (let j in this.powers) {
                    if (this.powers[j] === arr[i])return true;
                }
            }
            return false
        },
        ...mapActions([
            'getMessageList',
        ]),
        getMessage(_id){
            this.getMessageList({pageIndex:1,pageSize:10,managerid:_id,isRead:'False'}).then(res => {
                if(res.data.msg){
					this.ddSet.setToast({text:res.data.msg})
					return
				}
				else{
                    this.prizeList = res.data.list
				}
            })

        }
        // ...mapActions([
        //     'getUserId',
        //     'getUserName',
        //     'getCorpid'
        // ]),
        // userid(code){
        //     this.getUserId({code}).then(res => {
        //         if(res.data.status == 3){
        //             this.$store.commit('setUser',res.data)
        //             let {data} = res.data
        //             let params = {
        //                 username:data.user_name
        //             }
        //             this.getUserName(params).then(res => {
        //                 this.$store.commit('setBinding',res.data.status)
        //                 if(res.data.status === 1){
        //                     this.ddSet.setToast({text:'已绑定'})
        //                 }else{
        //                     this.ddSet.setToast({text:res.data.msg})
        //                 }
        //             })
        //         }else if(res.data.status == 2){
        //             this.$router.push({path:'/register'})
        //         }else{
        //             this.ddSet.setToast({text:res.data.msg})
        //         }
        //     })
        // }
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
        background-image: url('../assets/img/bananer.png');
        background-size:6.92rem 2.75rem;
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
