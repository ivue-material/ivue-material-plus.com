import {
  createApp,
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Hljs from 'highlight.js';

import IvueMaterial from '../dist/ivue';
import '../dist/styles/ivue.css';

const app = createApp(App);

app.use(IvueMaterial);

app.directive('highlight', {
  mounted: (e) => {
    const blocks = e.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
  },
});

// 判断移动设备
const ua = navigator.userAgent;
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
const isMobile = isIphone || isAndroid;

if (isMobile) {
  app.config.globalProperties.isMobile = true;
}
 else {
  app.config.globalProperties.isMobile = false;
}



app.use(store).use(router).mount('#app');
