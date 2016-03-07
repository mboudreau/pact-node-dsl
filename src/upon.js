'use strict';

var request = require('./request.js');

module.exports = function (definition) {
	return function (description) {
		definition.description = description;
		return {withRequest: request(definition)};
	}
};