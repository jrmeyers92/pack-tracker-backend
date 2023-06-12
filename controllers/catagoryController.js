const Catagory = require('../models/catagoryModel');
const factory = require('./handlerFactory');

exports.getAllCatagories = factory.getAll(Catagory);
exports.getCatagory = factory.getOne(Catagory);
exports.createCatagory = factory.createOne(Catagory);
exports.updateCatagory = factory.updateOne(Catagory);
exports.deleteCatagory = factory.deleteOne(Catagory);
