const {Airport}=require('../models/index');
const CrudRepository=require('./crud-repository');
class AirportRepository extends CrudRepository{
    constructor(){
        
        super(Airport);
    }

}



module.exports=AirportRepository;





















































// const {Airport, sequelize}=require('../models/index');
// const { Op } = require("sequelize");
// class AirportRepository{
//     async createAirport(data)
//     {
//         try{
//             const city=await Airport.create(data);
//             return city;
//         }catch(error){
//             console.log("erroe");
//             throw{error};
//         }
//     }
//     async deleteAirport(cityId)
//     {
//         try{
//             await Airport.destroy({
//                 where:{
//                     id:cityId
//                 }
//             });
//             return true;

//         }catch(error)
//         {
//             throw{error};
//         }
//     }
//     async updateAirport(airportid,data)
//     {
//         try{
//             // this approach will not give the updated object
//             // const city=await City.update(data,{where:{
//             //     id:cityid
//             // }});
//             // const query = `SELECT * FROM cities WHERE id = ${cityid}`;
//             // const city = await sequelize.query(query);
//             const city = await Airport.findOne({ where: { id: airportid } });
//             if(data.name)
//             city.name=data.name;
//             if(data.address)
//             city.address=data.address;
//             if(data.cityid)
//             city.cityId=data.cityid;
//             await city.save();
//             return city;
           

//         }
//         catch(error)
//         {
//             console.log("error in update repository layer");
//             throw({error});
//         }
//     }
    
//     async viewAirport(cityid)
//     {
//         try{
//             // way by using raw query
//             // const query = `SELECT * FROM cities WHERE id = ${cityid}`;
//             // const city = await sequelize.query(query);
//             const city = await Airport.findOne({ where: { id: cityid } });
//             return city;

//         }
//         catch(error)
//         {
//             console.log("error");
//             throw({error});
//         }
//     }
//     async viewAirports(nam)
//     {
//         try{
//             // way by using raw query
//             // const query = `SELECT * FROM cities WHERE id = ${cityid}`;
//             // const city = await sequelize.query(query);
//             if(nam)
//             {
//                 const cities=await Airport.findAll({
//                     where:{
//                         name:{
//                             [Op.startsWith]:nam
//                         }
//                     }
//                 });
//                 return cities;

//             }
//             const cities = await Airport.findAll();
//             return cities
//         }
//         catch(error)
//         {
//             console.log("error");
//             throw({error});
//         }
//     }
   

// }
// module.exports=AirportRepository;