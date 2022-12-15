const express = require ("express");
const { addEmail } = require("../controllers/subscriberController");
const subscriberRouter = express.Router();

subscriberRouter.post("/addEmail", addEmail);

module.exports = subscriberRouter;