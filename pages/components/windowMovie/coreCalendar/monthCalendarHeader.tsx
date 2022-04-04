import React from "react";

type TMonthCalendarHeaderProps = {
  yearBool: boolean;
  monthBool: boolean;
  month: string;
  onClickMonth: () => void;
  onClickUpdateButtom: (str: string) => void;
};

const MonthCalendarHeader = (props: TMonthCalendarHeaderProps) => {
  let {yearBool, monthBool, month, onClickMonth, onClickUpdateButtom} = props;

  let col = null;
  if (monthBool) {
    col = 2;
  } else if (yearBool) {
    col = 3;
  } else {
    col = 5;
  }

  const handleUpdateButtomPrev = React.useCallback(() => onClickUpdateButtom("prev"), [
    props,
  ]);
  const handleUpdateButtomLast = React.useCallback(() => onClickUpdateButtom("last"), [
    props,
  ]);
  const handleUpdateMonth = React.useCallback(() => onClickMonth(), [props]);

  return (
    <tr className="name-month">
      <th className="arrow left" onClick={handleUpdateButtomPrev} />
      <th colSpan={col} onClick={handleUpdateMonth}>
        {month}
      </th>
      <th className="arrow right" onClick={handleUpdateButtomLast} />
    </tr>
  );
};

export default MonthCalendarHeader;
