// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'hello, vue.js',
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' }
    ]
  },
  
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('new: %s, oldValue: %s',
        JSON.stringify(newValue, null, '\t'),
        JSON.stringify(oldValue, null, '\t'))
      },
      deep: true,
      immediate: true
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
