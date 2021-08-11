import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "tolga",
      lname: "yakar",
      age: 21,
      address: {},
      password: 123123123,
      tc: 1111,
    },
    theme: "dark",
    fullName: "Muzaffer Tolga Yakar",
    permissions: [1, 2, 3, 4, 5],
    userList: [
      "Tolga",
      "Tayfun",
      "Ramazan",
      "Ilker",
      "Defne",
      "Kamil",
      "Cemil",
    ],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
    ],
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
    // changeUser(state, payload) {},
  },
  actions: {
    async newItem(context, item) {
      // async newItem({ commit }, item) {
      console.log(`item :>> `, item);
      await setTimeout(() => {
        // context.state
        // context.dispatch
        context.commit("newItem", item);
      }, 2000);
    },
  },
  getters: {
    _woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),
    _activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
