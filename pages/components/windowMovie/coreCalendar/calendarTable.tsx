import React, {ReactNode} from "react";
import moment, {Moment} from "moment";

const arrayDateMonth = moment.months();

type TCalendarTableState = {
  table: ReactNode[] | undefined;
};

type TCalendarTableProps = {
  dateObject: Moment;
  ShowYearsSelect: boolean;
  ShowMonthSelect: boolean;
  onChangeSelect: (day: number | string, str: string) => void;
  updateData: (day: number) => void;
};

declare namespace JSX {
  interface Element {
    [elemName: string]: HTMLElement | any;
  }
}

class CalendarTable extends React.Component<TCalendarTableProps, TCalendarTableState> {
  state: TCalendarTableState = {table: []};

  componentDidMount() {
    this.setState({table: this.dayMonth()});
  }

  componentWillUnmount() {
    this.setState({table: []});
  }

  firstDayOfMonth = () => {
    let dateObject = this.props.dateObject;
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };
  dayInMonth = () => {
    return this.props.dateObject.daysInMonth();
  };
  currentDay = () => {
    return this.props.dateObject.format("D");
  };
  addTable = (count: number, dayEmpty: Array<Number>, dayNumber: Array<Number>) => {
    var totalSlots = dayEmpty ? [...dayEmpty, ...dayNumber] : [...dayNumber];
    let slot: Array<ReactNode> = [];
    let cells: Array<ReactNode> = [];
    totalSlots.forEach((row, index) => {
      if (index % count !== 0) {
        cells.push(row);
      } else {
        slot.push(cells);
        cells = [];
        cells.push(row);
      }
      if (index === totalSlots.length - 1) {
        slot.push(cells);
      }
    });
    return slot;
  };

  arrayDateYear = () => {
    let years = [];
    for (let year = 0; year < 10; year++) {
      years.push(Number(moment().format("Y")) + year);
    }
    return years;
  };

  dayMonth = () => {
    let blanks: JSX.Element[] = [];
    let dayOfMounth: any = this.firstDayOfMonth();
    for (let day = 0; day < dayOfMounth; day++) {
      blanks.push(
        <td key={day} className="Calendar-day empty">
          {""}
        </td>
      );
    }
    let daysMonth: JSX.Element[] = [];
    for (let day = 1; day <= this.dayInMonth(); day++) {
      let currentDay = day === this.currentDay() ? "today" : "";
      daysMonth.push(
        <td
          key={"Calendar-day" + day}
          className={`Calendar-day ${currentDay}`}
          onClick={() => this.props.updateData(day)}
        >
          <span>{day}</span>
        </td>
      );
    }
    let arrays_days: JSX.Element[] = [];
    this.addTable(7, blanks, daysMonth).map((day: any, index: number) => {
      arrays_days.push(<tr key={"dm" + index}>{day}</tr>);
    });

    return arrays_days;
  };

  addMonth = () => {
    let row_month: JSX.Element[] = [];
    arrayDateMonth.map((day, index) => {
      row_month.push(
        <td
          key={index}
          className="array-name-month"
          onClick={() => this.props.onChangeSelect(day, "month")}
        >
          {day}
        </td>
      );
    });
    let monthname: JSX.Element[] = [];
    this.addTable(4, null, row_month).map((day: any, index: number) => {
      monthname.push(<tr key={"d" + index}>{day}</tr>);
    });

    return monthname;
  };

  addYears = () => {
    let row_years: JSX.Element[] = [];
    this.arrayDateYear().map((year, index) => {
      row_years.push(
        <td
          key={year + index}
          className="array-year"
          onClick={() => this.props.onChangeSelect(year, "year")}
        >
          {year}
        </td>
      );
    });
    let array_y: JSX.Element[] = [];
    this.addTable(5, null, row_years).map((year: ReactNode, index: number) => {
      array_y.push(<tr key={"array_y" + index}>{year}</tr>);
    });

    return array_y;
  };

  shouldComponentUpdate(nextProps: TCalendarTableProps, nextState: TCalendarTableState) {
    let tableCalendar;
    if (this.props !== nextProps && this.state === nextState) {
      if (nextProps.ShowYearsSelect) {
        tableCalendar = this.addYears();
      } else if (nextProps.ShowMonthSelect) {
        tableCalendar = this.addMonth();
      } else if (!nextProps.ShowYearsSelect && !nextProps.ShowMonthSelect) {
        tableCalendar = this.dayMonth();
      }
      this.setState({
        table: tableCalendar,
      });
    }
    return true;
  }

  render() {
    return this.state.table;
  }
}

export default CalendarTable;
