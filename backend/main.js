require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { sign, verify } = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: "react-app_db"
});
db.connect();


app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("login started");

    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            console.log(err);
        } 
        else if (Object.keys(result).length > 0) {
            const jwt = sign({ username: result[0].username, id: result[0].user_id },process.env.JWT_KEY); // , { expiresIn: '1h' })
            console.log("login successful, generated jwt: "+jwt);
            res.send(jwt);
        }
        else {
            res.status(422).send('Incorrect Username and/or Password!');
            console.log("login failed, wrong password");
        }
    });
});

app.post("/api/check", (req, res) => {
    const jwt = req.body.jwt;
    console.log("check started");

    if (!jwt) {
        res.status(422).send('no jwt');
        console.log("no jwt")
    }
    try {
        const checked = verify(jwt, process.env.JWT_KEY);
        console.log("jwt checked: "+checked.iat); 
        res.send("k");
    } 
    catch (err) {
        res.status(201).send('wrong jwt');
        console.log("wrong jwt");
    } 
});


app.listen(8080, () => {
    console.log('server running at 8080');
});


