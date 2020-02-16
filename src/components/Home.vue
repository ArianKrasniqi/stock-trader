<template>
  <div class="home">
    <h5>Be a better investor</h5>
    <h3>JOIN STOCK TRADER TODAY</h3>
    <button type="button" class="btn btn-outline-primary join"><a class="join" href="/signin">Join now</a></button></button>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
    <app-heading></app-heading>
    <app-blog></app-blog>
  </div>
</template>

<script>
import Heading from "./blog/Heading.vue";
import Blog from "./blog/Blog.vue";

export default {
  components: {
    appHeading: Heading,
    appBlog: Blog
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 30px;
}
.join{
  text-decoration: none;
}
.join:hover{
  color: white
}
</style>
