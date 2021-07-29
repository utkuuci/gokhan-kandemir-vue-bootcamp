const app = Vue.createApp({
  data() {
    return {
      title: "Test basligi",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("create");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }, 2000);
    setTimeout(() => {
      this.title = "Bu yeni baslik";
    }, 5000);
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("update");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmount() {
    console.log("unmount");
  },
  methods: {},
}).mount("#app");
