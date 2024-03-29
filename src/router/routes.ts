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
      { path: 'page5', component: () => import('components/ThePage5.vue') },
      { path: 'page6', component: () => import('components/ThePage6.vue') },
      { path: 'page7', component: () => import('components/ThePage7.vue') },
      { path: 'page8', component: () => import('components/ThePage8.vue') },
      { path: 'page9', component: () => import('components/ThePage9.vue') },
      { path: 'page10', component: () => import('components/ThePage10.vue') },
      { path: 'page11', component: () => import('pages/MainPage.vue') },
      { path: 'page12', component: () => import('pages/SignInPage.vue') },
      { path: 'page13', component: () => import('pages/ClickedPage.vue') },
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
