import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { selected, setInterviewer, avatar, name } = props;
  /*link with classes*/

  const interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });
  const interviewerImg = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": selected,
  });

  // Add an event handler; Render the interviewer's name

  return (
    <li onClick={setInterviewer} className={interviewClass}>
      <img className={interviewerImg} src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
