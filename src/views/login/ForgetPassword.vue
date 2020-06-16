<template>
  <div class="forget-password">
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class="nav-center">忘记密码</div>
    </nav-bar>

    <div class="body">
      <input type="text" placeholder="手机号" class="input-one" />
      <input type="text" placeholder="验证码" class="input-two" />
      <div class="get-code" >获取验证码</div>
      <input type="text" placeholder="输入新密码" class="input-one" />
      <input type="text" placeholder="重复输入新密码" class="input-one" />
      <div class="input-file">密码要求6-16位,至少包含数字、字母、符号两种元素</div>
    </div>
    <div class="button-one">
      <button>确认</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "ForgetPassword",
  components: {
    NavBar
  },
  methods: {
    navBack() {
      this.$router.go(-1);
      
    }
  }
};
</script>
<style scoped>
.nav-left {
  margin: 0;
  height: 44px;
  line-height: 44px;
  text-align: left;
}
.nav-center {
  font: 18px "微软雅黑";
  line-height: 44px;
  text-align: center;
}
.nav-left img {
  height: 30px;

  margin-top: 7px;
}

.body{
    margin: 25px 30px;
    position: relative;
    margin-top: 10%;

}

button,input,input:hover{
    
    border: 0;
    outline: 0;
}

.body input{
    
    font-size: 18px;
    border-bottom:1px solid rgba(149, 165, 166,1.0);
    line-height: 40px;
    margin: 10px 0;
    width: 100%;
    caret-color:rgba(9, 132, 227,1.0);
}

.body input::placeholder{
    font-size: 16px;
    opacity: 0.5;
}
.get-code{
    position: absolute;
    top:71px;
    color: rgba(9, 132, 227,1.0);
    right:0;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.input-file{
    font: 11px sans-serif;
    opacity: 0.5;
    overflow: hidden;
    text-align: center;

}
.button-one{
   text-align: center;
   margin-top: 50px;
}
button{
    color:#fff;
    width: 70%;
    font-size: 1em;
    padding: 3%;
    background-color: rgba(9, 132, 227,1.0);
    border-radius: 3px;
}

</style>
