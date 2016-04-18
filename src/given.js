'use strict';

var upon = require('./upon.js');

module.exports = function (dsl) {
	var definition = {};
	return function (name) {
		definition.providerState =  name;
		return {uponReceiving: upon(dsl, definition)};
	}
};