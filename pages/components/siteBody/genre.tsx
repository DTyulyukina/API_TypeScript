import React from "react";

type TGenreProps = {
  genre: string;
  onChange: (genre: string) => void;
  className: string;
  active: string;
};

const Genre = ({genre, onChange, active}: TGenreProps) => {
  const handleChange = React.useCallback(() => onChange(genre), [genre]);

  return (
    <div className={"genre-movie " + active} onClick={handleChange}>
      {genre}
    </div>
  );
};

export default Genre;
