<template>
  <div class="new-bar">
      <form  >
      <input name="conten" type="text" class="text-one"   />
      <input type="submit" value="发送" class="submit-one" @click="buttonSubmit()"> 
      </form>
  </div>
</template>
<script>


export default {
  name: "NewBar",
  components: {

  },
  methods:{
      buttonSubmit(){
          this.$store.commit('hiddenMainBar')
      }
      
  }

};
</script>
<style scoped>
.new-bar{
    display: flex;
    border-top: 1px solid rgba(66,66,66,.05);
    background: rgba(66,66,66,.08);
    line-height: 44px;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    text-align: right;
    

}
form{
    width: 100%;
    text-align: right;
}
input,input:focus{
    outline: 0;
    border: 0;
}
.text-one:focus{
    caret-color:rgb(113, 224, 113);
    font-size: 18px;
    
    
}

.text-one{
    flex: 1;
    align-self: center;
    line-height: 34px;
    border-radius: 3px;
    width: 76%;
    margin: 0 2% 0 3% ;
    letter-spacing: 1.1px;
}
.submit-one{
    flex: 1;
    width: 16%;
    line-height: 34px;
    margin-right: 3%;

}
</style>
