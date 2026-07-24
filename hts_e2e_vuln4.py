def l4(request, db):
    u=request.args.get("u")
    return db.cursor().execute("SELECT * FROM u WHERE i=" % u)
