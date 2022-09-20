//import packages
const express = require('express')
const router = express.Router()

//create a get request
router.get('/', (req, res) => {
  res.send('')
})

//nested controllers
router.post('/', (req, res) => {
  res.render('')
})
// Export module
module.exports = router
