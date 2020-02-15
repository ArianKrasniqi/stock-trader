<template>
  <div class="login">
    <form>
      <p>Please fill in this form to create an account!</p>

      <appInput v-for="input in inputs" :input="input"></appInput>

      <button type="submit" class="btn btn-primary submit">Signup</button>
    </form>
  </div>
</template>

<script>
import Input from "../../elements/Input.vue";

export default {
  data() {
    return {
      inputs: [
        { id: 1, label: "Name", type: "text" },
        { id: 2, label: "Last Name", type: "text" },
        { id: 3, label: "Email Address", type: "email" },
        { id: 4, label: "Password", type: "password" }
      ]
    };
  },
  components: {
    appInput: Input
  }
};
</script>

<style scoped>
.login {
  background: #f8f9fa;
  width: 40%;
  padding: 20px;
  margin: auto;
  margin-top: 50px;
}
.submit {
  width: 100%;
}
</style>
