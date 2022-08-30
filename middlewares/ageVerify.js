const { PreconditionFailed } = require('http-errors')

const ageVerify = async (req, res, next) => {
  const { age } = req.query
  try {
    if (age <= 18) {
      throw new PreconditionFailed('Your age is less than 18')
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = ageVerify
