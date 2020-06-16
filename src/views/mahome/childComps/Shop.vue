<template>
  <div>
    <div class="consultation"><span>校园咨讯</span></div>
    <div v-for="(item,index) in shopdata " :key="index" class="shop-home" @click="goAdivce('/home/adivce')">
      <div class="img-one"><img :src="item.image"></div>
      <div class="title-one"><span>{{item.title}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: {
    shopdata: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    goAdivce(way){
      this.$router.push(way)
      this.$store.commit("hiddenMainBar");

    }
  }
};
</script>

<style scoped>
.consultation{
    width: 100%;
    height: 30px;
    background-color:rgba(100,100,100,0.1);
    border-bottom: 1px solid rgba(100,100,100,.2);
}
.consultation span{
    line-height: 30px;
    text-align: left;
    font: bold,14px 'Hiragino Sans GB','\5b8b\4f53',sans-serif;;
    margin: 5px;
}
.shop-home{
    display: flex;
    width: 100%;
    overflow: hidden;
    line-height:100px;
    height: 100px;
    margin: 5px;
    border-bottom: 2px solid rgba(100,100,100,0.1);
    
}

.shop-home:hover{
    background-color: rgba(100,100,100,0.05);
    
}
img:hover{
    background-color: rgba(100,100,100,0.05);
}
.shop-homp div{
    flex: 1;
}
img {
    width: 90px;
    height: 90px;
}
.title-one{
    font: 12px '微软雅黑';
    margin: 5px;

}
</style>
