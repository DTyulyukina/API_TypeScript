import React from "react";

type TBaseSelectProps = {
  options: Array<string>;
  changeStateSelect: (valueOption: string) => void;
};

class BaseSelect extends React.PureComponent<TBaseSelectProps, {}> {
  handleSelectSort = (event: React.FormEvent<HTMLOptionElement>) => {
    this.props.changeStateSelect(event.currentTarget.value);
  };

  render() {
    const contentSort = this.props.options.map((select: any) => (
      <option key={select} value={select} className="genre-movie">
        {select}
      </option>
    ));

    return (
      <select className="select-by" onChange={() => this.handleSelectSort}>
        {contentSort}
      </select>
    );
  }
}

export default BaseSelect;
