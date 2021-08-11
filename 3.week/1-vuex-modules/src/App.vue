<template>
  <div class="app">
    <p>
      {{ $store.state.mainName }}
    </p>
    <p>
      {{ $store.state.contact.contactName }}
    </p>
    <pre>
      {{ contactName }}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    console.log(this.$store.getters["contact/_contactName"]);
  },
  computed: {
    ...mapGetters({
      contactName: "contact/_contactName",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
