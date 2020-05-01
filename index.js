const matrix = require('node-sense-hat').Leds;

const cross = [
  X, O, O, O, O, O, O, X,
  O, X, O, O, O, O, X, O,
  O, O, X, O, O, X, O, O,
  O, O, O, X, X, O, O, O,
  O, O, O, X, X, O, O, O,
  O, O, X, O, O, X, O, O,
  O, X, O, O, O, O, X, O,
  X, O, O, O, O, O, O, X,
];

matrix.setPixels(cross);

