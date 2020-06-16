<template>
  <div>
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class="nav-center">账号管理</div>
    </nav-bar>
    <div class="nav-body">
      <div
        class="nav-bar-body"
        v-for="(item, index) in userManage"
        :key="index"
      >
        <div class="left">{{ item.title }}</div>
        <div class="center">
          <span>{{ item.content.substr(0, 8) }}</span
          ><span>{{ item.content.substr(8, 30) }}</span>
        </div>
        <div class="right">
          <img src="~assets/img/profile/next.svg" alt="加载失败" />
        </div>
      </div>
    </div>
    <div class="user-foot" @click="loginOut"><button>退出登录</button></div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "User",
  components: {
    NavBar
  },
  data() {
    return {
      userManage: [
        { title: "头像", content: "", link: "" },
        { title: "姓名", content: "陈忠良", link: "" },
        { title: "性别", content: "男", link: "" },
        { title: "年龄", content: "22", link: "" },

        { title: "手机号", content: "13232737203", link: "" },
        {
          title: "单位",
          content: "中山大学新华学院           学号/工号：17053123",
          link: ""
        }
      ]
    };
  },
  methods: {
    navBack() {
      this.$router.go(-1);
      this.$store.commit("showMainBar");
    },
    loginOut() {
      this.$router.push('/login')
      this.$store.commit("hiddenMainBar");
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
  font: 16px;
  font-family: "微软雅黑";
}
.nav-left img {
  height: 30px;

  margin-top: 7px;
}
.nav-bar-body {
  font-size: 15px;
  display: flex;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.left {
  width: 80px;
  text-align: left;

  margin-left: 10px;
}
.right {
  width: 50px;
  vertical-align: middle;
}
.right img {
  position: relative;
  width: 15px;
  height: 15px;
  margin-left: 17px;
}
.center {
  flex: 1;
}

.nav-bar-body:nth-child(1) {
  height: 70px;
  line-height: 70px;
}
.nav-bar-body:nth-child(1) .center {
  background: no-repeat url(~assets/img/profile/user.png);
  background-size: 60px 60px;
  background-position: right center;
}
.nav-bar-body:nth-child(2) .center {
  text-align: left;
  color: #3498db;
  font-family: "微软夜黑";
}
.nav-bar-body:nth-child(2) .right {
  display: none;
}
.nav-bar-body:nth-child(3) .center {
  font-family: "微软雅黑";
}
.nav-bar-body:nth-child(4) {
  border-bottom: 8px solid rgba(44, 62, 80, 0.1);
}
.nav-bar-body:nth-child(4) .center {
  font-family: "微软雅黑";
}
.nav-bar-body:nth-child(5) .center {
  opacity: 0.5;
  font-family: "微软雅黑";
}
.nav-bar-body:nth-child(6) {
  height: 60px;
  line-height: 60px;
}
.nav-bar-body:nth-child(6) .center {
  opacity: 0.5;
  font-family: "微软雅黑";
  text-align: start;
  line-height: 22.5px;
}
.nav-bar-body:nth-child(6) .center span {
  display: block;
  z-index: 7em;
  margin: 5px 0;
}
/*退出登录*/
.user-foot {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(236, 240, 241, 1);
  text-align: center;
}
.user-foot button {
  border: 0;
  outline: 0;
  background-color: rgba(231, 76, 60, 1);
  color: #fff;
  width: 90%;
  font: 14px "arial";
  margin: 10px 0;
  margin-bottom: 15px;
  height: 35px;
  text-align: 35px;
  border-radius: 8px;
  letter-spacing: 2px;
}
</style>
