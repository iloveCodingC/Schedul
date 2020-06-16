<template>
  <div>
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class="nav-center">设置</div>
    </nav-bar>
    <div class="set-body">
      <div class="body-item" v-for="(item, index) in setBody" :key="index">
        <span>{{ item.title }}</span>
        <div>
          <img src="~assets/img/profile/next.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "SetProfile",
  components: {
    NavBar
  },
  data() {
    return {
      setBody: [
        { title: "账号管理", link: "" },
        { title: "修改密码", link: "" },
        { title: "消息推送设置", link: "" },
        { title: "问题反馈", link: "" },
        { title: "关于", link: "" },
      ]
    };
  },
  methods: {
    navBack() {
      this.$router.go(-1);
      this.$store.commit('showMainBar')
    },
    backindex() {}
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
  font-size: 18px;
}
.nav-left img {
  height: 30px;

  margin-top: 7px;
}
.set-body {
  display: flex;
  flex-direction: column;
}
.set-body .body-item:nth-child(2){
  border-bottom: 10px solid rgba(99, 110, 114,.1);
}
.set-body .body-item:nth-child(3){
  border-bottom: 10px solid rgba(99, 110, 114,.1);
}
.body-item {
  flex: 1;
  line-height: 50px;
  border-bottom: 0.5px solid rgba(99, 110, 114,.3);
}
.body-item div {
  display: inline-block;
  width: 60%;
  text-align: right;
}
.body-item span {
  display: inline-block;
  font: 16px "微软雅黑";
  width: 35%;
  margin-left: 10px;
  text-align: left;
}
.body-item img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 3px;
}
</style>
