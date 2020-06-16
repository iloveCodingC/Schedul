<template>
  <div class="login">
    <div class="head">登录</div>
    <div class="body">
      <input type="text" v-model="loginForm.username" placeholder="手机号" class="input-one" />
      <input type="password" v-model="loginForm.pwd" placeholder="密码" class="input-two" />
      <div class="forget" @click="goForget">忘记密码?</div>
    </div>
    <div class="button-one">
      <button @click="goHome">登录</button>
    </div>
    <div class="footer">
      <div class="go-register" @click="goRegister">还没账号?立即注册</div>
    </div>
  </div>
</template>

<script>
import { login } from "network/login";

export default {
  name: "Login",
  data(){
    return{
         loginForm:{
           username:'',
           pwd:''
         }
    }
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    goForget() {
      this.$router.push("/forgetpassword");
    },
    goHome() {
      // this.$router.replace("/home");
      // this.$store.commit("showMainBar");
            if (this.loginForm.username === "" || this.loginForm.pwd === "") {
        this.$message({
          type: "warning",
          message: "请输入用户名或密码"
        });
      } else {
        const username = this.loginForm.username;
        const pwd = this.loginForm.pwd;
        login(username, pwd).then(
          res => {
            console.log(res);
            if (res.data.data.token) {
              // 存储在本地的localStograge中，可以使用cookies/local/sessionStograge
              this.$store.commit("loginCommit", res.data.data.token);
              this.$store.commit("adduser",{username,pwd});
            }
            if (res.data.code === 200) {
              setTimeout(() => {
                this.$store.commit("showMainBar");
                this.$router.replace("/home");
              }, 1000);
            } else {
              this.$message({
                type: "warning",
                message: "用户名或密码错误"
              });
            }
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  },
  created() {
    this.$store.commit("hiddenMainBar");
  }
};
</script>
<style scoped>
.head {
  margin-top: 20%;
  font: 23px "arial";
  color: black;
  margin-left: 30px;
}
.body {
  margin: 25px 30px;
  position: relative;
}

button,
input,
input:hover {
  border: 0;
  outline: 0;
}

.body input {
  font-size: 18px;
  border-bottom: 1px solid rgba(149, 165, 166, 1);
  line-height: 40px;
  margin: 10px 0;
  width: 100%;
  caret-color: rgba(9, 132, 227, 1);
}
.body input::placeholder {
  font-size: 16px;
  opacity: 0.5;
}
.forget {
  position: absolute;
  top: 71px;
  right: 0;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  opacity: 0.5;
}
.button-one {
  text-align: center;
  margin-top: 50px;
}
button {
  color: #fff;
  width: 70%;
  font-size: 1em;
  padding: 3%;
  background-color: rgba(9, 132, 227, 1);
  border-radius: 3px;
}

.go-register {
  color: rgba(9, 132, 227, 1);
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}
</style>
