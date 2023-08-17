const {Airport_service}=require('../services/index');
const Airportservice= new Airport_service();
const create= async (req,res) => {
    try{
        const city=await Airportservice.create(req.body);
        return res.status(201).json({
            data:city,
            message:"Airport created succes",
            success:true,
            err:{}
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"Airport not created",
            success:false,
            err:error
        });

    }


}

const destroy= async (req,res) => {
    try{
        const response=await Airportservice.destroy(req.params.id);
        return res.status(200).json({
            data:response,
            message:"Airport deleted succes",
            success:true,
            err:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"Airport not deleted",
            success:false,
            err:error
        });

    }
    
}

const update= async (req,res) => {
    try{
        const response=await Airportservice.update(req.params.id,req.body);
        return res.status(500).json({
            data:response,
            message:"Airport update succes",
            success:true,
            err:{}
        });


    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"Airport not updated",
            success:false,
            err:error
        });

    }
    
}

const get= async (req,res) => {
    try{
        const response=await Airportservice.get(req.params.id);
        return res.status(200).json({
            data:response,
            message:"Airport view succes",
            success:true,
            err:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"View was not sucessful",
            success:false,
            err:error
        });

    }
    
}
const getAll= async (req,res) => {
    try{
        const response=await Airportservice.getAll(req.query);
        return res.status(200).json({
            data:response,
            message:"Aiports view succes",
            success:true,
            err:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"Aiport view was not succes",
            success:false,
            err:error
        });

    }
    
}





module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}