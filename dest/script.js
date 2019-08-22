// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function(response){
        this.bpi = response.data.bpi
      }.bind(this))
      .catch(function(error){
        console.error(error)
        this.hasError = true
        return
      }.bind(this))
      .finally(function(){
        this.loading = false
      }.bind(this))
  },
  
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  },
  
  methods: {
  }
})
