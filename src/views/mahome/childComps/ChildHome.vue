<template>
  <div class="nav-home">
    <div class="nav-child" v-for="(item, index) in navchild" :key="index">
      <div @click="go(index)">
        <img :src="item.image" alt="加载失败" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildHome",
  props: {
    navchild: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  methods: {
    go(index) {
      if (this.navchild[index].link !== "/appointment") {
        this.$store.commit("hiddenMainBar");
      }
      this.$router.push(this.navchild[index].link);
    }
  }
};
</script>

<style scoped>
.nav-home {
  display: flex;
  height: 75px;
  text-align: left;
}
.nav-child {
  flex: 1;
  text-align: center;
  margin-top: 5px;
}
span {
  display: block;
  margin-top: 1px;
  padding: 0px;
  font: 13px "微软雅黑";
}
.nav-child img {
  width: 40px;
  height: 40px;
  margin: 0;
}
</style>
