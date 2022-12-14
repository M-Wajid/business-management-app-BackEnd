const express = require('express');
const serviceController = require('./../controllers/serviceController');
const router = express.Router();

// router.param('id', serviceController.checkID)

router
  .route('/')
  .get(serviceController.getAllservices)
  .post(serviceController.createservice);
router
  .route('/:id')
  .get(serviceController.getservice)
  .patch(serviceController.updateservice)
  .delete(serviceController.deleteservice);

module.exports = router;
