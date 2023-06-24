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

const catagorySchema = new mongoose.Schema(
  {
    catagory_name: String,
    items: [itemSchema]
  },
  {
    toJSON: { virtuals: true }
  }
);

const gearListSchema = new mongoose.Schema(
  {
    gear: [catagorySchema]
  },
  {
    toJSON: { virtuals: true }
  }
);

// userSchema.virtual('domain').get(function() {
//   return this.email.slice(this.email.indexOf('@') + 1);
// });

catagorySchema.virtual('totalCatagoryPrice').get(function() {
  return this.items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.price);
  }, 0);
});

catagorySchema.virtual('totalCatagoryWeight').get(function() {
  return this.items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.weight);
  }, 0);
});

gearListSchema.virtual('totalGearListPrice').get(function() {
  return this.gear.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.totalCatagoryPrice);
  }, 0);
});

gearListSchema.virtual('totalGearListWeight').get(function() {
  return this.gear.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.totalCatagoryWeight);
  }, 0);
});

// catagorySchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'items',
//     select: '-__v'
//   });
//   next();
// });

const GearList = mongoose.model('GearList', gearListSchema);

module.exports = GearList;
