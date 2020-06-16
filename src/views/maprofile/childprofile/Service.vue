<template>
  <div class="service-head">
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class="nav-center">客服</div>
    </nav-bar>
    <div class="service-body">
      <span class="one"
        >现在暂时不开通客服在线聊天功能，有事请添加客服的QQ或微信</span
      >
      <span class="two">微信号：13232737203</span>
      <span class="three">QQ号：1713082223</span>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Service",
  components: {
    NavBar
  },
  methods: {
    navBack() {
      this.$router.go(-1);
      this.$store.commit("showMainBar");
    }
  }
};
</script>
<style scoped>
.service-head {
  height: 100vh;
  background-image: url(~assets/img/profile/service.jpg);
  overflow: hidden;
  background-size: 100% 100%;
  background-position: 0 45px;
  background-repeat: no-repeat;
}
.nav-bar {
  background-color: #fff;
}
.nav-left {
  margin: 0;
  height: 44px;
  line-height: 44px;
  text-align: left;
}
.nav-left img {
  height: 30px;

  margin-top: 7px;
}
.nav-center {
  font-size: 16px;
  font-family: "微软雅黑";
}
/*body*/
.service-body {
  margin: 20% 20px 0px 20px;
}

.service-body .one {
  display: block;
  text-align: center;
  font: 18px "华文宋体";
  line-height: 20px;
  color: rgba(52, 152, 219, 1);
}
.two,
.three {
  display: inline-block;
  font: 14px "微软雅黑";
  margin-top: 20px;
  position: absolute;
}
.two {
  left: 5%;
}
.three {
  right: 5%;
}
</style>
