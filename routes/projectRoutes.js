const express = require('express');
const projectController = require('./../controllers/projectController');
const router = express.Router();

const auth = require("../middlewares/auth");

// router.param('id', projectController.checkID)

router
  .route('/')
  .get(projectController.getAllprojects)
  .post(auth,projectController.createproject);
router
  .route('/:id')
  .get(projectController.getproject)
  .patch(auth,projectController.updateproject)
  .delete(auth,projectController.deleteproject);

module.exports = router;
