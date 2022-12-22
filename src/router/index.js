import {
  createRouter,
  createWebHistory,
} from 'vue-router';

function lazyLoading(path, name) {
  return function () {
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
      // BottomNav 底部导航
      {
        path: 'bottom-nav',
        name: 'bottom-nav',
        component: lazyLoading('bottom-nav', 'index'),
      },
      // Progress 进度条
      {
        path: 'progress',
        name: 'progress',
        component: lazyLoading('progress', 'index'),
      },
      // Breadcrumb 面包屑
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        component: lazyLoading('breadcrumb', 'index'),
      },
      // Select 选择器
      {
        path: 'select',
        name: 'select',
        component: lazyLoading('select', 'index'),
      },
      // Steps 步骤条
      {
        path: 'steps',
        name: 'steps',
        component: lazyLoading('steps', 'index'),
      },
      // Upload 上传
      {
        path: 'upload',
        name: 'upload',
        component: lazyLoading('upload', 'index'),
      },
      // Input 输入框
      {
        path: 'input',
        name: 'input',
        component: lazyLoading('input', 'index'),
      },
      // Circle 进度环
      {
        path: 'circle',
        name: 'circle',
        component: lazyLoading('circle', 'index'),
      },
      // Loading 加载
      {
        path: 'loading',
        name: 'loading',
        component: lazyLoading('loading', 'index'),
      },
      // Notice 通知提醒
      {
        path: 'notice',
        name: 'notice',
        component: lazyLoading('notice', 'index'),
      },
      // Message 全局提示
      {
        path: 'message',
        name: 'message',
        component: lazyLoading('message', 'index'),
      },
      // LoadingBar 加载进度条
      {
        path: 'loading-bar',
        name: 'loading-bar',
        component: lazyLoading('loading-bar', 'index'),
      },
      // LoadingBar 加载进度条
      {
        path: 'loading-bar',
        name: 'loading-bar',
        component: lazyLoading('loading-bar', 'index'),
      },
      // Tabs 标签页
      {
        path: 'tabs',
        name: 'tabs',
        component: lazyLoading('tabs', 'index'),
      },
      // Badge 徽标数
      {
        path: 'badge',
        name: 'badge',
        component: lazyLoading('badge', 'index'),
      },
      // DatePicker 日期/月份选择器
      {
        path: 'date-picker',
        name: 'date-picker',
        component: lazyLoading('date-picker', 'index'),
      },
      // Collapse 折叠面板
      {
        path: 'collapse',
        name: 'collapse',
        component: lazyLoading('collapse', 'index'),
      },
      // Cascader 级联选择
      {
        path: 'cascader',
        name: 'cascader',
        component: lazyLoading('cascader', 'index'),
      },
      // Tooltip 文字提示
      {
        path: 'tooltip',
        name: 'tooltip',
        component: lazyLoading('tooltip', 'index'),
      },
      // Chip 芯片
      {
        path: 'chip',
        name: 'chip',
        component: lazyLoading('chip', 'index'),
      },
      // Radio 单选框
      {
        path: 'radio',
        name: 'radio',
        component: lazyLoading('radio', 'index'),
      },
      // Checkbox 多选框
      {
        path: 'checkbox',
        name: 'checkbox',
        component: lazyLoading('checkbox', 'index'),
      },
      // Page 分页
      {
        path: 'page',
        name: 'page',
        component: lazyLoading('page', 'index'),
      },
      // Spin 加载中
      {
        path: 'spin',
        name: 'spin',
        component: lazyLoading('spin', 'index'),
      },
      // Table 表格
      {
        path: 'table',
        name: 'table',
        component: lazyLoading('table', 'index'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/plus/'),
  routes,
});

export default router;
