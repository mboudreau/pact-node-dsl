'use strict';

var response = require('./response.js');

module.exports = function(definition){
	return function (options) {
		return {willRespondWith: response(definition)};
	}
};