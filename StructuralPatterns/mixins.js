// class
class User {
  firstName;
  lastName;
  age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// Create an instance
const bill = new User('Bill', 'Gates', 65);
const mark = new User('Mark', 'Zuck', 36);
console.log(bill);
console.log(mark);

// Create new object with a method inside
const userMixin = {
  getInfo() {
    console.log(
      `User info: ${this.firstName} ${this.lastName} is ${this.age} years old.`
    );
  }
};

// Mixins / Mix in a new function to the User prototype
Object.assign(User.prototype, userMixin);
bill.getInfo();
