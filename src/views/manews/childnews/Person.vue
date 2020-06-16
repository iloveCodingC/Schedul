<template>
  <div class="person">
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()"/>
      </div>
      <div slot="center" class=".nav-center">陈师傅</div>
    </nav-bar>
    <scroll class="content">
    <chat/>
    </scroll>
     <news-bar></news-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import NewsBar from "./NewBar"
import Chat from "./Chat"

export default {
  name: "Person",
  components: {
    NavBar,
    NewsBar,
    Chat,
    Scroll
  },
  methods:{
    navBack(){
      this.$router.replace('/news');
      this.$store.commit('showMainBar')

    }
  }
};
</script>
<style scoped>
.nav-left{
  margin: 0;
  height: 44px;
  line-height: 44px;
  text-align: left;

}
.nav-left img {
  height: 30px;
  
  margin-top: 7px;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
}
</style>
