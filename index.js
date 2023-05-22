const express = require('express');
const cors = require('cors');
const port = 5000;
const locations = require('./data/locations.json')

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running');
})

app.get('/locations', (req, res) => {
    res.send(locations)
})

app.listen(port, () => {
    console.log(`server running on this port ${port}`)
})