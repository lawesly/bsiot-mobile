// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import axios from 'axios'
// Vue.prototype.$ajax = axios

//导入mint ui组件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'
//头部组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//底部导航栏组件
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
//引入文本框组件
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);
//引入按钮组件
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.config.productionTip = false
//引入时间组件
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
