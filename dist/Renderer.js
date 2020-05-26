class Renderer {

    renderData(allMoviesData) {
        $(".results").empty()
        const source = $('.main').html()
        const template = Handlebars.compile(source)
        const newHTML = template({ allMoviesData })
        $('.results').append(newHTML)
    }

}
