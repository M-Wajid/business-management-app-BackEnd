const service = require('./../models/serviceModel');

exports.getAllservices = async (req, res) => {
  try {
    const services = await service.find()
    res.status(200).json({
      status: 'success',
      results: services.length,
      data: {
        services,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.getservice = async (req, res) => {
  try {
    const service = await service.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        service,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.createservice = async (req, res) => {
  try {
    const newservice = await service.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        services: newservice,
      },
    });
  } catch (err){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateservice = async (req, res) => {
  try {
    const service = await service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        service
      },
    });
  } catch (err ){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteservice = async (req, res) => {
  try {
    await service.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err ){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

