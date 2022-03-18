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
        job_title:req.body.job_title,
        skills:req.body.skills,
        location:req.body.location,
        about:req.body.about,
        linked_in:req.body.linked_in,
        github:req.body.github
    });

        //save user and send response
    const user = await newUser.save();
    res.status(200).json(user._id)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", async (req,res,next)=>{
    try{
        const result = await User.find()
        res.status(200).json({result})
    }catch(err){
        res.status(500).json(err)
    }
})

//login
router.post("/login", async (req,res,next)=>{
    try{
        //find user
        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("Wrong username or password!")

        //validate password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
            );
            !validPassword && res.status(400).json("Wrong username or password!");

        //send res
        res.status(200).json({_id:user._id, username:username})
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports =  router;