const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    id: { required: true, type: String },
    title: { required: true, type: String },
    originalTitle: String,
    runtime: Number,
    year: Number,
    addDate: {type: Date, default: Date.now},
    poster: String
});

// Export function to create "Movie" model class
module.exports = mongoose.model('Movie', movieSchema, 'film');