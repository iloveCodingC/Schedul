<template>
    <div>
        <order-bar :ordertitle="['全部','待维修','已维修','待评价']"/>
    </div>
</template>
<script>
import OrderBar from "./childComps/OrderBar"
export default {
    name:'Order',
    components:{
        OrderBar

    }

}
</script>
<style scoped>

</style>