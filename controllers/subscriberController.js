const subscriberModel = require("../models/subscriberModel");

exports.addEmail = async (req, res) => {
    const {email} = req.body
    try {
      const existingSubscriber = await subscriberModel.findOne({ email: email });
      if (existingSubscriber) {
        return res.status(400).json({
          message: "Subscriber already exists",
        });
      }
  
      const result = await subscriberModel.create({
        email: email,
      });
  
      res.status(201).json({
        subscriber: result,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "something went wrong",
      });
    }
  };