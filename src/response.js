'use strict';

var service = require('./pact-service.js');

module.exports = function (definition) {
	return function(interaction) {
		return service.interaction(definition);
	};
};