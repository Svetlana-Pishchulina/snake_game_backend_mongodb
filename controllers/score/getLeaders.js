const { NotFound } = require('http-errors')
const User = require('../../models/User')

const getLeaders = async (req, res, next) => {
  const allUsers = await User.find({})
  const allUsersDecr = await allUsers.sort(function (a, b) {
    if (a.highestScore > b.highestScore) {
      return -1
    }
    if (a.highestScore < b.highestScore) {
      return 1
    }
    if ((a.highestScore = b.highestScore)) {
      return 0
    }
  })
  const leaders = await allUsersDecr.slice(0, 3).map((leader) => {
    return { name: leader.name, score: leader.highestScore }
  })

  res.json({
    status: 'success',
    code: 200,
    message: 'leaders found',
    data: { result: leaders },
  })
}

module.exports = getLeaders
