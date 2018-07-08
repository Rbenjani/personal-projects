const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {        
        cb(null, req.body.id + '.jpg') //Appending .jpg
    }
});

var upload = multer({ storage: storage })
const Movie = require('../models/movies');

router.get('/lastMovies', (req, res, next) => {
    Movie.find((err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

router.get('/movie/:id', (req, res, next) => {
    Movie.findOne({ id: req.params.id }, (err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

router.post('/newMovie', (req, res, next) => {
    req.body.id = Math.ceil(Math.random() * 1000000);
    Movie.create(req.body, (err, movie) => {
        if (err) return next(err);
        res.json(movie);
    });
});

router.post('/savePoster', upload.single('poster'), (req, res, next) => {
    res.json({msg: 'Poster subido correctamenter'});
});

module.exports = router;