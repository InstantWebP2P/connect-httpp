connect-httpp
=============

Connect middleware to set httpp capacity flag in res.headers.alternate-protocol 


### Usage/API

    1. create connect app
    var connect = require('connect');
    var app = connect(), app1 = connect();
    var httpp = require('connect-httpp');

    2. mount connect-httpp middleware
    app.use(httpp(80)); // fill httpp server port, then httpp:80 will set in res.headers.alternate-protocol

    3. mount application
    app.use(businessLogic);
    app1.use(businessLogic);
    
    4. start both http and httpp server
    var srvHttp = require('http').createServer(app);
    var srvHttpp = require('httpp').createServer(app1);
    srvHttp.listen(80); // listen on tcp 80
    srvHttpp.listen(80); // listen on udp 80
    
    5. then, both tcp:80 and udp:80 will serve application.
    
### connect-httpp is working with httpp-forward, please run [httpp-forward proxy](https://github.com/InstantWebP2P/httpp-forward) on browser side.  


<br/>
### License

(The MIT License)

Copyright (c) 2012-present Tom Zhou(iwebpp@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
