import React, {Component, Dispatch} from "react";
import {AnyAction} from "redux";

import {ThunkDispatch} from "redux-thunk";

import {ConnectedProps} from "react-redux";

// @ts-ignore
import ErrorBoundary from "./components/coreComponents/errorBoundary.tsx";
// @ts-ignore
import Header from "./components/header.tsx";
// @ts-ignore
import Body from "./components/body.tsx";

import {connect} from "react-redux";
import {seIMoviesFilter, getMovie} from "./actions";
import {TStore} from "./store";

import {TParams, TAppState} from "./types";

const mapStateToProps = (store: TStore) => {
  return {store};
};

type ApplicationDispatch = ThunkDispatch<TAppState, void, AnyAction> &
  Dispatch<AnyAction>;

const mapDispatchToProps = (dispatch: ApplicationDispatch) => {
  return {
    onMovie: (param: TParams) => dispatch(getMovie(param)),
    onFilterMovie: (select: string) => dispatch(seIMoviesFilter(select)),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps);

type PropsAppContainer = ConnectedProps<typeof AppContainer>;

class App extends Component<PropsAppContainer, TAppState> {
  state: TAppState = {
    showDefaultHead: true,
    movieInfoId: null,
    filter: "ALL",
    select: "release date",
    searchMovie: "",
  };

  changeStateFilter = (filter: string) => {
    this.setState({filter: filter});
    this.props.onFilterMovie(filter);

    const params: TParams = {
      sortBy: this.state.select,
      sortOrder: "desc",
      filter: filter,
      searchMovie: this.state.searchMovie,
    };
    this.props.onMovie(params);
  };

  changeStateSelect = (select: string) => {
    this.setState({select: select});
    this.props.onFilterMovie(select);

    const params: TParams = {
      sortBy: select,
      sortOrder: "desc",
      filter: this.state.filter,
      searchMovie: this.state.searchMovie,
    };
    this.props.onMovie(params);
  };

  updateMovieList = () => {
    const params: TParams = {
      sortBy: this.state.select,
      sortOrder: "desc",
      filter: this.state.filter,
      searchMovie: this.state.searchMovie,
    };
    this.props.onMovie(params);
  };

  searchMovieList = (searchMovie: string) => {
    this.setState({searchMovie: searchMovie});

    const params: TParams = {
      sortBy: this.state.select,
      sortOrder: "desc",
      filter: this.state.filter,
      searchMovie: searchMovie,
    };
    this.props.onMovie(params);
  };

  updateSearch = (valueSearch: string) => {
    this.setState({searchMovie: valueSearch});
  };

  updateHead = (id: number) => {
    this.setState({
      showDefaultHead: !this.state.showDefaultHead,
      movieInfoId: id,
    });
  };

  showSearchPanel = () => {
    this.setState({
      showDefaultHead: !this.state.showDefaultHead,
      movieInfoId: null,
    });
  };

  render() {
    return (
      <ErrorBoundary>
        <Header
          shouldShowDefault={this.state.showDefaultHead}
          showSearchPanel={this.showSearchPanel}
          movieInfoId={this.state.movieInfoId}
          updateMovieList={this.updateMovieList}
          onSearch={this.searchMovieList}
          updateSearch={this.updateSearch}
          searchMovie={this.state.searchMovie}
        />
        <Body
          updateSiteHeader={this.updateHead}
          changeParam={this.state}
          changeStateFilter={this.changeStateFilter}
          changeStateSelect={this.changeStateSelect}
          updateMovieList={this.updateMovieList}
        />
      </ErrorBoundary>
    );
  }
}

export default AppContainer(App);
