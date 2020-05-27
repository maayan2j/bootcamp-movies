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
    const moviesDB = await $.get('/cities')
    this.favoriteMovies = moviesDB
  }

  // async saveMovie(movieName) {// 
  //   //A saveCity method, sends a city's data as POST request to the /city post route on your server
  //   const cityFromArrayCityData = this.cityData.find(c => c.name == cityName)
  //   const data = await $.post(`/city`, cityFromArrayCityData)

  // }

}