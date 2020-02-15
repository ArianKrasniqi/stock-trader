<template>
  <div class="blog">
    <app-post v-for="post in posts"></app-post>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  data() {
    return {
      posts: [
        { title: "AA" },
        { title: "AA" },
        { title: "AA" },
        { title: "AA" },
        { title: "AA" },
        { title: "AA" }
      ]
    };
  },
  components: {
    appPost: Post
  }
};
</script>

<style scoped>
.blog {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
