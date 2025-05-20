import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('halo dunia');
})

app.get('/about', (req, res) => {
    res.send('ini halaman about');
})

app.post('/submit', (req, res) => {
    res.send('ini aku kirim judul');
})

app.listen(3000, () => {
    console.log("server berjalan di http://localhost:3000")
})
