// CLASSES PATTERNS
// Classes constructor
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const civic = new Car(4, 'v-tech', 'red');
console.log(civic);

// Extending a class
class SUV extends Car {
  constructor(doors, engine, color, awd) {
    super(doors, engine, color);
    this.awd = awd;
  }
}

const pilot = new SUV(4, 'V6', 'red', true);
console.log(pilot);
