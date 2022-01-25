import React from "react";
//components
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Confirm";
import Form from "./Form";

//hook helper
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } =
    props;
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);

    bookInterview(id, interview).then(() => transition(SHOW));
  }

  function deleteAppointment() {
    transition(DELETING, true);
    cancelInterview(id).then((res) => {
      console.log("res", res);
      transition(EMPTY);
    });
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
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you want to delete?"
          onCancel={back}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === EDIT && (
        <Form
          student={interview.student}
          interviewer={interview.interviewer}
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error message={"Oops something went wrong"} onClose={back} />
      )}
    </article>
  );
}
