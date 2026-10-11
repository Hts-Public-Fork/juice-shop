// HTSOne Security Gate block-mode test file. Deliberately vulnerable; removed after the test (2026-10-11).
import { type Request, type Response } from 'express'
import { exec } from 'child_process'
import * as models from '../models/index'

module.exports = function htsoneGateBlockTest () {
  return (req: Request, res: Response) => {
    models.sequelize.query('SELECT * FROM Users WHERE email = \'' + req.query.email + '\'')
      .then((rows: any) => res.json(rows))
    exec('ping -c 1 ' + req.query.host, (_err, out) => res.send(out))
    res.send(eval(String(req.query.expr)))
  }
}
