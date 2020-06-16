<template>
  <div class="order-head">
    <div class="orbody" v-for="(item,index) in order" :key="index">
      <div class="head">
        <div>
          <img src="~assets/img/news/1.jpg" alt="" />
          </div>
          <div>
          <span>预约人：{{item.name}}</span>
          <span>宿舍号：{{item.address}}</span>
          <span>电话号：{{item.phone}}</span>

        </div>
      </div>
      <div class="body"><div>维修原因：{{item.why}}</div></div>
      <div class="foot">
          <div class="btn-0ne" @click="chat">马上私聊</div>
          <div class="btn-two" @click="sub(item.id)" v-if="!$store.state.done">删除</div>
          <div class="btn-three" @click="sub(item.id)" v-if="$store.state.done" >取消预约</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderBody",
  props:{
    order:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      done:true
    }
  },
  methods:{
    chat(){
      this.$router.push('/person')
     
    },
    sub(id){
      this.$emit('sub',id)
    }
  }

};
</script>
<style scoped>

.orbody {
  margin: 20px;
  border-radius: 10px;
  height: 230px;
  background-color: #fff;
  border: 1px solid rgba(150, 150, 150, .1); ;
}
.head {
  height: 100px;
  display: flex; 
  border-bottom: 2px solid rgba(150, 150, 150, .06);
  border-bottom-width: 20%;
}
.head div{
  height: 100px;
  display: inline-block;
  text-align: left;
}
.head div span{
    display: block;
    margin: 8px;
    padding: 1px;
    
}
img{
    border-radius: 5px;
    width: 80px;
    height: 80px;
    margin: 5px;
}
.body {
  height: 80px;
  border-bottom: 2px solid rgba(150, 150, 150, .06);
}
.body div{
    margin: 5px;
    font-size: 14px;
}
.foot {
  height: 50px;
  text-align: right;
  
}
.foot div{
    margin: 5px;
    display: inline-block;
    border: 1px solid rgba(150,150,150,1);
    border-radius: 15px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>
