import React, {Component} from "react";

import {EInputParametrs} from "./inputParametrs";

// @ts-ignore
import Calendar from "../../windowMovie/coreCalendar/calendar.tsx";

type TDateSelectProps = {
  movieData: string;
  updateData: () => void;
};

type DateSelectState = {text: string; show: boolean; valueInput: string};

class DateSelect extends Component<TDateSelectProps, DateSelectState> {
  state: DateSelectState = {text: "", show: false, valueInput: ""};

  componentDidMount = () => this.setState({valueInput: this.props.movieData});

  componentDidUpdate = (prevProps: any) => {
    if (prevProps.movieData !== this.props.movieData) {
      this.setState({valueInput: this.props.movieData});
    }
  };

  componentWillUnmount = () => this.setState({valueInput: ""});

  showCalendar = () => this.setState({show: true});

  closeCalendar = () => this.setState({show: false});

  handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    this.setState({valueInput: event.currentTarget.value});

  render() {
    return (
      <div className="input-form-date">
        <input
          type="data"
          maxLength={EInputParametrs.maxLength}
          size={EInputParametrs.size}
          placeholder="Release Date here"
          onClick={this.showCalendar}
          onChange={this.handleChange}
          defaultValue={this.state.valueInput}
        />
        <Calendar
          isShown={this.state.show}
          showWindow={this.showCalendar}
          closeWindow={this.closeCalendar}
          updateData={this.props.updateData}
        />
      </div>
    );
  }
}

export default DateSelect;
