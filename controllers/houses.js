//import packages
const express = require('express')
const router = express.Router()

//create a get request
// router.get('/', (req, res) => {
//   res.send('Hello from houses')
// })

//nested controller
router.get('/', (req, res) => {
  res.render('houses/list')
})
router.get('/create', (req, res) => {
  res.render('houses/create')
})
router.get('/:id', (req, res) => {
  res.render('houses/one')
})
router.get('/:id/edit', (req, res) => {
  res.render('houses/edit')
})
router.post('/', (req, res) => {})
router.patch('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})

// Export module
module.exports = router
