const fireStore = require('../config/firebase')

class ServiceBanner {
  constructor(){
    this._collection = 'banner';
    this._fireStore = fireStore.collection(this._collection);
  }

  async get(){
    try{
      const banner = []
      const response = await this._fireStore.get();
      response.forEach(doc => {
        banner.push({...doc.data(), id: doc.id})
      });
      return banner;
    }catch(error){
      console.log(error);
      throw error;
    }
  }

  async getId(id){
    try{
      const banner = await this._fireStore.doc(id).get();
      if(!banner.data()){
        throw "Banner not found";
      }
      return banner.data();
    }catch(error){
      console.log(error);
      throw error;
    }
  }
  async store(banner){
    try{
      await this._fireStore.add(banner);
    }catch(error){
      console.log(error);
      throw error;
    }
  }
  async update(id, newBanner){
    try{
      await this._fireStore.doc(id).update(newBanner);
    }catch(error){
      console.log(error);
      throw error;
    }
  }
  async delete(id){
    try{
      await this.getId(id)
      await this._fireStore.doc(id).delete()
    }catch(error){
      console.log(error);
      throw error;
    }
  }
}
module.exports = ServiceBanner;


//obj Banner
// {
//   "urlImage": "",
//   "link":""
// }