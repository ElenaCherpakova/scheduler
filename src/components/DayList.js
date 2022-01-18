import React from "react";
import DayListItem from "components/DayListItem";

{/*create the list of <DayListItem> components */}
export default function DayList(props) {
  const { days } = props;
  const parsedDay = days.map((day) => (
    <DayListItem
      key={day.id}
      selected={day.name === props.day}
      setDay={props.setDay}
      {...day}
    />
  ));
  return <ul>{parsedDay}</ul>;
}
