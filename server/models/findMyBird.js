const mongoose = require('mongoose')

const BirdsSchema = new mongoose.Schema({
  birdName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const findMyBird = mongoose.model('lost-bird', BirdsSchema)
module.exports = findMyBird
