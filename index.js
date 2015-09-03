var Emitter = require('emitter');

// alias all the things!
Emitter.prototype.addListener = Emitter.prototype.on;
Emitter.prototype.removeListener = Emitter.prototype.off;
Emitter.prototype.removeAllListeners = Emitter.prototype.off;

Emitter.prototype.setMaxListeners = function(){ /* noop */ };

module.exports = Emitter;
module.exports.EventEmitter = Emitter;
