import React from "react";

import {EInputParametrs} from "./inputParametrs";

type TBaseInputProps = {
  placeholder: string;
  setState: (valueInput: string) => void;
  valueInput: string;
};

class BaseInput extends React.PureComponent<TBaseInputProps, {}> {
  handleState = (event: React.FormEvent<HTMLInputElement>) =>
    this.props.setState(event.currentTarget.value);
  render() {
    return (
      <div className="input-form">
        <input
          type="text"
          maxLength={EInputParametrs.maxLength}
          size={EInputParametrs.size}
          placeholder={this.props.placeholder}
          value={this.props.valueInput}
          onChange={this.handleState}
        />
      </div>
    );
  }
}

export default BaseInput;
