// const Movie = require('../model/model')

const movies = [
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
]

const resolvers = {
    movies: () => {
        return movies
    },
    addMovie: (args) => {
        return {
            name: args.name,
        }
    }
}

module.exports = resolvers