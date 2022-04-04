import React from "react";

import {IMovieObject} from "../../types";

// @ts-ignore
import ListSearchMovieContainer from "../siteBody/listSearchMovie.tsx";
// @ts-ignore
import ErrorPage from "../errorComponents/errorPage.tsx";
// @ts-ignore
import ErrorSearchPage from "../errorComponents/errorSearchPage.tsx";

type TRootComponentProps = {
  movies: IMovieObject;
  updateSiteHeader: () => void;
  updateMovieList: () => void;
  search: string;
};

const RootComponent = (props: TRootComponentProps) =>
  props.search === "" ? (
    JSON.parse(JSON.stringify(props.movies)) === [] ? (
      <ErrorPage />
    ) : (
      <ListSearchMovieContainer
        movies={props.movies}
        updateSiteHeader={props.updateSiteHeader}
        updateMovieList={props.updateMovieList}
      />
    )
  ) : JSON.parse(JSON.stringify(props.movies)).length === 0 ? (
    <ErrorSearchPage />
  ) : (
    <ListSearchMovieContainer
      movies={props.movies}
      updateSiteHeader={props.updateSiteHeader}
      updateMovieList={props.updateMovieList}
    />
  );

export default RootComponent;
