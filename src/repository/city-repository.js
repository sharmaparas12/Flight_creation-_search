const {City, sequelize}=require('../models/index');
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
            // const query = `SELECT * FROM cities WHERE id = ${cityid}`;
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
            const query = `SELECT * FROM cities WHERE id = ${cityid}`;
            const city = await sequelize.query(query);
            return city;

        }
        catch(error)
        {
            console.log("error");
            throw({error});
        }
    }
   

}
module.exports=CityRepository;