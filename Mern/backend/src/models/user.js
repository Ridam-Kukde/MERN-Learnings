const Mongoose= require("../configuration/dbConfig");

const userSchema= new Mongoose.Schema({
    name: String,
    email: String,
    phone: Number
});
const user= Mongoose.model("User", userSchema);
module.exports=user;