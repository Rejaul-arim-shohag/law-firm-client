const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');



// product routes
router.post("/product", productController.CreateProduct);
router.get("/products", productController.SelectProducts);
router.put("/products", productController.UpdateProduct);
router.delete("/products", productController.DeleteProduct);



module.exports = router;