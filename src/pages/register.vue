<!-- 登录 -->
<template>
    <div class="register">
        <div class="logo">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="from">
            <input type="text" v-model="fromData.username" placeholder="请输入手机号">
            <input type="password" v-model="fromData.password" placeholder="请输入密码">
            <input class="from_btn" type="button" value="登录" @click="submit">
        </div>
        <top-nav title="登录"></top-nav>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:"",
    data() {
       return {
           fromData:{}
       };
    },
    components: {},
    computed: {
        ...mapState({
            corpId:state => state.user.corpid,
        })
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'getBinding'
        ]),
        submit(){
            if(!this.fromData.username){
                this.ddSet.setToast({text:'请输入手机号'})
                return
            }
            if(!this.fromData.password){
                this.ddSet.setToast({text:'请输入密码'})
                return
            }
            this.ddSet.infoCode(this.corpId).then(res => {
                let code = res.code
                let {username,password} = this.fromData
                let params = {
                    username,
                    password,
                    code
                }
                this.getBinding(params).then(res => {
                    if(!res.data.status){
                        this.ddSet.setToast({text:res.data.msg})
                    }else{
                        this.ddSet.setToast({text:'绑定成功'}).then(res => {
                            this.$router.push({path:"/"})
                        })
                    }
                })
            })
        }
    },
}
</script>

<style scoped lang='scss'>
    .logo{
        text-align: center;
        margin-top: 1rem;
        img{
            width: 4.32rem;
        }
    }
    .from{
        text-align: center;
        margin-top: 1rem;
        input{
            width: 6.3rem;
            height: .8rem;
            background-color: #FFF;
            border: 1px solid #dadada;
            border-radius: 15px;
            text-indent: 20px;
            font-size: .24rem;
            margin-bottom: .5rem;
        }
        .from_btn{
            text-indent: 0;
            border: none;
            background-color: #1eb9ee;
            color: #FFF;
            font-size: .24rem;
        }
    }
    
</style>
