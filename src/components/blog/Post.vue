<template>
  <div class="card" style="width: 18rem;">
    <img
      src="https://media.gettyimages.com/photos/money-pile-100-dollar-bills-picture-id157308559?s=612x612"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
.card {
  margin: 20px;
}
</style>
