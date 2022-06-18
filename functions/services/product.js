const { db } = require('../config/firebase');

class ServiceProduct {
  constructor() {
    this._collection = 'product'
    this._fireStore = db.collection('product');
  }

  async get() {
    try {
      const products = [];
      const result = await this._fireStore.get();
      result.forEach(doc => {
        products.push({ ...doc.data(), id: doc.id })
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getId(id) {
    try {
      const product = await this._fireStore.doc(id).get();
      if (!product.data()) {
        throw 'product not found!';
      }
      return product.data();
    } catch (error) {
      throw error;
    }
  }

  async store(product) {
    try {
      await this._fireStore.add(product);
    } catch (error) {
      throw error;
    }
  }

  async update({id, product}) {
    try {
      await this._fireStore.doc(id).update(product);
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

}

module.exports = ServiceProduct;