import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "bookmark123!456",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    },
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      // if(user !== null && user.hasOwnProperty('password')){
      //     delete user.password;
      // }
      delete user?.password; // optiional changing
      return user;
    },
    _saltKey: (state) => state.saltKey,
  },
  plugins: [
    createPersistedstate({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
