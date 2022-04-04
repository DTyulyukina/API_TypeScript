import {IMovieObject} from "types";
import {EAsyncMovieActionStatus} from "../actions";

type TAddMovie = {
  type: EAsyncMovieActionStatus.ADD_MOVIE;
  movies: IMovieObject;
};

type TDeleteMovie = {
  type: EAsyncMovieActionStatus.DELETE_MOVIE;
  movies: IMovieObject;
};

type TEditMovie = {
  type: EAsyncMovieActionStatus.EDIT_MOVIE;
  movies: IMovieObject;
};

type TSetMovie = {
  type: EAsyncMovieActionStatus.SET_MOVIE;
  movies: IMovieObject;
};

type TActionMovies = TAddMovie | TDeleteMovie | TEditMovie | TSetMovie;

export default function reducer(state = [], action: TActionMovies) {
  switch (action.type) {
    case EAsyncMovieActionStatus.SET_MOVIE:
      return action.movies;

    default:
      return state;
  }
}
