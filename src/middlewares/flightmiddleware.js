const {ClientErrorCodes}=require('../utils/error-code');



const validatecreateflight= (req,res,next) =>
{
    console.log(req.body.flightNumber,
        req.body.airplaneId,
        req.body.departureAirportId,
        req.body.arrivalAirportId,
        req.body.arrivalTime,
        req.body.departureTime,
        req.body.price);
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
        )
        {

        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            sucess:false,
            message:"invalid request for flight creation",
            err:"missing mandotaroy details of flight"
        });
    }
    next();

}
module.exports ={
    validatecreateflight
}