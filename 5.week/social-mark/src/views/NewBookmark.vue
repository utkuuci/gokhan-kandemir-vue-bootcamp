<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
    <input
      ref="title"
      v-model="userData.title"
      type="text"
      placeholder="Başlık"
      class="input mb-3"
    />
    <input
      v-model="userData.url"
      type="text"
      placeholder="URL"
      class="input mb-3"
    />
    <select v-model="userData.category_id" class="input mb-3">
      <option disabled value="" selected>Kategori</option>
      <option
        v-for="category in categoryList"
        :key="category.id"
        :value="category.id"
        >{{ category.name }}</option
      >
    </select>
    <textarea
      placeholder="Açıklama"
      class="input mb-3"
      cols="30"
      rows="10"
      v-model="userData.description"
    ></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="$router.push({ name: 'Home' })" class="secondary-button">
        İptal
      </button>
      <button @click="submitHandler" class="default-button">Kaydet</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryList: [],
      userData: {
        title: null,
        url: null,
        category_id: null,
        description: null,
      },
    };
  },
  mounted() {
    this.$appAxios.get("/categories").then((res) => {
      // console.log(res);
      this.categoryList = res?.data || [];
      // console.log(this.categoryList);
    });
    // setTimeout(() => {
    //   console.log(this.$refs.title);
    // }, 1000);
    // this.$nextTick(() => {
    //   console.log(this.$refs.title);
    // });
    // console.log(this.$refs.title);
    // this.$refs.title.focus();
  },
  methods: {
    submitHandler() {
      console.log(this._getCurrentUser);
      const saveData = {
        ...this.userData,
        user_id: this._getCurrentUser?.id,
        created_at: new Date(),
      };
      this.$appAxios.post("/bookmarks", saveData).then((res) => {
        console.log(res);
        Object.keys(this.userData)?.forEach(
          (field) => (this.userData[field] = null)
        );
      });
    },
  },
  computed: {
    ...mapGetters(["_getCurrentUser"]),
  },
};
</script>
