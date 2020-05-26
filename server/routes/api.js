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
    //console.log(movieData)
       const movie = {
        id : movieData.Search[0].imdbID,
        title : movieData.Search[0].Title,
        moviePic : movieData.Search[0].Poster,
        year : movieData.Search[0].Year
    }
    console.log(movie)
    response.send(movie)
})









module.exports = router
