const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");

//register

router.post("/register", async (req,res,next)=>{
    try{
        //Generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create new user
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword,
    });

        //save user and send response
    const user = await newUser.save();
    res.status(200).json(user._id)
    }catch(err){
        res.status(400).json(err)
    }
})


//login



module.exports =  router;