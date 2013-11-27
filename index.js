// Copyright (c) 2012-2013 Tom Zhou<iwebpp@gmail.com>
//
// Connect httpp middleware to set httpp capacity in res.headers
exports = module.exports = function(port) {
    var althttpp = /httpp:[0-9]+/gi;
    port = port || 80;

    return function(req, res, next){
        var reshed = {};
        var _res_writeHead = res.writeHead;

        res.writeHead = function(statusCode, reasonPhrase, headers) {
            reshed.statusCode = statusCode;
            reshed.headers = {};

            if (typeof reasonPhrase === 'object') {
                reshed.headers = reasonPhrase;
            } else if (typeof headers === 'object') {
                reshed.headers = headers;
            }

            Object.keys(reshed.headers).forEach(function(key) {
                res.setHeader(key, reshed.headers[key]);
            });

            // set httpp capacity
            var altproto = res.getHeader('alternate-protocol');

            if (altproto && altproto.length) {
                if (!althttpp.test(altproto)) {
                    altproto = 'httpp:'+port+',' + altproto;
                }
            } else {
                altproto = 'httpp:'+port;
            }
            res.setHeader('alternate-protocol', altproto);

            // write statusCode
            res.writeHead = _res_writeHead;
            res.writeHead(reshed.statusCode || 200);
        };

        if (next) next();
    };
};
