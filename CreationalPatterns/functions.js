// FUNCTIONS PATTERNS
// Function as First Class Citizens
// It means functions can be used as values
const cal = () => {
  return 4 * 3;
};

const result = cal();
console.log(result);

// Callback Functions
const printCalc = (callback) => {
  console.log(callback());
};

printCalc(cal);

//
