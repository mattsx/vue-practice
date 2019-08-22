// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'hello, vue.js',
    basePrice: 100
  },
  
  computed: {
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
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
    
  }
})
