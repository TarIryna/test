const express = require('express')
const router = express.Router()
const { ctrlWrapper, ageVerify } = require('../middlewares')
const {
  displayName,
  addUser,
  findByMail,
  fetchData
} = require('../controllers')

router.post('/greeting', ageVerify, ctrlWrapper(displayName))
router.post('/add', ageVerify, ctrlWrapper(addUser))
router.get('/email', ctrlWrapper(findByMail))
router.get('/fetch', ctrlWrapper(fetchData))

module.exports = router
