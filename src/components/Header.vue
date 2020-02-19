<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <app-modal :isOpen="isAddPostOpen"></app-modal>
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <!-- Mobile Menu -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" activeClass="active" tag="li">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link to="/stocks" activeClass="active" tag="li">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>

      <span class="navbar-text">
        <ul class="navbar-nav mr-auto">
          <li>
            <button type="button" class="btn btn-dark" @click="modalHandler">
              Add Post
            </button>
          </li>
          <li>
            <a href="#" class="nav-link" @click="endDay">End Day</a>
          </li>
          <li
            class="nav-item dropdown"
            @click="idDropdownOpen = !idDropdownOpen"
          >
            <a
              class="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save and Load
            </a>
            <div
              class="dropdown-menu"
              :class="{ show: idDropdownOpen }"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" @click="saveData" href="#">Save Data</a>
              <a class="dropdown-item" @click="loadData" href="#">Load Data</a>
            </div>
          </li>
          <strong class="nav-link"> Funds: {{ funds | currency }} </strong>
        </ul>
      </span>

      <!--      
      <form class="form-inline my-2 mr-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      -->
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "../elements/Modal.vue";

export default {
  data() {
    return {
      isAddPostOpen: false
    };
  },
  components: {
    appModal: Modal
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    },
    modalHandler() {
      this.isAddPostOpen = !this.isAddPostOpen;
    }
  }
};
</script>
