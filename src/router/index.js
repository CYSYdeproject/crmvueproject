import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Customer from '@/components/customer/Customer'
import Linkman from '@/components/linkman/Linkman'
import Updatepasswordpage from '@/components/customer/Updatepasswordpage'
import MoreMessage from '@/components/customer/MoreMessage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path: '/main',
      name: 'Main',
      component:Main,
      children:[

       {
         path: 'customer',
         name: 'Customer',
         component:Customer
       },
       {
         path: 'linkman',
         name: 'Linkman',
         component:Linkman
       },
       {
      path: 'updatepasswordpage',
      name: 'Updatepasswordpage',
      component:Updatepasswordpage
    },{
         path: 'moremessage',
         name: 'MoreMessage',
         component:MoreMessage
       },
      ]
    }
  ]
})
