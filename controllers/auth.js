//import packages
const express = require('express')
const router = express.Router()

//create a get request
router.get('/', (req, res) => {
  res.send('Hello from login')
})

// nested controllers
router.get('/', (req, res) => {
  res.render('../views/login')
})
router.get('/', (req, res) => {
  res.render('../views/signup')
})
router.post('/', (req, res) => {
  res.render('../views/login')
})
router.post('/', (req, res) => {
  res.render('../views/signup')
})
router.get('/', (req, res) => {
  res.render('../views/logout')
})

// Export module
module.exports = router
