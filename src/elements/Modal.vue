<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :class="{ show: isOpen }"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add new Post</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="modalHandler"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="formGroupExampleInput2">Post Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Another input placeholder"
              v-model="title"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Post Description</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="modalHandler"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="addPost">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  props: ["isOpen"],
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    modalHandler() {
      this.isOpen = !this.isOpen;
    },
    async addPost() {
      const result = await this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation addPost($title: String!, $description: String!) {
            addPost(postInput: { title: $title, description: $description }) {
              title
              description
            }
          }
        `,
        // Parameters
        variables: {
          title: this.title,
          description: this.description
        }
      });
      this.modalHandler();
    }
  }
};
</script>

<style>
.show {
  display: block;
  padding-right: 17px;
}
</style>
