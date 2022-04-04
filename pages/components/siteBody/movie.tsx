import React, {Component} from "react";

// @ts-ignore
import UpdateFormModal from "./updateFormModal.tsx";
// @ts-ignore
import WindowFormDeleteContainer from "../windowMovie/windowFormDelete.tsx";
// @ts-ignore
import WindowAddMovie from "./../windowMovie/windowAddMovie.tsx";
// @ts-ignore
import {joinStringGenre} from "../../utils/joinStringGenre.tsx";

import {IMovies, TObjectEditList} from "../../types";

type TMovieProps = {
  number: number;
  editMovie: TObjectEditList[];
  movieObject: IMovies;
  onUpdate: (id: number) => void;
  onClose: () => void;
  updateSiteHeader: (id: number) => void;
  updateMovieList: () => void;
};

type IMoviestate = {
  displayUpdate: string;
  showDelete: boolean;
  showAdd: boolean;
  showWindow: boolean | undefined;
};

class Movie extends Component<TMovieProps, IMoviestate> {
  state: IMoviestate = {
    displayUpdate: "none",
    showDelete: false,
    showAdd: false,
    showWindow: false,
  };

  componentDidUpdate = (prevProps: TMovieProps) => {
    if (prevProps.editMovie !== this.props.editMovie) {
      let showWindow = this.props.editMovie.find(
        ({id}: TObjectEditList) => this.props.movieObject.id === id
      )?.edit;
      this.setState({showWindow});
    }
  };

  closeDelete = (): void => this.setState({showDelete: false});

  showDelete = (): void => this.setState({showDelete: true});

  onLoaderEditMovie = (): void => this.setState({displayUpdate: "flex"});

  onLoaderEditOut = (): void => this.setState({displayUpdate: "none"});

  closeAdd = (): void => this.setState({showAdd: false});

  showAdd = (): void => this.setState({showAdd: true});

  handleupdateSiteHeader = (): void =>
    this.props.updateSiteHeader(this.props.movieObject.id);

  handleUpdate = (): void => this.props.onUpdate(this.props.movieObject.id);

  render() {
    let movies = this.props.movieObject;

    let genreLabel = joinStringGenre(movies.genres);

    return (
      <div className="movie">
        <div
          className="movie-img"
          style={{
            backgroundImage: `url("${movies.poster_path}")`,
          }}
          onMouseMove={this.onLoaderEditMovie}
          onClick={this.handleupdateSiteHeader}
          onMouseOut={this.onLoaderEditOut}
        >
          <div
            className="movie-update"
            style={{display: this.state.displayUpdate}}
            onClick={this.handleUpdate}
          ></div>
          <UpdateFormModal
            isShown={this.state.showWindow}
            close={this.props.onClose}
            addDelete={this.showDelete}
            showAdd={this.showAdd}
            indexMovie={movies.id}
          />
        </div>
        <div className="movie-attr">
          <div className="movie-info">
            <div className="movie-name">{movies.title}</div>
            <div className="movie-year">{movies.release_date.slice(0, 4)}</div>
          </div>
          <div className="movie-genre">{genreLabel}</div>
        </div>
        <WindowFormDeleteContainer
          isShown={this.state.showDelete}
          close={this.closeDelete}
          movie={movies}
          updateMovieList={this.props.updateMovieList}
        />
        <WindowAddMovie
          isShown={this.state.showAdd}
          close={this.closeAdd}
          title="Edit"
          movie={movies}
          updateMovieList={this.props.updateMovieList}
        />
      </div>
    );
  }
}

export default Movie;
