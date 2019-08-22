// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'hello, vue.js',
  },
  
  watch: {
    message: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    }
  },
  
  computed: {
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
