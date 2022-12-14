const express = require('express');
const router = express.Router();
const productController = require('../../controllers/Product/ProductController');



// product routes
router.post("/product", productController.CreateProduct);
// router.get("/products-home", productController.SelectProductsHome);
router.get("/products", productController.SelectProducts);
router.get("/product/:id", productController.SelectProduct);
router.put("/product/:id", productController.UpdateProduct);
router.delete("/product/:id", productController.DeleteProduct);


module.exports = router;