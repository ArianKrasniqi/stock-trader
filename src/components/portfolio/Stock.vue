<template>
  <div class="col-sm-4 stock">
    <div class="card border-success mb-3" style="max-width: 22rem;">
      <div class="card-header">
        {{ stock.name }}
        <small>(Price: {{ stock.price }} | Quantity: {{ quantity }})</small>
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="quantity <= 0"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock();
    }
  }
};
</script>

<style scoped>
.stock {
  margin-top: 20px;
}
</style>
