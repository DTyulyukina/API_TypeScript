import React from "react";
import moment, {Moment} from "moment";

// @ts-ignore
import ModalWindow from "../../windowMovie/modalWindow.tsx";
// @ts-ignore
import YearCalendarHeader from "../coreCalendar/yearCalendarHeader.tsx";
// @ts-ignore
import MonthCalendarHeader from "./monthCalendarHeader.tsx";
// @ts-ignore
import CalendarTable from "../coreCalendar/calendarTable.tsx";

type TCalendarProps = {
  isShown: boolean;
  showWindow: () => void;
  closeWindow: () => void;
  updateData: (data: string) => void;
};

type TCalendarState = {
  dateObject: Moment;
  ShowYearsSelect: boolean;
  ShowMonthSelect: boolean;
};

type TOption = "month" | "year";

class Calendar extends React.Component<TCalendarProps, TCalendarState> {
  state: TCalendarState = {
    dateObject: moment(),
    ShowYearsSelect: false,
    ShowMonthSelect: false,
  };

  handleClose = () => this.props.closeWindow();
  monthNow = () => {
    return this.state.dateObject.format("MMMM");
  };
  yearNow = () => {
    return this.state.dateObject.format("Y");
  };

  yearsSelect = () => {
    this.setState({
      ShowYearsSelect: !this.state.ShowYearsSelect,
    });
  };

  monthSelect = () => {
    this.setState({
      ShowMonthSelect: !this.state.ShowMonthSelect,
    });
  };

  updateSelect = (data: number, str: TOption) => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set(str, data);
    if (str === "month") {
      this.setState({
        dateObject: dateObject,
        ShowMonthSelect: !this.state.ShowMonthSelect,
      });
    } else if (str === "year") {
      this.setState({
        dateObject: dateObject,
        ShowYearsSelect: !this.state.ShowYearsSelect,
      });
    }
  };

  updateMonthLastPrev = (param: string) => {
    let dateObject = Object.assign({}, this.state.dateObject);
    if (param === "last") {
      dateObject = moment(dateObject).add(1, "month");
    } else if (param === "prev") {
      dateObject = moment(dateObject).subtract(1, "month");
    }
    this.setState({
      dateObject: dateObject,
    });
  };

  handleData = (data: number) => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).dates(data);
    this.setState({
      dateObject: dateObject,
    });
    let formatData = moment(dateObject).format("YYYY-MM-DD");
    this.props.updateData(formatData);
    this.props.closeWindow();
  };

  render() {
    const modal = this.props.isShown && (
      <ModalWindow>
        <div className="modal">
          <div className="modal-Calendar">
            <div className="button-close-container">
              <button className="button-close" onClick={this.handleClose}>
                X
              </button>
            </div>
            <div className="Calendar-container">
              <table className="Calendar">
                <thead>
                  <YearCalendarHeader
                    year={this.yearNow()}
                    yearBool={this.state.ShowYearsSelect}
                    onClickYear={this.yearsSelect}
                  />
                  <MonthCalendarHeader
                    yearBool={this.state.ShowYearsSelect}
                    monthBool={this.state.ShowMonthSelect}
                    month={this.monthNow()}
                    onClickMonth={this.monthSelect}
                    onClickUpdateButtom={this.updateMonthLastPrev}
                  />
                </thead>
                <tbody>
                  <CalendarTable
                    {...this.state}
                    onChangeSelect={this.updateSelect}
                    updateData={this.handleData}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ModalWindow>
    );

    return <div className="app-modal">{modal}</div>;
  }
}

export default Calendar;
