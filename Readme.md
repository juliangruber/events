
# events

Node's events module in the browser.

This is a wrapper around [component/emitter](https://github.com/component/emitter) that is api-compatible with node's events module.

[Events Node.js v0.8.11 Manual & Documentation](http://nodejs.org/api/events.html)

## Installation

Install with [component(1)](https://github.com/component/component)

```bash
$ npm install juliangruber/events
```

or

```bash
$ npm install events-component
```

## Usage example

```javascript
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

ee.on('foo', function(data) {
  console.log('foo received', data);
})

ee.emit('foo', 'bar');
// -> 'foo received bar'
```

## License

(MIT)

Copyright (c) 2012 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
