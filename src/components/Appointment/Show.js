import React from "react";

export default function Show(props) {
  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
      <h2 className="text--regular">{props.student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">{props.interviewer.name}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img onClick={props.onEdit}
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
          />
          <img onClick={props.onDelete}
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
          />
        </section>
      </section>
    </main>
  );
}
