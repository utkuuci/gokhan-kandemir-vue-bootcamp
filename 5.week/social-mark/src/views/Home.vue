<template>
  <div class="app">
    <app-header />
    <div class="flex flex-row">
      <Sidebar />
      <app-bookmark-list :items="bookmarkList" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Home/Sidebar";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks?expand=categories").then((res) => {
      this.bookmarkList = res?.data;
    });
  },
};
</script>
