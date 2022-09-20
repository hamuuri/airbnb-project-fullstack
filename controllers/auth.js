//import packages
const express = require('express')
const router = express.Router()

//create a get request
// router.get('/', (req, res) => {
//   res.send('Hello from login')
// })

// nested controllers
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/signup', (req, res) => {
  res.render('signup')
})
router.post('/login', (req, res) => {
  res.render('login')
})
router.post('/signup', (req, res) => {
  res.render('signup')
})
router.get('/logout', (req, res) => {
  res.render('logout')
})
// let foundUser = await users.findOne({
//   email: req.body.email
// })
//
// if (foundUser) {
//   console.log('true')
// } else {
//   users.create(req.body)
// }
// let savedUser =
// Export module
module.exports = router
