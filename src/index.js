const express =require("express");
require('dotenv').config();

const setupAndstartServer = async () =>{
    //create the object
    const app=express();
    const PORT=3000;
    app.listen(PORT,() =>{
        console.log(`sever started at port ${PORT}`);
        console.log(process.env);
    });
}
setupAndstartServer(); 