'use strict'
const LED = require('sense-hat-led').sync;
const Raspistill = require('node-raspistill').Raspistill;
const camera = new Raspistill();


// LED.clear(255, 255, 255)
// for (let i = 3; i < 0; i--) {
//   LED.flashMessage(`${i}`)
// }
// camera.takePhoto().then((photo) => {
//   console.log('took photo --->', photo)

// });

// LED.clear()


// const O = [0, 0, 0];
// const X = [255, 0, 0];
// const red = [255, 0, 0]
// const orange = [255, 165, 0];
// const yellow = [255, 215, 0]
// const green = [0, 255, 0]
// const blue = [0, 0, 255]
// const indigo = [75, 0, 130]
// const violet = [128, 0, 128]
// const grey = [100, 100, 100]
// const off = [0, 0, 0]

// const allColors = [red, orange, yellow, green, blue, indigo, violet]


// const bigX = [
//   X, O, O, O, O, O, O, X,
//   O, X, O, O, O, O, X, O,
//   O, O, X, O, O, X, O, O,
//   O, O, O, X, X, O, O, O,
//   O, O, O, X, X, O, O, O,
//   O, O, X, O, O, X, O, O,
//   O, X, O, O, O, O, X, O,
//   X, O, O, O, O, O, O, X,
// ];

// const smiley = [
//   O, O, O, O, O, O, O, O,
//   O, O, O, O, O, O, O, O,
//   O, X, X, O, O, X, X, O,
//   O, X, X, O, O, X, X, O,
//   O, O, O, O, O, O, O, O,
//   O, X, O, O, O, O, X, O,
//   O, O, X, X, X, X, O, O,
//   O, O, O, O, O, O, O, O,
// ];


// const rainbow = [
//   red, red, red, red, red, red, red, red,
//   orange, orange, orange, orange, orange, orange, orange, orange,
//   yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow,
//   green, green, green, green, green, green, green, green,
//   blue, blue, blue, blue, blue, blue, blue, blue,
//   indigo, indigo, indigo, indigo, indigo, indigo, indigo, indigo,
//   violet, violet, violet, violet, violet, violet, violet, violet,
//   O, O, O, O, O, O, O, O,
// ]

// LED.setRotation(180)
// LED.lowLight = true;

// LED.setPixels(rainbow)
// LED.sleep(2)
// LED.setPixels(smiley)
// LED.sleep(2)
// LED.setRotation(270)
// LED.sleep(2)
// LED.setRotation(0)
// LED.sleep(2)
// LED.setRotation(90)
// LED.sleep(2)
// LED.setRotation(180)
// LED.sleep(2)


// LED.clear(100, 100, 100)
// LED.showMessage('this is a test', 0.0675, off, grey)
// LED.clear()


LED.clear(0, 0, 255)
