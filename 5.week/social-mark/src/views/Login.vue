<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input
      v-model="userData.username"
      type="text"
      placeholder="Kullanıcı Adı"
      class="input mb-3"
    />
    <input
      v-model="userData.password"
      type="password"
      placeholder="Şifre"
      class="input mb-3"
    />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link
        :to="{ name: 'Register' }"
        class="text-red-900 hover:text-black"
      >
        Üye olmak istiyourm!</router-link
      >
    </span>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      // GET /posts?title=json-server&author=typicode

      const password = CryptoJS.HmacSHA1(
        password,
        this.$store.getters._saltKey
      ).toString();
      this.$appAxios
        .get(`/users?username=${this.userData.username}&password=${password}`)
        .then((res) => {
          console.log(res);
          if (res?.data?.length > 0) {
            this.$store.commit("setUser", res?.data[0]);
            this.$router.push({ name: "Home" });
          } else {
            alert("Boyle bir kullanici bulunamadi");
          }
        })
        .catch((e) => console.log(e));
      // .finally(() => (this.loader = false));
    },
  },
};
</script>
