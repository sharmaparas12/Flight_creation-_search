const express =require("express");
const bodyparser=require("body-parser");
//const city=require('./repository/city-repository');
const city_service=require('./services/city_service');
const ApiRoutes=require('./routes/index');
const {PORT}=require('./config/serverconfig');
const db=require('./models/index');
const city=require('./models/city');
const setupAndstartServer = async () =>{
    //create the object
    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
     
    app.listen(PORT,async() =>{
        console.log(`server started at port ${PORT}`);
        if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
        }
       

        

    });

}
setupAndstartServer(); 