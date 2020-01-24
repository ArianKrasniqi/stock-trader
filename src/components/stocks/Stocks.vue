<template>
  <div class="stocks">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "Audi", price: 100 },
        { id: 1, name: "Google", price: 200 },
        { id: 1, name: "Apple", price: 250 },
        { id: 1, name: "Facebook", price: 180 }
      ]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>

<style scoped>
.stocks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>