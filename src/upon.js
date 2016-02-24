'use strict';

var request = require('./request.js');

module.exports = function (name) {

	return {withRequest: request};
};