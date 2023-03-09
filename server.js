const express = require('express')
require('dotenv').config()
const ideasRoutes = require('./routes/ideas.routes')
const PORT = process.env.PORT || 3001
const connectDb = require('./config/db')

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' })
})
app.use('/api/ideas', ideasRoutes)

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
