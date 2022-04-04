import React, {MouseEvent} from "react";

// @ts-ignore
import BaseInput from "../coreComponents/coreForm/baseInput.tsx";
// @ts-ignore
import MaskingNext from "../../utils/maskingNext.tsx";

type TSearchMovieProps = {
  onSearch: (search: string) => void;
  updateSearch: () => void;
  searchMovie: string;
};

function SearchMovie(props: TSearchMovieProps) {
  const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
    props.onSearch(props.searchMovie);
  };

  let htmlButton = (
    <button type="button" className="button-search" onClick={handleSearch}>
      Search
    </button>
  );

  return (
    <div className="form-search-movie">
      <div className="title-form">find your movie</div>
      <div className="form-search">
        <div className="elem-form">
          <form>
            <BaseInput
              placeholder="What do you want to watch?"
              setState={props.updateSearch}
              valueInput={props.searchMovie}
            />
            <MaskingNext html={htmlButton} search={props.searchMovie} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
