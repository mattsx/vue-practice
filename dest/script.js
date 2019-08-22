var app = new Vue({
  // options
  el: '#app',
  data: {
    now: ''
  },
  methods: {
    onclick: function(){
      this.now = new Date().toLocaleString();
    }
  }
})
