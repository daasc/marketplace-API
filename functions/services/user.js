class ServiceUser {
  constructor() {
    this._collection = 'user'
    this._fireStore = fireStore.collection(this._collection);
  }
}