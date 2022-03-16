const router = require("express").Router();
const Pin = require("../models/Pin");

//create pin

router.post("/createpin", async (req,res,next)=>{
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get("/getpin", async (req,res,next)=>{
    try{
        const pins = await Pin.find();
        res.status(200).json(pins);
    }catch(err){
        res.status(400).json(err)
    }
})


module.exports =  router;