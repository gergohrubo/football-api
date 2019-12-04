const express = require('express')
const { Router } = express
const Player = require('./model')
const Team = require('../team/model')

const router = new Router()

router.get('/player', (req, res, next) => {
  Player.findAll()
    .then(playerList => res.send(playerList))
    .catch(error => next(error))
})

router.post('/player', (req, res, next) => {
  Player.create(req.body)
    .then(player => res.send(player))
    .catch(error => next(error))
})

router.get('/player/:id', (req, res, next) => {
  const playerID = req.params.id
  Player.findByPk(playerID, { include: [Team] })
    .then(player => res.send(player))
    .catch(error => next(error))
})

module.exports = router