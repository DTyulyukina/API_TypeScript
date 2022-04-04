import {RestService} from "../services/restService";

import {Dispatch} from "react";
import {AnyAction} from "redux";

import {TParams, IMovies, IMovieObject} from "../types";

export enum EAsyncMovieActionStatus {
  SET_MOVIE = "SET_MOVIE",
  ADD_MOVIE = "ADD_MOVIE",
  DELETE_MOVIE = "DELETE_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
  SET_FILTER = "SET_FILTER",
}

export function getMovie(params: TParams) {
  return async (dispatch: Dispatch<AnyAction>) => {
    var movies: IMovieObject = [];
    movies = await RestService.geIMoviesFromServer(params);
    dispatch({
      type: EAsyncMovieActionStatus.SET_MOVIE,
      movies,
    });
  };
}

export function addMovie(movie: IMovies) {
  return async (dispatch: Dispatch<AnyAction>) => {
    var movies: IMovieObject = [];
    movies = await RestService.addMoviesFromServer(movie);
    dispatch({
      type: EAsyncMovieActionStatus.ADD_MOVIE,
      movies,
    });
  };
}

export function deleteMovie(id: number) {
  return async (dispatch: Dispatch<AnyAction>) => {
    var movies: IMovieObject = [];
    movies = await RestService.deleteMoviesFromServer(id);
    dispatch({
      type: EAsyncMovieActionStatus.DELETE_MOVIE,
      movies,
    });
  };
}

export function editMovie(movie: IMovies) {
  return async (dispatch: Dispatch<AnyAction>) => {
    var movies: IMovieObject = [];
    movies = await RestService.updateMoviesFromServer(movie);
    dispatch({
      type: EAsyncMovieActionStatus.EDIT_MOVIE,
      movies,
    });
  };
}

export type TActionMovies =
  | typeof getMovie
  | typeof addMovie
  | typeof deleteMovie
  | typeof editMovie;
