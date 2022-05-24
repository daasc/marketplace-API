const fireStore = require('../config/firebase');

class ServiceCategory {
  constructor() {
    this._collection = 'category'
    this._fireStore = fireStore.collection(this._collection);
  }

  async get() {
    try {
      const categories = [];
      const response = await this._fireStore.get();
      response.forEach(doc => {
        categories.push(doc.data())
      });

      return categories;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async store(category) {
    try {
      await this._fireStore.add(category);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ServiceCategory;

//obj category
// {
//   "name": "",
//   "urlImage": "",
//   "description":""
// }