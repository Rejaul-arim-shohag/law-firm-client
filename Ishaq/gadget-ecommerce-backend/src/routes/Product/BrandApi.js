const express = require('express');
const router = express.Router();
const brandController = require("../../controllers/Product/BrandsController")

router.post("/brand", brandController.CreateBrand);
router.get("/brands", brandController.SelectBrands);
router.get("/brand/:id", brandController.SelectBrand);
router.put("/brand/:id", brandController.UpdateBrand);
router.delete("/brand/:id", brandController.DeleteBrand);

module.exports = router;