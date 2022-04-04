import React from "react";

// @ts-ignore
import Genre from "../siteBody/genre.tsx";

import {TAppState} from "../../types";

const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

type TResultsFilterProps = {
  changeParam: TAppState;
  changeStateFilter: (genre: string) => void;
};

class ResultsFilter extends React.Component<TResultsFilterProps, {}> {
  handleChange = (genre: any) => this.props.changeStateFilter(genre);

  render() {
    const contentGenre = genres.map((genre) => {
      return (
        <Genre
          key={genre}
          genre={genre}
          onChange={() => this.handleChange(genre)}
          active={this.props.changeParam.filter === genre ? "active" : " "}
        />
      );
    });

    return <div className="results-filter">{contentGenre}</div>;
  }
}

export default ResultsFilter;
