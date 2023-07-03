const {City_service}=require('../services/index');
const Cityservice= new City_service();
const create= async (req,res) => {
    try{
        const city=await Cityservice.create_city(req.body);
        return res.status(201).json({
            data:city,
            message:"city created succes",
            success:true,
            err:{}
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"city not created",
            success:false,
            err:error
        });

    }


}

const destroy= async (req,res) => {
    try{
        const response=await Cityservice.delete_city(req.params.id);
        return res.status(200).json({
            data:response,
            message:"city deleted succes",
            success:true,
            err:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"city not deleted",
            success:false,
            err:error
        });

    }
    
}

const update= async (req,res) => {
    try{
        const response=await Cityservice.update_city(req.params.id,req.body);
        return res.status(500).json({
            data:response,
            message:"city update succes",
            success:true,
            err:{}
        });


    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"city not deleted",
            success:false,
            err:error
        });

    }
    
}

const get= async (req,res) => {
    try{
        const response=await Cityservice.view_city(req.params.id);
        return res.status(200).json({
            data:response,
            message:"city view succes",
            success:true,
            err:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"city not deleted",
            success:false,
            err:error
        });

    }
    
}

module.exports={
    create,
    destroy,
    get,
    update
}