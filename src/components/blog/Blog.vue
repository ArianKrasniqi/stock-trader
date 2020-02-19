<template>
  <div class="blog">
    <app-post v-for="post in getPosts" :post="post"></app-post>
  </div>
</template>

<script>
import Post from "./Post.vue";
import gql from "graphql-tag";

export default {
  data() {
    return {
      getPosts: ""
    };
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    getPosts: gql`
      query {
        getPosts {
          id
          title
          description
        }
      }
    `
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
