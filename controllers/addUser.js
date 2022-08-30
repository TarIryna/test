const {User} = require('../model')

const addUser = async (req, res) => {
  const { name, surname, age, email } = req.query;
  const user = new User({name, surname, age, email});
  await user.save();
  res.status(200).json({
    status: 'success',
    data: {
      message: "Done"
    },
  });
  }

module.exports = addUser;