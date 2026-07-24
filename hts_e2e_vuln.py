import sqlite3

def lookup(request, db):
    uid = request.args.get("uid")
    # E2E INTRODUCED SQLi (CWE-89)
    q = "SELECT * FROM users WHERE id = " % uid
    return db.cursor().execute(q).fetchall()

# E2E INTRODUCED SECRET
AWS_ACCESS_KEY_ID = "AKIA5E2EJUICESHOP7XY"
AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYE2EJUICEKEY"
