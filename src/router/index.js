import {
  createRouter,
  createWebHistory,
} from 'vue-router';


function lazyLoading(path, name) {
  return function() {
    return import(`@/views/${path}/${name}.vue`);
  };
}

const routes = [
  // 路径错误时跳转
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    redirect: '/',
    component: lazyLoading('Home', 'index'),
  },
  {
    path: '/',
    name: 'Home',
    component: lazyLoading('Home', 'index'),
  },
  {
    path: '/docs/',
    name: 'docs',
    component: lazyLoading('Docs', 'index'),
    children: [
      // 安装
      {
        path: '/docs/install',
        name: 'install',
        component: lazyLoading('Docs', 'install'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
