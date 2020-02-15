<template>
  <div class="form-group">
    <label for="exampleInputEmail1">{{ input.label }}</label>
    <input
      v-bind:type="input.type"
      class="form-control"
      v-bind:id="input.id"
      aria-describedby="emailHelp"
      required
    />
  </div>
</template>

<script>
export default {
  props: ["input"],
  data() {
    return {
      type: this.input.type
    };
  }
};
</script>
