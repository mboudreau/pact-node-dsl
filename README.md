<img src="https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/logo-black.png" width="200">

[![Build Status](https://travis-ci.org/pact-foundation/pact-dsl.svg?branch=master)](https://travis-ci.org/pact-foundation/pact-dsl)
<!---
[![npm](https://img.shields.io/npm/v/@pact-foundation/pact-dsl.svg?maxAge=2592000)](https://www.npmjs.com/package/@pact-foundation/pact-dsl)
[![npm](https://img.shields.io/npm/dt/pact-foundation/pact-dsl.svg?maxAge=2592000)](https://www.npmjs.com/package/@pact-foundation/pact-dsl)
[![npm](https://img.shields.io/github/license/pact-foundation/pact-dsl.svg?maxAge=2592000)](https://github.com/pact-foundation/pact-dsl/blob/master/LICENSE)
[![npm](https://img.shields.io/david/pact-foundation/pact-dsl.svg?maxAge=2592000)](https://www.npmjs.com/package/@pact-foundation/pact-dsl)
--->

# Pact DSL

A DSL library to describe Pact behaviour to the mock server.

## Usage

### Node

`npm install pact-dsl --save-dev`

### Grunt

### Gulp

## Contributing

To develop this project, simply install the dependencies and run `npm watch` to for continual development, linting and testing when a source file changes.

## Testing

Running `npm test` will execute the tests that has the `*.spec.js` pattern.


dsl.given('an http query')
	.uponReceiving('a search GET request with a query')
	.withRequest({method: 'get', path: '/_search', query: term('q=.*', 'q=test'), headers: requestHeaders})
	.willRespondWith({
		status: 200,
		headers: responseHeaders,
		body: mockWithResults
	});
