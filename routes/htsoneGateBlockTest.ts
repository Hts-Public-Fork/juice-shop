// HTSOne Security Gate block-mode test file (fixed version). Removed after the test (2026-10-11).
import { type Request, type Response } from 'express'
import * as models from '../models/index'

module.exports = function htsoneGateBlockTest () {
  return (req: Request, res: Response) => {
    models.sequelize.query('SELECT * FROM Users WHERE email = ?', { replacements: [String(req.query.email)] })
      .then((rows: any) => res.json(rows))
  }
}
