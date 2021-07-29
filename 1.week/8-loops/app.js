const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "vue bootcamp 1.hafta", completed: false },
        { id: 2, text: "vue bootcamp 2.hafta", completed: false },
        { id: 3, text: "vue bootcamp 3.hafta", completed: false },
        { id: 4, text: "vue bootcamp 4.hafta", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");
