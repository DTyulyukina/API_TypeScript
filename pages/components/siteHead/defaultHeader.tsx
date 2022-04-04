import React from "react";

// @ts-ignore
import AddWindow from "./addWindow.tsx";
// @ts-ignore
import SearchMovie from "./searchMovie.tsx";

type TDefaultHeaderProps = {
  addMovieWind: () => void;
  onSearch: () => void;
  updateSearch: () => void;
  searchMovie: string;
};

const DefaultHeader = ({
  addMovieWind,
  onSearch,
  updateSearch,
  searchMovie,
}: TDefaultHeaderProps) => {
  return (
    <div className="header-search-movie">
      <AddWindow addWind={addMovieWind} />
      <SearchMovie
        onSearch={onSearch}
        updateSearch={updateSearch}
        searchMovie={searchMovie}
      />
    </div>
  );
};

export default DefaultHeader;
