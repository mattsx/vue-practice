var app = new Vue({
  // options
  el: '#app',
  data: {
    message: "Hello Vue.js!",
    count: 0,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green', 'Blue']
  }
})
