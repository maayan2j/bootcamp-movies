class MovieManager {

  constructor() {

    this.movies = []
    this.favoriteMovies = []
  }

  async getMovies(title) {
    
    const movies = await $.get(`/movies/${title}`)
    console.log(movies)
    // const isExist = this.movies.find(t => t.title === title)
    // if (isExist) {
    //   return
    // }
    // else {
    this.movies = movies
    //  }
    console.log(this.movies)
  }


  async getMoviesFromDB() {
    const moviesDB = await $.get('/movies ')
    this.favoriteMovies = moviesDB
  }

  async saveMovie(movieName) {// 
    
    const moviesFromFavorites = this.cityData.find(c => m.title == movieName)
    const data = await $.post(`/movie`, moviesFromFavorites)

  }

}