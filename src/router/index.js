import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import footer from '@/components/footer'
import login from '@/components/login'
import register from '@/components/register'
import member from '@/components/member'
import repair from '@/components/repair'
import repairMenu from '@/components/repairMenu'
import Inrepairing from '@/components/InRepairing'
import repairDetail from '@/components/repairDetail'
import memberInfo from '@/components/memberInfo'
import dynamic from '@/components/dynamic'
import addDynamic from '@/components/addDynamic'
import addComment from '@/components/addComment'
import currentData from '@/components/currentData'
import msgList from '@/components/msgList'
import msgDetail from '@/components/msgDetail'
import postCardData from '@/components/postCardData'
import doorContro from '@/components/doorContro'
import repairOrder from '@/components/repairOrder'
import repairOrderDetail from '@/components/repairOrderDetail'
import { Button } from 'vant'
Vue.use(Button)
import { Field } from 'vant';
Vue.use(Field);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Uploader } from 'vant';
Vue.use(Uploader);
import { Icon } from 'vant';
Vue.use(Icon);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Pagination } from 'vant';
Vue.use(Pagination);
import { RadioGroup, Radio } from 'vant';
Vue.use(RadioGroup);
Vue.use(Radio);
import { Panel } from 'vant';
Vue.use(Panel);
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);
import { Dialog } from 'vant';
Vue.use(Dialog);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/repair',
      name: 'repair',
      component: repair
    },
    {
      path: '/repairMenu',
      name: 'repairMenu',
      component: repairMenu
    },
    {
      path: '/Inrepairing',
      name: 'Inrepairing',
      component: Inrepairing
    },
    {
      path: '/repairDetail',
      name: 'repairDetail',
      component: repairDetail
    },
    {
      path: '/memberInfo',
      name: 'memberInfo',
      component: memberInfo
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/addDynamic',
      name: 'addDynamic',
      component: addDynamic
    },
    {
      path:'/addComment',
      name:'addComment',
      component:addComment
    },
    {
      path:'/currentData',
      name:'currentData',
      component:currentData
    },
    {
      path:'/msgList',
      name:'msgList',
      component:msgList
    },
    {
      path:'/msgDetail',
      name:'msgDetail',
      component:msgDetail
    },
    {
      path:'/postCardData',
      name:'postCardData',
      component:postCardData
    },
    {
      path:'/doorContro',
      name:'doorContro',
      component:doorContro
    },
    {
      path:'/repairOrder',
      name:'repairOrder',
      component:repairOrder
    },
    {
      path:'/repairOrderDetail',
      name:'repairOrderDatail',
      component:repairOrderDetail
    }
  ]
})
