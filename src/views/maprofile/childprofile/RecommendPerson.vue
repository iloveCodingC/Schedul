<template>
  <div class="recommend-head">
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class="nav-center">推荐</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "RecommendPerson",
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
/*nav-bar*/
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
</style>
