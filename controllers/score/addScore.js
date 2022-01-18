const { NotFound } = require('http-errors')
const User = require('../../models/User')

const addScore = async (req, res, next) => {
  const name = req.body.name
  const score = req.body.score

  const user = await User.findOne({ name: name })
  let newUser
  if (!user) {
    newUser = await User.create({ name, highestScore: score })
    res.json({
      status: 'success',
      code: 200,
      message: 'result taken into account',
      data: newUser,
    })
  } else if (user && !user.highestScore) {
    user.highestScore = score
    user.save()
  } else if (user && score > user.highestScore) {
    user.highestScore = score
    user.save()
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'result taken into account',
    data: user,
  })
}

module.exports = addScore
