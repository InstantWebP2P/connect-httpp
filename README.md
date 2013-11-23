connect-httpp
=============

Connect middleware to set httpp capacity flag in res.headers.alternate-protocol 


### Usage/API
  var connect = require('connect');
  var app = connect();
  var httpp = require('connect-httpp');
  
  app.use(httpp(80)); // fill httpp server port, then httpp:80 will set in res.headers.alternate-protocol
  // mount application
  app.use(businessLogic);
  
  // start both http and httpp server
  var srvHttp = require('http').createServer(app);
  var srvHttpp = require('httpp').createServer(app);

   srvHttp.listen(80); // listen on tcp 80
   srvHttpp.listen(80); // listen on udp 80
   
  // then, both tcp:80 and udp:80 will serve application.
  // once httpp-forward local proxy run on browser side, web traffic will transfer over httpp/udp.

### connect-httpp is for work with httpp-forward: https://github.com/InstantWebP2P/httpp-forward

<br/>
### License

(The MIT License)

Copyright (c) 2012-2013 Tom Zhou(iwebpp@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
