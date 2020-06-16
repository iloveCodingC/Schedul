<template>
  <div id="order">
    <nav-bar>
      <div slot="left" class="nav-left">
        <img src="~assets/img/news/back.svg" alt="" @click="navBack()" />
      </div>
      <div slot="center" class=".nav-center">我的预约</div>
    </nav-bar>
    <order-bar
      :ordertitle="['全部', '待维修', '已维修']"
      @tabClick="tabClick"
    />
    <scroll class="content" ref="scroll">
      <order-body :order="showOrder" @sub="sub"/>
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import OrderBar from "./childComps/OrderBar";
import OrderBody from "./childComps/OrderBody";
export default {
  name: "Order",
  components: {
    OrderBar,
    NavBar,
    OrderBody,
    Scroll
  },
  data() {
    return {
      order: {
        all: [],
        noLaster: [],
        Laster: []
      },
      netData: {
        all: [
          {
            id: 1,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "空调坏了，麻烦赶快来维修1呀"
          },
          {
            id: 2,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "洗衣机坏了，麻烦尽快来维修呀"
          },
          {
            id: 3,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "厕所门被台风给搞坏了，打不开了"
          },
          {
            id: 4,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "饮水机坏了，喝不了水"
          }
        ],
        noLaster: [
          {
            id: 1,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "厕所门被台风给搞坏了，打不开了"
          }
        ],
        Laster: [
          {
            id: 1,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "空调坏了，麻烦赶快来维修1呀"
          },
          {
            id: 2,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "洗衣机坏了，麻烦尽快来维修呀"
          },
          {
            id: 3,
            name: "陈忠良",
            address: "13栋1114",
            phone: "13232737203",
            why: "饮水机坏了，喝不了水"
          }
        ]
      },
      currentindex: "all"
    };
  },

  computed: {
    showOrder() {
      if (this.currentindex === "Laster") {
        this.$store.commit("orderDone");
      }else{
        this.$store.commit("orderDo");
      }

      return this.order[this.currentindex];
    }
  },
  created() {
    this.getOrder("all");
    this.getOrder("noLaster");
    this.getOrder("Laster");
  },
  methods: {
    navBack() {
      this.$router.go(-1);
      this.$store.commit("showMainBar");
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentindex = "all";
          break;
        case 1:
          this.currentindex = "noLaster";
          break;
        case 2:
          this.currentindex = "Laster";
          break;
      }
    },
    sub(subId){
      for(let i = 0;i < this.order[this.currentindex].length;i++){
        if(this.order[this.currentindex][i].id === subId ){
          this.order[this.currentindex].splice(i,1)         
          break

        }
      }
    },

    getOrder(type) {
      this.order[type] = this.netData[type];
      console.log(this.order);
    }
  }
};
</script>
<style scoped>
#order {
  background-color: rgba(151, 151, 151, 0.08);
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
.content {
  background-color: rgba(151, 151, 151, 0.08);
  overflow: hidden;
  position: absolute;
  top: 88px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
