const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kki_asv'
})

connection.connect(err => {
    if (err) {
        console.log('error connecting:', err.stack)
    } else{
    console.log('connected');
}})

app.get('/', (req, res) => {
    connection.query('select * from geotag', (err, results) => {
        if (err) throw err;
        res.json(results)
    })
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})