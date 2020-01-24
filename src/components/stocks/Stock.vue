<template>
  <div class="col-sm-4 stock">
    <div class="card border-success mb-3" style="max-width: 22rem;">
      <div class="card-header">
        {{stock.name}}
        <small>(Price: {{stock.price}})</small>
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockName: this.stock.name,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.stock {
  margin-top: 20px;
}
</style>