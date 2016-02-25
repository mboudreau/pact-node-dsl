'use strict';

var http = require('request'),
	q = require('q');


var exports = {
	url: 'http://127.0.0.1:9700',
	clear: clear,
	interaction: interaction
};

function call(options) {
	var deferred = q.defer();
	options = options || {};
	options.headers = options.headers || {};
	options.url = exports.url;
	options.headers['X-Pact-Mock-Service'] = 'true';
	options.headers['Content-Type'] = 'application/json';
	http(options, function (error, response, body) {
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

function interaction(definition){
	return call({});
}

module.exports = exports;