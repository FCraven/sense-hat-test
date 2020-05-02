'use strict'
const LEDsync = require('sense-hat-led').sync;
const LEDasync = require('sense-hat-led')


const O = [0, 0, 0];
const X = [255, 0, 0];
const red = [255, 0, 0]
const orange = [255, 165, 0];
const yellow = [255, 215, 0]
const green = [0, 255, 0]
const blue = [0, 0, 255]
const indigo = [75, 0, 130]
const violet = [128, 0, 128]
const grey = [100, 100, 100]
const off = [0, 0, 0]

const allColors = [red, orange, yellow, green, blue, indigo, violet]


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

const smiley = [
  O, O, O, O, O, O, O, O,
  O, O, O, O, O, O, O, O,
  O, X, X, O, O, X, X, O,
  O, X, X, O, O, X, X, O,
  O, O, O, O, O, O, O, O,
  O, X, O, O, O, O, X, O,
  O, O, X, X, X, X, O, O,
  O, O, O, O, O, O, O, O,
];


const rainbow = [
  red, red, red, red, red, red, red, red,
  orange, orange, orange, orange, orange, orange, orange, orange,
  yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow,
  green, green, green, green, green, green, green, green,
  blue, blue, blue, blue, blue, blue, blue, blue,
  indigo, indigo, indigo, indigo, indigo, indigo, indigo, indigo,
  violet, violet, violet, violet, violet, violet, violet, violet,
  O, O, O, O, O, O, O, O,
]

LEDsync.setRotation(180)
LEDsync.lowLight = true;

LEDsync.setPixels(rainbow)
LEDsync.setPixels(smiley)
LEDsync.sleep(2)
LEDsync.setRotation(270)
LEDsync.sleep(2)
LEDsync.setRotation(0)
LEDsync.sleep(2)
LEDsync.setRotation(90)
LEDsync.sleep(2)
LEDsync.setRotation(180)
LEDsync.sleep(2)


LEDsync.clear(100, 100, 100)
LEDsync.showMessage('this is a test', 0.0675, off, grey)
LEDsync.clear()

