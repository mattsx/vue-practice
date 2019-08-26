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

const Posts = {
  template: `
    <div class="posts">
      <h2>Posts {{ $route.params.userId }}</h2>
    </div>
  `
}

const router = new VueRouter({
  routes: [
    {
      path: '/users/:userId', component: User,
      children: [
        {
          path: 'profile',
          redirect: 'posts',
          component: Profile
        },
        {
          path: 'posts',
          component: Posts
        }
      ]
    }
  ]
})

var app = new Vue({
  router
}).$mount('#app')
