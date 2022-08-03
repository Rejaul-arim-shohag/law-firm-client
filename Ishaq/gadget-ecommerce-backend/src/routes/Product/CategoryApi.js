const express = require('express');
const router = express.Router();
const categoryController = require("../../controllers/Product/CategoryController")

router.post("/category", categoryController.CreateCategory);
router.get("/categories", categoryController.SelectCategories);
router.get("/category/:id", categoryController.SelectCategory);
router.put("/category/:id", categoryController.UpdateCategory);
router.delete("/category/:id", categoryController.DeleteCategory);

module.exports = router;