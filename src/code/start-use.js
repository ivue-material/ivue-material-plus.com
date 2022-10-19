const code = {};

code.all = `import { createApp } from 'vue'
import IvueMaterialPlus from 'ivue-material-plus';
import App from './App.vue'
import Router from './router'
import Store from './store'

import 'ivue-material-plus/dist/styles/index.css'

import App from './App.vue'

const app = createApp(App)

app.use(Store)
app.use(Router)
app.use(IvueMaterialPlus)

app.mount('#app')
`;

code.vite = `// vite.config.js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { IvueMaterialPlusResolver } from 'ivue-material-plus/resolvers/ivue-material-plus'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [IvueMaterialPlusResolver()],
    }),
    Components({
      resolvers: [IvueMaterialPlusResolver()],
    }),
  ],
})
`;

code.webpack = `// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
import { IvueMaterialPlusResolver } from 'ivue-material-plus/resolvers/ivue-material-plus'

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [IvueMaterialPlusResolver()],
    }),
    Components({
      resolvers: [IvueMaterialPlusResolver()],
    }),
  ],
}
`;

code.babel = `npm install babel-plugin-import --save-dev

// .babelrc or babel-loader
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "ivue-material-plus",
        "libraryDirectory": "dist/unplugin-vue-components/es"
      },
      "ivue-material-plus"
    ]
  ],
}
`;

code.main = `import { IvueAffix, IvueInput } from 'ivue-material-plus';
app.component(IvueAffix.name, IvueAffix);
app.component(IvueInput.name, IvueInput);
`;

export default code;
