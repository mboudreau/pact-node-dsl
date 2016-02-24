'use strict';

var http = require('request'),
	q = require('q');


var exports = {
	url: 'http://127.0.0.1:9700',
	clear: clear
};

function call(options) {
	var deferred = q.defer();
	options = option || {headers: {}};
	options.headers['X-Pact-Mock-Service'] = 'true';
	options.headers['Content-Type'] = 'application/json';
	http(exports.url, options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			deferred.resolve(body);
		} else {
			deferred.reject(error);
		}
	});
	return deferred.promise.timeout(10000, 'Cannot communicate with pact service');
}

function clear() {
	return call({});
}

module.exports = exports;