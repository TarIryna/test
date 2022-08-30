const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const csvdata = require('csvdata')

const fetchData = async (req, res) => {
  const url = 'https://reqres.in/api/users'
  const options = {
    method: 'GET'
  }
  const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e => console.log(e))

  csvdata.write('./users.csv', response.data, { header: 'id,email,first_name,last_name' })
  res.json(response.data)
}

module.exports = fetchData
