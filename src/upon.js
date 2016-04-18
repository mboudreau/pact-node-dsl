'use strict';

var request = require('./request.js');

module.exports = function (dsl, definition) {
	return function (description) {
		definition.description = description;
		return {withRequest: request(dsl, definition)};
	}
};