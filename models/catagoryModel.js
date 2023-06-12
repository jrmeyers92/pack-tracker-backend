const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
  name: String,
  items: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'item'
    }
  ]
});

const Catagory = mongoose.model('Catagory', catagorySchema);

module.exports = Catagory;
