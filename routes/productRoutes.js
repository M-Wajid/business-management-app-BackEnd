const express = require('express');
const productController = require('./../controllers/productController');
const router = express.Router();

// router.param('id', productController.checkID)

router
  .route('/')
  .get(productController.getAllproducts)
  .post(productController.createproduct);
router
  .route('/:id')
  .get(productController.getproduct)
  .patch(productController.updateproduct)
  .delete(productController.deleteproduct);

module.exports = router;
