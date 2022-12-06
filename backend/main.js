const dotenv = require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { sign, verify } = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "react-app_db"
});
db.connect();


app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            console.log(err);
        } 
        else if (Object.keys(result).length > 0) {
            const jwt = sign({ username: result[0].username, id: result[0].user_id },process.env.SECRET_KEY); // , { expiresIn: '1h' })
            console.log(jwt);
            res.send(jwt);
        }
        else {
            res.status(422).send('Incorrect Username and/or Password!');
        }
    });
});

app.post("/api/check", (req, res) => {
    const jwt = req.body.jwt;
    if (!jwt) {
        res.status(422).send('no jwt');
    }
    try {
        const checked = verify(jwt, process.env.SECRET_KEY);
        console.log(checked); 
        res.send("k");
    } 
    catch (err) {
        res.status(422).send('wrong jwt');
    } 
    // TODO: FIX IT! 
});

app.listen(8080, () => {
    console.log('server running at 8080');
});


