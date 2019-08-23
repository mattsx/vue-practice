var app = new Vue({
  el: '#app',
  data: {
    message: 'default'
  },
  methods: {
    clear: function() {
      this.message = ''
    },
    clickHandler: function() {
      alert('clicked!')
    }
  }
})
