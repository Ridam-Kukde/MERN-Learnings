const express= require ('express');
const app= express();
const UserRoutes= require("./routes/userRoute");
const bodyParser = require("body-parser");
const PORT= process.env.PORT || 5000;


app.use(bodyParser.json());


    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })

 
app.use("api/user", UserRoutes);

