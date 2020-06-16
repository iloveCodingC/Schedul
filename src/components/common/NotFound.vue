<template>
  <div class="not-found">
    404找不到页面了呀<span @click="goHome">点击返回首页</span>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  methods: {
    goHome() {
      this.$router.replace("/home");
      this.$store.commit("showMainBar");
    }
  },
  created() {
    this.$store.commit("hiddenMainBar");
  }
};
</script>
<style scoped>
.not-found {
  font: bold 25px "arial";
  margin-top: 40%;
  text-align: center;
}
.not-found span {
  display: block;
  color: blue;
}
</style>
