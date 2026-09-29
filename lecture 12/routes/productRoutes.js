const express = require("express");
const router = express.Router();
const productController = require("../Controller/productController")


router.get("/search", productController.searchProducts)
router.get("/", productController.getProducts)

router.get("/:id", productController.getProductsById)

////Create 

router.post("/", productController.addProducts)


//Update

router.put("/:id", productController.updateProducts)

//Delete

router.delete("/:id", productController.deleteProducts)

module.exports = router