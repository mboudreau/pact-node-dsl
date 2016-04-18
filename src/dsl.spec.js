/* global describe:true, before:true, after:true, it:true, global:true, process:true */
'use strict';

var expect = require('chai').expect,
	DSL = require('./dsl.js'),
	pact = require('@pact-foundation/pact-node');

describe("Pact DSL Spec", function () {
	var requestHeaders = {};
	var responseHeaders = {
		'Content-Type': 'application/json;charset=utf-8'
	};
	var jsonRequestHeaders = {
		'Content-Type': term('application/json', 'application/json;charset=utf-8')
	};

	var mock = {
		"works": true
	};

	var dsl, server;
	before(function (done) {
		dsl = DSL();
		pact.create({
				port: 9700
			})
			.start()
			.then(function (s) {
				server = s;
				done();
			});
	});

	after(function (done) {
		server.delete().then(function () {
			done();
			server = null;
		});
	});

	it('Should pass', function () {
		var i = dsl.given('an http query')
			.uponReceiving('a search GET request with a query')
			.withRequest({method: 'get', path: '/_search', query: term('q=.*', 'q=test'), headers: requestHeaders})
			.willRespondWith({
				status: 200,
				headers: responseHeaders,
				body: mock
			});
		var promise = dsl.setup();

		expect(promise).to.be.ok;
		expect(i).to.be.equal(dsl);
	});
});


function term(matcher, generate) {
	if ((typeof matcher === 'undefined') || (typeof generate === 'undefined')) {
		throw 'Matcher and Generate arguments must be specified to use Term';
	}
	return {
		"json_class": "Pact::Term",
		"data": {
			"generate": generate,
			"matcher": {
				"json_class": "Regexp",
				"o": 0,
				"s": matcher
			}
		}
	};
}