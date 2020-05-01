const matrix = require('node-sense-hat').Leds;

const O = [0, 0, 0];
const X = [255, 0, 0];
const red = [255, 0, 0]
const orange = [255, 165, 0];
const yellow = [255, 215, 0]
const green = [0, 255, 0]
const blue = [0, 0, 255]
const indigo = [75, 0, 130]
const violet = [128, 0, 128]


const bigX = [
  X, O, O, O, O, O, O, X,
  O, X, O, O, O, O, X, O,
  O, O, X, O, O, X, O, O,
  O, O, O, X, X, O, O, O,
  O, O, O, X, X, O, O, O,
  O, O, X, O, O, X, O, O,
  O, X, O, O, O, O, X, O,
  X, O, O, O, O, O, O, X,
];

const cross = [
  [red, red, red, red, red, red, red, red],
  [orange, orange, orange, orange, orange, orange, orange, orange],
  [yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow],
  [green, green, green, green, green, green, green, green],
  [blue, blue, blue, blue, blue, blue, blue, blue],
  [indigo, indigo, indigo, indigo, indigo, indigo, indigo, indigo],
  [violet, violet, violet, violet, violet, violet, violet, violet],
  O, O, O, O, O, O, O, O,
]

matrix.setPixels(cross)
// matrix.setRotation(180)
// matrix.setPixels(bigX);
// matrix.clear([127, 0, 0])

// matrix.setPixels(cross)
// matrix.showMessage('Hi Francis Neri! :)')

