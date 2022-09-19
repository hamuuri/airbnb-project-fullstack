//import packages
const express = require('express')
const router = express.Router()

//create a get request
router.get('/', (req, res) => {
  res.send('Hello from bookings')
})

//nested controllers
router.post('/', (req, res) => {
  res.render('../views/')
})

// Export module
module.exports = router
