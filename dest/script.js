// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'hello, vue.js',
  },
  
  computed: {
    computedNumber: function() {
      console.log('computed!')
      return Math.random()
    }
  },
  
  mounted: function() {
  },
  
  // filters: {
  //   numberFormat: function(value){
  //     return value.toLocaleString();
  //   }
  // },
  
  methods: {
    methodsNumber: function() {
      console.log('methods!')
      return Math.random()
    }
  }
})
