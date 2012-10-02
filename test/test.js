var events = require('events');

describe('events', function() {
  it('should export EventEmitter', function() {
    expect(events.EventEmitter).to.be.an(Object);
  })
})

describe('EventEmitter', function() {
  var ee;
  beforeEach(function() {
    ee = new events.EventEmitter();
  })
  describe('.setMaxListeners(n)', function() {
    it('should do nothing', function() {
      expect(ee.setMaxListeners).to.not.throwException();
    });
  })
  describe('.addListener(type, listener)', function() {
    it('should equal .on()', function() {
      expect(ee.addListener).to.be(ee.on)
    });
    it('should add a listener', function(done) {
      ee.addListener('foo', done);
      ee.emit('foo');
    });
  })
  describe('.removeListener(type, listener)', function() {
    it('should equal .off()', function() {
      expect(ee.removeListener).to.be(ee.off);
    });
    it('should remove a listener', function() {
      var bad = function() {
        throw new Error("shouldn't be called");
      }
      ee.on('foo', bad);
      ee.removeListener('foo', bad);
      ee.emit('foo');
    });
  })
  describe('.removeAllListeners(type)', function() {
    it('should equal .off()', function() {
      expect(ee.removeAllListeners).to.be(ee.off);
    });
    it('should remove all listeners', function() {
      var bad = function() {
        throw new Error("shouldn't be called");
      }
      ee.on('foo', bad);
      ee.on('foo', bad);
      ee.removeAllListeners('foo');
      ee.emit('foo');
    });
  })
})
