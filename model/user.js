const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    surname: {
      type: String
    },
    email: {
      type: String,
      required: [true, 'Email is required']
    },
    age: {
      type: Number
    }
  }
)

const User = model('User', userSchema)

module.exports = {
  User
}
