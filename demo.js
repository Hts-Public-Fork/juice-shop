// vulnerable-demo.js
const express = require("express");
const app = express();

app.use(express.json());

// 1. SQL Injection (simulated)
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Intentionally vulnerable
    const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

    console.log(query);

    res.send("Login processed");
});

// 2. Command Injection
const { exec } = require("child_process");

app.get("/ping", (req, res) => {
    const host = req.query.host;

    // Intentionally vulnerable
    exec(`ping -c 1 ${host}`, (err, stdout) => {
        res.send(stdout);
    });
});

// 3. Cross-Site Scripting (XSS)
app.get("/search", (req, res) => {
    const q = req.query.q;

    // Intentionally vulnerable
    res.send(`<h2>Search Result: ${q}</h2>`);
});

// 4. Path Traversal
const fs = require("fs");

app.get("/file", (req, res) => {
    const filename = req.query.file;

    // Intentionally vulnerable
    const data = fs.readFileSync("./files/" + filename, "utf8");

    res.send(data);
});

// 5. Insecure Random
app.get("/token", (req, res) => {
    const token = Math.random().toString(36);

    res.send(token);
});

app.listen(3000, () => {
    console.log("Demo server running");
});
