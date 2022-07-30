const express = require('express');
const router = express.Router();
const userController = require("../controllers/UserController")

router.post("/user", userController.CreateUser);
router.get("/users", userController.SelectUsers);
router.get("/user/:id", userController.SelectUser);
router.put("/user/:id", userController.UpdateUser);
router.delete("/user/:id", userController.DeleteUser);

module.exports = router;