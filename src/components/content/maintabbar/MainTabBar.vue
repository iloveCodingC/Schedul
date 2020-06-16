<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/appointment">
      <img slot="item-icon" src="~assets/img/tabbar/appointment.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/appointment_active.svg" alt="">
      <div slot="item-text">预约</div>
    </tab-bar-item>
    <tab-bar-item path="/news">
      <img slot="item-icon" src="~assets/img/tabbar/news.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/news_active.svg" alt="">
      <div slot="item-text">消息</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
