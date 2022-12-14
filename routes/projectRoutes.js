const express = require('express');
const projectController = require('./../controllers/projectController');
const router = express.Router();

// router.param('id', projectController.checkID)

router
  .route('/')
  .get(projectController.getAllprojects)
  .post(projectController.createproject);
router
  .route('/:id')
  .get(projectController.getproject)
  .patch(projectController.updateproject)
  .delete(projectController.deleteproject);

module.exports = router;
