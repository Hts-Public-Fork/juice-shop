// BUG-185 approval e2e test file (temporary, PR will be closed)
import { type Request, type Response } from 'express'
import { sequelize } from '../models'
export function approveTest185 () {
  return async (req: Request, res: Response) => {
    const rows = await sequelize.query('SELECT * FROM Users WHERE email = \'' + req.query.email + '\'')
    res.json(rows)
  }
}
