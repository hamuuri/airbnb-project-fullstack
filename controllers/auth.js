//import packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

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
router.post('/login', async (req, res, next) => {
  try {
    let findUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    console.log(req.body)
    console.log(findUser)

    if (findUser) {
      req.login(findUser, error => {
        if (error) {
          throw new Error(error)
        } else {
          res.redirect('/houses')
        }
      })
    } else {
      throw new Error('Email or password might be wrong, try again')
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    let foundUsers = await Users.find({
      email: req.body.email
    })

    if (foundUsers.length > 0) {
      throw new Error('User with this email already exists')
    }
  } catch (err) {
    next(err)
    return
  }

  const newUser = Users.create(req.body)
  req.login(newUser, error => {
    if (!error) res.redirect('/houses')
  })
})

router.get('/logout', (req, res, next) => {
  try {
    req.logout(err => {
      if (err) {
        throw err
      }

      req.session.destroy(err => {
        if (err) {
          throw err
        }
        res.clearCookie('connect.sid')
      })
    })

    res.redirect('/auth/login')
  } catch (err) {
    next(err)
  }
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
