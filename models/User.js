const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  highestScore: Number,
})

module.exports = mongoose.model('User', userSchema)
