<template>
  <div class="login">
    <!--<form> -->
    <p>Please fill in this form to create an account!</p>

    <appInput v-for="input in inputs" :input="input"></appInput>

    <button type="submit" class="btn btn-primary submit" @click="createUser">
      Signup
    </button>
    <!--</form> -->
  </div>
</template>

<script>
import Input from "../../elements/Input.vue";
import gql from "graphql-tag";

export default {
  data() {
    return {
      inputs: [
        { id: 1, label: "Name", type: "text", value: "" },
        { id: 2, label: "Last Name", type: "text", value: "" },
        { id: 3, label: "User Name", type: "text", value: "" },
        { id: 4, label: "Password", type: "password", value: "" },
        { id: 5, label: "Email Address", type: "email", value: "" }
      ]
    };
  },
  methods: {
    async createUser() {
      const result = await this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation createUser(
            $name: String!
            $lastname: String!
            $username: String!
            $password: String!
            $email: String!
          ) {
            createUser(
              userSignUpInput: {
                name: $name
                lastname: $lastname
                username: $username
                password: $password
                email: $email
              }
            ) {
              success
              user {
                id
                name
                lastname
                username
                password
                email
              }
              message
            }
          }
        `,
        // Parameters
        variables: {
          name: this.inputs[0].value,
          lastname: this.inputs[1].value,
          username: this.inputs[2].value,
          password: this.inputs[3].value,
          email: this.inputs[4].value
        }
      });
    }
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
