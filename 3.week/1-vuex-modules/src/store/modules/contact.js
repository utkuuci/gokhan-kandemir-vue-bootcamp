export default {
  namespaced: true,
  state: {
    contactName: "pursol",
    contactAddress: "Kanada",
  },
  mutations: {
    setItem(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    _contactName: (state) => state.contactName,
  },
};
