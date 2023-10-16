import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';

import Home from '../views/Home.vue'

import ProductDetails from '../views/ProductDetails.vue'
import Payment from '../views/Payment.vue'
import Success from '../views/Success.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
    
  
      {
        path: '/product/:id',
        name: 'productDetails',
        component: ProductDetails
      },
    
    ]
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  }
  // {
  //   path: '/guest',
  //   component: GuestLayout
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
