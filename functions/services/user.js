const { db, auth } = require('../config/firebase');
class ServiceUser {
  constructor() {
    this._collection = 'user'
    this._fireStore = db.collection(this._collection);
    this.auth = auth;
  }

  async store(user) {
    try {
      const { email, password } = user;
      const userCredential = await this.auth.createUser({ email, password });
      delete user.password;
      await this._fireStore.doc(userCredential.uid).set(user);
    } catch (error) {
      throw error;
    }
  }

  async get() {
    try {
      const users = [];
      const response = await this._fireStore.get();
      response.forEach(doc => {
        users.push({ ...doc.data(), id: doc.id })
      });

      return users;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getId(id) {
    try {
      const user = await this._fireStore.doc(id).get();
      if (!user.data()) {
        throw 'user not found!';
      }
      return user.data();
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      await this.getId(id)
      await this._fireStore.doc(id).delete();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, newUser) {
    try {
      await this.getId(id)
      const { email, phoneNumber, displayName } = newUser
      await this.auth.updateUser(id, { email, phoneNumber, displayName })
      await this._fireStore.doc(id).update(newUser);
    } catch (error) {
      throw error;
    }
  }

  async updatePassword(id, { newPassword }) {
    try {
      await this.getId(id);
      await this.auth.updateUser(id, { password: newPassword });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = ServiceUser;

// {
// 	"email": "paulojhole@gmail.com",
// 	"password": "paulo123",
//   "phoneNumber": 1000000,
//   "displayName": "Paulo Sobrinho",
// 	"date": "12/15/1999",
// 	"genre": "M"
// }
