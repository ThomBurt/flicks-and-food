const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const experienceSchema = new Schema(
    {
        movie: {
            type: String,
            required: true
        },

        meal: {
            type: String,
            required: true
        },

        drink: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
          getters: true
        }
    }
);

const Experience = model('Experience', experienceSchema);

model.exports = Experience;