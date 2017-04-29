var LinuxIO = require('linux-io'),
  util = require('util');

function Apalis_T30_IO() {
  if (!(this instanceof Apalis_T30_IO)) {
    return new Apalis_T30_IO();
  }

  LinuxIO.call(this, {
    pins: [{
      ids: ['GPIO129'],
      gpioNo: 129,
      ledPath: '/sys/class/gpio/gpio129',
      modes: [0, 1]
    }]
  });

  setImmediate(function() {
    this.emit('connect');
    this.emit('ready');
  }.bind(this));
}
util.inherits(Apalis_T30_IO, LinuxIO);

module.exports = Apalis_T30_IO;
