var buttonCounter = {
  // componentのdataは関数にする必要がある
  data: function() {
    return {
      count: 0
    }
  },
  // templateのルートは単数のDOMである必要がある
  template: '<button v-on:click="count++">{{ count }}</button>'
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js',
  },
  // component名はハイフン付きのケバブケースにする必要がある（html, jsとの衝突防止のため）
  components: {
    'button-counter': buttonCounter
  }
})
