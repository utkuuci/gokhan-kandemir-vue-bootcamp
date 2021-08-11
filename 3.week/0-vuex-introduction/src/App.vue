<template>
  <div>
    <!-- {{ $store.state }} -->
    <!-- <li v-for="permission in $store.state.permissions" :key="permission">
        {{ permission }}
      </li> -->
    <!-- <li v-for="user in $store.state.userList" :key="user">
        {{ user }}
      </li> -->
    <!-- {{ $store.state.fullName }} -->
    <UserList />
    <NewUser />
  </div>
</template>

<script>
import UserList from "./components/UserList.vue";
import NewUser from "./components/NewUser.vue";
export default {
  name: "App",
  components: {
    UserList,
    NewUser,
  },
  created() {
    // console.log(this.$store.state.user);
    // console.log(this.$store.getters._woodItems);
    // console.log(this.$store.getters._activeUser)
    // console.log(`this.activeUser :>>`, this.activeUser);
  },
  // computed: mapGetters(["woodItems", "activeUser"]),
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
