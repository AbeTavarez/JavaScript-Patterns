// =====> SingletonPattern
//flag
let instance = null;

class JetFighter {
  constructor(seats, engine, color) {
    // checks if an instance already exist
    if (!instance) {
      // if there is NO instances of this class create one!
      this.seats = seats;
      this.engines = engine;
      this.color = color;
      instance = this; // set the instance flag to the instance
    } else {
      // if there IS an instance of this class
      return instance;
    }
  }
}
// create a first instance successfully
const F16 = new JetFighter(2, 'F110-GE Afterburning', 'Silver');
// second instance will have the value of the first instance we created
// (only one can exists)
const F35 = new JetFighter(2, 'F135 Afterburning', 'Grey');
console.log(F16); // JetFighter {seats: 2, engines: 'F110-GE Afterburning', color: 'Silver'}
console.log(F35); // JetFighter {seats: 2, engines: 'F110-GE Afterburning', color: 'Silver'}
