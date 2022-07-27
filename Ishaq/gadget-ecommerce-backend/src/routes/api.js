const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');



// product routes
router.post("/product", productController.CreateProduct);
router.get("/products", productController.SelectProducts);
router.get("/product/:id", productController.SelectProduct);
router.post("/product/:id", productController.UpdateProduct);
router.delete("/product/:id", productController.DeleteProduct);





module.exports = router;