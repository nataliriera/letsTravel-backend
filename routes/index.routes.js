const router = require("express").Router();
const authRoutes = require("./auth.routes");
const pinRoute = require("./pins.routes");
const usersRoute = require("./users");
const cloudinary = require("cloudinary")
const uploadCloud = require("../helpers/cloudinary")
const {uploadProcess} = require("../controllers/upload")
/* GET home page */ 
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/upload", uploadCloud.single('doc'), uploadProcess);
router.post("/delete-image", async (req,res,next)=>{
  try{
    cloudinary.v2.uploader.destroy("profile-pictures/profile_lknnfm.jpg", function (error, result) {
      res.status(200).send({result, error});
    });
  }catch(error){
    next(error);
  }
});

router.use("/pins", pinRoute);

router.use("/auth", authRoutes);

router.use("/users", usersRoute)

module.exports = router;
