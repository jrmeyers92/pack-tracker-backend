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

const catagorySchema = new mongoose.Schema(
  {
    catagory_name: String,
    items: [itemSchema]
  },
  {
    toJSON: { virtuals: true }
  }
);

// userSchema.virtual('domain').get(function() {
//   return this.email.slice(this.email.indexOf('@') + 1);
// });

catagorySchema.virtual('totalPrice').get(function() {
  return this.items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.price);
  }, 0);
});

catagorySchema.virtual('totalWeight').get(function() {
  return this.items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.weight);
  }, 0);
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
