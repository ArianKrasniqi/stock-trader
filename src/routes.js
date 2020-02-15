import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";
import Login from "./components/login/Login.vue";
import Signup from "./components/signup/Signup.vue";

export const routes = [
  { path: "/", component: Login },
  { path: "/signup", component: Signup },
  { path: "/home", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks }
];
