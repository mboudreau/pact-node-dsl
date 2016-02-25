'use strict';

var upon = require('./upon.js');

module.exports = function(definition){
	return function (name) {
		return {uponReceiving: upon(definition)};
	}
};