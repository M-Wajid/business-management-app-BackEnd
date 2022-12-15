const express = require('express');
const productController = require('./../controllers/productController');
const router = express.Router();
const auth = require("../middlewares/auth");

// router.param('id', productController.checkID)

router
  .route('/')
  .get(productController.getAllProducts)
  .post(auth,productController.createProduct);
router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(auth,productController.deleteProduct);

module.exports = router;
