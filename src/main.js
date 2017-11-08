// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import About from './components/About'
//tell vue to use the router
Vue.use(VueRouter)
//define your routes
const routes = [
  {path: '/', component: Hello},
  {path: '/about', component: About}
]


// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

Vue.config.productionTip = false

/* eslint-disable no-new */

//instatiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass in the router to the Vue instance  
  router,
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
}).$mount('#app') // mount the router on the app 
