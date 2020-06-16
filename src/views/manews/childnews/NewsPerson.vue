<template>
 <div >
  <div class="nav-bar" v-for="(item,index) in bodyset" :key="index" @click="person()">
    <div class="left"><img :src="item.image" /></div>
    <div class="center">{{item.title}}</div>
  </div>
  </div>
</template>

<script>
export default {
  name: "NewsPerson",
  data(){
    return{
      bodyset:
      [
      {image:require('assets/img/news/1.jpg'),title:'陈师傅'},
      {image:require('assets/img/news/1.jpg'),title:'李师傅'},
      
      ]
    }
  },
  methods:{
      person(){
          this.$router.replace('/person')
          this.$store.commit('hiddenMainBar')

      }

  }
};
</script>

<style scoped>
.nav-bar {
  
  display: flex;
  height: 60px;
  font-size: 18x;
  border-bottom: 1px solid rgba(66, 66, 66, .1)
}

.left {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-top: 10px;
}

.center {
  flex: 1;
  line-height:60px;
  text-align:left;
  
}
.left img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
</style>
