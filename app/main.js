import Vue from 'vue'
import VueRouter from 'vue-router'
import '!style!css!less!bootstrap/less/bootstrap.less'
import App from './App'
import Home from './Home'
import Learn from './Learn'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/learn': {
    component: Learn
  }
})

router.start(App, 'body')
// router.go('learn')
