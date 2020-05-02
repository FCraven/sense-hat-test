const matrix = require('node-sense-hat').Leds;
const imu = require("node-sense-hat").Imu;

const IMU = new imu.IMU();

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
  red, red, red, red, red, red, red, red,
  orange, orange, orange, orange, orange, orange, orange, orange,
  yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow,
  green, green, green, green, green, green, green, green,
  blue, blue, blue, blue, blue, blue, blue, blue,
  indigo, indigo, indigo, indigo, indigo, indigo, indigo, indigo,
  violet, violet, violet, violet, violet, violet, violet, violet,
  O, O, O, O, O, O, O, O,
]


const flashRed =()=> {
  matrix.clear([255, 0, 0]);
  setTimeout(matrix.clear, 100);
}




const init =()=> {

  matrix.setPixels(cross)

  matrix.setRotation(180)

  flashRed()

  IMU.getValue((err, data) => {
    if (err !== null) {
      console.error("Could not read sensor data: ", err);
      return;
    }

    const { temperature, pressure, humidity } = data
    const temperatureString = temperature.toString().slice(0, 5)
    const pressureString = pressure.toString().slice(0, 5)

    matrix.showMessage(`${temperatureString}C  Humidity:${Math.round(humidity)}%  Pressure: ${pressureString}mbs`, 0.075, [150, 100, 0], [0, 0, 215]);
    matrix.clear(255,0,0)
  });
}

for(let i = 0; i < 5; i++){
  init()
}
