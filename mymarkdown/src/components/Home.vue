<template lang="en">
  <div id="home" class="home">
    <h1>{{ msg }}</h1>
    <button type="button" name="button">LogIn with Google Account</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to MyMarkdown"
    };
  }
}
</script>

<style lang="css">
</style>
