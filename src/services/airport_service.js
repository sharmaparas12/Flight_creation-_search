const {AirportRepository}=require('../repository/index');
const CrudService=require('./crud_service'); 


class AirportService extends CrudService{
  constructor(){
    const airportRepository=new AirportRepository();
    super(airportRepository);
  }
}
module.exports=AirportService;

// class Airport_service{
//   constructor(){
//     this.airportRepository=new AirportRepository();
//   }
//   async create_city(data)
//   {
//     try{
//     const city=await this.airportRepository.createAirport(data);
//     return city;
//     }catch(error)
//     {
//         console.log("error in service");
//         throw({error});
//     }

//   }
//   async view_city(cityid)
//   {
//     try{
//     const city=await this.airportRepository.viewAirport(cityid);
//     return city;
//     }catch(error)
//     {
//         console.log("error in service");
//         throw({error});
//     }

//   }
//   async view_cities(data)
//   {
//     try{
//     const cities=await this.airportRepository.viewAirports(data.name);
//     return cities;
//     }catch(error)
//     {
//         console.log("error in service");
//         throw({error});
//     }

//   }

//   async delete_city(cityid)
//   {
//     try{
//     const city=await this.airportRepository.deleteAirport(cityid);
//     }catch(error)
//     {
//         console.log("error in service");
//         throw({error});
//     }

//   }
//   async update_city(airportid,data)
//   {
//     try{
//     const city=await this.airportRepository.updateAirport(airportid,data);
//     return city;
//     }catch(error)
//     {
//         console.log("error in update_servie layeiiir");
//         throw({error});
//     }

//   }
// }
// module.exports=Airport_service;