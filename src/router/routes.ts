import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'page1', component: () => import('components/ThePage1.vue') },
      { path: 'page2', component: () => import('components/ThePage2.vue') },
      { path: 'page3', component: () => import('components/ThePage3.vue') },
      { path: 'page4', component: () => import('components/ThePage4.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
