<template>
  <div class="col-sm-4 stock">
    <div class="card border-info mb-3" style="max-width: 22rem;">
      <div class="card-header">
        {{ stock.name }}
        <small
          >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small
        >
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientQuantity }"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0"
          >
            {{ insufficientQuantity ? "No Stocks" : "Sell" }}
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
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      console.log(this.stock.quantity);
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    // Array or Object to rename from portfolio store
    ...mapActions({
      sellStockAction: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStockAction(order);
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
