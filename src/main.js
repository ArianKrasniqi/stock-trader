import Vue from "vue";
import VueRouter from "vue-router";
import VueResorce from "vue-resource";

import App from "./App.vue";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResorce);

Vue.http.options.root = "https://stock-trader-simulator.firebaseio.com/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router: router,
  store,
  render: h => h(App)
});
