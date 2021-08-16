<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-primary mt-1 mb-1"
        @click="$router.push({ name: 'NewBookmark' })"
      >
        + Add Bookmark
      </button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">URL</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
          <th scope="row">{{ bookmark.id }}</th>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
          </td>
          <!-- <td>{{ bookmark.desc }}</td> -->
          <td>
            <button class="btn btn-sm btn-danger" @click="deleteItem(bookmark)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((bookmarks_res) => {
      this.bookmarkList = bookmarks_res.data || [];
      console.log("bookmark", bookmarks_res);
    });
  },
  methods: {
    async deleteItem(bookmark) {
      // console.log(`bookmark`, bookmark);
      await this.$appAxios
        .delete(`/bookmarks/${bookmark.id}`)
        .then((delete_response) => {
          console.log(`delete_response`, delete_response);
          if (delete_response.status === 200) {
            this.bookmarkList = this.bookmarkList.filter(
              (b) => b.id !== bookmark.id
            );
          }
        });
    },
  },
};
</script>
