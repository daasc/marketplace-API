const {Router} = require('express');
const ServiceBanner = require('../services/banner');
const serviceBanner = new ServiceBanner();
const {validate} = require('../middleware/validation');
const {validationRules} = require('../validation/banner');
const router = Router();

router.get('/', async (req,res)=>{
  try{
    const banner = await serviceBanner().get();
    res.status(200).json(banner)
  }catch(error){
    res.status(400).send(error)
  }
})
router.post('/', validationRules(), validate(), async (req, res)=>{
  try {
    const {body: banner} = req;
    await serviceBanner.store(banner);
    res.status(200).json({message:'Banner created wifth success!!'});
  } catch (error) {
    res.status(400).send(error)
  }
})
router.get('/:id', async (req,res)=>{
  try{
    const {params:{id}} = req;
    const banner = await serviceBanner.getId(id);
    res.status(200).json(banner);
  }catch(error){
    res.status(400).send(error);
  }
})
router.put('/:id', async (req, res)=>{
  try {
    const {params:{id}, body:{newBanner}} = req;
    await serviceBanner.update({id,newBanner});
    res.status(200).json({message:'Banner updated with success!!'});
  } catch (error) {
    res.status(400).send(error);
  }
})
router.delete('/:id', async (req, res)=>{
  try {
    const {params:{id}} = req;
    await serviceBanner.delete(id);
    res.status(200).json({message:'Banner deleted with success!!'});
  } catch (error) {
    res.status(400).send(error);
  }
})
module.exports= router;
