<template>
  <div class="form-area card border p-4 mt-5">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        v-model="userData.title"
        class="form-control"
        id="title"
        placeholder="Title"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">Url</label>
      <input
        type="text"
        v-model="userData.url"
        class="form-control"
        id="url"
        placeholder="Url"
      />
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Description</label>
      <textarea
        class="form-control"
        id="desc"
        rows="3"
        v-model="userData.desc"
        placeholder="Description"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button
        class="btn btn-secondary me-3"
        @click="$router.push({ name: 'HomePage' })"
      >
        Cancel
      </button>
      <button class="btn btn-primary" @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: "",
        url: "",
        desc: "",
      },
    };
  },
  methods: {
    async onSave() {
      console.log(this.userData);
      await this.$appAxios
        .post("/bookmarks", this.userData)
        .then((save_response) => {
          console.log("save_response", save_response);
          if (save_response) {
            this.resetData();
          }
          this.$router.push({ name: "HomePage" });
        });
    },

    resetData() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>
