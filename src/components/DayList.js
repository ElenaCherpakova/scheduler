import React from "react";
import DayListItem from "components/DayListItem";

{/*create the list of <DayListItem> components */}
export default function DayList(props) {
  const { days } = props;
  const parsedDay = days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange}
    />
  ));
  return <ul>{parsedDay}</ul>;
}
