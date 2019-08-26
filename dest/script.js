var helloComponent = {
  template: '<p>Hello component</p>'
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js',
  },
  components: {
    'hello-component': helloComponent
  }
})
