const express = require('express');
const router = express.Router();
const TodoController = require("../controller/TodoContriller")
const UserController = require("../controller/UserController")
const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
//user 
router.post("/createUser", UserController.CreateUser)
router.post("/loginUser", UserController.LoginUser);

//create
router.post("/createTodo",authVerifyMiddleware,TodoController.CreateTodo);
router.post("/updateTodo/:id",authVerifyMiddleware,TodoController.UpdateTodo);
router.get("/deleteTodo/:id",authVerifyMiddleware,TodoController.DeleteTodo);
router.get("/ReadTodo/",authVerifyMiddleware,TodoController.ReadTodo);
router.get("/ReadTodoById/:id",authVerifyMiddleware,TodoController.ReadTodoById);



module.exports=router;