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
      // 动画
      {
        path: 'animation',
        name: 'animation',
        component: lazyLoading('animation', 'index'),
      },
      // css变量
      {
        path: 'var',
        name: 'var',
        component: lazyLoading('var', 'index'),
      },
    ],
  },
  {
    path: '/components/',
    name: 'components',
    component: lazyLoading('docs', 'index'),
    children: [
      // Button 按钮
      {
        path: 'button',
        name: 'button',
        mate: 'Button 按钮',
        component: lazyLoading('button', 'index'),
      },
      // Affix 图钉
      {
        path: 'affix',
        name: 'affix',
        mate: 'Affix 图钉',
        component: lazyLoading('affix', 'index'),
      },
      // Icon 图标
      {
        path: 'icon',
        name: 'icon',
        mate: 'Icon 图标',
        component: lazyLoading('icon', 'index'),
      },
      // AutoComplete 自动完成
      {
        path: 'auto-complete',
        name: 'auto-complete',
        mate: 'AutoComplete 自动完成',
        component: lazyLoading('auto-complete', 'index'),
      },
      // Avatar 头像
      {
        path: 'avatar',
        name: 'avatar',
        mate: 'Avatar 头像',
        component: lazyLoading('avatar', 'index'),
      },
      // Elevation 海拔
      {
        path: 'elevation',
        name: 'elevation',
        mate: 'Elevation 海拔',
        component: lazyLoading('elevation', 'index'),
      },
      // Layout 布局
      {
        path: 'layout',
        name: 'layout',
        mate: 'Layout 布局',
        component: lazyLoading('layout', 'index'),
      },
      // Card 卡片
      {
        path: 'card',
        name: 'card',
        mate: 'Card 卡片',
        component: lazyLoading('card', 'index'),
      },
      // Carousel 走马灯
      {
        path: 'carousel',
        name: 'carousel',
        mate: 'Carousel 走马灯',
        component: lazyLoading('carousel', 'index'),
      },
      // Switch 开关
      {
        path: 'switch',
        name: 'switch',
        mate: 'Switch 开关',
        component: lazyLoading('switch', 'index'),
      },
      // BottomNav 底部导航
      {
        path: 'bottom-nav',
        name: 'bottom-nav',
        mate: 'BottomNav 底部导航',
        component: lazyLoading('bottom-nav', 'index'),
      },
      // Progress 进度条
      {
        path: 'progress',
        name: 'progress',
        mate: 'Progress 进度条',
        component: lazyLoading('progress', 'index'),
      },
      // Breadcrumb 面包屑
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        mate: 'Breadcrumb 面包屑',
        component: lazyLoading('breadcrumb', 'index'),
      },
      // Select 选择器
      {
        path: 'select',
        name: 'select',
        mate: 'Select 选择器',
        component: lazyLoading('select', 'index'),
      },
      // Steps 步骤条
      {
        path: 'steps',
        name: 'steps',
        mate: 'Steps 步骤条',
        component: lazyLoading('steps', 'index'),
      },
      // Upload 上传
      {
        path: 'upload',
        name: 'upload',
        mate: 'Upload 上传',
        component: lazyLoading('upload', 'index'),
      },
      // Input 输入框
      {
        path: 'input',
        name: 'input',
        mate: 'Input 输入框',
        component: lazyLoading('input', 'index'),
      },
      // Circle 进度环
      {
        path: 'circle',
        name: 'circle',
        mate: 'Circle 进度环',
        component: lazyLoading('circle', 'index'),
      },
      // Loading 加载
      {
        path: 'loading',
        name: 'loading',
        mate: 'Loading 加载',
        component: lazyLoading('loading', 'index'),
      },
      // Notice 通知提醒
      {
        path: 'notice',
        name: 'notice',
        mate: 'Notice 通知提醒',
        component: lazyLoading('notice', 'index'),
      },
      // Message 全局提示
      {
        path: 'message',
        name: 'message',
        mate: 'Message 全局提示',
        component: lazyLoading('message', 'index'),
      },
      // LoadingBar 加载进度条
      {
        path: 'loading-bar',
        name: 'loading-bar',
        mate: 'LoadingBar 加载进度条',
        component: lazyLoading('loading-bar', 'index'),
      },
      // Tabs 标签页
      {
        path: 'tabs',
        name: 'tabs',
        mate: 'Tabs 标签页',
        component: lazyLoading('tabs', 'index'),
      },
      // Badge 徽标数
      {
        path: 'badge',
        name: 'badge',
        mate: 'Badge 徽标数',
        component: lazyLoading('badge', 'index'),
      },
      // DatePicker 日期/月份选择器
      {
        path: 'date-picker',
        name: 'date-picker',
        mate: 'DatePicker 日期/月份选择器',
        component: lazyLoading('date-picker', 'index'),
      },
      // Collapse 折叠面板
      {
        path: 'collapse',
        name: 'collapse',
        mate: 'Collapse 折叠面板',
        component: lazyLoading('collapse', 'index'),
      },
      // Cascader 级联选择
      {
        path: 'cascader',
        name: 'cascader',
        mate: 'Cascader 级联选择',
        component: lazyLoading('cascader', 'index'),
      },
      // Tooltip 文字提示
      {
        path: 'tooltip',
        name: 'tooltip',
        mate: 'Tooltip 文字提示',
        component: lazyLoading('tooltip', 'index'),
      },
      // Chip 芯片
      {
        path: 'chip',
        name: 'chip',
        mate: 'Chip 芯片',
        component: lazyLoading('chip', 'index'),
      },
      // Radio 单选框
      {
        path: 'radio',
        name: 'radio',
        mate: 'Radio 单选框',
        component: lazyLoading('radio', 'index'),
      },
      // Checkbox 多选框
      {
        path: 'checkbox',
        name: 'checkbox',
        mate: 'Checkbox 多选框',
        component: lazyLoading('checkbox', 'index'),
      },
      // Page 分页
      {
        path: 'page',
        name: 'page',
        mate: 'Page 分页',
        component: lazyLoading('page', 'index'),
      },
      // Spin 加载中
      {
        path: 'spin',
        name: 'spin',
        mate: 'Spin 加载中',
        component: lazyLoading('spin', 'index'),
      },
      // Table 表格
      {
        path: 'table',
        name: 'table',
        mate: 'Table 表格',
        component: lazyLoading('table', 'index'),
      },
      // CountDown 倒计时
      {
        path: 'count-down',
        name: 'count-down',
        mate: 'CountDown 倒计时',
        component: lazyLoading('count-down', 'index'),
      },
      // CountUp 数字动画
      {
        path: 'count-up',
        name: 'count-up',
        mate: 'CountUp 数字动画',
        component: lazyLoading('count-up', 'index'),
      },
      // Scrollbar 滚动条
      {
        path: 'scrollbar',
        name: 'scrollbar',
        mate: 'Scrollbar 滚动条',
        component: lazyLoading('scrollbar', 'index'),
      },
      // Image 图片
      {
        path: 'image',
        name: 'image',
        mate: 'Image 图片',
        component: lazyLoading('image', 'index'),
      },
      // NoticeBar 通知栏
      {
        path: 'notice-bar',
        name: 'notice-bar',
        mate: 'NoticeBar 通知栏',
        component: lazyLoading('notice-bar', 'index'),
      },
      // RelativeTime 相对时间
      {
        path: 'relative-time',
        name: 'relative-time',
        mate: 'RelativeTime 相对时间',
        component: lazyLoading('relative-time', 'index'),
      },
      // CarouselLoop 走马灯循环
      {
        path: 'carousel-loop',
        name: 'carousel-loop',
        mate: 'CarouselLoop 走马灯循环',
        component: lazyLoading('carousel-loop', 'index'),
      },
      // Ellipsis 文本自动省略号
      {
        path: 'ellipsis',
        name: 'ellipsis',
        mate: 'Ellipsis 文本自动省略号',
        component: lazyLoading('ellipsis', 'index'),
      },
      // BackTop 返回顶部
      {
        path: 'back-top',
        name: 'back-top',
        mate: 'BackTop 返回顶部',
        component: lazyLoading('back-top', 'index'),
      },
      // Modal 对话框
      {
        path: 'modal',
        name: 'modal',
        mate: 'Modal 对话框',
        component: lazyLoading('modal', 'index'),
      },
      // Popover 气泡卡片
      {
        path: 'popover',
        name: 'popover',
        mate: 'Popover 气泡卡片',
        component: lazyLoading('popover', 'index'),
      },
      // InputNumber 数字输入框
      {
        path: 'input-number',
        name: 'input-number',
        mate: 'InputNumber 数字输入框',
        component: lazyLoading('input-number', 'index'),
      },
      // Menu 导航菜单
      {
        path: 'menu',
        name: 'menu',
        mate: 'Menu 导航菜单',
        component: lazyLoading('menu', 'index'),
      },
      // Ripple 波纹指令
      {
        path: 'ripple',
        name: 'ripple',
        mate: 'Ripple 波纹指令',
        component: lazyLoading('ripple', 'index'),
      },
      // Touch 手势指令
      {
        path: 'touch',
        name: 'touch',
        mate: 'Touch 手势指令',
        component: lazyLoading('touch', 'index'),
      },
      // LineClamp 文本按行省略指令
      {
        path: 'line-clamp',
        name: 'line-clamp',
        mate: 'LineClamp 文本按行省略指令',
        component: lazyLoading('line-clamp', 'index'),
      },
      // ClickOutside 点击外部触发
      {
        path: 'click-outside',
        name: 'click-outside',
        mate: 'ClickOutside 点击外部触发',
        component: lazyLoading('click-outside', 'index'),
      },
      // Form 表单
      {
        path: 'form',
        name: 'form',
        mate: 'Form 表单',
        component: lazyLoading('form', 'index'),
      },
      // Skeleton 骨架屏
      {
        path: 'skeleton',
        name: 'skeleton',
        mate: 'Skeleton 骨架屏',
        component: lazyLoading('skeleton', 'index'),
      },
      // Tree 树形控件
      {
        path: 'tree',
        name: 'tree',
        mate: 'Tree 树形控件',
        component: lazyLoading('tree', 'index'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/plus/'),
  routes,
});

export default router;
