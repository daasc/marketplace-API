const fireStore = require('../config/firebase');

class ServiceProduct {
  constructor() {
    this._collection = 'test'
    this._fireStore = fireStore.collection('test');
  }

  async get() {
    try {
      const products = [];
      const result = await this._fireStore.get();
      result.forEach(doc => {
        products.push(doc.data())
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getId(id) {

  }

  async store({ name, qtd, category}) {
    try {
      await this._fireStore.add({
        name, qtd, category,
      });
    } catch (error) {
      throw error;
    }
  }

  async update() {

  }

  async delete() {

  }

}

module.exports = ServiceProduct;