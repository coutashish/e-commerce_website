const express =  require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated} = require("../controllers/auth");

router.get("/payment/gettoken/:userId")


module.exports = router;