const mongoose = require('mongoose');

const { Schema } = mongoose;

const drinkSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  ingredients: {
      type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'DrinkCategories',
    required: true
  },
  createdAt: String
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;