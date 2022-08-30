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
// router.get('/fetch', async (req, res) => {
//   const url = 'https://reqres.in/api/users'
//   const options = {
//     method: 'GET'
//   }
//   const response = await fetch(url, options)
//     .then(res => res.json())
//     .catch(e => console.log(e))
//   console.log('RESPONSE: ', response)
//   res.json(response)
// })

module.exports = router
