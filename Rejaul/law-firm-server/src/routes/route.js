const express = require('express');
const router = express.Router();
const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")

const UserController = require("../controller/UserController");
const AppointmentController = require("../controller/AppointmentController")
const AppointmentServicesController = require("../controller/AppointmentServicesController");
const SlotController = require("../controller/SlotController");
const AttorneyController = require("../controller/AttorneyController");



//user 
router.post("/createUser", UserController.userRegistration);
router.post("/loginUser", UserController.login);
router.post("/profileUpdate",authVerifyMiddleware, UserController.profileUpdate);

//attoreny
router.post("/createAttoreny",authVerifyMiddleware, AttorneyController.createAttoreny);
router.get("/readAttorneys",authVerifyMiddleware, AttorneyController.readAttorneys);
router.post("/updateAttorney/:id",authVerifyMiddleware, AttorneyController.updateAttorney);
router.get("/deleteAttorney/:id",authVerifyMiddleware, AttorneyController.deleteAttorney);



//appointment services create, and it will be create by admin
router.post("/AddAppointmentService",authVerifyMiddleware, AppointmentServicesController.AddAppointmentService);
router.get("/ReadAppointmentServices",authVerifyMiddleware, AppointmentServicesController.readAppointmentService);
router.post("/UpdateAppointmentService/:ServiceID",authVerifyMiddleware, AppointmentServicesController.updateAppointmentService);
router.get("/DeleteAppointmentService/:ServiceID",authVerifyMiddleware, AppointmentServicesController.DeleteAppointmentService);

//slot will update 
router.post("/CreateSlot",authVerifyMiddleware, SlotController.createSlot);
router.get("/ReadSlot",authVerifyMiddleware, SlotController.readSlot);
//router.post("/createAppointment",authVerifyMiddleware, AppointmentController.createAppointment);






module.exports=router;