<template>
  <div class="editor">
    <h1>Editor</h1>
    <span>{{user.displayName}}</span>
    <button @click="logout">LogOut</button>
  </div>
</template>

<script>
export default {
  name: "editor",
  props: ["user"],
  data() {
    return{};
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style lang="css">
</style>
