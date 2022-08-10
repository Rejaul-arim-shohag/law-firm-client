const express = require('express');
const router = express.Router();
const brandController = require("../../controllers/Product/BrandsController")

router.post("/brand", brandController.CreateBrand);
router.get("/brand/:pageNo/:perPage/:searchKeyword", brandController.SelectBrandList);
router.delete("/brand/:id", brandController.DeleteBrand);
router.post("/brand/delete", brandController.DeleteMultiple);
router.put("/brand/:id", brandController.UpdateBrand);
router.get("/brands", brandController.SelectBrands);
router.get("/brand/:id", brandController.SelectBrand);

module.exports = router;


// router.post("/brand", brandController.CreateBrand);
// router.get("/brandList/:pageNo/:perPage/:searchKeyword", brandController.SelectBrandList);
// router.delete("/brandList/:id", brandController.DeleteBrand);
// router.post("/brandList/delete", brandController.DeleteMultiple);
// router.put("/brand/:id", brandController.UpdateBrand);
// router.get("/brands", brandController.SelectBrands);
// router.get("/brand/:id", brandController.SelectBrand);