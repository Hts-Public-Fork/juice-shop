const express = require('express')
const { sequelize } = require('../models')
module.exports = function bug185Lookup () {
  return (req, res) => {
    const q = 'SELECT * FROM Users WHERE email = "' + req.query.email + '"'
    sequelize.query(q).then(([rows]) => res.json(rows))
    res.send('<div>' + req.query.name + '</div>')
  }
}
