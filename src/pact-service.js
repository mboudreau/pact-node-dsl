'use strict';

var http = require('request'),
	q = require('q'),
	url = require('url'),
	serverUrl = 'http://127.0.0.1:9700',
	interactions = [];


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

function clearInteractions() {
	return call({method: 'DELETE', url: '/interactions'}).then(function () {
		interactions = [];
	});
}

function setup() {
	return call({method: 'POST', url: '/interactions', body: JSON.stringify(interactions)});
}

function addInterations(i) {
	if (typeof i == 'Object' && typeof i !== 'Array') {
		i = [i];
	}
	interactions.push.apply(interactions, i);
}

function verifyInteractions() {
	return call({method: 'GET', url: '/interactions/verification'});
}

function createPactFile(options) {
	return call({method: 'POST', url: '/pact', body: JSON.stringify(options)});
}

module.exports = {
	baseUrl: baseUrl,
	setup: setup,
	clear: clearInteractions,
	add: addInterations,
	verify: verifyInteractions,
	create: createPactFile
};