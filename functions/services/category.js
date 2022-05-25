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
        categories.push({ ...doc.data(), id: doc.id })
      });

      return categories;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getId(id) {
    try {
      const category = await this._fireStore.doc(id).get();
      if (!category.data()) {
        throw 'category not found!';
      }
      return category.data();
    } catch (error) {
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

  async update({id, newProduct}) {
    try {
      await this._fireStore.doc(id).update(newProduct);
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
};

module.exports = ServiceCategory;

//obj category
// {
//   "name": "",
//   "urlImage": "",
//   "description":""
// }