//import packages
const express = require('express')
const router = express.Router()

//create a get request
// router.get('/', (req, res) => {
//   res.send('Hello from bookings')
// })

//nested controllers
router.post('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('bookings', { user: req.user })
  }
})

// Export module
module.exports = router
