import React from "react";
import {connect, ConnectedProps} from "react-redux";

// @ts-ignore
import {joinStringGenre} from "../../utils/joinStringGenre.tsx";
// @ts-ignore
import ErrorPage from "../errorComponents/errorPage.tsx";

import {IMovies, IMovieObject} from "../../types";
import {TRootState} from "../../store";

type TMovieDetailsHeaderProps = {
  showSearchPanel: (e: React.FocusEvent) => void;
  movies: IMovieObject;
  movieId: number;
};

const mapStateToProps = (state: TRootState) => {
  return {
    movies: state.movie,
  };
};

const MovieDetailsHeaderContainer = connect(mapStateToProps, {});

type TMovieDetailsHeaderContainer = ConnectedProps<typeof MovieDetailsHeaderContainer>;

const MovieDetailsHeader = (
  props: TMovieDetailsHeaderProps & TMovieDetailsHeaderContainer
) => {
  const [movieInfo, setMovieInfo] = React.useState(
    JSON.parse(JSON.stringify(props.movies)).filter(
      ({id}: IMovies) => id === props.movieId
    )
  );
  const {genres, poster_path, runtime, title, vote_average, overview} = movieInfo[0];

  const closeHeadInfoCallback = React.useCallback(
    (e) => {
      props.showSearchPanel(e);
      setMovieInfo([{}]);
    },
    [props.showSearchPanel]
  );

  let genreLabel = joinStringGenre(genres);

  let year = movieInfo[0].release_date.slice(0, 4);

  if (poster_path === null) {
    return <ErrorPage />;
  } else {
    return (
      <div className="header-movie-details">
        <div className="movie-details">
          <div className="button-head">
            <div className="button-icon-search" onClick={() => closeHeadInfoCallback}>
              &#128270;
            </div>
          </div>
          <div className="movie-info">
            <div
              className="movie-image"
              style={{
                backgroundImage: `url("${poster_path}")`,
              }}
            ></div>
            <div className="movie-text-info">
              <div className="movie-head-info">
                <div className="title-movie">{title}</div>
                <div className="appraisal-movie">
                  <div className="appraisal-text">{vote_average}</div>
                </div>
              </div>
              <div className="movie-genre-info">{genreLabel}</div>
              <div className="movie-numbers-info">
                <div className="movie-year">{year}</div>
                <div className="movie-time">{runtime + " min"}</div>
              </div>
              <div className="movie-text-info">{overview}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetailsHeaderContainer(MovieDetailsHeader);
