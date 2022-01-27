import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prevState) => ({ ...prevState, day }));

  //spots remaining functionality. When we add or remove an appointment,update the number of spots remaining that day.
  function updateSpots(requestType) {
    const days = state.days.map((day) => {
      if (day.name === state.day) {
        if (requestType === "bookAppointment") {
          return { ...day, spots: day.spots - 1 };
        } else {
          return { ...day, spots: day.spots + 1 };
        }
      } else {
        return { ...day };
      }
    });
    return days;
  }
  // Adding new interview
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
    };

    const editing = appointment.interview;
    appointment.interview = { ...interview };
    let days = [...state.days];

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then((response) => {
        console.log(response);

        if (!editing) {
          days = updateSpots("bookAppointment");
        }

        setState((prevState) => ({ ...prevState, appointments, days }));
      })
      .catch((error) => console.log(error));
  }
  //deleting interview and updating database
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      console.log(response);
      const days = updateSpots();
      setState((prevState) => ({ ...prevState, appointments, days }));
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        const [days, appointments, interviewers] = all;
        setState((prev) => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
