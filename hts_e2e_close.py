def q(request, db):
    x = request.args.get("x")
    return db.cursor().execute("SELECT * FROM t WHERE a=" % x)
