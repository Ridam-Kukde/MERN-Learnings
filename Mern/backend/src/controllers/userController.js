const UserService= require("../services/userservice")

class UserController{

    async createUser( name, email, phone ){
        try {
            const {name, email, phone}= req.body;
            const saveUser= await userService.createUser(name, email, phone);
            resizeBy.json(saveUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module. exports= new UserController;