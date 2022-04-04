import reducer from "../reducers/movieReducer";

import {EAsyncMovieActionStatus} from "../actions/movieActions";

describe("Movie reducer", () => {
  test("should return the empty initial state", () => {
    expect(reducer([], {})).toEqual([]);
  });

  test("should return the state before set in state movie", () => {
    const initialState = [];

    const movie = {
      title: "La La Land",
      tagline: "Here's to the fools who dream.",
      vote_average: 7.9,
      vote_count: 6782,
      release_date: "2016-12-29",
      poster_path: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      overview: "",
      budget: 3150000,
      revenue: 445435700,
      runtime: 128,
      genres: ["Comedy", "Drama", "Romance"],
      id: 313369,
    };

    const action = {
      type: EAsyncMovieActionStatus.SET_MOVIE,
      movies: {
        title: "La La Land",
        tagline: "Here's to the fools who dream.",
        vote_average: 7.9,
        vote_count: 6782,
        release_date: "2016-12-29",
        poster_path: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
        overview: "",
        budget: 3150000,
        revenue: 445435700,
        runtime: 128,
        genres: ["Comedy", "Drama", "Romance"],
        id: 313369,
      },
    };

    const data = reducer(initialState, action);
    expect(data).toEqual(movie);
  });

  test("should return the state before add in state movie", () => {
    const initialState = [];

    const action = {
      type: EAsyncMovieActionStatus.ADD_MOVIE,
      movies: {
        title: "La La Land",
        tagline: "Here's to the fools who dream.",
        vote_average: 7.9,
        vote_count: 6782,
        release_date: "2016-12-29",
        poster_path: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
        overview: "",
        budget: 3150000,
        revenue: 445435700,
        runtime: 128,
        genres: ["Comedy", "Drama", "Romance"],
        id: 313369,
      },
    };

    const data = reducer(initialState, action);
    expect(data).toEqual(initialState);
  });

  test("should return the state before update movie", () => {
    const initialState = [];

    const action = {
      type: EAsyncMovieActionStatus.EDIT_MOVIE,
      movies: {
        title: "La La Land",
        tagline: "Here's to the fools who dream.",
        vote_average: 7.9,
        vote_count: 6782,
        release_date: "2016-12-29",
        poster_path: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
        overview: "",
        budget: 3150000,
        revenue: 445435700,
        runtime: 128,
        genres: ["Comedy", "Drama", "Romance"],
        id: 313369,
      },
    };

    const data = reducer(initialState, action);
    expect(data).toEqual(initialState);
  });

  test("should return the state before delete movie", () => {
    const action = {
      type: EAsyncMovieActionStatus.DELETE_MOVIE,
      movies: {
        title: "La La Land",
        tagline: "Here's to the fools who dream.",
        vote_average: 7.9,
        vote_count: 6782,
        release_date: "2016-12-29",
        poster_path: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
        overview: "",
        budget: 3150000,
        revenue: 445435700,
        runtime: 128,
        genres: ["Comedy", "Drama", "Romance"],
        id: 313369,
      },
    };
    expect(reducer({}, action)).toBeDefined();
  });
});
