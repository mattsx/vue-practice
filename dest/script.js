Vue.component('yossha', {
  template: '<p>template</p>'
})

var app = new Vue({
  // options
  el: '#app',
  data: {
    message: 'Hello, World!',
    linkMessage: 'Vue.js link here.',
    url: 'https://jp.vuejs.org/',
    toggle: true,
    
    languages: [
      'JavaScript',
      'Ruby',
      'Python'
    ]
  },
  methods: {
    clickHandler: function() {
      this.message = 'clicked!'
    }
  }
})
