class CrudRepository{

    constructor(model)
    {
        this.model=model;
    }
    
    async create(data)
    {
        try {
            const result=await this.model.create(data);
            return result;
            
        } catch (error) {
            console.log("error in ");
            throw{error};
            
        }
    }
    async destroy(modelId)
    {
        try {
            await this.model.destroy({
                where:{
                    id:modelId
                }
            });
            return true;
            
        } catch (error) {
            console.log("error in ");
            throw{error};
            
        }
    }
    async get(modelId)
    {
        try {
            
        const response = await this.model.findOne({ where: { id: modelId } });
        return response;
            
        } catch (error) {
            console.log("error in ");
            throw{error};
            
        }
    }
    async getall()
    {
        try {
            const result=await this.model.findAll();
            return result;
            
        } catch (error) {
            console.log("error in ");
            throw{error};
            
        }
    }
    async update(data,modelId)
    {
        try {
                   await this.model.update(data,{where:{
                   id:modelId
                }});
                // console.log(response);
                // const ans=await response.get();
                // return ans;
                const response = await this.model.findOne({ where: { id: modelId } });
                return response;
            
        } catch (error) {
            console.log("error in ");
            throw{error};
            
        }
    }
}
module.exports=CrudRepository;

