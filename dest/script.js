// Vue.component('template', {
//   template: '<p>template</p>'
// })

var app = new Vue({
  // options
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event){
      if (this.newItem == '') return;
      
      var todo = {
        item: this.newItem
      };
      this.todos.push(todo);
      this.newItem = '';
    }
  }
})
