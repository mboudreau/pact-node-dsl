'use strict';

var given = require('./given.js'),
	service = require('./pact-service.js');


module.exports = function (url) {
	service.url = url;
	return {
		given: given,
		clear: service.clear
	};
};


