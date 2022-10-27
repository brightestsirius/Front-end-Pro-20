fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(data => console.log(data))

fetch(`https://api.chucknorris.io/jokes/categories`)
    .then(response => response.json())
    .then(categories => {
        console.log(categories)

        return fetch(`https://api.chucknorris.io/jokes/random?category=${categories[0]}`)
            .then(response => response.json())
    })
    .then(joke => console.log(joke))

fetch(`https://api.chucknorris.io/jokes/search?query=hello`)
    .then(response => response.json())
    .then(data => console.log(data))