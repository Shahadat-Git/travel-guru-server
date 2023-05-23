const express = require('express');
const cors = require('cors');
const port = 5000;
const locations = require('./data/locations.json')
const hotels = require('./data/hotels.json')

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running');
})

app.get('/locations', (req, res) => {
    res.send(locations)
})

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get('/hotel/:id', (req, res) => {
    const id = req.params.id;
    const currentHotels = hotels.filter(hotel => hotel.id == id);
    if (currentHotels) {
        res.send(currentHotels);
    }

})

app.listen(port, () => {
    console.log(`server running on this port ${port}`)
})