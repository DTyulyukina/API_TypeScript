import React from "react";
import {connect, ConnectedProps} from "react-redux";

// @ts-ignore
import ResultsFilter from "./resultsFilter.tsx";
// @ts-ignore
import ResultsSort from "./resultsSort.tsx";
// @ts-ignore
import RootComponent from "../coreComponents/rootComponent.tsx";

import {TRootState} from "../../store";
import {IMovieObject, TAppState} from "../../types";

type TFiltersProps = {
  movies: IMovieObject;
  updateHead: () => void;
  onFilterMovie: () => void;
  changeStateFilter: () => void;
  changeStateSelect: () => void;
  updateMovieList: () => void;
  changeParam: TAppState;
};

const mapStateToProps = (store: TRootState) => ({movies: store.movie});

const FiltersContainer = connect(mapStateToProps, {});

type TPropsFiltersContainer = ConnectedProps<typeof FiltersContainer>;

class Filters extends React.PureComponent<TFiltersProps & TPropsFiltersContainer, {}> {
  render() {
    let {
      changeParam,
      changeStateFilter,
      changeStateSelect,
      movies,
      updateHead,
      updateMovieList,
    } = this.props;
    return (
      <>
        <div className="filter-movie">
          <ResultsFilter
            changeStateFilter={changeStateFilter}
            changeParam={changeParam}
          />
          <ResultsSort changeStateSelect={changeStateSelect} changeParam={changeParam} />
        </div>
        <div className="list-search-movies">
          <RootComponent
            movies={movies}
            search={changeParam.searchMovie}
            updateSiteHeader={updateHead}
            updateMovieList={updateMovieList}
          />
        </div>
      </>
    );
  }
}

export default FiltersContainer(Filters);
