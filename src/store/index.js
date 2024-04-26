import { createStore } from "vuex";

export default createStore({
  state: {
    dialog: false,
    shopCar: {},
  },
  getters: {
    getDialog: (state) => state.dialog,
    getShopCar: (state) => state.shopCar,
    totalPrice(state) {
      return Object.values(state.shopCar).reduce(
        (acc, { total }) => acc + total,
        0
      );
    },
    totalAmount(state) {
      return Object.values(state.shopCar).reduce(
        (acc, { amount }) => acc + amount,
        0
      );
    },
  },
  mutations: {
    setDialogTrue(state, value) {
      state.dialog = value;
    },
    setShopCar(state, payload) {
      state.shopCar[payload.title] = { ...payload };
      console.log("geter", state.shopCar);
    },
  },
  actions: {
    setDialog(context, value) {
      context.commit("setDialog", value);
    },
    addShopCar({ commit, state }, product) {
      console.log("agre", product);

      if (Object.prototype.hasOwnProperty.call(state.shopCar, product.title)) {
        product.amount = state.shopCar[product.title].amount = product.amount;
        product.total = state.shopCar[product.title].amount * product.price;
      } else {
        product.amount;
      }
      commit("setShopCar", product);
    },
  },

  modules: {},
});
