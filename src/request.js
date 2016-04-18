'use strict';

var response = require('./response.js');

module.exports = function (dsl, definition) {
	return function (options) {
		definition.request = options;

		if (!definition.request.method || !definition.request.path) {
			throw 'pact-consumer-js-dsl\'s "withRequest" function requires "method" and "path" parameters';
		}

		return {willRespondWith: response(dsl, definition)};
	}
};