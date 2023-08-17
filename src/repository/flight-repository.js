const{Flights}=require('../models/index');
const {Op}=require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter={};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId=data.departureAirportId;
        }
        if(data.minPrice) {
            // since by default we dont have minprice in table so how will should I query int the tabel
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
            
        }
        if(data.maxprice)
        {
            Object.assign(filter,{price:{[Op.lte]:data.maxprice}});
        }
        if(data.minPrice && data.maxprice)
        {
            Object.assign(filter,{price:{[Op.between]:[data.minPrice,data.maxprice]}});
        }
        //Object.assign(filter,{[Op.and]:[{price:{[Op.lte]:data.maxprice}},{price:{[Op.gte]:data.minPrice}}]});
        
        return filter;
    }

    async createFlight(data){
        try{
            const flight=await Flights.create(data);
            return flight;

        }catch(error){
            console.log("something is wrong in repository layer");
            throw {error};

        }

    }
    async getAllflights(data)
    {
        const filter=this.#createFilter(data);
        try {
            
            const flight=await Flights.findAll({
                where:filter,
            });
            return flight;
            
        } catch (error) {
            console.log("something went wrong");
            throw {error};
            
        }
    }
    async get(id)
    {
        try {
        
           const flight=await Flights.findByPk(id);
            return flight;
            
        } catch (error) {
            console.log("something went wrong");
            throw {error};
            
        }
    }
     async update(id,data)
    {
        try {
        
           const flight=await Flights.update(data,{
            where:{
                id:id
            }
           });
            return flight;
            
        } catch (error) {
            console.log("something went wrong");
            throw {error};
            
        }
    }
}
module.exports=FlightRepository;