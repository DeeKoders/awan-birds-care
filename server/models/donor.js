const mongoose = require('mongoose')

const DonorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phno: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address:{
        type:String,
        required:true
    }
  })
  
  const donor = mongoose.model('donor-request', DonorSchema)
  module.exports = donor
  