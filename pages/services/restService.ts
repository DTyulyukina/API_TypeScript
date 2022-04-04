import onError from "./onError";

import {IMovies} from "../types";

const serverPath = "http://localhost:4000";

type geIMoviesFromServerParams = {
  sortBy: string;
  sortOrder: string;
  filter: string;
  searchMovie: string;
};

export class RestService {
  static async geIMoviesFromServer({
    sortBy,
    sortOrder = "desc",
    filter,
    searchMovie,
  }: geIMoviesFromServerParams) {
    let movies: IMovies[] = [];

    let sort = sortBy.replace(" ", "_");

    let paramFilter = filter === "ALL" ? "" : `&filter=${filter.toLowerCase()}`;

    let search = searchMovie === "" ? "" : `&search=${searchMovie}&searchBy=title`;

    try {
      let promise = await fetch(
        `${serverPath}/movies?sortBy=${sort}&sortOrder=${sortOrder}${search}${paramFilter}`
      );
      let data = await promise.json();
      movies = data.data;
    } catch (error) {
      onError(error);
      movies = [];
    }

    return movies;
  }

  static async updateMoviesFromServer(movie: IMovies) {
    let movies: IMovies[] = [];

    const params = {
      id: movie.id,
      title: movie.title,
      release_date: movie.releaseDate,
      poster_path: movie.movieUrl,
      overview: movie.overview,
      runtime: Number(movie.runtime),
      genres: [movie.genre],
    };

    try {
      let promise = await fetch(`${serverPath}/movies`, {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      let movie = await promise.json();
      movies = [movie];
    } catch (error) {
      onError(error);
      movies = [];
    }

    return movies;
  }

  static async addMoviesFromServer(movie: IMovies) {
    let movies: IMovies[] = [];

    const params = {
      title: movie.title,
      release_date: movie.releaseDate,
      poster_path: movie.movieUrl,
      overview: movie.overview,
      runtime: Number(movie.runtime),
      genres: [movie.genre],
    };

    try {
      let promise = await fetch(`${serverPath}/movies`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      let movie = await promise.json();
      movies = [movie];
    } catch (error) {
      onError(error);
      movies = [];
    }

    return movies;
  }

  static async deleteMoviesFromServer(id: number) {
    let movies: IMovies[] = [];

    try {
      await fetch(`${serverPath}/movies/${id}`, {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      onError(error);
    }

    return movies;
  }
}
