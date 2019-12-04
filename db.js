const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5435/postgres'
const db = new Sequelize(databaseUrl)

db.sync()
  .then(() => console.log('this is my football-api'))
  .catch(console.error)

module.exports = db