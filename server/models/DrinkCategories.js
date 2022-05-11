const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const DrinkCategories = mongoose.model('DrinkCategories', categorySchema);

module.exports = DrinkCategories;