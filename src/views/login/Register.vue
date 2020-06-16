<template>
  <div class="register">
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class="nav-center">注册</div>
    </nav-bar>
    <div class="body">
      <input
        type="text"
        v-model="registerForm.username"
        placeholder="手机号"
        class="input-one"
      />
      <input type="text" placeholder="验证码" class="input-two" />
      <div class="get-code" >获取验证码</div>
      <input
        type="password"
        v-model="registerForm.pwd"
        placeholder="设置密码"
        class="input-one"
      />
      <input
        type="password"
        v-model="registerForm.pwdAgain"
        placeholder="重复输入密码"
        class="input-one"
      />
      <div class="input-file">
        密码要求6-16位,至少包含数字、字母、符号两种元素
      </div>
    </div>
    <div class="button-one">
      <button @click="register">确认注册</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { register } from "network/login";

export default {
  name: "Register",
  components: {
    NavBar
  },
  data() {
    return {
      registerForm: {
        username: "",
        pwd: "",
        pwdAgain: ""
      }
    };
  },
  methods: {
    navBack() {
      this.$router.go(-1);
    },
    register() {
      if (this.registerForm.username === "" || this.registerForm.pwd === "") {
        this.$message({
          type: "warning",
          message: "手机号或密码不能为空"
        });
      } else if (this.registerForm.pwd !== this.registerForm.pwdAgain) {
        console.log(this.registerForm.pwd);

        this.$message({
          type: "warning",
          message: "两次输入的密码不一致"
        });
      } else {
        const username = this.registerForm.username;
        const pwd = this.registerForm.pwd;
        register(username, pwd).then(
          res => {
            console.log(res.data.msg);
            
            if (res.data.msg === "注册成功") {
              this.$message({
                type: "success",
                message: "注册成功"
              });
            } else {
              this.$message({
                type: "warning",
                message: "用户名已存在"
              });
            }

            setTimeout(() => {
              this.$router.replace("/login");
            }, 1000);
          },
          err => {
            console.log(err);
          }
        );
      }
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
.body {
  margin: 25px 30px;
  position: relative;
  margin-top: 10%;
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
.get-code {
  position: absolute;
  top: 71px;
  color: rgba(9, 132, 227, 1);
  right: 0;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.input-file {
  font: 11px sans-serif;
  opacity: 0.5;
  overflow: hidden;
  text-align: center;
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
</style>
