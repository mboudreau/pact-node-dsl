'use strict';

var given = require('./given.js'),
	service = require('./pact-service.js');


module.exports = function (url) {
	service.baseUrl(url);
	return {
		given: given({} /** TODO add base definition here **/),
		clear: service.clear,
		verify: service.verify,
		create: service.createPact
	};
};


