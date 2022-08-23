const express = require('express');
const router = express.Router();
const brandController = require("../../controllers/Product/BrandsController")

router.post("/brand", brandController.CreateBrand);
router.get("/brand/:pageNo/:perPage/:searchKeyword", brandController.SelectBrandList);
router.get("/brand/:id", brandController.SelectBrand);
router.put("/brand/:id", brandController.UpdateBrand);
router.delete("/brand/:id", brandController.DeleteBrand);
router.post("/brand/delete", brandController.DeleteMultiple);


module.exports = router;

