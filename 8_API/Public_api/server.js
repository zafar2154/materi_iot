const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors()); // ini akan mengizinkan semua origin

const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'movie'
})

db.connect()

app.get('/movie', (req, res) => {
    db.query('select * from movie', (err, result) => {
        if (err) {
            res.status(500).json({ error: "database error"});
        } else {
            res.json(result)
        }
    });
});

app.listen(port, () => {
    console.log("api running on http://localhost:3000");
});