const express = require('express');
const router = express.Router();

//authentication verify middleware
const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
//controller 
const UserController = require("../controller/UserController");
const AppointmentController = require("../controller/AppointmentController")
const AppointmentServicesController = require("../controller/AppointmentServicesController");
const SlotController = require("../controller/SlotController");
const AttorneyController = require("../controller/AttorneyController");
const ServiceAreaController =require("../controller/ServiceAreaController")
const PlanController = require ("../controller/PlanController.js")
const MessageController = require("../controller/MessageController")
const UserCommentCOntroller = require("../controller/UserCommentController");
//user route
router.post("/createUser", UserController.userRegistration);
router.post("/loginUser", UserController.login);
router.post("/profileUpdate",authVerifyMiddleware, UserController.profileUpdate);

//attoreny
router.post("/createAttoreny",authVerifyMiddleware, AttorneyController.createAttoreny);
router.get("/readAttorneys",authVerifyMiddleware, AttorneyController.readAttorneys);
router.post("/updateAttorney/:id",authVerifyMiddleware, AttorneyController.updateAttorney);
router.get("/deleteAttorney/:id",authVerifyMiddleware, AttorneyController.deleteAttorney);

//service area 
router.post("/createService",authVerifyMiddleware, ServiceAreaController.createService);
router.get("/readServiceAreas",authVerifyMiddleware, ServiceAreaController.readServiceAreas);
router.post("/updateServiceArea/:serviceID",authVerifyMiddleware, ServiceAreaController.updateServiceArea);
router.get("/deleteServiceArea/:serviceID",authVerifyMiddleware, ServiceAreaController.deleteServiceArea);

//plan areas
router.post("/createOurPlan",authVerifyMiddleware, PlanController.createOurPlan);
router.get("/readOurPlans",authVerifyMiddleware, PlanController.readOurPlans);
router.post("/updateOurPlan/:PlanID",authVerifyMiddleware, PlanController.updateOurPlan);
router.get("/deleteOurPlan/:PlanID",authVerifyMiddleware, PlanController.deleteOurPlan);

//Contact
router.post("/CreateMessage",authVerifyMiddleware, MessageController.CreateMessage);
router.get("/readMessages",authVerifyMiddleware, MessageController.readMessages);
router.post("/updateMessage/:id",authVerifyMiddleware, MessageController.updateMessage);

//UserCommet
router.post("/createUserComment",authVerifyMiddleware, UserCommentCOntroller.createUserComment);
router.get("/readComment",authVerifyMiddleware, UserCommentCOntroller.readComment);
router.get("/deleteComment/:id",authVerifyMiddleware, UserCommentCOntroller.deleteComment);







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