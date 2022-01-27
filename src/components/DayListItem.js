import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

/* function that format the props.spots for passing test*/
const formatSpots = (spots) => {
  if (!spots) {
    return `no spots remaining`;
  }
  if (spots === 1) {
    return `${spots} spot remaining`;
  }
  return `${spots} spots remaining`;
};

export default function DayListItem(props) {
  const { selected, spots, setDay, name } = props;
  /* reformating spots */
  const spotsReformating = formatSpots(spots);
  let dayClass = classNames(
    "day-list__item",
    {
      "day-list__item--selected": selected,
    },
    { "day-list__item--full": !spots }
  );
  return (
    <li
      className={dayClass}
      onClick={() => setDay(name)}
      // selected={selected}
      data-testid="day"
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spotsReformating}</h3>
    </li>
  );
}
