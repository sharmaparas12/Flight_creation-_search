const express=require('express');
const Citycontroller=require('../../controllers/city_controller');
const router=express.Router();
router.post('/city',Citycontroller.create);
router.get('/city/:id',Citycontroller.get);
router.delete('/city/:id',Citycontroller.destroy);
router.patch('/city/:id',Citycontroller.update);
module.exports=router;