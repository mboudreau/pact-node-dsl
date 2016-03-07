'use strict';

var given = require('./given.js'),
	service = require('./pact-service.js'),
	q = require('q');

module.exports = function (url) {
	service.baseUrl(url);
	return {
		given: given(),
		clear: service.clear,
		verify: service.verify,
		create: service.create
	};
};
