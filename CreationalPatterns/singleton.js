// The Singleton Pattern will check if there is an instance of a class already created and if we already have one instance it will return the instance that we already have created.

// flag to indicate if we have an instance
let instance = null;

// class
class JetFighter {
  constructor(seats, engines, color) {
    if (!instance) {
      this.seats = seats;
      this.engines = engines;
      this.color = color;
      instance = this; // set the instance flag to 'this'
    } else {
      return instance;
    }
  }
}
// crate a first instance successfully
const f15 = new JetFighter(1, 2, 'grey');
// second instance will have the value of the first instance we created (only one can exists)
const f16 = new JetFighter(2, 4, 'grey');

console.log(f15);
console.log(f16);
