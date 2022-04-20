const mongoose = require('mongoose')

const SellSchema = new mongoose.Schema({
  birdName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})

const sell = mongoose.model('bird-sell', SellSchema)
module.exports = sell
