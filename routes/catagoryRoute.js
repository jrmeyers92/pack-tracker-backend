const express = require('express');
const catagoryController = require('../controllers/catagoryController');
const router = express.Router();

router
  .route('/')
  .get(catagoryController.getAllCatagories)
  .post(catagoryController.createCatagory);

router
  .route('/:id')
  .get(catagoryController.getCatagory)
  .patch(catagoryController.updateCatagory)
  .delete(catagoryController.deleteCatagory);

module.exports = router;
