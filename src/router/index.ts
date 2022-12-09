import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      menu: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "首页" */  '@/views/home/index.vue'),
    meta: {
      label: 'home',
      name: '首页',
    }
  },
  // {
  //   path: '/page',
  //   redirect: './one',
  //   meta: {
  //     label: 'page',
  //     name: 'Page',
  //   },
  //   children: [
  //     {
  //       path: 'one',
  //       name: 'PageOne',
  //       component: () => import(/* webpackChunkName: "PageOne" */ '../views/PageOne.vue'),
  //       meta: {
  //         label: 'page-one',
  //         name: 'PageOne'
  //       }
  //     },
  //     {
  //       path: 'two',
  //       name: 'PageTwo',
  //       component: () => import( /* webpackChunkName: "PageTwo" */ '../views/PageTwo.vue'),
  //       meta: {
  //         label: 'page-two',
  //         name: 'PageTwo'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( /* webpackChunkName: "关于" */ '../views/About.vue'),
  //   meta: {
  //     label: 'about',
  //     name: '关于',
  //   }
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   // redirect:'/404',
  //   component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
  //   meta: {
  //     label: '404',
  //     name: '404',
  //     menu:false,
  //   }
  // },
];



export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from) => {
  const TITLE: string = "WhatFun - " + to.meta.name 
  document.title = TITLE || 'my site'
})

// router.beforeResolve(() => {
//     Loading.open(5);
// });

// router.afterEach(() => {
//     requestAnimationFrame(() => {
//         Loading.open(100);
//     });
// });

