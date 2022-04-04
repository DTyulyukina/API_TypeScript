import React from "react";

// @ts-ignore
import DefaultHeader from "./siteHead/defaultHeader.tsx";
// @ts-ignore
import WindowAddMovie from "./windowMovie/windowAddMovie.tsx";
// @ts-ignore
import MovieDetailsHeaderContainer from "./siteHead/movieDetailsHeader.tsx";

type THeaderProps = {
  shouldShowDefault: boolean;
  showSearchPanel: () => void;
  movieInfoId: number;
  updateMovieList: () => void;
  onSearch: () => void;
  updateSearch: () => void;
  searchMovie: string;
};

type THeaderState = {
  showWindow: boolean;
};

class Header extends React.Component<THeaderProps, THeaderState> {
  state: THeaderState = {
    showWindow: false,
  };

  addMovieWindow = () => {
    this.setState({showWindow: true});
  };

  closeMovieWindow = () => {
    this.setState({showWindow: false});
  };

  render() {
    return (
      <div className="headers">
        {this.props.shouldShowDefault ? (
          <DefaultHeader
            addMovieWind={this.addMovieWindow}
            onSearch={this.props.onSearch}
            updateSearch={this.props.updateSearch}
            searchMovie={this.props.searchMovie}
          />
        ) : (
          <MovieDetailsHeaderContainer
            showSearchPanel={this.props.showSearchPanel}
            movieId={this.props.movieInfoId}
          />
        )}
        <WindowAddMovie
          isShown={this.state.showWindow}
          close={this.closeMovieWindow}
          title="Add"
          updateMovieList={this.props.updateMovieList}
        />
      </div>
    );
  }
}

export default Header;
