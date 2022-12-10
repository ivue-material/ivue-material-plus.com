const code = {};


code.route = `import IvueMaterialPlus from 'ivue-material-plus';
app.use(IvueMaterialPlus);

const globalProperties = app.config.globalProperties

router.beforeEach((to, from, next) => {
  globalProperties.$LoadingBar.start();
  next();
});

router.afterEach(route => {
  globalProperties.$LoadingBar.finish();
});
`;

code.async = `
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const getData = () => {
    proxy.$LoadingBar.start();

    $.ajax({
        url: '/api/someurl',
        type: 'get',
        success: () => {
            proxy.$LoadingBar.finish();
        },
        error: () => {
            proxy.$LoadingBar.error();
        },
    });
};`;


code.default = '';


export default code;
