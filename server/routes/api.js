const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')
const urllib = require('urllib')

router.get('/sanity', function (req, res) {
    console.log("Ok")
    res.end()
})

router.get('/movies/:title', async function (request, response) {
    const title = request.params.title
    console.log(title)
    const data = await urllib.request(`http://www.omdbapi.com/?apikey=a2e2ca53&s=${title}`)
    const movieData = JSON.parse(data.data)
    console.log(movieData)
    const movieAll = movieData.Search
    //    const movie = {
    //     id : movieData.Search[0].imdbID,
    //     title : movieData.Search[0].Title,
    //     moviePic : movieData.Search[0].Poster,
    //     year : movieData.Search[0].Year
    // }
    // console.log(movie)
    response.send(movieAll)
})


router.post('/movie', async function (request, response) {
    const movieSave = await request.body
    let movie = new Movie({
        id : String,
        title : String,
        moviePic : String,
        year : String
    })

    console.log(movie)
    movie.save()
    response.end()

})


router.get('/movie', async function (request, response) {
    const movieFromDB = await Movie.find({})
    response.send(moviesFromDB)
})




module.exports = router



