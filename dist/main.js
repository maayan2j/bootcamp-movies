const movieManager = new MovieManager()
const renderer = new Renderer()


// async function loadPage() {
//     await model.getDataFromDB()
//     const allCityData = model.cityData
//     render.renderData(allCityData)
// }
// loadPage()


async function handleSearch() {
    const movieName = $('#movie').val().trim()
    await movieManager.getMovieData(movieName)
    renderer.renderData(movieManager.movieData)
}

$('#button').on("click", handleSearch)
