<template>
    <div>
        <nav-bar><div slot="center" class="nav">中山大学新华学院</div></nav-bar>
        <recommend-views :banners="banners"/>
    </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"

import RecommendViews from "./childComps/RecommendViews"

export default {
    name:'Home',
    components:{
        NavBar,
        RecommendViews

    },
    data(){
        return{
            banners:[
            {link:'www.cnblogs.com/wangjian8888/p/6092158.html',image:require('assets/img/home/favorite.jpg')},
            {link:'www.cnblogs.com/wangjian8888/p/6092158.html',image:require('assets/img/home/favorite.jpg')},
            {link:'www.cnblogs.com/wangjian8888/p/6092158.html',image:require('assets/img/home/favorite.jpg')}, 
            ]
        }
            }
}
</script>
<style scoped>
.nav{
    font-size: 18px;
}
</style>