const express = require('express');
const router = express.Router();
const UserController = require("../controller/UserController")
const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
//user 
router.post("/createUser", UserController.userRegistration);
router.post("/loginUser", UserController.login);
router.post("/profileUpdate",authVerifyMiddleware, UserController.profileUpdate);
//create





module.exports=router;