<template>
  <div>
    <nav-bar><div slot="center" class="nav">中山大学新华学院</div></nav-bar>
    <scroll class="content">
      <recommend-views :banners="banners" />
      <child-home :navchild="navchild" />
      <shop :shopdata="shopdata" />
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import RecommendViews from "./childComps/RecommendViews";
import Shop from "./childComps/Shop";
import ChildHome from "./childComps/ChildHome";

export default {
  name: "Home",
  components: {
    NavBar,
    RecommendViews,
    Shop,
    ChildHome,
    Scroll
  },
  data() {
    return {
      banners: [
        {
          link: "www.cnblogs.com/wangjian8888/p/6092158.html",
          image: require("assets/img/home/recommend1.jpg")
        },
        {
          link: "www.cnblogs.com/wangjian8888/p/6092158.html",
          image: require("assets/img/home/recommend2.jpg")
        },
        {
          link: "www.cnblogs.com/wangjian8888/p/6092158.html",
          image: require("assets/img/home/recommend3.jpg")
        }
      ],
      navchild: [
        {
          link: "/home/gengeral",
          image: require("assets/img/home/appoint_icon.svg"),
          title: "维修常识"
        },
        {
          link: "/home/Explain",
          image: require("assets/img/home/appoint_icon1.svg"),
          title: "预约说明"
        },

        {
          link: "/order",
          image: require("assets/img/home/appoint_icon2.svg"),
          title: "我的预约"
        },
        {
          link: "/appointment",
          image: require("assets/img/profile/set.svg"),
          title: "立即预约"
        }
      ],
      shopdata: [
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title:
            "我们绝不放弃，德马西亚！我们绝不放弃，德马西亚！我们绝不放弃，德马西亚！我们绝不放弃，德马西亚！我们绝不放弃，德马西亚！我们绝不放弃，德马西亚！"
        },
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        },
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        },
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        },
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        },
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        },
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        },
        {
          link: "/home/adivce",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        },
        {
          link: "www.cnblogs.com/wangjian8888/p/6092158.html",
          image: require("assets/img/home/test.jpg"),
          title: "我们绝不放弃，德马西亚！"
        }
      ]
    };
  }
};
</script>
<style scoped>
.nav {
  font-size: 18px;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
