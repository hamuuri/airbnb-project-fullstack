//import packages
const express = require('express')
const router = express.Router()

//create a get request
router.get('/', (req, res) => {
  res.send('Hello from profile')
})

// Export module
module.exports = router
