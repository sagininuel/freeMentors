/* eslint-disable no-console */
class user {
  /**
     * class constructor
     *
     */
  constructor() {
    this.users = [];
    this.numberOfUsers = this.users.length;
  }

  /**
     * @param {object} queryData
     * @param {object} data
     * @returns {object} user object
     */
  create(queryData, data) {
    const newUser = {
      id: this.numberOfUsers + 1,
      email: data.email || '',
      firstname: data.firstname || '',
      lastname: data.lastname || '',

    };
    this.users.push(newUser);
    console.log(this.users);
    return newUser;
  }


  findOne(email) {
    return this.users.find((user) => user.email === email);
  }
}

export default new user();
