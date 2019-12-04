const express = require('express')
const { Router } = express
const Team = require('./model')

const router = new Router()

router.get('/team', (req, res, next) => {
  Team.findAll()
    .then(teamList => res.send(teamList))
    .catch(error => next(error))
})

router.post('/team', (req, res, next) => {
  Team.create(req.body)
    .then(team => res.send(team))
    .catch(error => next(error))
})

module.exports = router