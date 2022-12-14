const Design = require('./../models/designModel');

exports.getAllDesigns = async (req, res) => {
  try {
    const designs = await Design.find()
    res.status(200).json({
      status: 'success',
      results: designs.length,
      data: {
        designs,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.getDesign = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        design,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.createDesign = async (req, res) => {
  try {
    const newDesign = await Design.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        designs: newDesign,
      },
    });
  } catch (err){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateDesign = async (req, res) => {
  try {
    const design = await Design.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        design
      },
    });
  } catch (err ){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteDesign = async (req, res) => {
  try {
    await Design.findByIdAndDelete(req.params.id);
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

