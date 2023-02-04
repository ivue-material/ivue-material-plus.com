import { createApp } from 'vue';
import IvueMaterialPlus from 'ivue-material-plus';
import Hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

import App from './App.vue';
import router from './router';
import store from './store';
import DocMarkdown from './components/doc-markdown.vue';
import Example from './components/install/example.vue';
import PreCode from './components/pre-code.vue';

import 'ivue-material-plus/dist/styles/index.css';
import 'ivue-material-plus/dist/styles/elevation.css';
import 'ivue-material-plus/dist/styles/layout.css';
import 'ivue-material-plus/dist/styles/color.css';

import 'highlight.js/styles/github.css';

const app = createApp(App);

app.use(IvueMaterialPlus);

const globalProperties = app.config.globalProperties;

// LoadingBar
router.beforeEach((to, from, next) => {
  globalProperties.$LoadingBar.start();
  next();
});
router.afterEach(() => {
  globalProperties.$LoadingBar.finish();
});

// 识别为javascript
// Hljs.registerLanguage('javascript', javascript);
Hljs.getLanguage('javascript', javascript);
Hljs.configure({
  ignoreUnescapedHTML: true,
});

app.component('DocMarkdown', DocMarkdown);
app.component('Example', Example);
app.component('PreCode', PreCode);

app.use(router);
app.use(store);

// 判断移动设备
const ua = navigator.userAgent;
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
const isMobile = isIphone || isAndroid;

// 移动端
if (isMobile) {
  app.config.globalProperties.isMobile = true;
}
// 不是移动端
else {
  app.config.globalProperties.isMobile = false;
}

app.mount('#app');
