var app = new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    clickHandler: function($event, message){
      console.log($event)
      this.message = message
      // this.counter++
    }
  }
})
