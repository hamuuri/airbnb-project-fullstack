//import packages
const express = require('express')
const router = express.Router()

//create a get request
// router.get('/', (req, res) => {
//   res.send('Hello from profile')
// })

//nested controllers
router.get('/', (req, res) => {
  res.render('profile')
})
router.patch('/', (req, res) => {
  res.render('')
})

// Export module
module.exports = router
