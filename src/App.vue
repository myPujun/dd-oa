<template>
  <div id="app">
    <div v-if="isHome">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  name: 'App',
  data(){
      return {
        isHome:false
      }
  },
  created(){
    this.userid('11')
  },
  mounted(){
    //获取企业ID
    this.getCorpid().then(res => {
        this.$store.commit('setCorpid',res.data.corpid)
    })
    //获取用户信息
    this.ddSet.infoCode(this.corpid).then(res => {
        this.userid(res.code)
    })
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
              this.isHome = true
              let {data} = res.data
              this.$store.commit('setUser',data)
              let params = {
                  username:data.user_name
              }
              this.getUserName(params).then(res => {
                  this.$store.commit('setBinding',res.data.status)
                  if(res.data.status === 1){
                      this.ddSet.setToast({text:'已绑定'})
                  }else{
                      this.ddSet.setToast({text:res.data.msg})
                  }
              })
          }else if(res.data.status == 2){
              this.isHome = true
              this.$router.push({path:'/register'})
          }else{
              this.ddSet.setToast({text:res.data.msg})
          }
      })
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/css/index.scss';
</style>
