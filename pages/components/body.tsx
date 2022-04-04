import React, {Component} from "react";

// @ts-ignore
import FiltersContainer from "./siteBody/filters.tsx";

type TBodyProps = {
  updateSiteHeader: () => void;
  changeParam: () => void;
  changeStateFilter: () => void;
  changeStateSelect: () => void;
  updateMovieList: () => void;
};

class Body extends Component<TBodyProps, {}> {
  render() {
    return (
      <div className="body">
        <FiltersContainer
          changeParam={this.props.changeParam}
          updateHead={this.props.updateSiteHeader}
          changeStateFilter={this.props.changeStateFilter}
          changeStateSelect={this.props.changeStateSelect}
          updateMovieList={this.props.updateMovieList}
        />
      </div>
    );
  }
}

export default Body;
