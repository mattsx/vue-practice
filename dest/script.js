// Vue.component('template', {
//   template: '<p>template</p>'
// })

Vue.filter('numberFormat', function(value){
  return value.toLocaleString();
})

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'hello vue.js!',
    price: 29800,
  },
  
  mounted: function() {
  },
  
  // filters: {
  //   numberFormat: function(value){
  //     return value.toLocaleString();
  //   }
  // },
  
  methods: {
  }
})
