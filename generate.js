// const jest = require('jest')
// jest.mock('node-fetch')
// import fetch from 'node-fetch'
// const {Response} = jest.requireActual('node-fetch')

const generate = async () => {
  const promise = await fetch('https://reqres.in/api/users')

  console.log(promise)
}
generate()
