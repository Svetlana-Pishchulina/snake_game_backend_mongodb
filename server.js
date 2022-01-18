const mongoose = require('mongoose')
require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT
const DB_HOST = process.env.DB_HOST

mongoose
  .connect(`${DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection successful')
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port`)
    })
  })
  .catch((err) => {
    console.log(err.message)
    process.exit(1)
  })
