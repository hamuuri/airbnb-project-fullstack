const mongoose = require('mongoose')

module.exports = mongoose.model('bookings', {
  author: {
    type: ObjectId,
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
    type: ObjectId,
    required: true,
    ref: 'houses'
  }
})
