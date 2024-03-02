const mongoose= require('mongoose');


mongoose.connect("mongodb://localhost:27017/crudDB");

mongoose.connection.on("connected", ()=>{
     console.log("Connected to MongoDB");
})

mongoose.connection.off("error", ()=>{
    console.log(`MongoDB connection error: ${error}`);
})

module.exports=mongoose;