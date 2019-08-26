Vue.component('hello-component', {
  template: '<p>Hello</p>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js',
  }
})
