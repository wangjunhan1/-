// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Progress, Table, Button, Popconfirm, Avatar, Icon } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/lib/progress/style/css'
import 'ant-design-vue/lib/table/style/css'
import 'ant-design-vue/lib/button/style/css'
import 'ant-design-vue/lib/popconfirm/style/css'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.component(Progress.name, Progress)
Vue.component(Table.name, Table)
Vue.component(Button.name, Button)
Vue.component(Popconfirm.name, Popconfirm)
Vue.component(Avatar.name, Avatar)
Vue.component(Icon.name, Icon)

let vm = new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})

Vue.use({
  vm
})
