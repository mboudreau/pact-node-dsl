'use strict';

var upon = require('./upon.js');

module.exports = function () {
	var definition = {};
	return function (name) {
		definition.providerState =  name;
		return {uponReceiving: upon(definition)};
	}
};