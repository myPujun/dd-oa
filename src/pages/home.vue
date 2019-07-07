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
        ...mapState({
            userInfo: state => state.user.userInfo,
            corpid:state => state.user.corpid
        })
    },
    mounted() {
        let user = {
            "id":14,//自增ID
            "role_id": 3,//角色ID
            "role_type":2,//管理员类型1超管2系管
            "user_name":"ZB000",//用户名
            "password":'48D5BAB94F9FA6FC',//登录密码
            "salt":"F8N46B",//6位随机字符串,加密用到
            "avatar":null,//管理员头像
            "real_name":"系统管理员",//用户昵称
            "telephone":"18888888888",//联系电话
            "email":null,//电子邮箱
            "is_audit":0,//信息是否要审核，0未否1为是
            "is_lock":0,//是否锁定，0为否1为是
            "add_time":"2019-05-21 08:50:36.120",//添加时间
            "departID": 135,//岗位ID
            "departTree":"海南快思图商务会展有限公司-行政人事部-系统管理员",//岗位结构
            "departTreeID":" 17-29-135 ",//岗位结构
            "detaildepart":"系统管理员",//具体岗位
            "area":" HQ",//区域
            "RolePemissionList":[{
                    "urp_id":411,
                    "urp_type":2, 
                    "urp_username":'',
                    "urp_code":"0401",
                },{
                    "urp_id":412,
                    "urp_type":2, 
                    "urp_username":'',
                    "urp_code":"0402"
            }]//员工的角色权限
        }
        this.$store.commit('setUser',user)
        //获取企业ID
        this.getCorpid().then(res => {
            this.$store.commit('setCorpid',res.data.corpid)
        })
        //获取用户信息
        this.ddSet.infoCode(this.corpid).then(res => {
            this.userid(res.code)
        })
        //验证用户名是否可绑定
        let params = {
            username:'ZB000'
        }
        this.getUserName(params).then(res => {  
            this.$store.commit('setBinding',res.data.status)
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
            'getUserId',
            'getUserName',
            'getCorpid'
        ]),
        userid(code){
            this.getUserId({code}).then(res => {
                if(res.data.status == 3){
                    this.$store.commit('setUser',res.data)
                }else if(res.data.status == 2){
                    this.$router.push({path:'/register'})
                }else{
                    this.ddSet.setToast({text:res.data.msg})
                }
            })
        }
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
