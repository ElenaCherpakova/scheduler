import React from "react";
import DayListItem from "components/DayListItem";



export default function DayList(props) {
  /*create the list of <DayListItem> components */
  const { days, value, onChange } = props;
  const parsedDay = days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === value}
        setDay={onChange}
      />
    );
  });
  return <ul>{parsedDay}</ul>;
}
