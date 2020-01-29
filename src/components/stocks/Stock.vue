<template>
  <div class="col-sm-4 stock">
    <div class="card border-success mb-3" style="max-width: 22rem;">
      <div class="card-header">
        {{ stock.name }}
        <small>(Price: {{ stock.price }})</small>
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientFunds }"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
          >
            {{ insufficientFunds ? "No Funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockName: this.stock.name,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
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
