'use strict';

var http = require('request'),
	q = require('q'),
	url = require('url'),
	serverUrl = 'http://127.0.0.1:9700';


function baseUrl(url) {
	if (url) {
		serverUrl = url;
	}
	return serverUrl;
}

function call(options) {
	var deferred = q.defer();
	options = options || {};
	options.headers = options.headers || {};
	options.url = url.resolve(baseUrl(), options.url);
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
	return call({method: 'DELETE', url: '/interactions'});
}

function setInterations(interactions) {
	if (typeof interactions == "Object") {
		interactions = [interactions];
	}

	return call({method: 'POST', url: '/interactions', body: JSON.stringify(interactions)});
}

function verifyInteractions() {
	return call({method: 'GET', url: '/interactions/verification'});
}

function createPactFile(options) {
	return call({method: 'POST', url: '/pact', body: JSON.stringify(options)});
}

module.exports = {
	baseUrl: baseUrl,
	clear: clear,
	set: setInterations,
	verify: verifyInteractions,
	create: createPactFile
};