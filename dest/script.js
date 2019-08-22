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
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = '';
    },
    
    deleteItem: function(index){
      this.todos.splice(index, 1)
    }
  }
})
