const express = require('express');
const router = express.Router();

// const mongoose = require('mongoose');
const Movie = require('../models/movies');

router.get('/lastMovies', (req, res, next) => {
    Movie.find((err, data) => {
        console.log(err, data);
        if (err) return next(err);
        res.json(data);
    })
});

module.exports = router;