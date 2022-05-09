const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
  restaurantId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

module.exports = restaurantSchema;