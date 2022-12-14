const product = require('./../models/productModel');

exports.getAllproducts = async (req, res) => {
  try {
    const products = await product.find()
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.getproduct = async (req, res) => {
  try {
    const product = await product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

exports.createproduct = async (req, res) => {
  try {
    const newproduct = await product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        products: newproduct,
      },
    });
  } catch (err){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateproduct = async (req, res) => {
  try {
    const product = await product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        product
      },
    });
  } catch (err ){
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
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

