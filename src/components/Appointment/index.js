import React from "react";
//components
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

//hook helper
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { id, time, interview, interviewers, bookInterview } = props;
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);

    bookInterview(id, interview);
    transition(SHOW);
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && (
        <Empty onAdd={() => transition(CREATE)} bookInterview={bookInterview} />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onCancel={() => back(EMPTY)}
          onSave={save}
        />
      )}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          bookInterview={bookInterview}
        />
      )}
    </article>
  );
}
