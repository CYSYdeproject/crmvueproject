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
import Programme from '@/components/programme/Programme'
import Phone from '@/components/programme/Phone'
import Ads from '@/components/programme/Ads'
import FindPhone from '@/components/programme/FindPhone'
import Addphone from '@/components/programme/Addphone'

import Product from '@/components/product/Product'
import Addproduct from '@/components/product/Addproduct'
import Buy from '@/components/buy/Buy'
import Addbuy from '@/components/buy/Addbuy'
import Updatebuy from '@/components/buy/Updatebuy'
import Customermaven from '@/components/buy/Customermaven'
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
         path: 'programme',
         name: 'Programme',
         component:Programme
       },

       {
         path: 'phone',
         name: 'Phone',
         component:Phone
       },
       {
         path: 'ads',
         name: 'Ads',
         component:Ads
        },
        {
         path: 'findPhone',
         name: 'FindPhone',
         component:FindPhone
        },
        {
         path: 'addphone',
         name: 'Addphone',
         component:Addphone
         },{
         path: 'product',
         name: 'Product',
         component:Product
       },
       {
         path: 'addproduct',
         name: 'Addproduct',
         component:Addproduct
       },
       {
          path: 'buy',
          name: 'Buy',
          component:Buy
              },
      {
         path: 'addbuy',
         name: 'Addbuy',
         component:Addbuy
             },
      {
                path: 'updatebuy',
                name: 'Updatebuy',
                component:Updatebuy
                    },
      {
         path: 'customermaven',
         name: 'Customermaven',
         component:Customermaven
             },
       ]
     },

   ]
 })
