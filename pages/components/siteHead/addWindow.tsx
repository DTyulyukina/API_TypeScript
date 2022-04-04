import React from "react";

type TAddWindowProps = {
  addWind: () => void;
};

const AddWindow = (props: TAddWindowProps) => (
  <div className="button-add-movie">
    <input
      type="submit"
      className="add-movie"
      value="+ add movie"
      onClick={props.addWind}
    />
  </div>
);

export default AddWindow;
