// User class
class User {
  constructor(username, department, accessLevel) {
    this.username = username;
    this.department = department;
    this.accessLevel = accessLevel || 1;
  }
}
// Admin class
class Admin {
  constructor(username, department, accessLevel) {
    this.username = username;
    this.department = department;
    this.accessLevel = accessLevel || 5;
  }
}
// instance of User class
const user = new User('John', 'IT');
console.log(user);

// instance of Admin class
const admin = new Admin('Max', 'IT');
console.log(admin);

// USER FACTORY CLASS
class UserFactory {
  // createUser method
  createUser(type, username, department, accessLevel) {
    switch (type) {
      case 'guest':
        return new User(username, department, 1);
      case 'normal':
        return new User(username, department, 3);
    }
  }
}
// instance of UserFactory class
const factoryUser = new UserFactory();
const guestUser = factoryUser.createUser('guest', 'guestUser01', 'IT');
const normalUser = factoryUser.createUser('normal', 'Bob', 'IT');
console.log(guestUser);
console.log(normalUser);

// Admin Factory Class
class AdminFactory {
  // createAdmin method
  createAdmin(type, username, department, accessLevel) {
    switch (type) {
      case 'guest':
        return new Admin(username, department, 4);
      case 'normal':
        return new Admin(username, department, accessLevel);
    }
  }
}
// instance of AdminFactory
const factoryAdmin = new AdminFactory();
const guestAdmin = factoryAdmin.createAdmin('guest', 'guestAdmin01', 'IT');
const normalAdmin = factoryAdmin.createAdmin('normal', 'Anna', 'IT');
console.log(guestAdmin);
console.log(normalAdmin);

// ABSTRACT USER/ADMIN FACTORY
const abstractUserFactory = (
  userType,
  type,
  username,
  department,
  accessLevel
) => {
  switch (userType) {
    case 'user':
      return factoryUser.createUser(type, username, department, accessLevel);
    case 'admin':
      return factoryAdmin.createAdmin(type, username, department, accessLevel);
  }
};
// == user instance
const newGuestUser = abstractUserFactory('user', 'guest', 'newGuest01', 'UX');
console.log(newGuestUser);
const newUser = abstractUserFactory('user', 'normal', 'newNormal01', 'UX');
console.log(newUser);

// == admin instance
const newGuestAdmin = abstractUserFactory(
  'admin',
  'guest',
  'newGuestAdmin',
  'UX'
);
console.log(newGuestAdmin);
const newAdmin = abstractUserFactory('admin', 'normal', 'newGuestAdmin', 'UX');
console.log(newAdmin);
