const mongoose = require('mongoose');
const Item = require('./itemModel');

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

const catagorySchema = new mongoose.Schema({
  catagory_name: String,
  items: [itemSchema]
});

// catagorySchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'items',
//     select: '-__v'
//   });
//   next();
// });

const Catagory = mongoose.model('Catagory', catagorySchema);

module.exports = Catagory;
