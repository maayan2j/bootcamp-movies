const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({

    id : Number,
    title : String,
    moviePic : String,
    year : Number

})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie