<template>
    <div class="nav-profile" @click="goUser">
      
      <img src="~assets/img/profile/user.png" class="nav-img">
      <span>CZL</span>
      <span>
      <img src="~assets/img/profile/next.svg" class="nav-next">
      </span>
            
    </div>

</template>
<script>
export default {
    name:"NavProfile",
    methods:{
       goUser(){
           this.$router.push('/profile/user');
           this.$store.commit("hiddenMainBar");
       } 
    }
    
}
</script>
<style scoped>
.nav-profile{
    height: 110px;
    border-bottom: 20px solid rgba(100,100,100,.08);
    box-sizing: content-box;


}
.nav-img{
    position: fixed;
    top:65px;
    left: 16px;
    width:70px;
    height:70px;
   
}
.nav-next{
    display: flex;
    line-height: 15px;
    text-align: center;
    position: fixed;
    top:90px;
    right: 22.5px;
    width:15px;
    height:15px;
   
}
span{
    position: fixed;
    top: 89.5px;
    margin-left: 100px;
    font-size: 16px;
    left:0 ;
    flex: 1;
}
</style>