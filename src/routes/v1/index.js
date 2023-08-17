const express=require('express');
const Citycontroller=require('../../controllers/city_controller');
const Airportcontroller=require('../../controllers/airport_controller');
const router=express.Router();
const FlightController=require('../../controllers/flight_controller');
const {FlightMiddleware}=require('../../middlewares/index');
router.post('/city',Citycontroller.create);
router.get('/city/:id',Citycontroller.get);
router.delete('/city/:id',Citycontroller.destroy);
router.patch('/city/:id',Citycontroller.update);
router.get('/city',Citycontroller.getAll);
router.get('/city/airport/:id',Citycontroller.getairport);
router.post('/airport',Airportcontroller.create);
router.get('/airport/:id',Airportcontroller.get);
router.delete('/airport/:id',Airportcontroller.destroy);
router.patch('/airport/:id',Airportcontroller.update);
router.get('/airport',Airportcontroller.getAll);
router.post('/flights',
FlightMiddleware.validatecreateflight,
FlightController.create);

router.patch('/flight/:id',FlightController.updateflight);
router.get('/flights',FlightController.getAll);

router.get('/flight/:id',FlightController.get);
module.exports=router;