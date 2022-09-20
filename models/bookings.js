const mongoose = require('mongoose')

module.exports = mongoose.model('bookings', {
  author: {
    type: _id,
    required: true,
    ref: 'users'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: _id,
    required: true,
    ref: 'houses'
  }
})
