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
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('houses/create', { user: req.user })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let house = await Houses.findById(req.params.id).populate('host')

    let loggedUser = req.user
    res.render('houses/one', { loggedUser, house })
  } catch (error) {
    next(error)
  }
})

router.get('/:id/edit', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('houses/:id/edit', { user: req.user })
  }
})

router.post('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('houses', { user: req.user })
  }
})

router.patch('/:id', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('houses/:id', { user: req.user })
  }
})

router.delete('/:id', (req, res) => {})

// Export module
module.exports = router
