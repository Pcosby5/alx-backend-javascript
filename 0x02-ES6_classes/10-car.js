const CAR_BRAND = Symbol('brand');
const CAR_MOTOR = Symbol('motor');
const CAR_COLOR = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[CAR_BRAND] = brand;
    this[CAR_MOTOR] = motor;
    this[CAR_COLOR] = color;
  }

  cloneCar() {
    return new Car(this[CAR_BRAND], this[CAR_MOTOR], this[CAR_COLOR]);
  }
}
