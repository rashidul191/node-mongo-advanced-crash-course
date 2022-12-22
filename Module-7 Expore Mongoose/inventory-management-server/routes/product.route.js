const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.postProducts);

router.route("/:id").get(productController.getProductOfId).patch(productController.updateProduct);

module.exports = router;
