<template>
    <div>
        <nav-bar><div slot="center" class="nav-news">消息</div></nav-bar>
        <news-person/>
    </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import NewsPerson from "./childnews/NewsPerson"

export default {
    name:'News',
    components:{
        NavBar,
        NewsPerson
      

    }

}
</script>
<style scoped>
.nav-news{
   font-size: 18px ;
}
</style>