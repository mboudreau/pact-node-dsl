'use strict';

var service = require('./pact-service.js');

module.exports = function (dsl, definition) {
	return function(options) {
		definition.response = options;
		service.add(definition);
		return dsl;
	};
};