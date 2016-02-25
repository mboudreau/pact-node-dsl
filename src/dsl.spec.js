/* global describe:true, before:true, after:true, it:true, global:true, process:true */
'use strict';

var expect = require('chai').expect,
	pact = require('./dsl.js');

describe("Pact DSL Spec", function () {
	var requestHeaders = {
	};
	var responseHeaders = {
		'Content-Type': 'application/json;charset=utf-8'
	};
	var jsonRequestHeaders = {
		'Content-Type': term('application/json', 'application/json;charset=utf-8')
	};

	var mock = {
		"works":true
	};

	var dsl;
	before(function(){
		dsl = pact();
	});

	after(function(){

	});

	it('Should pass', function(){
		var promise = dsl.given('an http query')
			.uponReceiving('a search GET request with a query')
			.withRequest({method: 'get', path: '/_search', query: term('q=.*', 'q=test'), headers: requestHeaders})
			.willRespondWith({
				status: 200,
				headers: responseHeaders,
				body: mock
			});

		expect(promise).to.be.ok;
	})
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