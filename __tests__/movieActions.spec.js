import {
  EAsyncMovieActionStatus,
  getMovie,
  addMovie,
  deleteMovie,
  editMovie,
} from "../actions/movieActions";

import {RestService} from "../services/restService";

jest.mock("../services/restService");

describe("Movie action", () => {
  test("should return before get movie", async () => {
    const search = {
      filter: "DOCUMENTARY",
      sortBy: "release date",
      sortOrder: "desc",
      search: "",
    };

    const expectedAction = {movies: [], type: "SET_MOVIE"};

    RestService.geIMoviesFromServer.mockReturnValue(Promise.resolve([]));

    const dispatchMock = jest.fn();

    await getMovie(search)(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
  });

  test("should return before get movie with param search", async () => {
    const movies = {
      title: "Test movie Add 2",
      release_date: "2021-04-01",
      poster_path: "",
      overview: "run test",
      runtime: 160,
      genres: ["crime"],
    };

    const expectedAction = {
      type: EAsyncMovieActionStatus.SET_MOVIE,
      movies,
    };

    const search = {
      filter: "DOCUMENTARY",
      sortBy: "release date",
      sortOrder: "desc",
      search: "",
    };

    RestService.geIMoviesFromServer.mockReturnValue(Promise.resolve(movies));

    const dispatchMock = jest.fn();

    await getMovie(search)(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
  });

  test("should return before add movie", async () => {
    const movies = {
      title: "Test movie Add 3",
      release_date: "2021-04-07",
      poster_path: "",
      overview: "run test",
      runtime: 160,
      genres: [],
    };

    const expectedAction = {
      type: EAsyncMovieActionStatus.ADD_MOVIE,
      movies,
    };

    RestService.addMoviesFromServer.mockReturnValue(Promise.resolve(movies));

    const dispatchMock = jest.fn();

    await addMovie(movies)(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
  });

  test("should return before edit movie", async () => {
    const movies = {
      title: "Test movie Add 3",
      release_date: "2021-04-07",
      poster_path: "",
      overview: "run test",
      runtime: 160,
      genres: [],
    };

    const expectedAction = {
      type: EAsyncMovieActionStatus.EDIT_MOVIE,
      movies,
    };

    RestService.updateMoviesFromServer.mockReturnValue(Promise.resolve(movies));

    const dispatchMock = jest.fn();

    await editMovie(movies)(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
  });

  test("should return before delete movie", async () => {
    const movies = {
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

    const expectedAction = {
      type: EAsyncMovieActionStatus.DELETE_MOVIE,
      movies: undefined,
    };

    RestService.updateMoviesFromServer.mockReturnValue(Promise.resolve(movies));

    const dispatchMock = jest.fn();

    await deleteMovie(movies)(dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
  });
});
