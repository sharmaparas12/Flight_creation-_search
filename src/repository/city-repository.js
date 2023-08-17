const {City,Airport, sequelize}=require('../models/index');
//const Airport=require('../models/airport');
const { Op } = require("sequelize");
class CityRepository{
    async createCity({name})
    {
        try{
            const city=await City.create({name});
            return city;
        }catch(error){
            console.log("erroe");
            throw{error};
        }
    }
    async deleteCity(cityId)
    {
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;

        }catch(error)
        {
            throw{error};
        }
    }
    async updateCity(cityid,data)
    {
        try{
            // this approach will not give the updated object
            // const city=await City.update(data,{where:{
            //     id:cityid
            // }});
            // const query = `SELECT airports.name,airports.address FROM cities join airports where airports.cityId=cities.id WHERE airports.cityId = ${cityid}`;
            // const city = await sequelize.query(query);
            const city = await City.findOne({ where: { id: cityid } });

            city.name=data.name;
            await city.save();
            return city;
           

        }
        catch(error)
        {
            console.log("error in update repository layer");
            throw({error});
        }
    }
    
    async viewCity(cityid)
    {
        try{
            // way by using raw query
            // const query = `SELECT * FROM cities WHERE id = ${cityid}`;
            // const city = await sequelize.query(query);
            const city = await City.findOne({ where: { id: cityid } });
            return city;

        }
        catch(error)
        {
            console.log("error");
            throw({error});
        }
    }
    async viewAirport(cityid)
    {
        try{
            // way by using raw query
            // const query = `SELECT * FROM airports WHERE id = ${cityid}`;
            // const city = await sequelize.query(query);
            // const query = `SELECT * FROM airports,cities JOIN cities on cities.id=airports.cityID WHERE airports.cityId =  ${cityid}`;
            // const city = await sequelize.query(query);
            const city = await City.findOne({ where: { id: cityid } });
            const airports=await city.getAirports();
            return airports;
           // return city;

        }
        catch(error)
        {
            console.log("error");
            throw({error});
        }
    }
    async viewCities(nam)
    {
        try{
            // way by using raw query
            // const query = `SELECT * FROM cities WHERE id = ${cityid}`;
            // const city = await sequelize.query(query);
            if(nam)
            {
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:nam
                        }
                    }
                });
                return cities;

            }
            const cities = await City.findAll();
            return cities
        }
        catch(error)
        {
            console.log("error");
            throw({error});
        }
    }
   

}
module.exports=CityRepository;