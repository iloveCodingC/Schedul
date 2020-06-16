<template>
  <div >
<div v-for="(item,index) in chatdata" :key="index">
      <!-- v-if -->
    <div class="char-top" v-if="item.id === 0?true:false">
      <img :src="item.image" alt="" />
      <div class="triangle"></div>
      <div class="chat">{{item.message}}</div>
    </div>
    <!-- v-else -->
    <div class="char-two" v-else >
      <img :src="item.image"  alt="" />
      <div class="triangle"></div>
      <div class="chat">{{item.message}}</div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "Chat",
 
  data(){
      return{
          chatdata : this.$store.state.chatdata 
      }
  },
};
</script>
<style scoped>
/*v-if*/
.char-top {
  display: flex;
  margin-top: 10px;

  position: relative;
  margin-right: 0;
  min-height: 40px;
}
.char-top .chat {
  background-color: #f5f5f5;
  line-height: 2px;
  position: relative;
  margin-right: 2px;
  max-width: 68%;
  color: black;
  line-height: 20px;
  min-height: 40px;
  letter-spacing: 1px;
  padding: 5px;
  border-radius: 3px;
}
.char-top .triangle {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid #f5f5f5;
  border-right: 5px solid transparent;
  border-left: 5px solid #f5f5f5;
  transform: rotate(45deg);
  margin: 15px -5px 15px 7px;
}
.char-top img {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin-left: 7px;
}
/*v-else*/

.char-two {
  display: flex;
  margin-top: 10px;
  flex-direction: row-reverse;
  position: relative;
  margin-right: 0;
  min-height: 40px;
}
.char-two .chat {
  background-color: #f5f5f5;
  line-height: 2px;
  position: relative;
  
  max-width: 68%;
  color: black;
  line-height: 20px;
  min-height: 40px;
  letter-spacing: 1px;
  padding: 5px;
  border-radius: 3px;
}
.char-two .triangle {
  width: 0;
  height: 0;
  border-top: 5px solid #f5f5f5;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #f5f5f5;
  border-left: 5px solid transparent;
  transform: rotate(45deg);
  margin: 15px 7px 15px -5px;
}
.char-two img {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin-right: 7px;
}
</style>
