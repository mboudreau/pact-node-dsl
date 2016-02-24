'use strict';

var upon = require('./upon.js');

module.exports = function (name) {

	return {uponReceiving: upon};
};