const express = require('express')
const router = express.Router()
const { ctrlWrapper, ageVerify } = require('../middlewares')
const {
  displayName,
  addUser,
  findByMail
} = require('../controllers')

router.post('/greeting', ageVerify, ctrlWrapper(displayName))
router.post('/add', ageVerify, ctrlWrapper(addUser))
router.get('/email', ctrlWrapper(findByMail))

module.exports = router
