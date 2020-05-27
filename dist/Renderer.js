class Renderer {
    renderData(data) {
        $(".results").empty()
        const source = $('.main').html()
        const template = Handlebars.compile(source)
        //data = data[0]
        const newHTML = template({data})
        console.log(data)
        $('.results').append(newHTML)
    }
}