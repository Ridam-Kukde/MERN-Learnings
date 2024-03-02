const express = require("express");
const UserController = require("../controllers/usercontroller");

const router= express.Router();
router.post('/', (req,res)=>{
    UserController.createUser;
});
 
module.exports=router;