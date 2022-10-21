const code = {};

code.cdn = `<!-- 引入 stylesheet -->
<link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/ivue.css">
<!-- import Vue.js -->
<script src="https://unpkg.com/vue@next"></script>
<!-- 引入 ivue-material -->
<script src="//unpkg.com/ivue-material-plus"></script>
`;

code.example = `<html>
  <head>
    <meta charset="utf-8">
    <title>example</title>
    <!-- 引入 stylesheet -->
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/ivue.css">
    <!-- 引入 Vue.js -->
    <script src="//vuejs.org/js/vue.min.js"></script>
    <!-- 引入 ivue-material -->
    <script src="//unpkg.com/ivue-material-plus/dist/ivue.min.js"></script>
  </head>

  <body>
    <div id="app">
      <ivue-button>example</ivue-button>
    </div>

    <script>
    new Vue({
        el: '#app'
    })
  </script>
  </body>
</html>`;

code.npm = '$ npm install ivue-material-plus --save';

export default code;
