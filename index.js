const express = require('express');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: false }));

connectDB(app, port);

app.get('/ping', (req, res) => {
    res.status(200).json({message: 'pong'});
});

