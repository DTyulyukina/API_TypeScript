import React, {Component} from "react";

// @ts-ignore
import BaseSelect from "../coreComponents/coreForm/baseSelect.tsx";

import {TAppState} from "../../types";

const options = ["release date", "vote average"];

type TResultsSortProps = {
  onFilter: () => void;
  changeStateSelect: () => void;
  changeParam: TAppState;
};

class ResultsSort extends Component<TResultsSortProps, {}> {
  render() {
    return (
      <div className="results-sort">
        <div className="sort-title">sort by</div>
        <div className="sort-list">
          <BaseSelect
            options={options}
            changeStateSelect={this.props.changeStateSelect}
            changeParam={this.props.changeParam}
          />
        </div>
      </div>
    );
  }
}

export default ResultsSort;
