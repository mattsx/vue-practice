// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    items: null,
    keyword:'',
    message:''
  },
  
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      this.message = 'Waiting for you to stop typing...'
      this.debounceGetAnswer()
    }
  },
  
  // createdとmountedはあまり変わりがない。DOMにアクセスしないならcreatedのほうが早い
  created: function() {
    // this.keyword = 'JavaScript'
    // this.getAnswer()
    this.debounceGetAnswer = _.debounce(this.getAnswer)
  },
  
  mounted: function() {
  },
  
  computed: {
  },
  
  filters: {
  },
  
  methods: {
    getAnswer: function() {
      if(this.keyword === '') {
        this.items = null
        this.message = ''
        return
      }
      
      this.message = 'Loading...'
      var vm = this
      var params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
        .then(function(response){
          console.log(response)
          vm.items = response.data
        })
        .catch(function(error) {
          vm.message = 'Error' + error
        })
        .finally(function(){
          vm.message = ''
        })
    }
  }
})
