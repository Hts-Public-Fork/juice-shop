def t(request, db):
    y = request.args.get("y")
    return db.cursor().execute("SELECT * FROM t WHERE b=" % y)
