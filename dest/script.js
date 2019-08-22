// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'hello vue.js!',
    price: 29800,
  },
  
  mounted: function() {
  },
  
  filters: {
    numberFormat: function(value){
      return value.toLocaleString();
    }
  },
  
  methods: {
  }
})
