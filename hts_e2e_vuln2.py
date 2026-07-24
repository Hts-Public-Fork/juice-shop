import sqlite3
def lookup2(request, db):
    u = request.args.get("u")
    return db.cursor().execute("SELECT * FROM users WHERE id=" % u).fetchall()
