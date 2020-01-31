import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const stockPortfolio = data.stockPortfolio;
        const funds = data.funds;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
