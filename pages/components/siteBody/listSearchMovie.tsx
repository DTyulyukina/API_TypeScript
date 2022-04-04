import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

// @ts-ignore
import Movie from "./movie.tsx";
// @ts-ignore
import ErrorSearchPage from "../errorComponents/errorSearchPage.tsx";

import {IMovies, TObjectEditList, IMovieObject} from "../../types";
import {TRootState} from "../../store";

type TListSearchMovieProps = {
  updateSiteHeader: () => void;
  movies: IMovieObject;
  updateMovieList: () => void;
};

type TListSearchMovieState = {
  edit_list: TObjectEditList[];
};

const mapStateToProps = (state: TRootState) => ({movies: state.movie});

const ListSearchMovieContainer = connect(mapStateToProps, {});

type TListSearchMovieContainer = ConnectedProps<typeof ListSearchMovieContainer>;

class ListSearchMovie extends Component<
  TListSearchMovieProps & TListSearchMovieContainer,
  TListSearchMovieState
> {
  state: TListSearchMovieState = {edit_list: []};

  componentDidUpdate = (prevProps: TListSearchMovieProps) => {
    if (prevProps.movies !== this.props.movies) {
      let list = JSON.parse(JSON.stringify(this.props.movies)).map((element: IMovies) => {
        return {id: element.id, edit: false};
      });
      this.setState({edit_list: list});
    } else {
      return false;
    }
  };

  editUpdate = (id: number) => {
    let movie = this.state.edit_list.map((movie: TObjectEditList) => {
      if (movie.id === id) {
        movie.edit = !movie.edit;
      }
      return movie;
    });
    this.setState({edit_list: movie});
  };

  render() {
    let list = JSON.parse(JSON.stringify(this.props.movies));
    if (list.length === 0) {
      return <ErrorSearchPage />;
    } else {
      return (
        <>
          <div className="count-search">{list.length} movies found</div>
          <div className="result-search">
            {list.map((movie: IMovies, index: number) => (
              <Movie
                key={movie.id + index}
                editMovie={this.state.edit_list}
                movieObject={movie}
                onUpdate={this.editUpdate}
                onClose={this.editUpdate}
                updateSiteHeader={this.props.updateSiteHeader}
                updateMovieList={this.props.updateMovieList}
              />
            ))}
          </div>
        </>
      );
    }
  }
}

export default ListSearchMovieContainer(ListSearchMovie);
