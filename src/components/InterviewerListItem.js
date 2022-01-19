import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

function InterviewerListItem(props) {
  let interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  let interviewerImg = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": props.selected,
  });
  return (
    <li
      onClick={() => props.setInterviewer(props.id)}
      className={interviewClass}
    >
      <img className={interviewerImg} src={props.avatar} alt={props.name} />
      {props.selected && props.name}
    </li>
  );
}

export default InterviewerListItem;
