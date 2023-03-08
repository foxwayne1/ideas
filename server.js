const express = require('express')
const ideasRoutes = require('./routes/ideas.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' })
})
app.use('/api/ideas', ideasRoutes)

app.listen(3000, () => {
  console.log(`listening at http://localhost:3000`)
})
