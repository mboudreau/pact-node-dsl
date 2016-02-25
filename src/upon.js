'use strict';

var request = require('./request.js');

module.exports = function(definition){
	return function (name) {
		return {withRequest: request(definition)};
	}
};