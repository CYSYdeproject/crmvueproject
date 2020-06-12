import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Customer from '@/components/customer/Customer'
import Linkman from '@/components/linkman/Linkman'
import Updatepasswordpage from '@/components/customer/Updatepasswordpage'
import MoreMessage from '@/components/customer/MoreMessage'
import Addlinkman from '@/components/linkman/Addlinkman'
import User from '@/components/user/User'
import Suppler from '@/components/suppler/Suppler'
import Retrieval from '@/components/suppler/Retrieval'
import Channel from '@/components/suppler/Channel'
import Call from '@/components/suppler/Call'
import Record from '@/components/linkman/Record'





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
    },
    {
         path: 'moremessage',
         name: 'MoreMessage',
         component:MoreMessage
       },
       {
         path: 'addlinkman',
         name: 'Addlinkman',
         component:Addlinkman
       },
       {
         path: 'user',
         name: 'User',
         component:User
       },
        {
          path: 'suppler',
          name: 'Suppler',
          component:Suppler
        },
        {
          path: 'retrieval',
          name: 'Retrieval',
          component:Retrieval
        },
        {
          path: 'channel',
          name: 'Channel',
          component:Channel
        },
        {
          path: 'call',
          name: 'Call',
          component:Call
        },
        {
          path: 'record',
          name: 'Record',
          component:Record
        },



      ]
    }
  ]
})
