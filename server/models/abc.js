const mongoose = require('mongoose')

const BirdsSchema = new mongoose.Schema({
  birdName: {
    type: String,
    required: true,
  },
  temprature: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const abc = mongoose.model('bird-info', BirdsSchema)
module.exports = abc
