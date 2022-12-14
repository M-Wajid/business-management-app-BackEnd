const express = require('express');
const designController = require('./../controllers/designController');
const router = express.Router();

// router.param('id', designController.checkID)

router
  .route('/')
  .get(designController.getAllDesigns)
  .post(designController.createDesign);
router
  .route('/:id')
  .get(designController.getDesign)
  .patch(designController.updateDesign)
  .delete(designController.deleteDesign);

module.exports = router;
