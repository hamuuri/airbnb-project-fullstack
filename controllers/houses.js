//import packages
const express = require('express')
const router = express.Router()

//create a get request
router.get('/', (req, res) => {
  res.send('Hello from houses')
})

//nested controller
router.get('/', (req, res) => {
  res.render('../views')
})
router.get('/create', (req, res) => {
  res.render('../views')
})
router.get('/:id', (req, res) => {
  res.render('../views')
})
router.get('/:id/edit', (req, res) => {
  res.render('../views')
})
router.post('/', (req, res) => {
  res.render('../views')
})
router.patch('/:id', (req, res) => {
  res.render('../views')
})
router.delete('/:id', (req, res) => {
  res.render('../views')
})

// Export module
module.exports = router
