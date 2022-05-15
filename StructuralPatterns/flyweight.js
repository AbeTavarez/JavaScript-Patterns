// The Flyweight Pattern minimize the creation of the same item twice and same memory. It uses the same pattern as the Singleton Pattern

let instance = null;

class ProfilePicture {
  constructor(username, path) {
    if (!instance) {
      this.username = username;
      this.path = path;
      instance = this;
    } else {
      return instance;
    }
  }
}
const user1 = new ProfilePicture('user1', '/photos/user1');
const user2 = new ProfilePicture('user2', '/photos/user2');
console.log(user1);
console.log(user2);
