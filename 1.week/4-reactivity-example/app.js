const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["elma", "armut", "kiraz", "cilek"],
      // filteredList: [],
    };
  },
  methods: {
    searchList() {
      // this.changedList = this.itemList.filter((i) => i.includes(this.search));
    },
  },
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search));
    },
  },
}).mount("#app");
