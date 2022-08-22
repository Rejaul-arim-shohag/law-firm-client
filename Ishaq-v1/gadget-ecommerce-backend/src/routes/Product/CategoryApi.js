const express = require('express');
const router = express.Router();
const categoryController = require("../../controllers/Product/CategoryController")

router.post("/category", categoryController.CreateCategory);
router.get("/category/:pageNo/:perPage/:searchKeyword", categoryController.SelectCategoryList);
router.put("/category/:id", categoryController.UpdateCategory);
router.delete("/category/:id", categoryController.DeleteCategory);
router.post("/category/delete", categoryController.DeleteMultiple);
router.get("/categories", categoryController.SelectCategories);

module.exports = router;