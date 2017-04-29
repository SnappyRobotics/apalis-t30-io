var five = require('johnny-five');
var TinyRaspberryPiIO = require('../index');

var board = new five.Board({
  io: new TinyRaspberryPiIO()
});

board.on('ready', function() {
  var led = new five.Led('GPIO129');
  led.on();
  // led.blink(500);
});
