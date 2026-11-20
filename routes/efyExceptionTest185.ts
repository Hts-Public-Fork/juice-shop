// BUG-185 exception flow e2e test file. Fake values only.
const FAKE_AWS_ACCESS_KEY_ID = 'AKIAIOSFODNN7EXAMPLE'
const FAKE_AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'

export function lookupUser (db: any, name: string) {
  return db.query("SELECT * FROM Users WHERE email = '" + name + "'")
}
