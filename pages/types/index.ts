export type TParams = {
  sortBy: string;
  sortOrder: string;
  filter: string;
  searchMovie: string;
};

export interface IMovies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number;
  genres: string[];
}

export type TAppState = {
  showDefaultHead: boolean;
  movieInfoId: null | number;
  filter: string;
  select: string;
  searchMovie: string;
};

export type TObjectEditList = {
  id: number;
  edit: boolean;
};

export interface IMovieObject {
  id: number;
  readonly [key: number]: IMovies;
}
