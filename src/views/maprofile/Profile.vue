<template>
    <div>
        <nav-bar><div slot="center"> 我</div></nav-bar>
        <nav-profile/>
        <body-profile/>

    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import NavProfile from './childprofile/NavProfile'
import BodyProfile from './childprofile/BodyProfile'
export default {
    name:'Profile',
    components:{
        NavBar,
        NavProfile,
        BodyProfile
    }
}
</script>
<style scoped>

</style>