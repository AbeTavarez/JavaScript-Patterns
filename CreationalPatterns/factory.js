// FACTORY PATTERN

// Create a class
class SpaceShip {
  constructor(shape, engine, color) {
    this.shape = shape;
    this.engine = engine;
    this.color = color;
  }
}
// Create a Factory Class
// We can have predefined types (alien, human) classes
// in our switch statement and just pass in the type we want to create
class SpaceShipFactory {
  createSpaceShip(type) {
    switch (type) {
      case 'alien':
        return new SpaceShip('round', 'ultrasonic', 'green');
      case 'human':
        return new SpaceShip('square', 'jet', 'white');
    }
  }
}

const factory = new SpaceShipFactory();
const alienShip = factory.createSpaceShip('alien');
console.log(alienShip);
