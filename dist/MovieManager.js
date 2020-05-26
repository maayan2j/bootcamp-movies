class MovieManager {

  constructor() {

    this.movieData = []

  }

  async getMovieData(title) {
    
    const movie = await $.get(`/movies/${title}`)
    const isExist = this.movieData.find(t => t.title === title)
    if (isExist) {
      return
    }
    else {
      this.movieData.push(movie)
    }
  }

}