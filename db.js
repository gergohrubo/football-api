const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5435/postgres'
const db = new Sequelize(databaseUrl)

//when updating rows in the database replace this for one-time use: db.sync({ force: true })
//delete it after one time use otherwise tables will be cleared at each server re-start
//same thing works for the remote database on heroku: commit and push with force: true and then without it, and that resets the database
db.sync({ force: true })
  .then(() => console.log('this is my football-api'))
  .catch(console.error)

module.exports = db