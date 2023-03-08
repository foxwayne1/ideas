const express = require('express')
const ideasRoutes = require('./routes/ideas.routes')

const app = express()

app.use('/', ideasRoutes)

app.listen(3000, () => {
  console.log(`listening at http://localhost:3000`)
})
