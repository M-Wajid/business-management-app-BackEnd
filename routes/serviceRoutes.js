const express = require('express');
const serviceController = require('./../controllers/serviceController');
const router = express.Router();

const auth = require("../middlewares/auth");

// router.param('id', serviceController.checkID)

router
  .route('/')
  .get(serviceController.getAllservices)
  .post(auth,serviceController.createservice);
router
  .route('/:id')
  .get(serviceController.getservice)
  .patch(auth,serviceController.updateservice)
  .delete(auth,serviceController.deleteservice);

module.exports = router;
