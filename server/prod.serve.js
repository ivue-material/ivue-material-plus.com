var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');
const historyMiddleware = require('connect-history-api-fallback');

var privateKey = fs.readFileSync('./lovevuerk/Nginx/2_lovevuerk.com.key', 'utf8');
var certificate = fs.readFileSync('./lovevuerk/Nginx/1_lovevuerk.com_bundle.crt', 'utf8');
var credentials = {
      key: privateKey,
      cert: certificate
};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 80;
var SSLPORT = 443;

// var PORT = 8080;
// var SSLPORT = 8081;


httpServer.listen(PORT, function (req, res) {
      console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function () {
      console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});


function registerSPA(url, dirPath) {
      if (url.endsWith('/')) {

            url = url.substring(0, url.length - 1);
      }
      start = true;

      // fix trailing slash (/user -> /user/)
      app.use('/', function (req, res, next) {
            let requestUrl = req.url.replace(/\?.+?$/, '');

            if (requestUrl === url) {
                  req.url = url + '/';
            }


            // if (req.protocol === 'http') {
            //       return res.redirect(302, 'https://lovevuerk.com/')
            // }

            next();
      });

      app.use(url, historyMiddleware({
            htmlAcceptHeaders: ['text/html'],
            disableDotRule: false // ignore paths with dot inside
      }));


      app.use(url, express.static(dirPath));
}

// SPA
registerSPA('/ui', './ui');
registerSPA('/plus', './plus');
registerSPA('/playground', './playground');
registerSPA('/', './plus');

// app.get('/', (req, res) => {
//       // res.redirect() 的可选第一个参数是数字 HTTP 状态。
//       res.redirect(301, '/ui')
// })
// let rewrites = [];

// app.use(require('connect-history-api-fallback')({
//       htmlAcceptHeaders: ['text/html'],
//       rewrites: rewrites
// }));

// app.use(express.static('./dist'));

// Welcome
app.get('/', function (req, res) {
      if (req.protocol === 'https') {
            res.status(200).send('Welcome to Safety Land!');
      } else {
            res.status(200).send('Welcome!');
      }
});
