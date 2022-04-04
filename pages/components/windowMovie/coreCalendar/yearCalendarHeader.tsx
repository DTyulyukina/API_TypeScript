import React, {useCallback} from "react";

type TYearCalendarHeaderProps = {
  yearBool: boolean;
  year: string;
  onClickYear: () => void;
};

const YearCalendarHeader = (props: TYearCalendarHeaderProps) => {
  let {yearBool, year, onClickYear} = props;

  let col = yearBool ? 5 : 7;

  const handleUpdateYear = useCallback(() => onClickYear(), [props]);
  return (
    <tr className="name-year">
      <th colSpan={col} onClick={handleUpdateYear}>
        {year}
      </th>
    </tr>
  );
};

export default YearCalendarHeader;
