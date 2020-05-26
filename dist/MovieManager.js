class MovieManager {

  constructor() {

    this.movies = []

  }

  async getMovies(title) {
    
    const movie = await $.get(`/movies/${title}`)
    const isExist = this.movies.find(t => t.title === title)
    if (isExist) {
      return
    }
    else {
      this.movies.push(movie)
    }
    console.log(this.movies)
  }

}