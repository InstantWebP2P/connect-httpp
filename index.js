
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
	        
	        Object.keys(reshed.headers).forEach(function (key) {
		        res.setHeader(key, reshed.headers[key]);
		    });
		    
		    // set httpp capacity
		    if (res.headers && ('alternate-protocol' in res.headers)) {
		        if (!althttpp.test(res.headers['alternate-protocol'])) {
		            res.headers['alternate-protocol'] = 'httpp:'+port+',' + 
		                                                 res.headers['alternate-protocol'];
		        }
		    } else {
		        res.setHeader('alternate-protocol', 'httpp:'+port);
		    }
		    
		    // write statusCode
		    _res_writeHead(reshed.statusCode || 200);
	    };
	    
	    if (next) next();
	};
};
