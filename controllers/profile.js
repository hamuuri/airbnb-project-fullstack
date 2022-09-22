//import packages
const express = require('express')
const router = express.Router()

//create a get request
// router.get('/', (req, res) => {
//   res.send('Hello from profile')
// })

//nested controllers
router.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('profile', { user: req.user })
  }
})
router.patch('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('profile', { user: req.user })
  }
})

// Export module
module.exports = router
