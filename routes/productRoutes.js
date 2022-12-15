const express = require('express');
const productController = require('./../controllers/productController');
const router = express.Router();
const auth = require("../middlewares/auth");

// router.param('id', productController.checkID)

router
  .route('/')
  .get(productController.getAllproducts)
  .post(auth,productController.createproduct);
router
  .route('/:id')
  .get(productController.getproduct)
  .patch(auth,productController.updateproduct)
  .delete(auth,productController.deleteproduct);

module.exports = router;
