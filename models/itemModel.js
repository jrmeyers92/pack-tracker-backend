const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  weight: Number,
  unitOfMeasure: {
    type: String,
    enum: ['oz', 'lb', 'kg', 'g']
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
