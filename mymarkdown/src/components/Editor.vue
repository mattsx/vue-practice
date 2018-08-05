<template>
  <div class="editor">
    <h1>Editor</h1>
    <span>{{user.displayName}}</span>
    <button @click="logout">LogOut</button>
    <div class="editorWrapper">
      <textarea class="markdown" v-model="markdown" name="name" rows="8" cols="80"></textarea>
      <div class="preview" v-html="preview()"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked"

export default {
  name: "editor",
  props: ["user"],
  data() {
    return{
      markdown: ""
    };
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
    preview: function() {
      return marked(this.markdown);
    }
  }
};
</script>

<style lang="sass" scoped>
.editorWrapper
  display: flex

.markdown
  width: 50%
  height: 500px

.preview
  width: 50%
  text-align: left

</style>
