const {FlightRepository,AirplaneRepository}=require('../repository/index');

class FlightService{
    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightrepository=new FlightRepository();
    }
    async createFlight(data){
        try {
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            data.TotalSeats=airplane.capacity;
            const flight=await this.flightrepository.createFlight(data);
            return flight;
            
        } catch (error) {
            console.log("errore in service layer");
            throw{error};
            
        }
    }
    async getAllflights(data){
        try {
            const flights=await this.flightrepository.getAllflights(data);
            return flights;
            
        } catch (error) {
            console.log("error in service layer");
            throw {error};
            
        }
    }
    async get(id){
        try {
            const flights=await this.flightrepository.get(id);
            return flights;
            
        } catch (error) {
            console.log("error in service layer");
            throw {error};
            
        }
    }
    async updateflight(id,data){
        try {
            const flights=await this.flightrepository.update(id,data);
            return flights;
            
        } catch (error) {
            console.log("error in service layer");
            throw {error};
            
        }
    }
}
module.exports=FlightService;