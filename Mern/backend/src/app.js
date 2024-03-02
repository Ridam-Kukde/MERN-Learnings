const express= require ('express');
const {connectedToMongoDB}= require('./configuration/dbConfig');
const app= express();
const UserRoutes= require("./routes/userRoute");
const bodyParser = require("body-parser");
const PORT= process.env.PORT || 5000;


app.use(bodyParser.json());

connectedToMongoDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
});
 
app.use("api/user", UserRoutes);

