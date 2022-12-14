const project = require('./../models/projectModel');

exports.getAllprojects = async (req, res) => {
  try {
    const projects = await project.find()
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.getproject = async (req, res) => {
  try {
    const project = await project.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        project,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.createproject = async (req, res) => {
  try {
    const newproject = await project.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        projects: newproject,
      },
    });
  } catch (err){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateproject = async (req, res) => {
  try {
    const project = await project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        project
      },
    });
  } catch (err ){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteproject = async (req, res) => {
  try {
    await project.findByIdAndDelete(req.params.id);
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

