import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  /*link with classes*/

  const interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  const interviewerImg = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": props.selected,
  });

  // Add an event handler; Render the interviewer's name

  return (
    <li onClick={props.setInterviewer} className={interviewClass}>
      <img className={interviewerImg} src={props.avatar} alt={props.name} />
      {props.selected && props.name}
    </li>
  );
}
