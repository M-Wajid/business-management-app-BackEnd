const express = require('express');
const designController = require('./../controllers/designController');
const router = express.Router();
const auth = require("../middlewares/auth");

// router.param('id', designController.checkID)

router
  .route('/')
  .get(designController.getAllDesigns)
  .post(auth, designController.createDesign);
router
  .route('/:id')
  .get(designController.getDesign)
  .patch(auth, designController.updateDesign)
  .delete(auth, designController.deleteDesign);

module.exports = router;
