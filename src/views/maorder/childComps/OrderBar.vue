<template>
  <div>
    <div class="orderbar">
      <div
        v-for="(item, index) in ordertitle"
        :key="index"
        class="orderitem"
        :class="{ isactive: current == index }"
        @click="active(index)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderBar",
  components: {},
  props: {
    ordertitle: {
      type: Array,
      return: []
    }
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    active(index) {
      this.current = index;
    }
  }
};
</script>
<style scoped>
.orderbar {
  display: flex;
  height: 44px;
}
.orderitem {
  display: inline;
  flex: 1;
  line-height: 44px;
  text-align: center;
}
.isactive {
  color: var(--color-high-text);
}
.isactive span{
    padding-bottom: 7px;
    border-bottom: 2px  solid var(--color-tint);
}
</style>
