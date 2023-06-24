const express = require('express');
const gearListController = require('../controllers/gearListController');
const router = express.Router();

router
  .route('/')
  .get(gearListController.getAllGearLists)
  .post(gearListController.createGearList);

router
  .route('/:id')
  .get(gearListController.getGearList)
  .patch(gearListController.updateGearList)
  .delete(gearListController.deleteGearList);

module.exports = router;
