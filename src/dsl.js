'use strict';

var given = require('./given.js'),
	service = require('./pact-service.js'),
	q = require('q');

function dsl(url) {
	service.baseUrl(url);
}

dsl.prototype.given = function (name) {
	return given(this)(name);
};

dsl.prototype.setup = service.setup;
dsl.prototype.clear = service.clear;
dsl.prototype.verify = service.verify;
dsl.prototype.create = service.create;

module.exports = function (url) {
	return new dsl(url);
};
