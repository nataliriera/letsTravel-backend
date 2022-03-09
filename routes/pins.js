const router = require("express").Router();
const Pin = require("../models/Pin");

//create pin

router.post("/createpin", async (req,res,next)=>{
   
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports =  router;