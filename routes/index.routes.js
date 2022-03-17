const router = require("express").Router();
const authRoutes = require("./auth.routes");
const pinRoute = require("./pins.routes");
const usersRoute = require("./users")
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.use("/pins", pinRoute);

router.use("/auth", authRoutes);

router.use("/users", usersRoute)

module.exports = router;
