const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.userId }}</h2>
      <router-view></router-view>
    </div>
  `
}

const Profile = {
  template: `
    <div class="profile">
      <h2>Profile {{ $route.params.userId }}</h2>
    </div>
  `
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/users/:userId', component: User,
      children: [
        {
          path: 'profile',
          component: Profile,
          alias: 'posts'
        }
      ]
    }
  ]
})

var app = new Vue({
  router
}).$mount('#app')
