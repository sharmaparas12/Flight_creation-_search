const {CityRepository}=require('../repository/index');

class City_service{
  constructor(){
    this.cityRepository=new CityRepository();
  }
  async create_city(data)
  {
    try{
    const city=await this.cityRepository.createCity(data);
    return city;
    }catch(error)
    {
        console.log("error in service");
        throw({error});
    }

  }
  async view_city(cityid)
  {
    try{
    const city=await this.cityRepository.viewCity(cityid);
    return city;
    }catch(error)
    {
        console.log("error in service");
        throw({error});
    }

  }
  async view_airport(cityid)
  {
    try{
    const city=await this.cityRepository.viewAirport(cityid);
    return city;
    }catch(error)
    {
        console.log("error in service");
        throw({error});
    }

  }
  async view_cities(data)
  {
    try{
    const cities=await this.cityRepository.viewCities(data.name);
    return cities;
    }catch(error)
    {
        console.log("error in service");
        throw({error});
    }

  }

  async delete_city(cityid)
  {
    try{
    const city=await this.cityRepository.deleteCity(cityid);
    }catch(error)
    {
        console.log("error in service");
        throw({error});
    }

  }
  async update_city(cityid,data)
  {
    try{
    const city=await this.cityRepository.updateCity(cityid,data);
    return city;
    }catch(error)
    {
        console.log("error in update_servie layeiiir");
        throw({error});
    }

  }
}
module.exports=City_service;