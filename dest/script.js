// Vue.component('template', {
//   template: '<p>template</p>'
// })

Vue.filter('numberFormat', function(value){
  return value.toLocaleString();
})

Vue.filter('toUSD', function(value){
  return value / 100
})

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'hello vue.js!',
    jpyPrice: 298000,
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
