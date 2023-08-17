const {FlightService}=require('../services/index');

const flightservice=new FlightService();

const create=async (req,res) => {
    try {
        const flight=await flightservice.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:"succesfully created flight"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        });

    }

}
const getAll=async (req,res) => {
    try {
        console.log(req.params);
        const flight=await flightservice.getAllflights(req.query);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:"succesfully created flight"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        });

    }

}
const get=async (req,res) => {
    try {
        
        const flight=await flightservice.get(req.params.id);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:"succesfully created flight"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        });

    }

}
const updateflight=async (req,res) => {
    try {
        
        const flight=await flightservice.updateflight(req.params.id,req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:"succesfully updated flight"

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update a flight',
            err:error
        });

    }

}

module.exports={
    create,
    getAll,
    get,
    updateflight,
}