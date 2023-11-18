/* eslint-disable no-unreachable */
import React, { Component } from "react";
import Movie from "../components/Movie";

export default class Movies extends Component {
  state = {
    movies: [
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
      { id: 1, name: "John Wick Parabellium", genre: "Action", year: 2022, image: "https://shorturl.at/hpDHX" },
    ],
  };
  render() {
    return (
      <div className="movies grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-4 md:px-12 md:py-3 ">
        {this.state.movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              genre={movie.genre}
              year={movie.year}
              image={movie.image}
            />
          );
        })}
      </div>
    );
  }
}
