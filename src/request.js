'use strict';

var response = require('./response.js');

module.exports = function (name) {
	
	return {respondWith: response};
};