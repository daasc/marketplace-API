const { db } = require("../config/firebase");

class ServiceCoupon {
  constructor() {
    this._collection = "coupon";
    this._fireStore = db.collection("coupon");
  }

  async get() {
    try {
      const coupons = [];
      const result = await this._fireStore.get();
      result.forEach(doc => {
        coupons.push({ ...doc.data(), id: doc.id });
      });
      return coupons;
    } catch (error) {
      throw error;
    }
  }
  async getId(id) {
    try {
      const coupon = await this._fireStore.doc(id).get();
      if (!coupon.data()) {
        throw "coupon not found!";
      }
      return coupon.data();
    } catch (error) {
      throw error;
    }
  }
  async store(coupon) {
    try {
      await this._fireStore.add(coupon);
    } catch (error) {
      throw error;
    }
  }
  async update(id, newCoupon) {
    try {
      await this._fireStore.doc(id).update(newCoupon);
    } catch (error) {
      throw error;
    }
  }

  async remove(id) {
    try {
      await this.getId(id);
      await this._fireStore.doc(id).delete();
    } catch (error) {
      throw error;
    }
  }

}

module.exports = ServiceCoupon;