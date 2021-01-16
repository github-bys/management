import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ElementUI样式引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// 全局样式
import './styles/index.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
