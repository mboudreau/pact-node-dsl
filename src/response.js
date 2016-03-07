'use strict';

var service = require('./pact-service.js');

module.exports = function (definition) {
	return function(options) {
		definition.response = options;
		return service.set(definition);
	};
};