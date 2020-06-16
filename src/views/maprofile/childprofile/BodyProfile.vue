<template>
  <div>
    <div
      
      v-for="(item, index) in bodyset"
      :key="index"
      @click="ordergo(index)"
    ><div class="nav-bar" >
      <div class="left"><img :src="item.image" /></div>
      <div class="center">{{ item.title }}</div>
      <div class="right"><img src="~assets/img/profile/next.svg" /></div>
      
      </div>
      <div class="line" v-if="index === 1"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "BodyProfile",
  data() {
    return {
      bodyset: [
        {
          image: require("assets/img/profile/set.svg"),
          title: "我的预约",
          link: "/order"
        },

        {
          image: require("assets/img/profile/recommend.svg"),
          title: "其他推荐",
          link: "/profile/recommend"
        },
        {
          image: require("assets/img/profile/service.svg"),
          title: "联系客服",
          link: "/profile/service"
        },
        {
          image: require("assets/img/profile/setprofile.svg"),
          title: "设置",
          link: "/profile/set"
        }
      ]
    };
  },
  methods: {
    ordergo(index) {
      this.$router.push(this.bodyset[index].link);
      this.$store.commit("hiddenMainBar");
    }
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 60px;
  font-size: 18x;
  margin-bottom: 10px;
  margin-top: 2px;
}
.line{
  border-bottom: 15px solid rgba(245, 245, 245,.8);
}
.left,
.right {
  width: 60px;
  line-height: 72.5px;
  text-align: center;
}

.center {
  flex: 1;
  line-height: 60px;
  text-align: left;
}
.left img {
  width: 25px;
  height: 25px;
}
.right img {
  width: 15px;
  height: 15px;
}
</style>
