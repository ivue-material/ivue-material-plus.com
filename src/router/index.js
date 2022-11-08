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
    component: lazyLoading('home', 'index'),
  },
  {
    path: '/',
    name: 'home',
    component: lazyLoading('home', 'index'),
  },
  {
    path: '/docs/',
    name: 'docs',
    component: lazyLoading('docs', 'index'),
    children: [
      // 安装
      {
        path: 'install',
        name: 'install',
        component: lazyLoading('docs', 'install'),
      },
      // 快速开始
      {
        path: 'start-use',
        name: 'start-use',
        component: lazyLoading('docs', 'start-use'),
      },
      // 全局配置
      {
        path: 'global',
        name: 'global',
        component: lazyLoading('docs', 'global'),
      },
      // 颜色
      {
        path: 'color',
        name: 'color',
        component: lazyLoading('docs', 'color'),
      },
      // 颜色
      {
        path: 'animation',
        name: 'animation',
        component: lazyLoading('animation', 'index'),
      },
    ],
  },
  {
    path: '/components/',
    name: 'components',
    component: lazyLoading('docs', 'index'),
    children: [
      // 按钮
      {
        path: 'button',
        name: 'button',
        component: lazyLoading('button', 'index'),
      },
      // 图钉
      {
        path: 'affix',
        name: 'affix',
        component: lazyLoading('affix', 'index'),
      },
      // 图标
      {
        path: 'icon',
        name: 'icon',
        component: lazyLoading('icon', 'index'),
      },
      // 自动完成
      {
        path: 'auto-complete',
        name: 'auto-complete',
        component: lazyLoading('auto-complete', 'index'),
      },
      // 头像
      {
        path: 'avatar',
        name: 'avatar',
        component: lazyLoading('avatar', 'index'),
      },
      // Elevation 海拔
      {
        path: 'elevation',
        name: 'elevation',
        component: lazyLoading('elevation', 'index'),
      },
      // Layout 布局
      {
        path: 'layout',
        name: 'layout',
        component: lazyLoading('layout', 'index'),
      },
      // Card 卡片
      {
        path: 'card',
        name: 'card',
        component: lazyLoading('card', 'index'),
      },
      // List 列表
      {
        path: 'list',
        name: 'list',
        component: lazyLoading('list', 'index'),
      },
      // Carousel 走马灯
      {
        path: 'carousel',
        name: 'carousel',
        component: lazyLoading('carousel', 'index'),
      },
      // Switch 开关
      {
        path: 'switch',
        name: 'switch',
        component: lazyLoading('switch', 'index'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
