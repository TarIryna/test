const {User} = require('../model');

const findByMail = async (req, res) => {
    const { email} = req.query
    const result =  await User.find({email}, {name: 1, surname: 1, _id: 0});
    const textResult = result.map(el => `${el.name} ${el.surname}`)
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: textResult
      },
    })
  }
module.exports = findByMail;