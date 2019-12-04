const express = require('express')
const teamRouter = require('./team/router')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(teamRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))