<img src="https://github.com/pact-foundation/pact-logo/blob/master/media/logo-black.png" width="200">

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
