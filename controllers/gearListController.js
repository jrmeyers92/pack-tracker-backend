const GearList = require('../models/gearListModel');
const factory = require('./handlerFactory');

exports.getAllGearLists = factory.getAll(GearList);
exports.getGearList = factory.getOne(GearList);
exports.createGearList = factory.createOne(GearList);
exports.updateGearList = factory.updateOne(GearList);
exports.deleteGearList = factory.deleteOne(GearList);
